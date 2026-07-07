import Reviews from "../components/Reviews";
import usePageMeta from "../hooks/usePageMeta";
import { useLanguage } from "../context/LanguageContext";

export default function ReviewsPage() {
  const { t } = useLanguage();
  usePageMeta(t.meta.reviews);
  return <Reviews />;
}
