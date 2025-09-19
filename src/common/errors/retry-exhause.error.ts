import { BaseError } from './base.error';

export class RetryExhaustError extends BaseError {
  constructor(message: string = 'Retries exhausted unexpectedly', details?: Record<string, any>) {
    super(message, details);
  }
}
