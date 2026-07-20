import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NAV_LINKS = [
  { to: "/", key: "home" },
  { to: "/menu", key: "services" },
  { to: "/about", key: "about" },
  { to: "/gallery", key: "gallery" },
  { to: "/reviews", key: "reviews" },
  { to: "/contact", key: "contact" },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-tk-pink-dark ${isActive ? "text-tk-pink-dark" : ""}`;

  return (
    <>
    <header className="fixed top-0 inset-x-0 z-50 bg-tk-cream/95 backdrop-blur shadow-sm">
      <nav
        className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 py-2"
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-2" onClick={handleNavClick}>
          <img
            src="/logo.jpeg"
            alt="Casa TK logo"
            className="h-11 w-11 rounded-full object-cover shadow-md"
          />
          <span className="font-display text-xl font-bold text-tk-ink">Casa TK</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6 font-display font-semibold text-tk-ink">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {t.nav[link.key]}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Language toggle is always visible (mobile + desktop) rather than
            being tucked away inside the menu. */}
        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} toggleLang={toggleLang} />

          <Link
            to="/contact"
            className="hidden md:inline-block rounded-full bg-tk-pink px-5 py-2 font-display font-bold text-white shadow-sm hover:bg-tk-pink-dark transition-colors"
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-tk-ink"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    {/* Rendered as a sibling of <header>, not a child — the header's
        backdrop-blur establishes a CSS containing block for fixed-position
        descendants, which would squash this full-screen overlay into the
        header's own (tiny) height instead of the full viewport. */}
    {isOpen && (
      <MobileMenu t={t} onClose={() => setIsOpen(false)} onNavClick={handleNavClick} />
    )}
    </>
  );
}

function MobileMenu({ t, onClose, onNavClick }) {
  const linkClass = ({ isActive }) =>
    `block font-display text-4xl font-bold transition-colors ${
      isActive ? "text-tk-pink-light" : "text-tk-cream hover:text-tk-pink-light"
    }`;

  return (
    <div className="fixed inset-0 z-[60] flex flex-col overflow-hidden bg-gradient-to-br from-tk-pink-dark via-tk-plum to-tk-plum-dark md:hidden">
      {/* Casa TK logo, oversized and faded, as a decorative background —
          nudged toward the middle while staying clear of the
          right-aligned nav text. */}
      <img
        src="/logo.jpeg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-4 -top-16 h-[26rem] w-[26rem] rounded-full object-cover opacity-10"
      />

      <div className="relative flex items-center justify-between p-5">
        <Link to="/" onClick={onNavClick} className="flex items-center gap-2">
          <img
            src="/logo.jpeg"
            alt="Casa TK logo"
            className="h-10 w-10 rounded-full object-cover shadow-md"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-tk-cream/60 text-tk-cream hover:bg-tk-cream/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav
        className="relative flex flex-1 flex-col items-end justify-center gap-4 px-8 text-right"
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={onNavClick} className={linkClass}>
            {t.nav[link.key]}
          </NavLink>
        ))}
      </nav>

      <div className="relative flex items-center justify-end p-5">
        <Link
          to="/contact"
          onClick={onNavClick}
          className="rounded-full bg-tk-pink px-5 py-2 font-display font-bold text-white shadow-sm hover:bg-tk-cream hover:text-tk-ink transition-colors"
        >
          {t.nav.cta}
        </Link>
      </div>
    </div>
  );
}

function LanguageToggle({ lang, toggleLang }) {
  return (
    <button
      type="button"
      onClick={toggleLang}
      className="rounded-full border-2 border-tk-ink px-3 py-1.5 text-sm font-display font-bold text-tk-ink hover:bg-tk-ink hover:text-tk-cream transition-colors"
      aria-label="Toggle language between English and Spanish"
    >
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
}
