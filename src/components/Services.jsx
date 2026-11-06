import { useLanguage } from "../context/LanguageContext";
import { Container, PageHeader, Reveal } from "./ui";

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
    <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="mx-auto max-w-sm overflow-hidden rounded-t-full rounded-b-[2.5rem] bg-tk-ink ring-8 ring-white lg:max-w-none">
                <img
                  src="/gallery/menu-board.jpg"
                  alt="Chalkboard drinks menu listing hot and cold coffee, matcha, and aguas frescas"
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <ol className="lg:col-span-7">
            {t.services.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.name}
                delay={(i % 3) * 70}
                className="group grid grid-cols-[auto_1fr] gap-6 border-t border-tk-line py-9 first:border-t-0 first:pt-0 sm:gap-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-tk-blush text-tk-pink-dark transition-colors duration-300 group-hover:bg-tk-ink group-hover:text-tk-paper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6" aria-hidden="true">
                    {ICONS[item.icon]}
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-tk-ink-soft/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-tight text-tk-ink sm:text-3xl">{item.name}</h2>
                  <p className="mt-3 max-w-lg leading-relaxed text-tk-ink-soft">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
