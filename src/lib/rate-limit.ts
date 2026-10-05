/**
 * Best-effort limit for a single server process. On Vercel each instance has its own map,
 * so Turnstile is the real control. This only slows a burst against one instance.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const current = hits.get(key);
  if (!current || current.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true as const };
  }
  if (current.count >= limit) {
    return { ok: false as const };
  }
  current.count += 1;
  return { ok: true as const };
}
