import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import {
  getReviews,
  addReview,
  isReviewsConfigured,
  isBlobConfigured,
  type Review,
} from "@/lib/reviews";

export const dynamic = "force-dynamic";

const MAX_LOGO_BYTES = 2 * 1024 * 1024;
const ALLOWED_LOGO_TYPES = ["image/jpeg", "image/png", "image/webp"];

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function GET() {
  try {
    const reviews = await getReviews();
    return NextResponse.json({ reviews });
  } catch (e) {
    console.error("reviews GET failed", e);
    return NextResponse.json({ reviews: [] });
  }
}

export async function POST(req: NextRequest) {
  if (!isReviewsConfigured()) {
    return NextResponse.json(
      { error: "Reviews are not enabled yet. Please try again later." },
      { status: 503 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return badRequest("Invalid form data.");
  }

  // Honeypot — bots fill this, humans never see it.
  if (String(form.get("website") ?? "").trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = String(form.get("name") ?? "").trim().slice(0, 60);
  const company = String(form.get("company") ?? "").trim().slice(0, 80);
  const rating = parseInt(String(form.get("rating") ?? "0"), 10);
  const text = String(form.get("text") ?? "").trim().slice(0, 1000);

  if (name.length < 2) return badRequest("Please enter your name.");
  if (company.length < 2) return badRequest("Please enter your company name.");
  if (!Number.isInteger(rating) || rating < 1 || rating > 5)
    return badRequest("Please select a star rating.");
  if (text.length < 10)
    return badRequest("Please write a review (at least 10 characters).");

  let logoUrl: string | null = null;
  const logo = form.get("logo");
  if (logo instanceof File && logo.size > 0) {
    if (!isBlobConfigured()) {
      return NextResponse.json(
        { error: "Logo uploads are not enabled yet. Please submit without a logo." },
        { status: 503 }
      );
    }
    if (logo.size > MAX_LOGO_BYTES) return badRequest("Logo must be under 2MB.");
    if (!ALLOWED_LOGO_TYPES.includes(logo.type))
      return badRequest("Logo must be a JPG, PNG or WebP image.");
    try {
      const ext =
        logo.type === "image/png" ? "png" : logo.type === "image/webp" ? "webp" : "jpg";
      const filename = `review-logos/${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 10)}.${ext}`;
      const blob = await put(filename, logo, {
        access: "public",
        contentType: logo.type,
      });
      logoUrl = blob.url;
    } catch (e) {
      console.error("logo upload failed", e);
      return NextResponse.json(
        { error: "Logo upload failed. Please try again or submit without a logo." },
        { status: 500 }
      );
    }
  }

  const review: Review = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    company,
    rating,
    text,
    logoUrl,
    createdAt: new Date().toISOString(),
  };

  try {
    await addReview(review);
  } catch (e) {
    console.error("review save failed", e);
    return NextResponse.json(
      { error: "Could not save your review. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, review });
}
