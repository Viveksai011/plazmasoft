"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toolkitData } from "@/utils/Developementdata";
import { CircleCheckBig } from "lucide-react";

export function DevelopmentSection() {
  const [activeTab, setActiveTab] = useState("Web Development");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const tabButtonVariants = {
    inactive: { 
      scale: 1,
      backgroundColor: "#ffffff",
      color: "#374151",
      borderColor: "#D1D5DB"
    },
    active: { 
      scale: 1.05,
      backgroundColor: "#4f46e5",
      color: "#ffffff",
      borderColor: "#4f46e5",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      backgroundColor: "#f3f4f6",
      borderColor: "#4f46e5",
      color: "#4f46e5",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const techCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-12 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="font-serif font-bold text-3xl mb-5 lg:text-5xl text-gray-900">
            DEVELOPMENT TOOLKIT
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            At our company, we leverage scalable and cutting-edge frameworks and
            technologies to build mobile apps, backend systems, and web
            applications for our clients.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            {Object.keys(toolkitData).map((tab) => (
              <motion.div
                key={tab}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeTab === tab ? "default" : "outline"}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                    activeTab === tab
                      ? "bg-customBg hover:bg-customBg/80 text-white shadow-lg"
                      : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-customBg/80 hover:text-customBg"
                  }`}
                >
                  {tab}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="flex flex-col lg:flex-row gap-8"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="lg:max-w-[400px] bg-thirdbg w-full shadow-lg border-0">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-bold text-customBg">
                      {activeTab}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.p 
                      className="text-gray-700 mb-6 leading-relaxed"
                      variants={benefitItemVariants}
                    >
                      {toolkitData[activeTab].description}
                    </motion.p>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        Key Benefits:
                      </h4>
                      <motion.div 
                        className="space-y-3"
                        variants={containerVariants}
                      >
                        {[
                          "Industry-leading performance",
                          "Scalable architecture",
                          "Continuous security updates",
                          "Agile development process",
                        ].map((benefit, index) => (
                          <motion.div 
                            key={index} 
                            className="flex items-start gap-3"
                            variants={benefitItemVariants}
                          >
                            <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                              <CircleCheckBig className="w-5 h-5 text-customBg" />
                            </div>
                            <span className="text-gray-700">{benefit}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div 
                className="flex-1"
                variants={containerVariants}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Technologies We Use
                </h4>
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                  variants={containerVariants}
                >
                  {toolkitData[activeTab].technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      variants={techCardVariants}
                      whileHover="hover"
                    >
                      <Card className="group transition-all relative duration-300 hover:shadow-md hover:border-green-300">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="text-2xl mt-0.5"
                              whileHover={{ rotate: 10 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech.icon}
                            </motion.div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h5 className="font-semibold text-gray-900 group-hover:text-green-700">
                                  {tech.name}
                                </h5>
                                {tech.level === "Expert" && (
                                  <motion.span 
                                    className="text-xs absolute top-2 w-fit right-2 px-2 py-0.5 bg-green-100 text-green-800 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ 
                                      type: "spring", 
                                      stiffness: 500, 
                                      damping: 15,
                                      delay: index * 0.1 
                                    }}
                                  >
                                    Expert
                                  </motion.span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">
                                {tech.category}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}