import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeading } from "./Services";
import { business } from "../data/business";

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
    <section id="contact" className="scroll-mt-20 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-tk-plum/95 shadow-xl px-6 py-10 sm:px-10 sm:py-16 text-tk-cream">
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} light />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <InfoRow label={t.contact.addressLabel}>
                {business.address.line1}
                <br />
                {business.address.line2}
              </InfoRow>

              <InfoRow label={t.contact.phoneLabel}>
                <a href={`tel:${business.phoneHref}`} className="hover:text-tk-pink">
                  {business.phone}
                </a>
              </InfoRow>

              <InfoRow label={t.contact.hoursLabel}>
                <ul className="space-y-1">
                  {t.contact.hours.map((row) => (
                    <li key={row.days} className="flex justify-between gap-6">
                      <span>{row.days}</span>
                      <span className="font-semibold">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <InfoRow label={t.contact.instagramLabel}>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tk-pink"
                >
                  {business.instagramHandle}
                </a>
              </InfoRow>

              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-tk-pink px-6 py-3 font-display font-bold text-white hover:bg-tk-pink-dark transition-colors"
              >
                {t.contact.mapLink}
              </a>

              <div className="overflow-hidden rounded-2xl ring-1 ring-tk-cream/20">
                <iframe
                  title="Casa TK location map"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://maps.google.com/maps?q=${business.mapsEmbedQuery}&z=15&output=embed`}
                />
              </div>
            </div>

            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl bg-tk-cream p-6 sm:p-8 text-tk-ink shadow-xl"
            >
              <h3 className="font-display text-2xl font-bold">{t.contact.formTitle}</h3>

              <div className="mt-6 space-y-4">
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
                <Field
                  label={t.contact.phone}
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                <div>
                  <label htmlFor="message" className="block font-display font-semibold">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    className={`mt-1 w-full rounded-lg border-2 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-tk-pink-dark ${
                      errors.message ? "border-red-400" : "border-tk-pink-light"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full rounded-full bg-tk-pink py-3 font-display font-bold text-white shadow-md hover:bg-tk-pink-dark transition-colors disabled:opacity-60"
              >
                {status === "submitting" ? t.contact.submitting : t.contact.submit}
              </button>

              {status === "success" && (
                <p role="status" className="mt-4 rounded-lg bg-green-100 p-3 text-green-800">
                  {t.contact.success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, children }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-tk-pink-light">{label}</p>
      <div className="mt-1 text-lg">{children}</div>
    </div>
  );
}

function Field({ label, name, value, onChange, error, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={name} className="block font-display font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`mt-1 w-full rounded-lg border-2 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-tk-pink-dark ${
          error ? "border-red-400" : "border-tk-pink-light"
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
