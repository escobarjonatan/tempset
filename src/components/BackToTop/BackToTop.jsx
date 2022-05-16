import styles from "./BackToTop.module.css";
import React, { useEffect, useState } from "react";

const BackToTop = ({ showBelow = 200 }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > showBelow) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= showBelow) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  return (
    <button
      aria-label="Scroll to Top"
      className={`fixed cursor-pointer bottom-9 right-6 text-lg border-2 text-gray-800 border-gray-800 focus:ring-4 rounded-lg text-center px-3 -rotate-90 z-10 ${
        styles.scrollTop
      } ${showScroll ? "flex" : "hidden"}`}
      onClick={scrollTop}
      type="button"
    >
      &#10140;
    </button>
  );
};

export default BackToTop;
