import Hero from "../components/Hero";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  usePageMeta(t.meta.home);
  return <Hero />;
}
