export interface TronApiInterface {
  getLatestBlockNumber(): Promise<number>;
  getTransactionCountByBlockNum(num: number): Promise<number>;
}
