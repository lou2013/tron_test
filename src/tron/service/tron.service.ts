import { EventEmitter } from 'stream';

import { ConfigService } from '@src/common/config/config.service';
import { retry } from '@src/common/helper/retry';
import { LoggerInterface } from '@src/common/interace/logger.interface';
import { TronApiInterface } from '@src/common/interace/tron.api.interface';
import { TronServiceInterface } from '@src/common/interace/tron.service.interface';
import pLimit from 'p-limit';
interface BlockResult {
  number: number;
  trxCount: number;
}
export class TronService implements TronServiceInterface {
  constructor(
    private readonly logger: LoggerInterface,
    private readonly tronApi: TronApiInterface,
    private readonly configService: ConfigService,
  ) {}

  async fetchAndAnalyze(startBlock: number): Promise<void> {
    const BATCH_SIZE = parseInt(this.configService.get('BATCH_SIZE', '1')!, 10) || 20;
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

  async fetchAndAnalyzeStreaming(startBlock: number): Promise<void> {
    const LIMIT_SIZE = parseInt(this.configService.get('LIMIT_SIZE', '10')!, 10) || 10;
    const BATCH_SIZE = parseInt(this.configService.get('BATCH_SIZE', '200')!, 10) || 200;
    const limit = pLimit(LIMIT_SIZE);

    let currentBlock = startBlock;
    const channel = new EventEmitter();

    channel.on('result', (res: BlockResult) => {
      this.logger.info(`Block ${res.number}: ${res.trxCount} txs`);
    });

    channel.on('error', (err: Error, blockNumber: number) => {
      this.logger.error(`Block ${blockNumber} failed: ${err.message}`);
    });

    channel.on('done', () => {
      this.logger.info('Finished streaming all blocks');
    });

    while (true) {
      let lastBlockNumber: number;
      try {
        lastBlockNumber = await this.tronApi.getLatestBlockNumber();
      } catch (err) {
        console.error(`Failed to fetch latest block: ${(err as Error).message}`);
        break;
      }

      if (currentBlock > lastBlockNumber) {
        channel.emit('done');
        break;
      }

      const batchEnd = Math.min(currentBlock + BATCH_SIZE - 1, lastBlockNumber);

      const tasks = Array.from({ length: batchEnd - currentBlock + 1 }, (_, i) => {
        const blockNumber = currentBlock + i;
        return limit(async () => {
          try {
            const result = await this.fetchBlock(blockNumber);
            channel.emit('result', result);
          } catch (err) {
            channel.emit('error', err as Error, blockNumber);
          }
        });
      });

      await Promise.all(tasks);
      currentBlock = batchEnd + 1;
    }
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
