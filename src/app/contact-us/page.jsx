import Contactsection from "@/components/Contactsection";
import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import * as motion from "motion/react-client";

const page = () => {
  return (
    <div className="mt-8 p-2">
      <Contactsection />
      <section className="mx-auto mt-8 w-full max-w-[80rem] overflow-hidden rounded-3xl bg-customBg p-5 py-20 lg:px-[30px] lg:py-[60px]">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full min-h-64 w-full md:min-h-96"
            >
              <Image
                src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1750856836/Animation_-_1750855707948_afdfoi.gif"
                alt="SEO and Analytics illustration"
                fill
                className="object-contain object-center"
                priority
              />
            </motion.div>

            {/* Floating accent elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute right-10 top-10 h-20 w-20 rounded-full bg-white/10 blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 left-5 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6 text-white"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            >
              Turn Your Idea Into a Demo in 21 Days
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-xl text-lg leading-relaxed text-blue-100 md:text-xl"
            >
              From deep discovery to rapid MVP delivery, we help you go from concept to a working
              product fast. Our process keeps things clear, focused, and built around real user
              feedback so you can launch with confidence.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-6 py-4 md:flex-row md:gap-8"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                </motion.div>
                <span className="text-base md:text-lg">24+7 support of any time</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
                >
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-white" />
                </motion.div>
                <span className="text-base md:text-lg">Library of our specialist team</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-fit rounded-full bg-white px-8 py-3 text-base font-semibold text-customBg shadow-lg transition-colors hover:bg-blue-50 hover:shadow-xl md:py-4 md:text-lg"
              >
                Book Your Free Discovery Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
