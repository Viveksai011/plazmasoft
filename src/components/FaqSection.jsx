import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Faqcurve from "@/Icons/Faqcurve";
import { ArrowRight, CircleAlert, Shield } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
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

const accordionItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const comparisonCardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.98,
  },
};

const starVariants = {
  animate: {
    rotate: 360,
    scale: [1, 1.2, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const circleVariants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function FaqSection({ faqs, comparisonData }) {
  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-[92rem] flex-col max-md:p-4 lg:flex-row lg:justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="absolute right-20 top-20 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute right-[20%] top-1/2 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute left-[20%] top-1/2 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
        transition={{ delay: 1.5 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute left-20 top-20 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
        transition={{ delay: 0.7 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-4xl text-yellow-400"
        variants={starVariants}
        animate="animate"
        transition={{ delay: 1.2 }}
      >
        ✦
      </motion.div>

      <div className="relative flex min-h-screen overflow-hidden lg:w-2/3">
        <Faqcurve className="absolute inset-[9px] right-0 top-0 h-[800px] w-full" />
        <div className="container relative z-10 mx-auto py-16 md:px-4">
          <motion.div className="mb-16 text-center" variants={titleVariants}>
            <p className="mb-6 text-sm font-medium uppercase tracking-wider text-customBg">
              FREQUENTLY ASK QUESTION
            </p>
            <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-5xl">
              You ask? We <em className="font-light italic">answer</em>
            </h2>
          </motion.div>

          <motion.div
            className="rounded-2xl bg-white/60 p-4 shadow-lg backdrop-blur-sm md:p-8"
            variants={containerVariants}
          >
            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-4">
              {faqs.map((faq) => (
                <motion.div key={faq.id} variants={accordionItemVariants}>
                  <AccordionItem
                    value={faq.id}
                    className="rounded-lg border border-customBg/10 bg-white/80 px-6 py-2 transition-colors hover:bg-white/90"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 transition-colors hover:text-customBg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2 pt-4 text-gray-600">
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
        className="relative mx-auto h-fit overflow-hidden rounded-2xl bg-gradient-to-br from-customBg to-[#033049] px-4 py-7 text-primary-foreground shadow-xl max-lg:container md:p-8 lg:mt-[220px] lg:min-w-[30%]"
        variants={comparisonCardVariants}
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute right-8 top-8 h-16 w-16 rounded-full border-2 border-primary-foreground"
            variants={circleVariants}
            animate="animate"
          ></motion.div>
          <motion.div
            className="absolute bottom-12 left-8 h-12 w-12 rounded-full border-2 border-primary-foreground"
            variants={circleVariants}
            animate="animate"
            transition={{ delay: 1 }}
          ></motion.div>
          <motion.div
            className="absolute right-16 top-1/2 h-8 w-8 rounded-full border-2 border-primary-foreground"
            variants={circleVariants}
            animate="animate"
            transition={{ delay: 2 }}
          ></motion.div>
        </div>

        <div className="relative z-10">
          <motion.h3 className="mb-8 text-2xl font-bold" variants={itemVariants}>
            Stop Waiting. Start Building.
          </motion.h3>

          <motion.div
            className="mb-6 rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm"
            variants={itemVariants}
          >
            <h4 className="mb-4 text-lg font-semibold text-white">Without us:</h4>
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
                  <CircleAlert className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                  <span className="text-sm text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="mb-8 rounded-xl bg-primary-foreground/10 p-6 text-white backdrop-blur-sm"
            variants={itemVariants}
          >
            <h4 className="mb-4 text-lg font-semibold">With us:</h4>
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
                  <BadgeCheck className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span className="text-sm text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button className="mx-auto flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-5 font-bold text-primary shadow-lg transition-all duration-300 hover:bg-primary-foreground/90">
                Start Your Project Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.p
              className="mt-4 flex items-center justify-center gap-2 text-sm text-primary-foreground/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Shield className="h-4 w-4" />
              Secure process. No credit card required.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
