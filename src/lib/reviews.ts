import { createClient } from "@vercel/kv";

export interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  logoUrl: string | null;
  createdAt: string;
}

type KvClient = ReturnType<typeof createClient>;

const REVIEWS_KEY = "techsol:reviews";
const MAX_STORED = 200;

let kvClient: KvClient | null | undefined;

function getKv(): KvClient | null {
  if (kvClient !== undefined) return kvClient;
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) {
    kvClient = null;
    return null;
  }
  kvClient = createClient({ url, token });
  return kvClient;
}

/** True when the Vercel KV store is connected (env vars present). */
export function isReviewsConfigured(): boolean {
  return getKv() !== null;
}

export function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

/** Newest first. */
export async function getReviews(limit = 50): Promise<Review[]> {
  const kv = getKv();
  if (!kv) return [];
  const items = await kv.lrange<Review>(REVIEWS_KEY, 0, limit - 1);
  return items ?? [];
}

export async function addReview(review: Review): Promise<void> {
  const kv = getKv();
  if (!kv) throw new Error("reviews-not-configured");
  await kv.lpush(REVIEWS_KEY, review);
  await kv.ltrim(REVIEWS_KEY, 0, MAX_STORED - 1);
}

/** Simple per-IP throttle: max 5 submissions per hour. Returns true if allowed. */
export async function checkRateLimit(ip: string): Promise<boolean> {
  const kv = getKv();
  if (!kv) return true;
  const key = `techsol:reviews:rl:${ip}`;
  const count = await kv.incr(key);
  if (count === 1) await kv.expire(key, 3600);
  return count <= 5;
}
