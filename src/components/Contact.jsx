import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { business } from "../data/business";
import { Button, Container, OpenStatus, PageHeader, Reveal, SvgIcon } from "./ui";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t.contact.errors.name;
    if (!EMAIL_PATTERN.test(form.email.trim())) nextErrors.email = t.contact.errors.email;
    if (!form.message.trim()) nextErrors.message = t.contact.errors.message;
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // No backend is wired up yet — this simulates a successful send so the
    // form's UX (validation, loading, confirmation) is fully demonstrable.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 700);
  };

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title} subtitle={t.contact.subtitle}>
        <Reveal delay={120} className="mt-10 flex justify-center">
          <OpenStatus />
        </Reveal>
      </PageHeader>

      <section className="pb-24 sm:pb-32">
        <Container className="grid gap-8 lg:grid-cols-12">
          <Reveal className="space-y-4 lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <InfoCard icon="pin" label={t.contact.addressLabel}>
                {business.address.line1}
                <br />
                <span className="text-tk-ink-soft">{business.address.line2}</span>
              </InfoCard>

              <InfoCard icon="phone" label={t.contact.phoneLabel}>
                <a href={`tel:${business.phoneHref}`} className="transition-colors hover:text-tk-pink-dark">
                  {business.phone}
                </a>
              </InfoCard>
            </div>

            <InfoCard icon="clock" label={t.contact.hoursLabel}>
              <ul className="space-y-2">
                {t.contact.hours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-6 border-b border-dashed border-tk-line pb-2 last:border-0 last:pb-0">
                    <span className="text-tk-ink-soft">{row.days}</span>
                    <span className="font-medium">{row.time}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <div className="flex gap-3">
              <SocialLink href={business.instagramUrl} icon="instagram" label={t.contact.instagramLabel} handle={business.instagramHandle} />
              <SocialLink href={business.tiktokUrl} icon="tiktok" label={t.contact.tiktokLabel} handle={business.tiktokHandle} />
            </div>

            <div className="overflow-hidden rounded-[2rem] ring-1 ring-tk-line">
              <iframe
                title="Casa TK location map"
                className="h-64 w-full grayscale-[35%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://maps.google.com/maps?q=${business.mapsEmbedQuery}&z=15&output=embed`}
              />
            </div>

            <Button href={business.mapsUrl} variant="outline" arrow className="w-full">
              {t.contact.mapLink}
            </Button>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2.5rem] bg-tk-blush p-7 sm:p-12 lg:sticky lg:top-28"
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-tk-rose/50 blur-3xl" aria-hidden="true" />

              <div className="relative">
                <h2 className="font-display text-3xl tracking-tight text-tk-ink sm:text-4xl">{t.contact.formTitle}</h2>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">
                  <Field
                    label={t.contact.name}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                    autoComplete="name"
                  />
                  <Field
                    label={t.contact.email}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label={t.contact.phone}
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Field
                      label={t.contact.message}
                      name="message"
                      as="textarea"
                      value={form.message}
                      onChange={handleChange}
                      error={errors.message}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-tk-ink px-6 py-4 text-sm font-semibold tracking-wide text-tk-paper transition-colors duration-300 hover:bg-tk-plum disabled:opacity-60 sm:w-auto sm:px-10"
                >
                  {status === "submitting" ? t.contact.submitting : t.contact.submit}
                </button>

                {status === "success" && (
                  <p role="status" className="page-transition mt-6 flex items-start gap-3 rounded-2xl bg-white p-4 text-sm text-tk-ink">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-3.5 w-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5 10 3.5 3.5L15 7" />
                      </svg>
                    </span>
                    {t.contact.success}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function InfoCard({ icon, label, children }) {
  return (
    <div className="flex gap-4 rounded-[2rem] bg-white p-6 ring-1 ring-tk-line sm:p-7">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-tk-blush text-tk-pink-dark">
        <SvgIcon name={icon} />
      </span>
      <div className="w-full">
        <p className="text-xs font-semibold tracking-[0.18em] text-tk-pink-dark uppercase">{label}</p>
        <div className="mt-2 leading-relaxed text-tk-ink">{children}</div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label, handle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-1 items-center gap-3 rounded-[1.5rem] bg-white p-4 ring-1 ring-tk-line transition-all duration-300 hover:-translate-y-0.5 hover:ring-tk-pink/40"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-tk-ink text-tk-paper transition-colors group-hover:bg-tk-pink">
        <SvgIcon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-tk-ink-soft">{label}</span>
        <span className="block truncate text-sm font-semibold text-tk-ink">{handle}</span>
      </span>
    </a>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete, as = "input" }) {
  const Tag = as;
  const errorId = `${name}-error`;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-tk-ink">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? 5 : undefined}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-2 w-full resize-none rounded-2xl border bg-white/80 px-5 py-3.5 text-tk-ink transition-all duration-200 placeholder:text-tk-ink-soft/50 focus:bg-white focus:ring-4 focus:outline-none ${
          error
            ? "border-red-400 focus:ring-red-200"
            : "border-white focus:border-tk-pink/50 focus:ring-tk-rose/40"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
