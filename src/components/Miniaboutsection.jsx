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
      delayChildren: 0.3
    }
  }
};

const leftSlideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const rightSlideIn = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const fadeIn = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};




const Miniaboutsection = () => {
  return (
    <motion.div 
      className="max-w-[92rem] mx-auto px-4 sm:px-8 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        <motion.div 
          className="space-y-8 w-full"
          variants={leftSlideIn}
        >
          <div className="flex flex-col max-md:gap-5 lg:flex-row max-w-[1000px]">
            <div className="flex flex-col justify-around space-y-4">
              <motion.p 
                className="text-sm font-medium py-1 px-3 w-fit rounded-2xl bg-white text-gray-600 tracking-wide uppercase shadow-sm"
                variants={fadeIn}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {Ourcompanydata.companyLabel}
              </motion.p>
              <motion.h2 
                className="text-[27px] sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
                variants={fadeIn}
              >
                {Ourcompanydata.heading}
              </motion.h2>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
              <motion.p 
                className="text-gray-600 text-sm leading-relaxed max-w-md"
                variants={fadeIn}
              >
                {Ourcompanydata.description}
              </motion.p>
              <motion.div variants={fadeIn}>
                <Button className="bg-customBg hover:bg-customBg/80 w-fit group text-white px-8 py-6 text-base font-medium rounded-full transform transition-all duration-200 ease-out hover:scale-105">
                  {Ourcompanydata.button}
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div 
            className="relative rounded-3xl transform transition-all duration-400 ease-out hover:scale-105"
            variants={leftSlideIn}
          >
            <Image
              src="/img/TeamImage2.webp"
              alt="Business professionals working together"
              width={540}
              height={480}
              className="w-full max-w-[1000px] rounded-3xl h-80 object-cover transform transition-all duration-400 ease-out hover:scale-105"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="space-y-8 lg:max-w-[380px] w-full"
          variants={fadeIn}
        >
          <motion.div 
            className="relative rounded-3xl "
            variants={rightSlideIn}
          >
            <Image
              src="/img/TeamImage.webp"
              alt="Business team collaboration"
              width={380}
              height={380}
              className="w-full h-80 object-cover rounded-3xl transform transition-all duration-400 ease-out hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                className="bg-white/90 w-12 h-12  rounded-full shadow-lg transform transition-all duration-200 ease-out hover:scale-110 hover:bg-white"
              >
                <Play className="h-8 w-8 text-gray-700 ml-1" />
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className=" flex flex-col  justify-between rounded-3xl bg-thirdbg px-8 py-4 items-center"
            variants={fadeIn}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center w-full justify-between">
              <div 
                className="flex flex-col space-y-2"
               
              >
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-gray-600 font-medium text-sm">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="bg-gray-200 h-16 w-[1px] max-sm:my-4" />
              <div 
                className="flex flex-col space-y-2"
               
              >
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-gray-600 font-medium text-sm">
                  {Ourcompanydata.expertTeamLabel}
                </p>
              </div>
            </div>
            <hr className="bg-gray-200 w-full my-4" />
            <div className="flex items-start w-full justify-between">
              <div 
                className="flex flex-col space-y-2"
               
              >
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-gray-600 font-medium text-sm">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="bg-gray-200 h-16 w-[1px] max-sm:my-4" />
              <div 
                className="flex flex-col space-y-2"
               
              >
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-gray-600 font-medium text-sm">
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