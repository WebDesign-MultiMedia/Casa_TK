import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { OpenStatus } from "./ui";

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
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll and allow Escape to close while the mobile
  // menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? "bg-tk-blush text-tk-pink-dark" : "text-tk-ink/75 hover:text-tk-ink"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pr-2 pl-2.5 transition-all duration-500 ${
            scrolled
              ? "bg-tk-paper/85 shadow-[0_12px_40px_-18px_rgb(33_28_44/0.35)] ring-1 ring-tk-line backdrop-blur-xl"
              : "bg-tk-paper/40 ring-1 ring-transparent backdrop-blur-md"
          }`}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center gap-2.5" onClick={handleNavClick}>
            <img
              src="/logo.jpeg"
              alt=""
              width="40"
              height="40"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
            />
            <span className="font-display text-xl tracking-tight text-tk-ink">Casa TK</span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                  {t.nav[link.key]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle lang={lang} toggleLang={toggleLang} />

            <Link
              to="/contact"
              className="hidden rounded-full bg-tk-ink px-5 py-2.5 text-sm font-semibold text-tk-paper transition-colors duration-300 hover:bg-tk-plum sm:inline-flex"
            >
              {t.nav.cta}
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-tk-ink text-tk-paper lg:hidden"
              aria-label="Open menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
                <path strokeLinecap="round" d="M4 8h16M4 16h10" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Rendered as a sibling of <header>, not a child — backdrop-blur on
          the nav establishes a containing block for fixed descendants,
          which would squash this full-screen overlay into the nav's height. */}
      {isOpen && <MobileMenu t={t} onClose={() => setIsOpen(false)} onNavClick={handleNavClick} />}
    </>
  );
}

function MobileMenu({ t, onClose, onNavClick }) {
  const linkClass = ({ isActive }) =>
    `group flex items-baseline gap-4 py-2 font-display text-4xl tracking-tight transition-colors sm:text-5xl ${
      isActive ? "text-tk-pink-dark italic" : "text-tk-ink hover:text-tk-pink-dark"
    }`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="page-transition grain fixed inset-0 z-[60] flex flex-col overflow-x-hidden overflow-y-auto overscroll-contain bg-tk-paper lg:hidden"
    >
      {/* Glow lives in its own clipped layer so it can't widen the scrollable menu. */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-tk-rose/50 blur-3xl" />
      </div>

      <div className="relative flex items-center justify-between px-5 pt-5">
        <Link to="/" onClick={onNavClick} className="flex items-center gap-2.5">
          <img src="/logo.jpeg" alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" />
          <span className="font-display text-xl text-tk-ink">Casa TK</span>
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-tk-ink text-tk-paper"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
            <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav className="relative flex flex-1 flex-col justify-center px-8 py-10" aria-label="Mobile">
        {NAV_LINKS.map((link, i) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={onNavClick} className={linkClass}>
            <span className="font-body text-xs not-italic tracking-widest text-tk-ink-soft/70">
              {String(i + 1).padStart(2, "0")}
            </span>
            {t.nav[link.key]}
          </NavLink>
        ))}
      </nav>

      <div className="relative space-y-4 border-t border-tk-line px-8 py-6">
        <OpenStatus />
        <p className="text-sm text-tk-ink-soft">
          {business.address.line1}, {business.address.line2}
        </p>
        <Link
          to="/contact"
          onClick={onNavClick}
          className="flex w-full items-center justify-center rounded-full bg-tk-ink px-5 py-3.5 text-sm font-semibold text-tk-paper"
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
      className="flex h-10 items-center gap-1 rounded-full px-3 text-xs font-semibold tracking-wider text-tk-ink ring-1 ring-tk-line transition-colors hover:bg-white"
      aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
    >
      <span className={lang === "en" ? "text-tk-ink" : "text-tk-ink/35"}>EN</span>
      <span className="text-tk-ink/25">/</span>
      <span className={lang === "es" ? "text-tk-ink" : "text-tk-ink/35"}>ES</span>
    </button>
  );
}
