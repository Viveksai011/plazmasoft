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
      className="overflow-x-hidden py-12 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-auto flex max-w-[92rem] flex-col items-center justify-between gap-8 px-8 lg:flex-row lg:gap-12">
        <motion.div className="relative order-2 lg:order-1" variants={imageVariants}>
          <motion.div
            className="xs:w-[350px] xs:h-[350px] relative mx-auto sm:h-96 sm:w-96 lg:h-[500px] lg:w-[500px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="h-full w-full overflow-hidden rounded-full shadow-2xl"
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/img/about.webp"
                alt="Team collaboration"
                width={384}
                height={384}
                className="h-full w-full rounded-full object-cover"
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              variants={badgeVariants}
            >
              <motion.div
                className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-green-100 bg-white/95 shadow-xl backdrop-blur-sm sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                animate={pulseAnimation}
              >
                <div className="mb-1 text-3xl font-bold text-customBg sm:text-4xl lg:mb-2 lg:text-6xl">
                  15+
                </div>
                <div className="text-center text-xs font-medium leading-tight text-gray-700 sm:text-sm lg:text-base">
                  Years
                  <br />
                  Experience
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -right-4 -top-4 hidden h-6 w-6 rounded-full bg-customBg/50 opacity-80 sm:block lg:h-8 lg:w-8"
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
              className="absolute -bottom-6 -left-6 hidden h-8 w-8 rounded-full bg-customBg opacity-60 sm:block lg:h-12 lg:w-12"
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
              className="absolute -left-8 top-1/4 hidden h-4 w-4 rounded-full bg-green-400 opacity-70 sm:block lg:h-6 lg:w-6"
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
          className="order-1 w-full space-y-4 sm:space-y-6 lg:order-2 lg:max-w-[50%]"
          variants={contentVariants}
        >
          <motion.div className="space-y-3 sm:space-y-4" variants={containerVariants}>
            <motion.div
              className="text-xs font-semibold uppercase tracking-wider text-customBg sm:text-sm"
              variants={itemVariants}
            >
              FAST & EFFECTIVE
            </motion.div>

            <motion.h2
              className="text-[27px] font-bold leading-tight text-gray-900 sm:text-3xl lg:text-5xl"
              variants={itemVariants}
            >
              We're a global stakeholder relations and partnership building consultancy.
            </motion.h2>

            <motion.p
              className="text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg"
              variants={itemVariants}
            >
              Get instant helpful resources about anything on the go, easily implement secure money
              transfer solutions, boost your daily efficiency, connect to other app users and create
              your own network, and much more with just a few taps. We deliver comprehensive IT
              solutions that drive business growth and digital transformation.
            </motion.p>
          </motion.div>

          <Button
            size="lg"
            className="w-full rounded-3xl bg-customBg px-6 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-customBg/80 hover:shadow-lg sm:w-auto sm:px-8 sm:py-3 sm:text-base"
          >
            <Calendar className="mr-1 h-2.5 w-2.5" /> Get Started
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
