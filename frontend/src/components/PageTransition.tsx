import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/PageTransition.css";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page-transition ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}