import { Config } from './config';

export interface Configurable {
  configure(config: Config): void;
}
