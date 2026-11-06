import { useLanguage } from "../context/LanguageContext";
import { Container, PageHeader, Reveal } from "./ui";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-4xl text-center font-display text-2xl leading-snug font-light tracking-tight text-balance text-tk-ink sm:text-4xl">
              {t.about.p1}
            </p>
          </Reveal>

          <div className="mt-20 grid items-center gap-14 lg:mt-28 lg:grid-cols-12 lg:gap-20">
            <Reveal className="relative lg:col-span-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-3 overflow-hidden rounded-t-full rounded-b-[2rem] ring-8 ring-white">
                  <img
                    src="/gallery/storefront.jpg"
                    alt="Casa TK's storefront at night"
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-end gap-4">
                  <div className="overflow-hidden rounded-[1.75rem] ring-[6px] ring-white">
                    <img
                      src="/gallery/bakery-case-1.jpg"
                      alt="Bakery case with mini Nutella jars and fresh cake slices"
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-[1.75rem] ring-[6px] ring-white">
                    <img
                      src="/gallery/matcha-drink.jpg"
                      alt="Iced strawberry matcha"
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-tk-ink-soft lg:col-span-6">
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </Reveal>
          </div>

          <dl className="mt-24 grid grid-cols-2 overflow-hidden rounded-[2rem] bg-tk-cream lg:grid-cols-4">
            {t.about.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 80}
                className={`p-8 sm:p-10 ${i % 2 === 1 ? "border-l border-tk-line" : ""} ${
                  i >= 2 ? "border-t border-tk-line lg:border-t-0" : ""
                } ${i === 2 ? "lg:border-l" : ""}`}
              >
                <dt className="text-xs font-semibold tracking-[0.18em] text-tk-pink-dark uppercase">{stat.label}</dt>
                <dd className="mt-3 font-display text-2xl tracking-tight text-tk-ink sm:text-3xl">{stat.value}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
