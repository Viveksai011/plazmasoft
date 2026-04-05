import Contactsection from "@/components/Contactsection";
import React from 'react'
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import * as motion from "motion/react-client";


const page = () => {
  return (
    <div className="mt-8 ">
      <Contactsection />
        <section className=" w-full max-w-[80rem] p-5 overflow-hidden mx-auto mt-8 ">
        <div className="grid grid-cols-1  bg-customBg rounded-3xl p-5 lg:px-[30px] py-20 lg:py-[60px] gap-8 md:gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full min-h-64 md:min-h-96"
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
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-20 left-5 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-white space-y-6"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              Turn Your Idea Into a Demo in 21 Days
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl"
            >
               From deep discovery to rapid MVP delivery, we help you go from concept to a working product fast. Our process keeps things clear, focused, and built around real user feedback so you can launch with confidence.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col md:flex-row gap-6 md:gap-8 py-4"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: 0.5, duration: 2, repeat: Infinity }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
                </motion.div>
                <span className="text-base md:text-lg">24+7  support of any time</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: 0.6, duration: 2, repeat: Infinity }}
                >
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
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
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 md:py-4  w-fit bg-white text-customBg font-semibold rounded-full text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Your Free Discovery Call
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
    </section>
    </div>
  )
}

export default page
