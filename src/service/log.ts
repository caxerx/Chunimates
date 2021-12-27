import { logger } from 'react-native-logs';

type myLoggerType = {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
};

const log = logger.createLogger() as any as myLoggerType;

export default log;
