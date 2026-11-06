import { useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { galleryCategories } from "../data/gallery";
import Lightbox from "./Lightbox";
import { Container, PageHeader, Reveal } from "./ui";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const images = useMemo(
    () =>
      galleryCategories
        .filter((c) => filter === "all" || c.key === filter)
        .flatMap((c) => c.images.map((img) => ({ src: img.src, alt: img.alt[lang], category: c.label[lang] }))),
    [filter, lang]
  );

  const chips = [{ key: "all", label: t.gallery.all }, ...galleryCategories.map((c) => ({ key: c.key, label: c.label[lang] }))];

  return (
    <>
      <PageHeader eyebrow={t.gallery.eyebrow} title={t.gallery.title} subtitle={t.gallery.subtitle}>
        <Reveal delay={120} className="mt-12 flex flex-wrap justify-center gap-2" role="group" aria-label={t.gallery.eyebrow}>
          {chips.map((chip) => (
            <button
              key={chip.key}
              type="button"
              aria-pressed={filter === chip.key}
              onClick={() => setFilter(chip.key)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                filter === chip.key
                  ? "bg-tk-ink text-tk-paper"
                  : "bg-white text-tk-ink-soft ring-1 ring-tk-line hover:text-tk-ink hover:ring-tk-ink/30"
              }`}
            >
              {chip.label}
            </button>
          ))}
        </Reveal>
      </PageHeader>

      <section className="pb-24 sm:pb-32">
        <Container>
          <div key={filter} className="page-transition columns-2 gap-4 sm:gap-6 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid sm:[&>*]:mb-6">
            {images.map((image, i) => (
              <figure key={image.src} className="group relative overflow-hidden rounded-[1.5rem] bg-tk-blush sm:rounded-[2rem]">
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={image.alt}
                  className="block w-full cursor-zoom-in"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-tk-paper/90 px-4 py-2 text-left text-xs font-medium text-tk-ink opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {image.category}
                  </figcaption>
                </button>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-tk-ink-soft italic">{t.gallery.note}</p>
        </Container>
      </section>

      <Lightbox images={images} index={activeIndex} onChange={setActiveIndex} onClose={() => setActiveIndex(null)} />
    </>
  );
}
