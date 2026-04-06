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
      className="relative mx-auto mb-24 flex min-h-screen flex-wrap justify-center overflow-hidden px-4 text-center"
      style={{ opacity, scale }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div style={{ y }} className="relative top-10 z-10 w-full">
        <motion.div className="flex-col flex-wrap" variants={containerVariants}>
          <motion.h1
            className="font-poppins mb-6 mt-10 w-full text-[32px] font-medium not-italic leading-none text-customBg sm:text-[40px] md:text-[48px] lg:text-[54px]"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-body-color font-poppins mx-auto mb-12 text-[25px] font-bold not-italic leading-none text-black sm:text-[55px] md:text-[60px] lg:text-[72px]"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center md:justify-between"
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
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
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
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
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
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9, 1], [1, 1.2, 0, 0]);

  const backgroundScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 1]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pb-[60px] xl:pt-[180px]"
    >
      {/* Animated Background Curves - Only visible till middle of section */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[-1]"
        style={{
          opacity: backgroundOpacity,
          scale: backgroundScale,
        }}
      >
        <Circlecurve className="absolute right-0 top-0 opacity-30 lg:opacity-100" />
        <Inversecirclecurve className="absolute left-0 top-0 opacity-30 lg:opacity-100" />
      </motion.div>

      <div className="container relative z-10 mx-auto w-full">
        <ParallaxSection
          index={0}
          title="Stop Wasting Money On"
          subtitle="Developers who disappear"
          img1="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
          img2="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/5_dy2xnb.webp"
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
          className="mx-auto my-20 flex w-full max-w-[92rem] flex-col items-center justify-center text-center"
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
            className="my-8 flex flex-col items-center justify-center gap-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758613823/Transparent_5_1_1_jdcqyh.png"
              alt={"Krishly Logo 2"}
              className="mr-4 w-[250px] object-contain md:w-[270px] lg:w-[500px]"
              quality={100}
              width={100}
              height={100}
            />
            <Button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-customBg px-9 py-4 text-base hover:bg-customBg/80 md:text-lg">
              Book Your Free Consultation Now
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
