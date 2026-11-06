import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { imageReviews } from "../data/imageReviews";
import { Button, Container, PageHeader, Reveal, Stars } from "./ui";

export function ReviewCard({ review, featured = false }) {
  return (
    <figure
      className={`flex h-full flex-col justify-between rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 sm:p-9 ${
        featured ? "bg-tk-blush" : "bg-white ring-1 ring-tk-line"
      }`}
    >
      <div>
        <span className="block font-display text-6xl leading-none text-tk-pink/50" aria-hidden="true">
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-xl leading-snug text-tk-ink sm:text-[1.35rem]">
          {review.quote}
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-tk-ink/10 pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tk-ink font-display text-sm text-tk-paper">
            {review.name.charAt(0)}
          </span>
          <div>
            <p className="text-sm font-semibold text-tk-ink">{review.name}</p>
            <cite className="text-xs text-tk-ink-soft not-italic">Google Reviews</cite>
          </div>
        </div>
        <Stars count={review.rating} className="h-3.5 w-3.5" />
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const { t, lang } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle}>
        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
          <div className="grid items-center gap-8 rounded-[2rem] bg-white p-8 ring-1 ring-tk-line sm:grid-cols-[auto_1fr] sm:gap-12 sm:p-10">
            <div className="text-center sm:border-r sm:border-tk-line sm:pr-12">
              <p className="font-display text-7xl leading-none font-light text-tk-ink">{business.rating}</p>
              <div className="mt-3 flex justify-center">
                <Stars count={5} className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm text-tk-ink-soft">
                {t.reviews.basedOn} {business.ratingCount} {t.reviews.googleReviews}
              </p>
            </div>
            <ul className="space-y-4">
              {t.reviews.highlights.map((label) => (
                <li key={label}>
                  <div className="flex justify-between text-sm">
                    <span className="text-tk-ink">{label}</span>
                    <span className="font-semibold text-tk-pink-dark">100%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-tk-blush">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-tk-rose to-tk-pink" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </PageHeader>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {t.reviews.items.map((review, i) => (
              <Reveal key={review.name} delay={(i % 3) * 90}>
                <ReviewCard review={review} featured={i === 0} />
              </Reveal>
            ))}
            {imageReviews.map((review, i) => (
              <Reveal key={review.src} delay={(i % 3) * 90}>
                <img
                  src={review.src}
                  alt={review.alt[lang]}
                  loading="lazy"
                  className="w-full rounded-[2rem] ring-1 ring-tk-line"
                />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href={business.mapsUrl} variant="outline" arrow>
              {t.reviews.linkText}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
