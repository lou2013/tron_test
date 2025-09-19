import { LoggerInterface } from '../interace/logger.interface';

type ValidationType<T> = { isValid: false; input?: never } | { isValid: true; input: T };
export class REPLGatewayValidator {
  constructor(private readonly logger: LoggerInterface) {}
  validateInputBlock(args: string[]): ValidationType<number> {
    if (!args[0]) {
      this.logger.error('Usage: block <number>');
      return { isValid: false };
    }
    const blockNum = parseInt(args[0], 10);
    if (Number.isNaN(blockNum)) {
      this.logger.error(`Invalid number "${args[0]}"`);
      return { isValid: false };
    }
    return { isValid: true, input: blockNum };
  }
}
