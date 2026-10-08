import { list, put } from "@vercel/blob";

export interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  logoUrl: string | null;
  createdAt: string;
}

// Reviews live in a single JSON blob (newest first). Blob was chosen over
// Vercel KV because KV is deprecated and new KV stores can no longer be
// created — a single Blob store now backs both the review list and logos.
const REVIEWS_PATH = "reviews/reviews.json";
const MAX_STORED = 200;

/** True when the Blob store is connected (token present). */
export function isReviewsConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

export function isBlobConfigured(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readAll(): Promise<Review[]> {
  const { blobs } = await list({ prefix: REVIEWS_PATH, limit: 5 });
  const match = blobs.find((b) => b.pathname === REVIEWS_PATH);
  if (!match) return [];
  const res = await fetch(match.url, { cache: "no-store" });
  if (!res.ok) return [];
  try {
    const data: unknown = await res.json();
    return Array.isArray(data) ? (data as Review[]) : [];
  } catch {
    return [];
  }
}

/** Newest first. */
export async function getReviews(limit = 50): Promise<Review[]> {
  if (!isReviewsConfigured()) return [];
  try {
    return (await readAll()).slice(0, limit);
  } catch (e) {
    console.error("reviews read failed", e);
    return [];
  }
}

export async function addReview(review: Review): Promise<void> {
  if (!isReviewsConfigured()) throw new Error("reviews-not-configured");
  const next = [review, ...(await readAll())].slice(0, MAX_STORED);
  await put(REVIEWS_PATH, JSON.stringify(next), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
  });
}
