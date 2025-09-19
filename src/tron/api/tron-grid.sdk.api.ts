import { SDK } from '@api/tron';
import { FailedToGetBlockDetails } from '@src/common/errors/failed-to-get-block-details.error';
import { FailedToGetLatestBlock } from '@src/common/errors/failed-to-get-latest-block.error';
import { NumberDoesNotExistOnBlock } from '@src/common/errors/number-does-not-exist-on-block.error';
import { TronApiInterface } from '@src/common/interace/tron.api.interface';

export class TronGridApiSdkService implements TronApiInterface {
  constructor(private readonly tron: SDK) {}
  async getTransactionCountByBlockNum(num: number): Promise<number> {
    const res = await this.tron.walletGetblockbynum({ num });
    if (res.status !== 200) {
      throw new FailedToGetBlockDetails(`cant get block details of number ${num}`);
    }
    return ((res.data.transactions as unknown[]) ?? []).length;
  }
  async getLatestBlockNumber(): Promise<number> {
    const res = await this.tron.walletGetnowblock();
    if (res.status !== 200) {
      throw new FailedToGetLatestBlock(`cant get block now status ${res.status}`);
    }
    const number = res.data?.block_header?.raw_data?.number;
    if (!number) {
      throw new NumberDoesNotExistOnBlock('block number does not exist on given response');
    }
    return number;
  }
}
