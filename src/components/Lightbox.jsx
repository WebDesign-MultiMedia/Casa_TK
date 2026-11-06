import { useEffect, useRef } from "react";

// Full-screen image viewer. `index` is null when closed; arrow keys and the
// on-screen chevrons step through `images`.
export default function Lightbox({ images, index, onChange, onClose }) {
  const closeRef = useRef(null);
  const isOpen = index !== null && index !== undefined && images[index];
  const count = images.length;

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % count);
      if (e.key === "ArrowLeft") onChange((index - 1 + count) % count);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, index, count, onChange, onClose]);

  if (!isOpen) return null;
  const image = images[index];

  const navButton =
    "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-tk-paper/10 text-tk-paper ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-tk-paper hover:text-tk-ink";

  return (
    <div
      className="page-transition fixed inset-0 z-[60] flex items-center justify-center bg-tk-plum-dark/95 p-4 backdrop-blur-sm sm:p-12"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-tk-paper text-tk-ink transition-colors hover:bg-tk-rose"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
          <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + count) % count);
            }}
            className={`${navButton} left-3 sm:left-6`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 6-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % count);
            }}
            className={`${navButton} right-3 sm:right-6`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      <figure className="flex max-h-full max-w-4xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className="page-transition max-h-[78vh] max-w-full rounded-[1.5rem] object-contain shadow-2xl"
        />
        <figcaption className="mt-5 max-w-xl text-center text-sm text-tk-cream/75">
          <span className="mr-2 font-semibold text-tk-rose">
            {index + 1} / {count}
          </span>
          {image.alt}
        </figcaption>
      </figure>
    </div>
  );
}
