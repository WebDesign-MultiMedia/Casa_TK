import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex items-center pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-gradient-to-br from-tk-pink-dark via-tk-plum to-tk-plum-dark text-tk-cream">
      {/* Soft pink glow shapes echo the logo's circle without competing with the headline */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-tk-pink/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-tk-pink/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="inline-block rounded-full bg-tk-pink px-4 py-1.5 text-sm font-display font-bold text-white">
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {t.hero.headline}
          </h1>

          <p className="mt-5 max-w-xl text-lg text-tk-cream/85">
            {t.hero.subhead}
          </p>

          <div className="mt-6 flex gap-4 text-2xl" aria-hidden="true">
            <span>☕</span>
            <span>🩷</span>
            <span>📸</span>
            <span>⭐</span>
            <span>📍</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/menu"
              className="rounded-full bg-tk-pink px-7 py-3 font-display font-bold text-white shadow-lg hover:bg-tk-pink-dark transition-colors"
            >
              {t.hero.ctaPrimary}
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-tk-cream px-7 py-3 font-display font-bold text-tk-cream hover:bg-tk-cream hover:text-tk-ink transition-colors"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 font-display font-semibold text-tk-pink-light">
            {t.hero.badge}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src="/logo.jpeg"
            alt="Casa TK logo"
            className="h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
