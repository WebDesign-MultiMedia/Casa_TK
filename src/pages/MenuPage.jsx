import Services from "../components/Services";
import VisitBand from "../components/VisitBand";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function MenuPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.menu);
  return (
    <>
      <Services />
      <VisitBand />
    </>
  );
}
