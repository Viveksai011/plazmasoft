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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
        duration: 0.5
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
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
        delay: 0.2
      }
    }
  };

  const gifOverlayVariants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.section 
      className="py-12 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20" variants={titleVariants}>
          <div className="inline-block">
            <h2 className="font-serif font-bold mb-5 text-3xl lg:text-5xl text-gray-900">
              OUR PROCESS
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Work with groundbreakers who create top-notch mobile and web apps on
            time & on budget
          </p>
        </motion.div>

        <motion.div 
          className="hidden lg:block relative mb-[80px]"
          variants={containerVariants}
        >
          <div className="relative z-10 flex justify-between items-start">
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
                  className={`flex-1 relative ${positions[index]} group`}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <div className="flex flex-col items-center text-center px-2">
                    <motion.div
                      className="relative mb-6"
                      variants={iconVariants}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-30 scale-150`}
                      ></div>

                      <motion.div
                        className={`relative w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                      </motion.div>

                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg border-2 border-gray-200"
                        variants={numberVariants}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className={`${step.bgColor} group relative rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} max-w-xs`}
                      variants={cardVariants}
                    >
                      <h3 className="text-xl font-bold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <motion.div
                        className={`absolute inset-0 rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} bg-cover bg-center opacity-0`}
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

        <motion.div 
          className="lg:hidden space-y-8"
          variants={containerVariants}
        >
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative"
                variants={itemVariants}
              >
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent z-0"></div>
                )}

                <motion.div
                  className={`${step.bgColor} rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} relative z-10`}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                >
                  <div className="flex max-sm:flex-col max-sm:gap-2 items-start space-x-4">
                    <motion.div 
                      className="relative flex-shrink-0"
                      variants={iconVariants}
                    >
                      <motion.div
                        className={`relative w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.div 
                        className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow border border-gray-200"
                        variants={numberVariants}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
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