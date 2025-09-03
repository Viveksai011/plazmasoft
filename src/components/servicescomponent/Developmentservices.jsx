

import React from "react";
import * as motion from "motion/react-client";
import Html from "@/Icons/Html";
import NodeIcons from "@/Icons/NodeIcons";
import Flutter from "@/Icons/Flutter";
import Reacticon from "@/Icons/Reacticon";

export default function DevelopmentServices({ services = [], heading = {} }) {
  const defaultHeading = {
    title: "Professional Web App Development Services",
    description:
      "Our expert web app development services deliver scalable, secure, and user-friendly solutions tailored to your business needs.",
  };

  const { title, description } = { ...defaultHeading, ...heading };

  const circleVariants = {
    initial: { 
      scale: 1,
      opacity: 0.1,
    },
    hover: {
      scale: 1.2,
      opacity: 0.15,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Individual circle movement variants
  const circle1Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 40, y: -30 }
  };
  
  const circle2Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: -50, y: 40 }
  };
  
  const circle3Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: 60, y: 50 }
  };
  
  const circle4Variants = {
    initial: { x: 0, y: 0 },
    hover: { x: -60, y: -40 }
  };

  // Animation for service cards
  const cardVariants = {
    initial: { 
      opacity: 0, 
      y: 20 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Stagger animation for cards container
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section 
      className="relative py-20 overflow-hidden"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="absolute inset-0 opacity-10"
        whileHover="hover"
        initial="initial"
      >
        <motion.div 
          variants={circle1Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-8 right-8 w-40 h-40 border-2 border-blue-300 bg-rose-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle2Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-8 left-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle3Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute bottom-12 left-8 w-40 h-40 border-2 bg-yellow-500 border-primary-foreground rounded-full"
        />
        <motion.div 
          variants={circle4Variants}
          initial="initial"
          whileHover="hover"
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="absolute top-1/2 right-16 w-40 h-40 border-2 bg-blue-600 border-primary-foreground rounded-full"
        />
      </motion.div>

      <div className="container max-w-[86rem] w-full mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-4xl text-center font-semibold text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        <motion.div 
          className="mt-4 mb-6 h-1 w-32 bg-secondarycustomBg mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: 128 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        
        <motion.p 
          className="text-black/80 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {description}
        </motion.p>

        <motion.div 
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="block relative z-10 rounded-lg border bg-white p-8 text-left shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 group overflow-hidden"
            >
              <h4 className="text-xl font-semibold text-foreground">
                {service.title}
              </h4>
              
              <motion.div 
                className="my-3 h-[2px] w-10 bg-secondarycustomBg"
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              />

              <div className="my-4 flex h-10 items-center">
                {service.icon === "html" && <Html width="38" height="38" />}
                {service.icon === "node" && <NodeIcons width="38" />}
                {service.icon === "flutter" && <Flutter width="38" />}
                {service.icon === "react" && <Reacticon width="38" />}
              </div>
              
              <p className="text-sm text-black/80 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}