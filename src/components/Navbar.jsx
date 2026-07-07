import { useState } from "react";
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

  const linkClass = ({ isActive }) =>
    `transition-colors hover:text-tk-pink-dark ${isActive ? "text-tk-pink-dark" : ""}`;

  return (
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

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle lang={lang} toggleLang={toggleLang} />
          <Link
            to="/contact"
            className="rounded-full bg-tk-pink px-5 py-2 font-display font-bold text-tk-ink shadow-sm hover:bg-tk-pink-dark hover:text-white transition-colors"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-tk-ink"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-tk-pink-light bg-tk-cream px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3 font-display font-semibold text-tk-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={handleNavClick}
                  className={linkClass}
                >
                  {t.nav[link.key]}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3">
            <LanguageToggle lang={lang} toggleLang={toggleLang} />
            <Link
              to="/contact"
              onClick={handleNavClick}
              className="rounded-full bg-tk-pink px-5 py-2 font-display font-bold text-tk-ink shadow-sm"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
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
