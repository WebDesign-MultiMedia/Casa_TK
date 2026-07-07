import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./Services";
import { business } from "../data/business";
import { imageReviews } from "../data/imageReviews";

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 text-tk-pink-dark" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.2}
          className="h-5 w-5"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { t, lang } = useLanguage();

  return (
    <section id="reviews" className="scroll-mt-20 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-tk-cream/95 shadow-xl px-6 py-10 sm:px-10 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading title={t.reviews.title} subtitle={t.reviews.subtitle} />
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-tk-pink-dark hover:underline"
            >
              {t.reviews.linkText} →
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.reviews.items.map((review) => (
              <blockquote
                key={review.name}
                className="flex flex-col justify-between rounded-2xl bg-tk-pink-light/50 p-6 ring-1 ring-tk-pink-light"
              >
                <div>
                  <Stars count={review.rating} />
                  <p className="mt-4 text-tk-ink">&ldquo;{review.quote}&rdquo;</p>
                </div>
                <footer className="mt-6 font-display font-bold text-tk-ink-soft">
                  — {review.name}, <cite className="not-italic">Google Reviews</cite>
                </footer>
              </blockquote>
            ))}

            {imageReviews.map((review) => (
              <img
                key={review.src}
                src={review.src}
                alt={review.alt[lang]}
                loading="lazy"
                className="rounded-2xl shadow-sm ring-1 ring-tk-pink-light"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
