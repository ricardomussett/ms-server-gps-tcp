export const redisConfig = {
  host: '127.0.0.1',
  port: 6379,
  maxRetriesPerRequest: 3,
  retryStrategy: (times: number) => {
    return Math.min(times * 50, 2000);
  },
}; 