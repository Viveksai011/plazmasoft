"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";
import React from "react";
import { TestimonialsSection } from "../Testimonial/testimonials-section";
import Image from "next/image";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import {
  problems,
  PracticalTips,
  ProTips,
  approachCards,
  differentCard,
  OurStory,
} from "@/utils/aboutPage/aboutDynamic";
import StrokeText from "@/components/StrokeText";
import { Testimonaldata } from "@/utils/Hometestimonials";

const AboutKrishly = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const storyContainer = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const storyHeader = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const storyCardLeft = {
  hidden: {
    opacity: 0,
    x: -80,
    rotate: -4,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const storyCardRight = {
  hidden: {
    opacity: 0,
    x: 80,
    rotate: 4,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

  return (
    <section
      className="min-h-screen  "
      style={{
        background: "bg-[#E7F6FE]",
      }}
    >
      <div className="relative z-10 overflow-hidden  py-16">
        <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
        <Inversecirclecurve className="absolute -left-0  top-0 z-[-1] opacity-30 lg:opacity-100" />
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center my-16 px-4 sm:px-6 lg:px-8"
        >
          <Image
            src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1774895693/Transparent_1_1_azdxyj.png"
            width={158}
            height={150}
            alt="Krishly Logo"
            className="mx-auto object-contain"
          />
          <p
            variant="secondary"
            className="mb-4 text-7xl font-semibold px-4 py-1"
          >
            About Krishly
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-customBg mb-4">
            "Your Tech Solutions"
          </h1>
          <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through innovative technology solutions. We
            don't just build websites and apps - we create digital experiences
            that drive real results for your business.
          </p>
        </motion.div>

      <motion.section
  className="relative z-10 overflow-hidden p-7 md:p-[16px] sm:p-[6px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={storyContainer}
>
  <div className="container max-w-[1200px] w-full mx-auto border-[3px] border-white rounded-xl">
    <motion.div
      variants={storyHeader}
      className="flex flex-wrap px-16 py-9 mx-auto text-center justify-center"
    >
      <h1 className="mb-5 text-3xl font-bold leading-tight w-full text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
        Our Story
      </h1>
      <p className="text-lg text-customBg max-w-full mx-auto">
        {OurStory.description}
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-9 py-9 mx-auto text-center justify-center">
      <motion.div
        variants={storyCardLeft}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-lg"
      >
        <h3 className="text-3xl font-bold border-b border-gray-300 pb-2 mb-4">
          🎯 Our Vision
        </h3>
        <h4 className="text-base font-semibold text-dark-900 mb-2">
          {OurStory.vision.quote}
        </h4>
        <p className="text-gray-700 text-base leading-relaxed">
          {OurStory.vision.content}
        </p>
      </motion.div>

      <motion.div
        variants={storyCardRight}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-sm border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 rounded-lg"
      >
        <h3 className="text-3xl font-bold border-b border-gray-300 pb-2 mb-4">
          🚀 Our Mission
        </h3>
        <h4 className="text-base font-semibold text-dark-900 mb-2">
          {OurStory.mission.quote}
        </h4>
        <p className="text-gray-700 text-base leading-relaxed">
          {OurStory.mission.content}
        </p>
      </motion.div>
    </div>
  </div>
</motion.section>
        {/* Common Problems Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 mt-28"
        >
          <div className="max-w-full mx-auto  py-14 max-w-[92rem] mx-auto px-10 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Common Problems{" "}
                  <span className="text-customBg">We Solve</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-1 gap-4 sm:gap-6">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className=" rounded-2xl sm:p-6 sm:gap-6 flex flex-col md:flex-row  items-center "
                  >
                    {/* <div className=""> */}

                    <div className="md:border-[30px] border-[#E7F6FE] relative z-10 rounded-full max-w-fit">
                      <div className="flex-shrink-0 bg-gradient-to-b to-blue-100 via-white from-white text-blue-700 rounded-full border-2 border-white p-4 height flex items-center justify-center w-48 h-48 relative z-20">
                        <span className="text-8xl">{problem.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 border-2 border-white bg-gradient-to-b from-blue-100 via-white to-white rounded-lg p-6  relative md:-left-24  ">
                      <div className="md:pl-16">
                        <h3 className="text-2xl font-bold text-customBg mb-2 border-b border-gray-300 pb-2">
                          {problem.title}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed mb-3">
                          <strong className="font-semibold">Problem:</strong>{" "}
                          {problem.problem}
                        </p>
                        <p className="text-gray-700 text-base leading-relaxed">
                          <strong className="font-semibold">
                            Our Solution:
                          </strong>{" "}
                          {problem.solution}
                        </p>
                      </div>
                    </div>
                    {/* </div> */}
                  </div>
                ))}
              </div>
          </div>
        </motion.div>
        <section className="py-20 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-bold text-3xl lg:text-5xl text-gray-900">
              Practical Tips for{" "}
              <span className="text-customBg">Digital Success</span>
            </h2>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PracticalTips.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                className="bg-thirdbg p-8 hover:border-t-4 group hover:border-t-customBg relative rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-0">
                  <span className="text-gray-400 text-sm  group-hover:border-4 group-hover:border-customBg transition-all duration-300 hover:-translate-y-2 absolute top-[-15px] right-[-19px] font-medium h-[80px] flex items-center justify-center w-[80px] bg-[#E7F6FE] rounded-full">
                    <span className="p-4 bg-white rounded-full text-red-700 font-semibold">
                      {React.createElement(service.icon)}
                    </span>
                  </span>
                  <h3 className="text-xl text-customBg max-w-64 font-bold pb-4 mb-4 border-b-2 border-blue-400">
                    {service.title}
                  </h3>
                  <div className="">
                    <p className="text-black font-semibold ">
                      {service.description}:
                    </p>
                    <ul className="space-y-3 pl-5 list-disc ">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-gray-700 font-medium"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* tech section */}
        </section>
        <div className="py-16 px-4 w-full mx-auto max-w-[92rem]">
          <div className="w-full mb-12">
            <h2 className="font-Poppins max-w-[52rem] mx-auto text-center w-full font-bold text-[1.87rem] lg:text-[3.1rem] text-gray-900">
              Our Approach: <br />
              <span className="text-customBg">Results-Driven Development</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[78rem] w-full mx-auto">
            {approachCards.map((category) => (
              <motion.div
                key={category.id}
                className="h-full bg-white p-1 relative rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: category.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <CardContent className="p-0 bg-gradient-to-b from-customBg/15 rounded-md to-white h-full flex flex-col justify-between">
                  <div className="flex justify-center items-center mb-6">
                    <Image
                      src={category.icon}
                      width={100}
                      height={100}
                      alt={category.title}
                      className="object-fill w-40 h-40"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-center text-customBg pb-0 px-2">
                    {category.title}
                  </h3>

                  <CardDescription className="px-6 pb-6 text-gray-700 text-center">
                    {category.description}
                  </CardDescription>
                </CardContent>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 mt-28"
        >
          <section className="py-16 mx-auto">
            <div className=" mx-auto max-w-[92rem] ">
              <div className="w-full mb-12">
                <h2 className="font-Poppins max-w-[52rem] mx-auto text-center w-full font-bold text-[1.87rem] lg:text-[3.1rem] text-gray-900">
                  Key
                  <span className="text-customBg"> Statistics</span>
                </h2>
              </div>

              {/* Stats Container */}
              <div className="divide-y">
                {/* ITEM 1 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 p-4 sm:p-6">
                  <StrokeText>5+</StrokeText>
                  <p className="text-customBg text-lg sm:text-2xl lg:text-4xl text-center sm:text-right">
                    Successful Year
                  </p>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 p-4 sm:p-6">
                  <p className="text-customBg text-lg sm:text-2xl lg:text-4xl text-center sm:text-left">
                    Projects Delivered
                  </p>
                  <StrokeText>100+</StrokeText>
                </div>

                {/* ITEM 3 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 p-4 sm:p-6">
                  <StrokeText>100%</StrokeText>
                  <p className="text-customBg text-lg sm:text-2xl lg:text-4xl text-center sm:text-right">
                    Happy Clients
                  </p>
                </div>

                {/* ITEM 4 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 p-4 sm:p-6">
                  <p className="text-customBg text-lg sm:text-2xl lg:text-4xl text-center sm:text-left">
                    Support Available
                  </p>
                  <StrokeText>24/7</StrokeText>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
        <section className="py-20 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-bold text-3xl lg:text-5xl text-gray-900">
              Pro Tips for
              <span className="text-customBg"> Business Owners</span>
            </h2>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProTips.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                className="bg-thirdbg p-8 hover:border-t-4 group hover:border-t-customBg relative rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-0">
                  <span className="text-gray-400 text-sm  group-hover:border-4 group-hover:border-customBg transition-all duration-300 hover:-translate-y-2 absolute top-[-15px] right-[-19px] font-medium h-[80px] flex items-center justify-center w-[80px] bg-[#E7F6FE] rounded-full">
                    <span className="p-4 bg-white rounded-full text-red-700 font-semibold">
                      {React.createElement(service.icon)}
                    </span>
                  </span>
                  <h3 className="text-xl text-customBg max-w-64 font-bold pb-4 mb-4 border-b-2 border-blue-400">
                    {service.title}
                  </h3>
                  <div className="space-y-4">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-gray-700"
                        >
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* what makes us different section */}
        <div className="max-w-full mx-auto  py-14">
          <div className="max-w-[92rem] mx-auto px-10 sm:px-6 lg:px-52">
            <div className="py-16 px-4 w-full mx-auto max-w-[92rem]">
              <div className="w-full mb-12">
                <h2 className="font-Poppins max-w-[52rem] mx-auto text-center w-full font-bold text-[1.87rem] lg:text-[3.1rem] text-gray-900">
                  What Makes Us{" "}
                  <span className="text-customBg">Different </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 max-w-[92rem] w-full mx-auto">
                {differentCard.map((category) => (
                  <motion.div
                    key={category.id}
                    className="h-full p-1 relative rounded-lg transition-all  duration-300 hover:-translate-y-2"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: category.id * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <CardContent className="p-0 rounded-md h-full flex flex-col justify-between">
                      <div className="flex justify-center items-center mb-6">
                        <CircleCheck className="text-pink-500 w-28 h-28" />
                      </div>
                      <div className="border-2 py-3 border-white bg-gradient-to-b from-blue-100  to-white rounded-lg justify-start h-full">
                        <h3 className="text-xl font-semibold text-center text-customBg py-1 px-2 border-b border-blue-300 mx-2">
                          {category.title}
                        </h3>

                        <CardDescription className="px-6 py-2 text-gray-700 text-center">
                          {category.description}
                        </CardDescription>
                      </div>
                    </CardContent>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials Section */}
        <TestimonialsSection testimonials={Testimonaldata}>
          <h2 className="font-poppins font-bold text-3xl lg:text-5xl text-gray-900">
            Social Proof & Testimonials
          </h2>
        </TestimonialsSection>
      </div>
    </section>
  );
};

export default AboutKrishly;
