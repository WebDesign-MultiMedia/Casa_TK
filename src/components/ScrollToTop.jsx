import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router keeps scroll position across navigations by default, which
// feels broken for a marketing site — jump each new page back to the top.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
