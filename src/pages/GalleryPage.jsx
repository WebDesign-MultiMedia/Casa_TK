import Gallery from "../components/Gallery";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.gallery);
  return <Gallery />;
}
