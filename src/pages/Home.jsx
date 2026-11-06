import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import VisitBand from "../components/VisitBand";
import { ReviewCard } from "../components/Reviews";
import { Button, Container, Eyebrow, Reveal, SectionHeading } from "../components/ui";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

const FAVORITE_IMAGES = ["/gallery/matcha-drink.jpg", "/gallery/dessert-cup.jpg", "/gallery/bakery-case-2.jpg"];

export default function Home() {
  const { t } = useLanguage();
  usePageMeta(t.meta.home);

  return (
    <>
      <Hero />
      <Marquee items={t.home.marquee} />
      <Favorites />
      <Story />
      <ReviewsTeaser />
      <VisitBand />
    </>
  );
}

function Marquee({ items }) {
  const row = (hidden) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-8 font-display text-2xl whitespace-nowrap text-tk-ink italic sm:text-3xl">{item}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-tk-pink" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-tk-line bg-tk-cream py-6">
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

function Favorites() {
  const { t } = useLanguage();
  const f = t.home.favorites;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow={f.eyebrow} title={f.title} subtitle={f.subtitle} />
          </Reveal>
          <Reveal delay={100} className="shrink-0">
            <Button to="/menu" variant="outline" arrow>
              {f.cta}
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {f.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 110} className={i === 1 ? "lg:mt-16" : ""}>
              <Link to="/menu" className="group block">
                <div className="overflow-hidden rounded-[2rem] bg-tk-blush">
                  <img
                    src={FAVORITE_IMAGES[i]}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-tk-ink">{item.name}</h3>
                    <p className="mt-1.5 text-tk-ink-soft">{item.desc}</p>
                  </div>
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 ring-tk-line transition-all duration-300 group-hover:bg-tk-ink group-hover:text-tk-paper group-hover:ring-tk-ink">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 14 14 6M7 6h7v7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Story() {
  const { t } = useLanguage();

  return (
    <section className="grain relative overflow-hidden bg-tk-cream py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-t-full rounded-b-[2.5rem] ring-8 ring-white">
            <img
              src="/gallery/storefront.jpg"
              alt="Casa TK's storefront at night, its pink-lit window glowing under the CASA TK sign"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -right-3 bottom-10 rounded-[1.5rem] bg-tk-paper px-6 py-5 shadow-[0_24px_50px_-24px_rgb(33_28_44/0.45)] sm:-right-8">
            <p className="font-display text-4xl leading-none text-tk-pink-dark">4.9</p>
            <p className="mt-1.5 text-xs font-semibold tracking-[0.16em] text-tk-ink-soft uppercase">
              {t.about.stats[0].label}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Eyebrow>{t.home.story.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-[1.08] tracking-tight text-balance text-tk-ink sm:text-5xl">
            {t.home.story.title}
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-tk-ink-soft">{t.about.p1}</p>
          <p className="mt-4 text-lg leading-relaxed text-tk-ink-soft">{t.about.p2}</p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-tk-ink/10 pt-8">
            {t.about.stats.slice(2).map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-semibold tracking-[0.16em] text-tk-ink-soft uppercase">{stat.label}</dt>
                <dd className="mt-2 font-display text-xl text-tk-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Button to="/about" arrow>
              {t.home.story.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ReviewsTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.home.reviews.eyebrow} title={t.reviews.title} subtitle={t.reviews.subtitle} align="center" />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.reviews.items.map((review, i) => (
            <Reveal key={review.name} delay={i * 110}>
              <ReviewCard review={review} featured={i === 1} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/reviews" variant="outline" arrow>
            {t.home.reviews.cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
