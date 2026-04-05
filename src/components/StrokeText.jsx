"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StrokeText = ({ children }) => {
  const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start 80%", "center center"], 
});

  // Map scroll progress to background position
const bgPosition = useTransform(
  scrollYProgress,
  [0, 1],
  ["0% 0%","0% 100%"] // 👈 bottom → top fill
);
  return (
    <motion.h1
      ref={ref}
      style={{ backgroundPosition: bgPosition }}
      className="stroke-animate text-[40px] sm:text-6xl lg:text-8xl font-bold text-center sm:text-left"
    >
      {children}
    </motion.h1>
  );
};

export default StrokeText;