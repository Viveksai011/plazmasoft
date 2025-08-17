import React from "react";

const Androidicon = ({ color = "#963beb", width = "25px", height ="25px" }) => {
  return (
   
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={width}
        height={height}
        viewBox="0,0,255.99704,255.99704"
      >
        <g
          fill={color}
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
          style={{ mixBlendMode: "normal" }}
        >
          <g transform="scale(10.66667,10.66667)">
            <path d="M7.5,1c-0.128,0 -0.25602,0.04898 -0.35352,0.14648c-0.195,0.195 -0.195,0.51203 0,0.70703l1.31055,1.31055c-1.48792,1.09186 -2.45703,2.84869 -2.45703,4.83594h12c0,-1.98725 -0.96911,-3.74408 -2.45703,-4.83594l1.31055,-1.31055c0.195,-0.196 0.195,-0.51103 0,-0.70703c-0.195,-0.195 -0.51203,-0.195 -0.70703,0l-1.48242,1.48242c-0.80345,-0.39935 -1.70587,-0.62891 -2.66406,-0.62891c-0.95819,0 -1.86062,0.22956 -2.66406,0.62891l-1.48242,-1.48242c-0.0975,-0.0975 -0.22552,-0.14648 -0.35352,-0.14648zM9,5h1v1h-1zM14,5h1v1h-1zM3,9v8h2v-8zM6,9v8c0,0.552 0.448,1 1,1h1v5h3v-5h2v5h3v-5h1c0.552,0 1,-0.448 1,-1v-8zM19,9v8h2v-8z"></path>
          </g>
        </g>
      </svg>
 
  );
};

export default Androidicon;
