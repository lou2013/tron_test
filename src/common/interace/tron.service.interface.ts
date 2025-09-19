export interface TronServiceInterface {
  fetchAndAnalyze(startBlock: number): Promise<void>;
  getLatestBlockNumber(): Promise<number>;
}
