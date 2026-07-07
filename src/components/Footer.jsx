import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tk-plum-dark pt-12 pb-8 text-tk-cream/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-3 text-center sm:text-left">
          <div>
            <p className="font-display text-lg font-bold text-tk-cream">Casa TK</p>
            <p className="mt-2 text-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-tk-pink-light">
              {t.contact.hoursLabel}
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              {t.contact.hours.map((row) => (
                <li key={row.days} className="flex justify-center gap-2 sm:justify-start">
                  <span>{row.days}</span>
                  <span className="font-semibold text-tk-cream">{row.time}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-sm">
              {business.address.line1}, {business.address.line2}
            </p>
            <a href={`tel:${business.phoneHref}`} className="text-sm hover:text-tk-pink">
              {business.phone}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-tk-pink-light">
              {t.footer.followLabel}
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tk-pink"
                >
                  {t.contact.instagramLabel}: {business.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={business.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tk-pink"
                >
                  {t.contact.tiktokLabel}: {business.tiktokHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-tk-cream/10 pt-6 text-center text-sm sm:text-left">
          <p>
            © {year} {business.name}. {t.footer.rights}
          </p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
