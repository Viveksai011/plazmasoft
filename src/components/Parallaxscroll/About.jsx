import * as motion from "motion/react-client";
import { CardContent, CardDescription } from "@/components/ui/card";
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
import GuaranteeSection from "../servicescomponent/Guaranteesection";

const AboutKrishly = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const storyContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const storyFadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const leftCardVariant = {
    hidden: { opacity: 0, x: -60, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  const rightCardVariant = {
    hidden: { opacity: 0, x: 60, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="min-h-screen"
      style={{
        background: "bg-[#E7F6FE]",
      }}
    >
      <div className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pb-[60px] xl:pt-[180px] 2xl:pt-[210px]">
        <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
        <Inversecirclecurve className="absolute -left-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="my-16 px-4 text-center sm:px-6 lg:px-8"
        >
          <Image
            src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1774895693/Transparent_1_1_azdxyj.png"
            width={158}
            height={150}
            alt="Krishly Logo"
            className="mx-auto object-contain"
          />
          <p variant="secondary" className="mb-4 px-4 py-1 text-3xl font-semibold md:text-5xl">
            About Krishly
          </p>
          <h1 className="mb-4 text-xl font-medium text-customBg md:text-3xl">
            "Your Tech Solutions"
          </h1>
          <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-700">
            Transforming businesses through innovative technology solutions. We don't just build
            websites and apps - we create digital experiences that drive real results for your
            business.
          </p>
        </motion.div>

        <motion.section
          className="relative z-10 overflow-hidden p-2 sm:p-4 sm:p-[6px] md:p-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={storyContainer}
        >
          <motion.div
            variants={storyFadeUp}
            className="container mx-auto w-full max-w-[1200px] rounded-xl border-[3px] border-white bg-white/20 backdrop-blur-[2px]"
          >
            <div className="mx-auto flex flex-wrap justify-center p-6 text-center sm:px-16">
              <motion.h1
                variants={storyFadeUp}
                className="mb-5 w-full text-3xl font-bold leading-tight text-black sm:leading-tight md:leading-tight lg:text-5xl"
              >
                Our Story
              </motion.h1>

              <motion.p
                variants={storyFadeUp}
                className="mx-auto max-w-full text-base text-customBg sm:text-base"
              >
                {OurStory.description}
              </motion.p>
            </div>

            <div className="mx-auto grid grid-cols-1 justify-center gap-7 px-4 py-4 text-center sm:gap-8 md:grid-cols-2 md:gap-16 md:px-9 md:py-9">
              <motion.div
                variants={leftCardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-lg bg-white/80 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl sm:p-6"
              >
                <h3 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold sm:text-2xl md:text-4xl">
                  🎯 Our Vision
                </h3>
                <h4 className="text-dark-900 mb-2 text-sm font-semibold sm:text-base">
                  {OurStory.vision.quote}
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {OurStory.vision.content}
                </p>
              </motion.div>

              <motion.div
                variants={rightCardVariant}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="mb-4 border-b border-gray-300 pb-2 text-xl font-bold sm:text-2xl md:text-4xl">
                  🚀 Our Mission
                </h3>
                <h4 className="text-dark-900 mb-2 text-sm font-semibold sm:text-base">
                  {OurStory.mission.quote}
                </h4>
                <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                  {OurStory.mission.content}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
        {/* Common Problems Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mx-auto my-8 max-w-[80rem] px-10 py-14 sm:px-6"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-5xl">
              Common Problems <span className="text-customBg">We Solve</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-1">
            {problems.map((problem, index) => (
              <div key={index} className="flex flex-col items-center gap-6 rounded-2xl md:flex-row">
                <div className="relative z-10 max-w-fit rounded-full border-[#E7F6FE] md:border-[30px]">
                  <div className="height relative z-20 flex h-48 w-48 flex-shrink-0 items-center justify-center rounded-full border-2 border-white bg-gradient-to-b from-white via-white to-blue-100 p-4 text-blue-700">
                    <span className="text-8xl">{problem.icon}</span>
                  </div>
                </div>
                <div className="relative flex-1 rounded-lg border-2 border-white bg-gradient-to-b from-blue-100 via-white to-white p-6 md:-left-24">
                  <div className="md:pl-16">
                    <h3 className="mb-2 border-b border-gray-300 pb-2 text-xl font-bold text-customBg">
                      {problem.title}
                    </h3>
                    <p className="mb-3 text-base leading-relaxed text-gray-700">
                      <strong classNtext-3xlame="font-semibold">Problem:</strong> {problem.problem}
                    </p>
                    <p className="text-base leading-relaxed text-gray-700">
                      <strong className="font-semibold">Our Solution:</strong> {problem.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <section className="mx-auto max-w-[92rem] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-5xl">
              Practical Tips for <span className="text-customBg">Digital Success</span>
            </h2>
          </div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PracticalTips.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                className="group relative rounded-lg bg-thirdbg p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-4 hover:border-t-customBg hover:shadow-xl"
              >
                <div className="p-0">
                  <span className="absolute right-[-19px] top-[-15px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#E7F6FE] text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-2 group-hover:border-4 group-hover:border-customBg">
                    <span className="rounded-full bg-white p-4 font-semibold text-red-700">
                      {React.createElement(service.icon)}
                    </span>
                  </span>
                  <h3 className="mb-4 max-w-64 border-b-2 border-blue-400 pb-4 text-xl font-bold text-customBg">
                    {service.title}
                  </h3>
                  <div className="">
                    <p className="font-semibold text-black">{service.description}:</p>
                    <ul className="list-disc space-y-3 pl-5">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm font-medium text-gray-700">
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
        <div className="mx-auto w-full max-w-[92rem] px-4 py-16">
          <div className="mb-12 w-full">
            <h2 className="font-Poppins mx-auto w-full max-w-[52rem] text-center text-3xl font-bold text-gray-900 lg:text-5xl">
              Our Approach: <br />
              <span className="text-customBg">Results-Driven Development</span>
            </h2>
          </div>

          <div className="mx-auto grid w-full max-w-[78rem] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approachCards.map((category) => (
              <motion.div
                key={category.id}
                className="relative h-full rounded-lg bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: category.id * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <CardContent className="flex h-full flex-col justify-between rounded-md bg-gradient-to-b from-customBg/15 to-white p-0">
                  <div className="mb-6 flex items-center justify-center">
                    <Image
                      src={category.icon}
                      width={100}
                      height={100}
                      alt={category.title}
                      className="h-40 w-40 object-fill"
                    />
                  </div>

                  <h3 className="px-2 pb-0 text-center text-xl font-semibold text-customBg">
                    {category.title}
                  </h3>

                  <CardDescription className="px-6 pb-6 text-center text-gray-700">
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
          <section className="mx-auto pb-4 pt-16">
            <div className="mx-auto max-w-[92rem]">
              <div className="mb-12 w-full">
                <h2 className="font-Poppins mx-auto w-full max-w-[52rem] text-center text-3xl font-bold text-gray-900 lg:text-5xl">
                  Key
                  <span className="text-customBg"> Statistics</span>
                </h2>
              </div>

              {/* Stats Container */}
              <div className="divide-y">
                {/* ITEM 1 */}
                <div className="flex flex-col items-center justify-between gap-3 p-4 sm:flex-row sm:gap-6 sm:p-6">
                  <StrokeText>5+</StrokeText>
                  <p className="text-center text-lg text-customBg sm:text-right sm:text-2xl lg:text-4xl">
                    Successful Year
                  </p>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col items-center justify-between gap-3 p-4 sm:flex-row sm:gap-6 sm:p-6">
                  <p className="text-center text-lg text-customBg sm:text-left sm:text-2xl lg:text-4xl">
                    Projects Delivered
                  </p>
                  <StrokeText>100+</StrokeText>
                </div>

                {/* ITEM 3 */}
                <div className="flex flex-col items-center justify-between gap-3 p-4 sm:flex-row sm:gap-6 sm:p-6">
                  <StrokeText>100%</StrokeText>
                  <p className="text-center text-lg text-customBg sm:text-right sm:text-2xl lg:text-4xl">
                    Happy Clients
                  </p>
                </div>

                {/* ITEM 4 */}
                <div className="flex flex-col items-center justify-between gap-3 p-4 sm:flex-row sm:gap-6 sm:p-6">
                  <p className="text-center text-lg text-customBg sm:text-left sm:text-2xl lg:text-4xl">
                    Support Available
                  </p>
                  <StrokeText>24/7</StrokeText>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
        <section className="mx-auto max-w-[92rem] px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-5xl">
              Pro Tips for
              <span className="text-customBg"> Business Owners</span>
            </h2>
          </div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ProTips.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                className="group relative rounded-lg bg-thirdbg p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-4 hover:border-t-customBg hover:shadow-xl"
              >
                <div className="p-0">
                  <span className="absolute right-[-19px] top-[-15px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#E7F6FE] text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-2 group-hover:border-4 group-hover:border-customBg">
                    <span className="rounded-full bg-white p-4 font-semibold text-red-700">
                      {React.createElement(service.icon)}
                    </span>
                  </span>
                  <h3 className="mb-4 max-w-64 border-b-2 border-blue-400 pb-4 text-xl font-bold text-customBg">
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
        <GuaranteeSection
          customTitle={
            <>
              What Makes Us <span className="text-customBg">Different</span>
            </>
          }
          items={differentCard}
        />
        {/* Testimonials Section */}
        <TestimonialsSection testimonials={Testimonaldata}>
          <h2 className="font-poppins text-3xl font-bold text-gray-900 lg:text-5xl">
            Social Proof & Testimonials
          </h2>
        </TestimonialsSection>
      </div>
    </section>
  );
};

export default AboutKrishly;
