import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { Button, Container, Eyebrow, OpenStatus, Reveal, SvgIcon } from "./ui";

export default function VisitBand() {
  const { t } = useLanguage();

  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-tk-plum-dark py-20 text-tk-cream sm:py-28">
        <div
          className="pointer-events-none absolute -top-40 -right-20 h-[30rem] w-[30rem] rounded-full bg-tk-pink/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -left-24 h-[26rem] w-[26rem] rounded-full bg-tk-plum/60 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow light>{t.home.visit.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] font-light tracking-tight text-balance sm:text-6xl">
              {t.home.visit.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-tk-cream/70">{t.home.visit.subtitle}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={business.mapsUrl} variant="light" arrow>
                {t.contact.mapLink}
              </Button>
              <Button href={`tel:${business.phoneHref}`} variant="ghostLight">
                {t.home.visit.call}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur-sm sm:p-9">
              <OpenStatus light />
              <dl className="mt-7 space-y-6">
                <div className="flex gap-4">
                  <dt className="mt-0.5 text-tk-rose">
                    <span className="sr-only">{t.contact.addressLabel}</span>
                    <SvgIcon name="pin" />
                  </dt>
                  <dd className="leading-relaxed">
                    {business.address.line1}
                    <br />
                    <span className="text-tk-cream/60">{business.address.line2}</span>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="mt-0.5 text-tk-rose">
                    <span className="sr-only">{t.contact.hoursLabel}</span>
                    <SvgIcon name="clock" />
                  </dt>
                  <dd className="w-full">
                    <ul className="space-y-1.5">
                      {t.contact.hours.map((row) => (
                        <li key={row.days} className="flex justify-between gap-6 text-sm">
                          <span className="text-tk-cream/60">{row.days}</span>
                          <span>{row.time}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
