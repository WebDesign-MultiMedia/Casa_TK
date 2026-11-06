import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { Button, Container, OpenStatus, Stars } from "./ui";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="grain relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-28">
      {/* Soft blush glows echo the pink-lit shop window. */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10rem] h-[36rem] w-[36rem] rounded-full bg-tk-rose/45 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[-12rem] left-[-8rem] h-[28rem] w-[28rem] rounded-full bg-tk-blush blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="page-transition lg:col-span-6">
          <OpenStatus />

          <h1 className="mt-8 font-display text-[2.9rem] leading-[1.02] font-light tracking-tight text-balance text-tk-ink sm:text-6xl lg:text-[3.75rem] xl:text-7xl">
            {t.hero.headlineStart}
            <em className="font-normal text-tk-pink-dark">{t.hero.headlineEm}</em>
            {t.hero.headlineEnd}
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-pretty text-tk-ink-soft">{t.hero.subhead}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button to="/menu" arrow>
              {t.hero.ctaPrimary}
            </Button>
            <Button href={business.mapsUrl} variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 border-t border-tk-line pt-6">
            <div className="flex -space-x-3" aria-hidden="true">
              {["/gallery/matcha-drink.jpg", "/gallery/dessert-cup.jpg", "/gallery/bakery-case-2.jpg"].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover ring-[3px] ring-tk-paper"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl text-tk-ink">{business.rating}</span>
                <Stars count={5} />
              </div>
              <p className="text-sm text-tk-ink-soft">
                {business.ratingCount} {t.hero.reviewsLabel} {t.hero.ratingLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none lg:pl-10">
          <div className="relative ml-auto w-[82%]">
            <div className="overflow-hidden rounded-t-full rounded-b-[2.5rem] shadow-[0_40px_80px_-30px_rgb(125_42_78/0.45)] ring-8 ring-white">
              <img
                src="/gallery/chamoy-drink.jpg"
                alt="Chamoy-rimmed agua fresca in a Casa TK cup"
                fetchPriority="high"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>

            <Sticker text={t.hero.sticker} />
          </div>

          <div className="absolute -bottom-8 left-0 w-[44%] -rotate-6 overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-25px_rgb(33_28_44/0.5)] ring-[6px] ring-white transition-transform duration-500 hover:rotate-0">
            <img
              src="/gallery/dessert-table.jpg"
              alt="Dessert cups and a frappe on a pink table at Casa TK"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 right-[-4%] hidden rotate-[3deg] rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-20px_rgb(33_28_44/0.4)] sm:block">
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-tk-pink-dark uppercase">
              {t.hero.eyebrow.split("•")[0].trim()}
            </p>
            <p className="font-display text-lg text-tk-ink italic">{t.hero.eyebrow.split("•")[1]?.trim()}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// Circular "badge" with text running around the Casa TK logo, slowly
// spinning — a nod to café cup stamps.
function Sticker({ text }) {
  return (
    <div className="absolute -top-6 -left-10 h-32 w-32 sm:h-36 sm:w-36" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-tk-ink shadow-xl" />
      <svg viewBox="0 0 120 120" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <path id="sticker-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
        </defs>
        <text className="fill-tk-cream" style={{ fontSize: 9, fontWeight: 600 }}>
          {/* textLength stretches the phrase to exactly wrap the circle (2πr ≈ 289). */}
          <textPath href="#sticker-circle" textLength="286" lengthAdjust="spacing">
            {text.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <img
        src="/logo.jpeg"
        alt=""
        className="absolute top-1/2 left-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full object-cover"
      />
    </div>
  );
}
