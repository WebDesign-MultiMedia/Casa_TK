import Contact from "../components/Contact";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.contact);
  return <Contact />;
}
