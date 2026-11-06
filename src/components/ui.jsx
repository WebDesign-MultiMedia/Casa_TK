import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { getOpenStatus } from "../lib/openStatus";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

// Fades children up the first time they scroll into view. Purely
// decorative — content is always in the DOM, and reduced-motion users get
// it instantly via CSS.
export function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, light = false, className = "" }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-tk-rose" : "text-tk-pink-dark"
      } ${className}`}
    >
      <span className={`h-px w-6 ${light ? "bg-tk-rose/70" : "bg-tk-pink/60"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, light = false, align = "left", as: H = "h2" }) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <H
        className={`mt-4 font-display text-4xl font-normal leading-[1.08] tracking-tight text-balance sm:text-5xl ${
          light ? "text-tk-cream" : "text-tk-ink"
        }`}
      >
        {title}
      </H>
      {subtitle && (
        <p
          className={`mt-5 text-lg leading-relaxed text-pretty ${
            light ? "text-tk-cream/75" : "text-tk-ink-soft"
          } ${centered ? "mx-auto" : ""} max-w-xl`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

const BUTTON_VARIANTS = {
  primary:
    "bg-tk-ink text-tk-paper hover:bg-tk-plum shadow-[0_10px_30px_-12px_rgb(33_28_44/0.6)]",
  pink: "bg-tk-pink text-white hover:bg-tk-pink-dark shadow-[0_10px_30px_-12px_rgb(158_62_102/0.7)]",
  outline: "border border-tk-ink/15 bg-white/60 text-tk-ink hover:border-tk-ink/40 hover:bg-white",
  light: "bg-tk-paper text-tk-ink hover:bg-tk-blush",
  ghostLight: "border border-tk-cream/25 text-tk-cream hover:bg-tk-cream/10 hover:border-tk-cream/50",
};

// Renders a router <Link> for internal paths and a plain <a> otherwise.
export function Button({ to, href, variant = "primary", className = "", children, arrow = false, ...rest }) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${BUTTON_VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h12m-5-5 5 5-5 5" />
        </svg>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  const external = href && /^https?:/.test(href);
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {content}
    </a>
  );
}

export function Stars({ count = 5, className = "h-4 w-4", colorClass = "text-tk-pink" }) {
  return (
    <div className={`flex gap-0.5 ${colorClass}`} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.2}
          className={className}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

// Top-of-page intro shared by every inner page.
export function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <header className="grain relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-tk-blush/70 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
        </Reveal>
        {children}
      </Container>
    </header>
  );
}

// Live "Open now · until 12 AM" pill, re-evaluated every minute.
export function OpenStatus({ light = false, className = "" }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  let detail = "";
  if (status.isOpen) {
    detail = `${t.status.until} ${status.closesAt}`;
  } else if (status.opensAt) {
    const when =
      status.dayOffset === 0
        ? t.status.today
        : status.dayOffset === 1
          ? t.status.tomorrow
          : t.status.days[status.opensDay];
    detail = `${t.status.opens} ${when} ${t.status.at} ${status.opensAt}`;
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm ${
        light ? "bg-white/10 text-tk-cream ring-1 ring-white/15" : "bg-white text-tk-ink ring-1 ring-tk-line"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        {status.isOpen && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status.isOpen ? "bg-emerald-500" : "bg-tk-pink"
          }`}
        />
      </span>
      <span className="font-semibold">{status.isOpen ? t.status.open : t.status.closed}</span>
      {detail && <span className={light ? "text-tk-cream/70" : "text-tk-ink-soft"}>· {detail}</span>}
    </span>
  );
}

export const Icon = {
  pin: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  ),
  phone: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z"
    />
  ),
  clock: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  ),
  instagram: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5-9.5h.01"
    />
  ),
  tiktok: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2.2 4.4 5 4.6"
    />
  ),
};

export function SvgIcon({ name, className = "h-5 w-5", strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    >
      {Icon[name]}
    </svg>
  );
}
