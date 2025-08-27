import React, { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    });
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="back-to-top">
      {showScrollToTop && (
        <button type="button" onClick={scrollToTop} className="back-btn">
          <i class="fa-solid fa-angles-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
