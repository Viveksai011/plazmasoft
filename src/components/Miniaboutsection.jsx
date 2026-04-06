import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { Ourcompanydata } from "@/utils/Ourcompanydata";
import * as motion from "motion/react-client";
import Textwave from "@/Icons/Awards/text/Textwave";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const leftSlideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const rightSlideIn = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Miniaboutsection = () => {
  return (
    <motion.div
      className="mx-auto max-w-[92rem] px-4 py-16 sm:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center gap-12 md:flex-row">
        <motion.div className="w-full space-y-8" variants={leftSlideIn}>
          <div className="flex max-w-[1000px] flex-col max-md:gap-5 lg:flex-row">
            <div className="flex flex-col justify-around space-y-4">
              <motion.p
                className="w-fit rounded-2xl bg-white px-3 py-1 text-sm font-medium uppercase tracking-wide text-gray-600 shadow-sm"
                variants={fadeIn}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {Ourcompanydata.companyLabel}
              </motion.p>
              <motion.h2
                className="text-[27px] font-bold leading-tight text-gray-900 sm:text-3xl lg:text-5xl"
                variants={fadeIn}
              >
                {Ourcompanydata.heading}
              </motion.h2>
            </div>
            <div className="flex flex-col items-start justify-center space-y-4">
              <motion.p
                className="max-w-md text-sm leading-relaxed text-gray-600"
                variants={fadeIn}
              >
                {Ourcompanydata.description}
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button className="group w-fit transform rounded-xl bg-customBg px-8 py-6 text-base font-medium text-white transition-all duration-200 ease-out hover:scale-105 hover:bg-customBg/80">
                  {Ourcompanydata.button}
                  <ArrowUpRight className="ml-2 transition-transform duration-300 group-hover:rotate-45" />
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="duration-400 relative transform rounded-3xl transition-all ease-out hover:scale-105"
            variants={leftSlideIn}
          >
            <Image
              src="/img/TeamImage2.webp"
              alt="Business professionals working together"
              width={540}
              height={480}
              className="duration-400 h-80 w-full max-w-[1000px] transform rounded-xl object-cover transition-all ease-out hover:scale-105"
            />
          </motion.div>
        </motion.div>

        <motion.div className="w-full space-y-8 lg:max-w-[380px]" variants={fadeIn}>
          <motion.div className="relative rounded-xl" variants={rightSlideIn}>
            <Image
              src="/img/TeamImage.webp"
              alt="Business team collaboration"
              width={380}
              height={380}
              className="duration-400 h-80 w-full transform rounded-xl object-cover transition-all ease-out hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="h-12 w-12 transform rounded-full bg-white/90 shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:bg-white">
                <Play className="ml-1 h-8 w-8 text-gray-700" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-between rounded-xl bg-thirdbg px-8 py-4"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col space-y-2">
                <p className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="h-16 w-[1px] bg-gray-200 max-sm:my-4" />
              <div className="flex flex-col space-y-2">
                <p className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {Ourcompanydata.expertTeamLabel}
                </p>
              </div>
            </div>
            <hr className="my-4 w-full bg-gray-200" />
            <div className="flex w-full items-start justify-between">
              <div className="flex flex-col space-y-2">
                <p className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="h-16 w-[1px] bg-gray-200 max-sm:my-4" />
              <div className="flex flex-col space-y-2">
                <p className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {Ourcompanydata.expertTeamLabel}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Miniaboutsection;
