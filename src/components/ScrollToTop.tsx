import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    // Only scroll to top on new navigations (PUSH/REPLACE).
    // On POP (back/forward), let the browser restore the previous scroll position.
    if (navType !== "POP") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname, navType]);
  return null;
};

export default ScrollToTop;
