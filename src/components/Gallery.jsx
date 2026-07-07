import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./Services";
import { galleryCategories } from "../data/gallery";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const { t, lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="scroll-mt-20 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-tk-cream/95 shadow-xl px-6 py-10 sm:px-10 sm:py-16">
          <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

          <div className="mt-12 space-y-12">
            {galleryCategories.map((category) => (
              <div key={category.key}>
                <h3 className="font-display text-xl font-bold text-tk-pink-dark text-center">
                  {category.label[lang]}
                </h3>

                <div className="mt-4 flex flex-wrap justify-center gap-4">
                  {category.images.map((image) => {
                    const alt = image.alt[lang];
                    return (
                      <figure
                        key={image.src}
                        className="group w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.667rem)] overflow-hidden rounded-xl ring-1 ring-tk-pink-light"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveImage({ src: image.src, alt })}
                          aria-label={alt}
                          className="block w-full cursor-zoom-in"
                        >
                          <img
                            src={image.src}
                            alt={alt}
                            loading="lazy"
                            className="h-40 sm:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                      </figure>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-tk-ink-soft italic text-center">{t.gallery.note}</p>
        </div>
      </div>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
