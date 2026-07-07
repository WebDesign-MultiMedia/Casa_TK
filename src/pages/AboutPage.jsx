import About from "../components/About";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.about);
  return <About />;
}
