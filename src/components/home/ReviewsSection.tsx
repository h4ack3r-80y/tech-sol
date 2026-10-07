"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Star, PenLine, Building2, Loader2, CheckCircle2, AlertCircle, ImagePlus, X } from "lucide-react";

interface Review {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  logoUrl: string | null;
  createdAt: string;
}

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={
            i <= value
              ? "fill-amber-400 text-amber-400"
              : "fill-slate-200 text-slate-200 dark:fill-[#1C2C4E] dark:text-[#1C2C4E]"
          }
        />
      ))}
    </div>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

function ReviewCard({ review }: { review: Review }) {
  const initial = (review.company || review.name || "?").trim().charAt(0).toUpperCase();
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1120] p-6 shadow-sm hover:shadow-md transition-shadow">
      <Stars value={review.rating} />
      <p className="mt-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 flex-1">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-[#16233F]">
        {review.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.logoUrl}
            alt={`${review.company} logo`}
            className="h-11 w-11 rounded-xl object-contain bg-white border border-slate-200 dark:border-[#24365C] p-1"
          />
        ) : (
          <div className="h-11 w-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#2E9BFF] to-[#1668DC] text-white font-display font-bold text-lg">
            {initial}
          </div>
        )}
        <div className="min-w-0">
          <div className="font-semibold text-slate-900 dark:text-white text-sm truncate">
            {review.name}
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 truncate">
            <Building2 size={12} className="shrink-0" />
            <span className="truncate">{review.company}</span>
            {review.createdAt && (
              <span className="shrink-0">· {formatDate(review.createdAt)}</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 dark:border-[#24365C] bg-white dark:bg-[#0D1830] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-[#2E9BFF] focus:ring-2 focus:ring-[#2E9BFF]/30 transition";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/reviews", { cache: "no-store" });
      const data = await res.json();
      setReviews(Array.isArray(data.reviews) ? data.reviews : []);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setLogoFile(f);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(f ? URL.createObjectURL(f) : null);
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setRating(0);
    setText("");
    setLogoFile(null);
    if (logoPreview) URL.revokeObjectURL(logoPreview);
    setLogoPreview(null);
    setFormError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    if (name.trim().length < 2) return setFormError("Please enter your name.");
    if (company.trim().length < 2) return setFormError("Please enter your company name.");
    if (rating < 1 || rating > 5) return setFormError("Please select a star rating.");
    if (text.trim().length < 10)
      return setFormError("Please write a review (at least 10 characters).");

    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      formData.set("rating", String(rating));
      const res = await fetch("/api/reviews", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error || "Something went wrong. Please try again.");
        return;
      }
      if (data.review) setReviews((prev) => [data.review as Review, ...prev]);
      setSuccess(true);
      resetForm();
      setShowForm(false);
      setTimeout(() => setSuccess(false), 6000);
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#04070E] py-16 lg:py-24 border-b border-slate-200 dark:border-[#1C2C4E] transition-colors">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-[#2E9BFF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            What Our <span className="text-[#2E9BFF]">Clients Say</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-[15px]">
            Real reviews from businesses we&apos;ve worked with. Worked with TechSol? Share
            your experience below — it appears here instantly.
          </p>
        </div>

        {success && (
          <div className="mt-8 max-w-2xl mx-auto flex items-center gap-3 rounded-xl border border-emerald-200 dark:border-emerald-800/60 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-3 text-sm text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 size={18} className="shrink-0" />
            Thank you! Your review is now live on this page.
          </div>
        )}

        <div className="mt-10">
          {loading ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1120] p-6 animate-pulse"
                >
                  <div className="h-4 w-28 bg-slate-200 dark:bg-[#1C2C4E] rounded" />
                  <div className="mt-4 space-y-2">
                    <div className="h-3 bg-slate-200 dark:bg-[#1C2C4E] rounded" />
                    <div className="h-3 bg-slate-200 dark:bg-[#1C2C4E] rounded w-5/6" />
                    <div className="h-3 bg-slate-200 dark:bg-[#1C2C4E] rounded w-4/6" />
                  </div>
                  <div className="mt-6 h-11 w-40 bg-slate-200 dark:bg-[#1C2C4E] rounded-xl" />
                </div>
              ))}
            </div>
          ) : reviews.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-dashed border-slate-300 dark:border-[#24365C] bg-white dark:bg-[#0A1120] text-center text-sm text-slate-600 dark:text-slate-400">
              No reviews yet — be the first to share your experience with TechSol.
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          {!showForm ? (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="ts-btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-tight"
            >
              <PenLine size={16} />
              Write a Review
            </button>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-2xl mx-auto text-left rounded-2xl border border-slate-200 dark:border-[#1C2C4E] bg-white dark:bg-[#0A1120] p-6 sm:p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Share Your Review
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setFormError(null);
                  }}
                  className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-[#12203A] transition"
                  aria-label="Close form"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ahmed Raza"
                    maxLength={60}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                    Company Name *
                  </label>
                  <input
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Raza Traders"
                    maxLength={80}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Rating *
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setRating(i)}
                      onMouseEnter={() => setHoverRating(i)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-transform hover:scale-110"
                      aria-label={`${i} star${i > 1 ? "s" : ""}`}
                    >
                      <Star
                        size={28}
                        className={
                          i <= (hoverRating || rating)
                            ? "fill-amber-400 text-amber-400"
                            : "fill-slate-200 text-slate-300 dark:fill-[#1C2C4E] dark:text-[#2A3D66]"
                        }
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">
                    {rating > 0 ? `${rating}/5` : "Tap to rate"}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Your Review *
                </label>
                <textarea
                  name="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell others about your experience working with TechSol…"
                  rows={4}
                  maxLength={1000}
                  className={`${inputClass} resize-y`}
                />
                <div className="mt-1 text-right text-xs text-slate-400">
                  {text.length}/1000
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                  Company Logo <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <div className="flex items-center gap-4">
                  {logoPreview ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="h-14 w-14 rounded-xl object-contain bg-white border border-slate-200 dark:border-[#24365C] p-1"
                    />
                  ) : (
                    <div className="h-14 w-14 rounded-xl border border-dashed border-slate-300 dark:border-[#24365C] flex items-center justify-center text-slate-400">
                      <ImagePlus size={20} />
                    </div>
                  )}
                  <div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="logo"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={handleLogoChange}
                      className="hidden"
                      id="review-logo-input"
                    />
                    <label
                      htmlFor="review-logo-input"
                      className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#0D1830]/70 hover:bg-slate-100 dark:hover:bg-[#12203A] border border-slate-200 dark:border-[#24365C] transition"
                    >
                      <ImagePlus size={15} />
                      {logoFile ? "Change logo" : "Upload logo"}
                    </label>
                    <p className="mt-1.5 text-xs text-slate-400">
                      JPG, PNG or WebP · max 2MB
                    </p>
                  </div>
                </div>
              </div>

              {formError && (
                <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 dark:border-red-800/60 bg-red-50 dark:bg-red-950/40 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                  <AlertCircle size={16} className="shrink-0" />
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="ts-btn-primary mt-6 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-tight w-full sm:w-auto disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Publishing…
                  </>
                ) : (
                  "Publish Review"
                )}
              </button>
              <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
                Your review appears on this page instantly after publishing.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
