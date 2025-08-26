import React from "react";

const Faqcurve = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M439,345 C6,204 400,100 396,108"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
      />

      <path
        d="M761,345 C1194,204 800,100 804,108"
        stroke="url(#gradient1)"
        strokeWidth="2"
        fill="none"
      />

      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Faqcurve;
