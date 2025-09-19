import readline from 'readline';

import { errorHandler } from '@src/common/helper/error.handler';
import { GatewayInterface } from '@src/common/interace/gateway.interface';
import { LoggerInterface } from '@src/common/interace/logger.interface';
import { TronServiceInterface } from '@src/common/interace/tron.service.interface';
import { REPLGatewayValidator } from '@src/common/validator/repl.gateway.validator';

export class REPLGateway implements GatewayInterface {
  constructor(
    private readonly logger: LoggerInterface,
    private readonly tronService: TronServiceInterface,
    private readonly validator: REPLGatewayValidator,
  ) {}
  commands = Object.freeze([
    { name: 'latest', description: 'Fetch the latest block' },
    { name: 'blockFrom', description: 'Fetch a starting from a number until latest block' },
    { name: 'exit', description: 'Exit the application' },
    { name: 'quit', description: 'Exit the application' },
    { name: 'close', description: 'Exit the application' },
    { name: 'help', description: 'Show this help message' },
    { name: 'clear', description: 'Clear the terminal' },
    { name: 'cls', description: 'Clear the terminal' },
    { name: 'clr', description: 'Clear the terminal' },
  ]);

  start(): void {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'tron> ',
      completer: (line: string): [string[], string] => {
        const hits = this.commands.filter((c) => c.name.startsWith(line)).map((c) => c.name);
        return [hits.length ? hits : this.commands.map((c) => c.name), line];
      },
    });

    rl.prompt();

    rl.on('line', async (line) => {
      try {
        const [command, ...args] = line.trim().split(' ');
        // we can use the command registry pattern (object mapping too)
        switch (command) {
          case 'latest':
            // we can make it not await
            await this.handleGetLatestBlockNumber();
            break;
          case 'blockFrom':
            await this.handleGetBlockFrom(args);
            break;
          case 'clear':
          case 'cls':
          case 'clr':
            console.clear();
            break;
          case 'quit':
          case 'exit':
          case 'close':
            rl.close();
            break;
          case 'help':
            this.logger.info('Available commands:');
            this.commands.forEach((cmd) => this.logger.info(`  - ${cmd.name}: ${cmd.description}`));
            break;
          default:
            this.logger.error(`Unknown command: ${command}`);
            break;
        }

        rl.prompt();
      } catch (error) {
        errorHandler(error);
      }
    });

    rl.on('close', () => {
      this.logger.error('Terminating');
      process.exit(0);
    });
  }

  async handleGetLatestBlockNumber(): Promise<void> {
    this.logger.info('Fetching latest block...');
    const number = await this.tronService.getLatestBlockNumber();
    this.logger.info(`latest block number was ${number}`);
  }

  async handleGetBlockFrom(args: string[]): Promise<void> {
    const { isValid, input: blockNum } = this.validator.validateInputBlock(args);
    if (!isValid) return;
    await this.tronService.fetchAndAnalyzeStreaming(blockNum);
  }
}
