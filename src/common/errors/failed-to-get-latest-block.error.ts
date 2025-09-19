import { BaseError } from './base.error';

export class FailedToGetLatestBlock extends BaseError {
  constructor(message: string = 'failed to get latest block', details?: Record<string, any>) {
    super(message, details);
  }
}
