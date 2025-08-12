const Inversecirclecurve = ({ className }) => {
  return (
    <div className={`${className}`}>
      <svg
        width="450"
        height="556"
        viewBox="0 0 450 556"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "scale(-1, 1)" }}
      >
        <circle cx="280" cy="70" r="220" fill="url(#paint0_linear_25:217)" />
        <circle cx="30" cy="190" r="20" fill="url(#paint1_radial_25:217)" />
        <circle cx="100" cy="300" r="40" fill="url(#paint2_radial_25:217)" />
        <circle
          cx="330"
          cy="320"
          r="190"
          transform="rotate(-35 330 320)"
          fill="url(#paint3_linear_25:217)"
        />
        <circle
          opacity="0.7"
          cx="190"
          cy="320"
          r="130"
          transform="rotate(110 190 320)"
          stroke="url(#paint4_linear_25:217)"
        />
        <circle
          opacity="0.7"
          cx="360"
          cy="290"
          r="180"
          transform="rotate(-30 360 290)"
          stroke="url(#paint5_linear_25:217)"
        />
        <circle
          opacity="0.75"
          cx="200"
          cy="310"
          r="135"
          transform="rotate(130 200 310)"
          fill="url(#paint6_linear_25:217)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_25:217"
            x1="-50"
            y1="-180"
            x2="220"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8367C7" />
            <stop offset="1" stopColor="#8367C7" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            id="paint1_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30 190) rotate(90) scale(20)"
          >
            <stop offset="0.145833" stopColor="#8367C7" stopOpacity="0" />
            <stop offset="1" stopColor="#8367C7" stopOpacity="0.08" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_25:217"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(100 300) rotate(90) scale(40)"
          >
            <stop offset="0.145833" stopColor="#8367C7" stopOpacity="0" />
            <stop offset="1" stopColor="#8367C7" stopOpacity="0.08" />
          </radialGradient>
          <linearGradient
            id="paint3_linear_25:217"
            x1="230"
            y1="-70"
            x2="295"
            y2="360"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8367C7" />
            <stop offset="1" stopColor="#8367C7" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_25:217"
            x1="190"
            y1="190"
            x2="190"
            y2="460"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8367C7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_25:217"
            x1="360"
            y1="100"
            x2="360"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8367C7" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_25:217"
            x1="120"
            y1="30"
            x2="170"
            y2="350"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8367C7" />
            <stop offset="1" stopColor="#8367C7" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Inversecirclecurve;
