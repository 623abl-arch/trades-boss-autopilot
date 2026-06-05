import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Slightly enlarges typography on every page except the landing page.
 * Works by toggling the html font-size based on route.
 */
const PageScale = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const isLanding = pathname === "/";
    document.documentElement.style.fontSize = isLanding ? "16.5px" : "17px";
  }, [pathname]);
  return null;
};

export default PageScale;
