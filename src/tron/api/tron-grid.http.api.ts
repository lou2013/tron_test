import { ConfigService } from '@src/common/config/config.service';
import { FailedToGetBlockDetails } from '@src/common/errors/failed-to-get-block-details.error';
import { FailedToGetLatestBlock } from '@src/common/errors/failed-to-get-latest-block.error';
import { NumberDoesNotExistOnBlock } from '@src/common/errors/number-does-not-exist-on-block.error';
import { TronApiInterface } from '@src/common/interace/tron.api.interface';
import { BlockData } from '@src/types/block-data.type';
import axios, { Axios } from 'axios';

// can be moved to config or const
const BASE_URL = 'https://api.shasta.trongrid.io/walletsolidity';
const HEADER_KEY = 'TRON-PRO-API-KEY';
export class TronGridApiHttpService implements TronApiInterface {
  http_service: Axios;
  constructor(private readonly configService: ConfigService) {
    this.http_service = axios.create({
      headers: {
        [HEADER_KEY]: this.configService.get('tron-grid-api-key', ''),
      },
    });
  }
  async getTransactionCountByBlockNum(num: number): Promise<number> {
    const res = await this.http_service.post<BlockData>(`${BASE_URL}/getblockbynum`, { num });
    if (res.status !== 200) {
      throw new FailedToGetBlockDetails(`cant get block transactionCount of number ${num}`);
    }
    return (res.data.transactions ?? []).length;
  }
  async getLatestBlockNumber(): Promise<number> {
    const res = await this.http_service.get<BlockData>(`${BASE_URL}/getnowblock`);
    if (res.status !== 200) {
      throw new FailedToGetLatestBlock(`cant get block now status ${res.status}`);
    }
    const number = res.data?.block_header?.raw_data?.number;
    if (!number) {
      throw new NumberDoesNotExistOnBlock('block number does not exist from given response');
    }
    return number;
  }
}
