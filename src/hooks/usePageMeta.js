import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://casa-tk.vercel.app";
const OG_IMAGE = `${SITE_URL}/gallery/bakery-case-2.jpg`;

function setMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Keeps the tab title, meta description, canonical link, and Open Graph /
// Twitter tags in sync with the active route + language. Social crawlers
// (Facebook, iMessage, Slack) don't execute JS, so the static tags in
// index.html are what actually drive share-link previews — this hook's
// main value is the per-route <title>/description that Googlebot indexes
// and the canonical link that keeps /en and /es content from looking like
// duplicates.
export default function usePageMeta({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", `${SITE_URL}${pathname}`);
    setMeta("property", "og:image", OG_IMAGE);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", OG_IMAGE);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${pathname}`);
  }, [title, description, pathname]);
}
