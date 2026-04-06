import * as motion from "motion/react-client";
import { Lightbulb, Palette, Code, Bug, Rocket } from "lucide-react";

export function ProcessSection() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "IDEA",
      description:
        "We provide no obligation free consultation to discuss your project idea and help you with tech stack, budget and timelines.",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-600/50",
      gifurl: "/img/idea.gif",
    },
    {
      icon: Palette,
      title: "UI/UX DESIGN",
      description:
        "Our clients work with our product design team to bring project concept to live. We provide prototype so you can experience the app flow.",
      color: "bg-secondarycustomBg",
      bgColor: "bg-[#F0F4FF]",
      borderColor: "border-secondarycustomBg",
      gifurl: "/img/ui&ux.gif",
    },
    {
      icon: Code,
      title: "DEVELOPMENT",
      description:
        "Development team starts the coding. The process is divided into sprints. Our agile model allow you to assess what we're building and provide you with weekly updates.",
      color: "from-green-700 to-green-800",
      bgColor: "bg-thirdbg",
      borderColor: "border-green-600/50",
      gifurl: "/img/full-stack-development.gif",
    },
    {
      icon: Bug,
      title: "TESTING",
      description:
        "We test all use cases, critical scenarios, and all functional on real time device for iOS and Android along with Desktop",
      color: "bg-secondarycustomBg",
      bgColor: "bg-[#F0F4FF]",
      borderColor: "border-secondarycustomBg",
      gifurl: "/img/testing.gif",
    },
    {
      icon: Rocket,
      title: "LAUNCHING",
      description:
        "Passing through a final round of QA and client approval. We manage the submission in the app and play store. Additionally we help with tech support for 30 days after going live.",
      color: "from-green-700 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-600/50",
      gifurl: "/img/rocket.gif",
    },
  ];

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const numberVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  const gifOverlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="relative overflow-hidden py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div className="mb-20 text-center" variants={titleVariants}>
          <div className="inline-block">
            <h2 className="mb-5 font-serif text-3xl font-bold text-gray-900 lg:text-5xl">
              OUR PROCESS
            </h2>
          </div>
          <p className="mx-auto max-w-4xl px-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            Work with groundbreakers who create top-notch mobile and web apps on time & on budget
          </p>
        </motion.div>

        <motion.div className="relative mb-[80px] hidden lg:block" variants={containerVariants}>
          <div className="relative z-10 flex items-start justify-between">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const positions = [
                "translate-y-16",
                "translate-y-0",
                "translate-y-20",
                "translate-y-4",
                "translate-y-12",
              ];

              return (
                <motion.div
                  key={index}
                  className={`relative flex-1 ${positions[index]} group`}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col items-center px-2 text-center">
                    <motion.div className="relative mb-6" variants={iconVariants}>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} scale-150 rounded-full opacity-30 blur-xl`}
                      ></div>

                      <motion.div
                        className={`relative h-20 w-20 bg-gradient-to-r ${step.color} flex items-center justify-center rounded-full border-4 border-white shadow-2xl`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <IconComponent className="h-10 w-10 text-white drop-shadow-lg" />
                      </motion.div>

                      <motion.div
                        className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-sm font-bold text-gray-700 shadow-lg"
                        variants={numberVariants}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className={`${step.bgColor} group relative rounded-2xl border-2 p-6 shadow-xl ${step.borderColor} max-w-xs`}
                      variants={cardVariants}
                    >
                      <h3 className="mb-3 text-xl font-bold text-black">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                      <motion.div
                        className={`absolute inset-0 rounded-2xl border-2 p-6 shadow-xl ${step.borderColor} bg-cover bg-center opacity-0`}
                        style={{
                          backgroundImage: `url(${step.gifurl})`,
                        }}
                        variants={gifOverlayVariants}
                      ></motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div className="space-y-8 lg:hidden" variants={containerVariants}>
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div key={index} className="relative" variants={itemVariants}>
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 z-0 h-16 w-0.5 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}

                <motion.div
                  className={`${step.bgColor} rounded-2xl border-2 p-6 shadow-xl ${step.borderColor} relative z-10`}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="flex items-start space-x-4 max-sm:flex-col max-sm:gap-2">
                    <motion.div className="relative flex-shrink-0" variants={iconVariants}>
                      <motion.div
                        className={`relative h-16 w-16 bg-gradient-to-r ${step.color} flex items-center justify-center rounded-full border-4 border-white shadow-lg`}
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div
                        className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-bold text-gray-700 shadow"
                        variants={numberVariants}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-bold text-blue-900">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
