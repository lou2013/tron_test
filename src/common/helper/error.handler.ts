import { logger } from './logger';
import { BaseError } from '../errors/base.error';

export function errorHandler(error: unknown): void {
  if (error instanceof BaseError) {
    logger.error(`error faced ${error.message} details: ${error.details}`);
    return;
  }
  logger.error(`error faced ${error}`);
  return;
}
