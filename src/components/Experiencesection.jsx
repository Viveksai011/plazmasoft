import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Image from "next/image";

export function ExperienceSection() {
  // Animation variants
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

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const floatingOrbs = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.section
      className="py-12 sm:py-16 lg:py-20 overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex max-w-[92rem] flex-col lg:flex-row justify-between gap-8 lg:gap-12 items-center mx-auto px-8">
        <motion.div
          className="relative order-2 lg:order-1"
          variants={imageVariants}
        >
          <motion.div
            className="relative xs:w-[350px] xs:h-[350px] sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full h-full rounded-full overflow-hidden shadow-2xl"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/img/about.webp"
                alt="Team collaboration"
                width={384}
                height={384}
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={badgeVariants}
            >
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-full w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 flex flex-col items-center justify-center shadow-xl border border-green-100"
                animate={pulseAnimation}
              >
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-customBg mb-1 lg:mb-2">
                  15+
                </div>
                <div className="text-gray-700 font-medium text-center leading-tight text-xs sm:text-sm lg:text-base">
                  Years
                  <br />
                  Experience
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden sm:block absolute -top-4 -right-4 w-6 h-6 lg:w-8 lg:h-8 bg-customBg/50 rounded-full opacity-80"
              variants={floatingOrbs}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
            <motion.div
              className="hidden sm:block absolute -bottom-6 -left-6 w-8 h-8 lg:w-12 lg:h-12 bg-customBg rounded-full opacity-60"
              variants={floatingOrbs}
              animate={{
                y: [0, 12, 0],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                },
              }}
            />
            <motion.div
              className="hidden sm:block absolute top-1/4 -left-8 w-4 h-4 lg:w-6 lg:h-6 bg-green-400 rounded-full opacity-70"
              variants={floatingOrbs}
              animate={{
                y: [0, -8, 0],
                transition: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                },
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="space-y-4 sm:space-y-6 lg:max-w-[50%] w-full order-1 lg:order-2"
          variants={contentVariants}
        >
          <motion.div
            className="space-y-3 sm:space-y-4"
            variants={containerVariants}
          >
            <motion.div
              className="text-customBg font-semibold text-xs sm:text-sm uppercase tracking-wider"
              variants={itemVariants}
            >
              FAST & EFFECTIVE
            </motion.div>

            <motion.h2
              className="text-[27px] sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              We're a global stakeholder relations and partnership building
              consultancy.
            </motion.h2>

            <motion.p
              className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed"
              variants={itemVariants}
            >
              Get instant helpful resources about anything on the go, easily
              implement secure money transfer solutions, boost your daily
              efficiency, connect to other app users and create your own
              network, and much more with just a few taps. We deliver
              comprehensive IT solutions that drive business growth and digital
              transformation.
            </motion.p>
          </motion.div>

          <Button
            size="lg"
            className="bg-customBg hover:bg-customBg/80  hover:scale-105 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-3xl font-semibold transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            <Calendar className="h-2.5 w-2.5 mr-1" /> Get Started
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
