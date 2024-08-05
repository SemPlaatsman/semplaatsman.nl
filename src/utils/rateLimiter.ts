export default class RateLimiter {
  private static instances: Map<string, RateLimiter> = new Map();
  private requests: Map<string, number[]>;
  private readonly limit: number;
  private readonly interval: number;

  private constructor(limit: number, interval: number) {
    this.requests = new Map();
    this.limit = limit;
    this.interval = interval;
  }

  public static getInstance(name: string, limit: number, interval: number): RateLimiter {
    if (!RateLimiter.instances.has(name)) {
      RateLimiter.instances.set(name, new RateLimiter(limit, interval));
    }
    return RateLimiter.instances.get(name)!;
  }

  public isRateLimited(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.interval;

    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, [now]);
      return false;
    }

    const requestTimestamps = this.requests.get(identifier)!;
    const recentRequests = requestTimestamps.filter((timestamp) => timestamp > windowStart);

    if (recentRequests.length >= this.limit) {
      return true;
    }

    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);

    // Clean up old entries
    if (recentRequests.length > this.limit) {
      this.requests.set(identifier, recentRequests.slice(-this.limit));
    }

    return false;
  }

  public clear(identifier: string): void {
    this.requests.delete(identifier);
  }
}
