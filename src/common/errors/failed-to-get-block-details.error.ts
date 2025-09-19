import { BaseError } from './base.error';

export class FailedToGetBlockDetails extends BaseError {
  constructor(message: string = 'failed to get block details', details?: Record<string, any>) {
    super(message, details);
  }
}
