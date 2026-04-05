import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqcurve from "@/Icons/Faqcurve";
import { ArrowRight, CircleAlert , Shield } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";



// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
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

const accordionItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const comparisonCardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

const starVariants = {
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const circleVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function FaqSection({ faqs, comparisonData }) {
  return (
    <motion.div 
      className="flex flex-col lg:flex-row lg:justify-between relative max-w-[92rem] max-md:p-4 w-full mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="absolute top-20 right-20 text-yellow-400 text-4xl" variants={starVariants} animate="animate">✦</motion.div>
      <motion.div className="absolute bottom-20 right-20 text-yellow-400 text-4xl" variants={starVariants} animate="animate" transition={{ delay: 0.5 }}>✦</motion.div>
      <motion.div className="absolute top-1/2 right-[20%] text-yellow-400 text-4xl" variants={starVariants} animate="animate" transition={{ delay: 1 }}>✦</motion.div>
      <motion.div className="absolute top-1/2 left-[20%] text-yellow-400 text-4xl" variants={starVariants} animate="animate" transition={{ delay: 1.5 }}>✦</motion.div>
      <motion.div className="absolute top-20 left-20 text-yellow-400 text-4xl" variants={starVariants} animate="animate" transition={{ delay: 0.7 }}>✦</motion.div>
      <motion.div className="absolute bottom-20 left-20 text-yellow-400 text-4xl" variants={starVariants} animate="animate" transition={{ delay: 1.2 }}>✦</motion.div>

      <div className="min-h-screen flex relative overflow-hidden lg:w-2/3">
        <Faqcurve className="absolute top-0 right-0 inset-[9px] w-full h-[800px]" />
        <div className="container mx-auto md:px-4 py-16 relative z-10">
          <motion.div className="text-center mb-16" variants={titleVariants}>
            <p className="text-customBg font-medium text-sm tracking-wider uppercase mb-6">
              FREQUENTLY ASK QUESTION
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              You ask? We <em className="italic font-light">answer</em>
            </h2>
          </motion.div>

          <motion.div 
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-lg"
            variants={containerVariants}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-4"
            >
              {faqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={accordionItemVariants}
                >
                  <AccordionItem
                    value={faq.id}
                    className="border border-customBg/10 rounded-lg px-6 py-2 bg-white/80 hover:bg-white/90 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-customBg transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pt-4 pb-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="bg-gradient-to-br lg:mt-[220px] lg:min-w-[30%] max-lg:container mx-auto h-fit from-customBg to-[#033049] text-primary-foreground rounded-2xl px-4 py-7 md:p-8 shadow-xl relative overflow-hidden"
        variants={comparisonCardVariants}
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div className="absolute top-8 right-8 w-16 h-16 border-2 border-primary-foreground rounded-full" variants={circleVariants} animate="animate"></motion.div>
          <motion.div className="absolute bottom-12 left-8 w-12 h-12 border-2 border-primary-foreground rounded-full" variants={circleVariants} animate="animate" transition={{ delay: 1 }}></motion.div>
          <motion.div className="absolute top-1/2 right-16 w-8 h-8 border-2 border-primary-foreground rounded-full" variants={circleVariants} animate="animate" transition={{ delay: 2 }}></motion.div>
        </div>

        <div className="relative z-10">
          <motion.h3 className="text-2xl font-bold mb-8" variants={itemVariants}>
            Stop Waiting. Start Building.
          </motion.h3>

          <motion.div 
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 mb-6"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Without us:
            </h4>
            <ul className="space-y-2">
              {comparisonData.withoutUs.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CircleAlert  className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-primary-foreground/10 text-white backdrop-blur-sm rounded-xl p-6 mb-8"
            variants={itemVariants}
          >
            <h4 className="text-lg font-semibold mb-4">With us:</h4>
            <ul className="space-y-2">
              {comparisonData.withUs.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BadgeCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-primary-foreground text-primary font-bold py-5 px-8 rounded-full shadow-lg hover:bg-primary-foreground/90 transition-all duration-300 flex items-center gap-2 mx-auto">
                Start Your Project Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>

            <motion.p 
              className="text-primary-foreground/80 text-sm mt-4 flex items-center justify-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Shield className="w-4 h-4" />
              Secure process. No credit card required.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}