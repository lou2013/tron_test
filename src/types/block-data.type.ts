export type BlockData = {
  blockID?: string;
  block_header?: {
    raw_data?: {
      number?: number;
      txTrieRoot?: string;
      witness_address?: string;
      parentHash?: string;
      version?: number;
      timestamp?: number;
    };
    witness_signature?: string;
  };
  transactions?: unknown[];
};
