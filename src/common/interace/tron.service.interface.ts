export interface TronServiceInterface {
  fetchAndAnalyze(startBlock: number): Promise<void>;
  getLatestBlockNumber(): Promise<number>;
  fetchAndAnalyzeStreaming(startBlock: number): Promise<void>;
}
