import { logger } from './logger';
import { RetryExhaustError } from '../errors/retry-exhause.error';

export const retry = async <T>(fn: () => Promise<T>, retries: number = 3): Promise<T> => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      logger.warn(`Attempt ${attempt + 1} failed: ${(err as Error).message}`);
      if (attempt === retries) throw err;
      await new Promise((res) => setTimeout(res, Math.pow(2, attempt) * 1000)); // wait 1s before retry
    }
  }
  throw new RetryExhaustError('Retries exhausted unexpectedly');
};
