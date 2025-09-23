"use client";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const ParallaxSection = ({ title, subtitle, img1, img2, children, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: index * 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-wrap px-4 mx-auto text-center justify-center mb-24 overflow-hidden min-h-screen"
      style={{ opacity, scale }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div style={{ y }} className="w-full relative z-10 top-10">
        <motion.div className="flex-col flex-wrap" variants={containerVariants}>
          <motion.h1
            className="mb-6 w-full text-customBg mt-10 font-poppins not-italic font-medium leading-none text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className=" mb-12 text-[25px] text-body-color mx-auto sm:text-[55px] md:text-[60px] lg:text-[72px] text-black font-poppins not-italic font-bold leading-none"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-[1200px] w-full flex items-center flex-wrap justify-center md:justify-between mx-auto"
          variants={itemVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={img1}
              alt={"Client Desk 1"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={350}
              height={350}
              priority
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={img2}
              alt={"Client Desk 2"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              priority
              width={350}
              height={350}
            />
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>{children}</motion.div>
      </motion.div>
    </motion.div>
  );
};

const Herosection = () => {
  const sectionRef = useRef(null);

  // Track scroll progress through the hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to control background visibility
  // Background will be visible from start to middle (0% to 50% scroll), then fade out
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.9, 1],
    [1, 1.2, 0, 0]
  );

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [1, 1, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pt-[180px] xl:pb-[60px]"
    >
      {/* Animated Background Curves - Only visible till middle of section */}
      <motion.div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
        }}
      >
        <Circlecurve className="absolute right-0 top-0 opacity-30 lg:opacity-100" />
        <Inversecirclecurve className="absolute left-0 top-0 opacity-30 lg:opacity-100" />
      </motion.div>

      <div className="container w-full mx-auto relative z-10">
        <ParallaxSection
          index={0}
          title="Stop Wasting Money On"
          subtitle="Developers who disappear"
          img1="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
          img2="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
        />

        <ParallaxSection
          index={1}
          title="Stop Wasting Money On"
          subtitle="Projects that never finish"
          img1="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/6_dcx07b.webp"
          img2="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/4_b0pydw.webp"
        />

        <ParallaxSection
          index={2}
          title="Stop Wasting Money On"
          subtitle="Website that don't work"
          img1="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/3_btipnu.webp"
          img2="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/1_dqttnc.webp"
        />

        {/* Final CTA Section */}
        <motion.div
          className=" my-20 text-center w-full mx-auto max-w-[92rem]  flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-6xl font-bold text-customBg"
          >
            Hire
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center my-8 gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758613823/Transparent_5_1_1_jdcqyh.png"
              alt={"Krishly Logo 2"}
              className=" object-contain mr-4 w-[250px] md:w-[270px] lg:w-[500px] "
              quality={100}
              width={100}
              height={100}
            />
            <Button className="inline-flex px-9 py-4 justify-center text-base md:text-lg items-center rounded-2xl gap-2 bg-customBg hover:bg-customBg/80">Book Your Free Consultation Now</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
