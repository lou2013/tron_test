import { ConfigService } from '@src/common/config/config.service';
import { retry } from '@src/common/helper/retry';
import { LoggerInterface } from '@src/common/interace/logger.interface';
import { TronApiInterface } from '@src/common/interace/tron.api.interface';
import { TronServiceInterface } from '@src/common/interace/tron.service.interface';
import pLimit from 'p-limit';

export class TronService implements TronServiceInterface {
  constructor(
    private readonly logger: LoggerInterface,
    private readonly tronApi: TronApiInterface,
    private readonly configService: ConfigService,
  ) {}

  async fetchAndAnalyze(startBlock: number): Promise<void> {
    const BATCH_SIZE = parseInt(this.configService.get('BATCH_SIZE', '20')!, 10) || 20;
    const CONCURENCY_LIMIT = parseInt(this.configService.get('CONCURENCY_LIMIT', '5')!, 10) || 5;
    const limit = pLimit(CONCURENCY_LIMIT);

    let currentBlock = startBlock;

    while (true) {
      const lastBlock = await this.getLatestBlockSafe();
      if (currentBlock > lastBlock) break;

      const batchEnd = Math.min(currentBlock + BATCH_SIZE - 1, lastBlock);
      currentBlock = await this.processBatch(currentBlock, batchEnd, limit);

      const newLastBlock = await this.getLatestBlockSafe();
      if (currentBlock > newLastBlock) break;
    }

    this.logger.info('Reached latest block. Done.');
  }

  private async processBatch(
    start: number,
    end: number,
    limit: ReturnType<typeof pLimit>,
  ): Promise<number> {
    const results = await Promise.all(
      Array.from({ length: end - start + 1 }, (_, i) =>
        limit(async () => {
          const blockNumber = start + i;
          try {
            return await this.fetchBlock(blockNumber);
          } catch (err) {
            console.error(`Block ${blockNumber} failed after retries: ${(err as Error).message}`);
            return { number: blockNumber, trxCount: 0 }; // default on failure
          }
        }),
      ),
    );

    results.forEach((r) => this.logger.info(`Block ${r.number}: ${r.trxCount} txs`));

    return end + 1;
  }

  private async getLatestBlockSafe(): Promise<number> {
    return retry(() => this.tronApi.getLatestBlockNumber());
  }

  private async fetchBlock(blockNumber: number): Promise<{ number: number; trxCount: number }> {
    const trxCount = await retry(() => this.tronApi.getTransactionCountByBlockNum(blockNumber));
    return { number: blockNumber, trxCount };
  }

  async getLatestBlockNumber(): Promise<number> {
    return this.tronApi.getLatestBlockNumber();
  }
}
