"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Function to update mouse position
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };


    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };


    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        (target.tagName.toLowerCase() === "input" &&
          (target.type === "button" ||
            target.type === "submit" ||
            target.type === "reset")) ||
        target.getAttribute("role") === "button" ||
        target.getAttribute("tabindex") === "0"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

  
    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  
  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: isVisible ? 0.7 : 0, 
    },
    hover: {
      x: mousePosition.x - 24, 
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: isVisible ? 0.8 : 0, 
    },
  };

  // Inner dot variants
  const dotVariants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 0.5,
    },
  };

  return (
    <motion.div
      className="custom-cursor"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
      animate={isHovering ? "hover" : "default"}
      variants={cursorVariants}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <motion.div
        className="cursor-circle"
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#5603ad", 
          opacity: 0.7,
          display: "flex",
          border: "10px solid #5603AD",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 0 10px rgba(86, 3, 173, 0.5)",
        }}
        variants={dotVariants}
      >
        <motion.div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "lightgray",
          }}
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
