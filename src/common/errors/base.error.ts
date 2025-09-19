export class BaseError extends Error {
  details: Record<string, any> = {};
  constructor(message: string, details?: Record<string, any>) {
    super(message);
    if (details) this.details = details;
  }
}
