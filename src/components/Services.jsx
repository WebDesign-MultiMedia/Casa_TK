import { useLanguage } from "../context/LanguageContext";

// Small hand-picked icon set (no icon library dependency) mapped by key
// so the copy deck in translations.js can stay in charge of ordering.
const ICONS = {
  coffee: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 21h13M6 8h11a1 1 0 011 1v3a4 4 0 01-4 4H9a4 4 0 01-4-4V9a1 1 0 011-1zM17 8h1.5a2.5 2.5 0 010 5H17M8 5c0-.7.3-1 .7-1.5M12 5c0-.7.3-1 .7-1.5"
    />
  ),
  pastry: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12c0-2.5 3.6-4.5 8-4.5s8 2 8 4.5-3.6 4.5-8 4.5-8-2-8-4.5zM4 12v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4M9 7.5c0-1.4.9-3 3-3s3 1.6 3 3"
    />
  ),
  sparkle: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"
    />
  ),
  soda: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3h6l1.2 2.2H7.8L9 3zM7.8 5.2h8.4L15 20.2a2 2 0 01-2 1.8h-2a2 2 0 01-2-1.8L7.8 5.2zM16 5.5l3.5-2.8"
    />
  ),
  tea: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8h13a1 1 0 011 1v2a5 5 0 01-5 5H9a5 5 0 01-5-5V9a1 1 0 011-1zM18 9h1a2 2 0 012 2v0a2 2 0 01-2 2h-1M2 20h16"
    />
  ),
  wifi: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12.5a10 10 0 0114 0M8 15.5a6 6 0 018 0M12 19h.01M2 9a15 15 0 0120 0"
    />
  ),
};

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-20 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-tk-cream/95 shadow-xl px-6 py-10 sm:px-10 sm:py-16">
          <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-tk-pink-light hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tk-pink-light text-tk-pink-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    {ICONS[item.icon]}
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-tk-ink">
                  {item.name}
                </h3>
                <p className="mt-2 text-tk-ink-soft">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ title, subtitle, light = false }) {
  return (
    <div className="max-w-2xl">
      <h2
        className={`font-display text-3xl sm:text-4xl font-extrabold ${
          light ? "text-tk-cream" : "text-tk-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-lg ${light ? "text-tk-cream/80" : "text-tk-ink-soft"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
