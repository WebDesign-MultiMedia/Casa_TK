import Gallery from "../components/Gallery";
import VisitBand from "../components/VisitBand";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.gallery);
  return (
    <>
      <Gallery />
      <VisitBand />
    </>
  );
}
