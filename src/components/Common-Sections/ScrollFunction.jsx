import { useEffect,  } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
   const { pathname } = useLocation();

  // Disable browser scroll restoration
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top on route change + refresh
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
