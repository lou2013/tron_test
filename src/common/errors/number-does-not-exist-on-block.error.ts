import { BaseError } from './base.error';

export class NumberDoesNotExistOnBlock extends BaseError {
  constructor(message: string = 'failed to get latest block', details?: Record<string, any>) {
    super(message, details);
  }
}
