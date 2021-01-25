import React, { useState } from 'react';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <>
      <i
        onClick={scrollTop}
        className="fa fa-arrow-circle-up fa-3x float text-white"
        aria-hidden="true"
        style={{ display: showScroll ? 'flex' : 'none' }}
      ></i>
    </>
  );
};

export default ScrollArrow;
