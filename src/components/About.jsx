import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./Services";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-tk-cream/95 shadow-xl px-6 py-10 sm:px-10 sm:py-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading title={t.about.title} />
            <div className="mt-6 space-y-4 text-lg text-tk-ink-soft">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-tk-pink-light/60 p-6 text-center ring-1 ring-tk-pink-light"
              >
                <dt className="text-sm font-semibold uppercase tracking-wide text-tk-pink-dark">
                  {stat.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-extrabold text-tk-ink">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
