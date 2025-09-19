import { ConfigService } from '@src/common/config/config.service';
import { REPLGatewayValidator } from '@src/common/validator/repl.gateway.validator';
import { REPLGateway } from '@src/tron/gateway/repl.gateway';
import { TronService } from '@src/tron/service/tron.service';
import { Constructor } from '@src/types/constructor.type';
import { Logger } from 'winston';

import { TronGridApiSdkService } from './tron/api/tron-grid.sdk.api';
import tron from '../.api/apis/tron';
import { logger } from './common/helper/logger';
import { TronGridApiHttpService } from './tron/api/tron-grid.http.api';

export class TronApplication {
  private constructor() {}
  private DIContainer: Record<string, object | undefined> = {};
  static CreateApp(): TronApplication {
    const app = new TronApplication();
    app.init();
    return app;
  }

  startREPL(): void {
    const repl = this.getOrCreate(
      REPLGateway,
      this.get(Logger),
      this.get(TronService),
      this.getOrCreate(REPLGatewayValidator),
    );
    repl.start();
  }

  private init(): void {
    this.DIContainer[Symbol(Logger.name).toString()] = logger;
    const configService = this.getOrCreate(ConfigService);
    configService.loadEnv();
    const tronGridApiSdkService = this.getOrCreate(TronGridApiSdkService, tron);
    const tronGridApiHttpService = this.getOrCreate(TronGridApiHttpService, configService);
    this.getOrCreate(TronService, logger, tronGridApiHttpService, configService);
  }

  // we can handle the typing more constrainted
  private getOrCreate<T extends object>(cls: Constructor<T>, ...args: any[]): T {
    const name = Symbol(cls.name);

    if (!this.DIContainer[name.toString()]) {
      this.DIContainer[name.toString()] = new cls(...args);
    }

    return this.DIContainer[name.toString()] as T;
  }
  get<T extends object>(cls: Constructor<T>): T {
    const name = Symbol(cls.name);

    if (!this.DIContainer[name.toString()]) {
      throw Error(`can't get class ${cls.name} it was not created`);
    }

    return this.DIContainer[name.toString()] as T;
  }
}
