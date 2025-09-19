export class ConfigService {
  configs: Record<string, unknown> = {};

  loadEnv(): void {
    this.configs = { ...process.env };
  }

  get<T = string>(key: string, defaultValue?: T): T | undefined {
    const value = this.configs[key];
    if (value === undefined) return defaultValue;
    return value as T;
  }
}