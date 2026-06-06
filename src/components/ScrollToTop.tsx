import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType === "POP") {
      return;
    }

    if (hash) {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);

      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        });
        return;
      }
    }

    if (navType === "PUSH") {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname, hash, navType]);

  return null;
};

export default ScrollToTop;
