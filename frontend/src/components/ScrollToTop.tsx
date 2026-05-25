// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("no-smooth-scroll");
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const root = document.getElementById("root");
    if (root) root.scrollTop = 0;
    const timer = setTimeout(() => {
      document.documentElement.classList.remove("no-smooth-scroll");
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}