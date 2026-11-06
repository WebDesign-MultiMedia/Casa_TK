import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { Container, SvgIcon } from "./ui";

const LINKS = [
  { to: "/menu", key: "services" },
  { to: "/about", key: "about" },
  { to: "/gallery", key: "gallery" },
  { to: "/reviews", key: "reviews" },
  { to: "/contact", key: "contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-10 text-tk-ink">
      <Container>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.jpeg" alt="" className="h-14 w-14 rounded-full object-cover ring-4 ring-white" />
              <span className="font-display text-3xl tracking-tight">Casa TK</span>
            </Link>
            <p className="mt-5 max-w-xs font-display text-xl leading-snug text-tk-ink-soft italic">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-2">
              {[
                { href: business.instagramUrl, icon: "instagram", label: t.contact.instagramLabel, handle: business.instagramHandle },
                { href: business.tiktokUrl, icon: "tiktok", label: t.contact.tiktokLabel, handle: business.tiktokHandle },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} ${s.handle}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-tk-line transition-colors hover:bg-tk-ink hover:text-tk-paper hover:ring-tk-ink"
                >
                  <SvgIcon name={s.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav className="md:col-span-2" aria-label="Footer">
            <p className="text-xs font-semibold tracking-[0.18em] text-tk-pink-dark uppercase">Casa TK</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-tk-ink-soft transition-colors hover:text-tk-ink">
                    {t.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-tk-pink-dark uppercase">{t.contact.hoursLabel}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {t.contact.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-6 border-b border-dashed border-tk-line pb-2.5">
                  <span className="text-tk-ink-soft">{row.days}</span>
                  <span className="font-medium">{row.time}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-tk-ink-soft">
              {business.address.line1}, {business.address.line2}
              <span className="mx-2 text-tk-line">|</span>
              <a href={`tel:${business.phoneHref}`} className="transition-colors hover:text-tk-ink">
                {business.phone}
              </a>
            </p>
          </div>
        </div>

        <p
          className="mt-20 text-center font-display text-[22vw] leading-[0.8] font-light tracking-tighter text-tk-blush select-none md:text-[13rem]"
          aria-hidden="true"
        >
          Casa <em>TK</em>
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-tk-line pt-6 text-xs text-tk-ink-soft sm:flex-row">
          <p>
            © {year} {business.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </Container>
    </footer>
  );
}
