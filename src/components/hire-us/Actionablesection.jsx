import * as motion from "motion/react-client";
import React from "react";

const differenceData = [
  {
    title: "Website Speed Optimization",
    icon: "⚡",
    features: [
      "Test your site with GTmetrix.com right now",
      "Problem: Over 3 seconds = losing 40% of visitors",
      "Quick Fix: Compress images with TinyPNG.com, enable gzip compression",
    ],
  },
  {
    title: "Mobile Experience Check",
    icon: "📱",
    features: [
      "Open your site on your phone immediately",
      "Problem: Difficult navigation = lost mobile customers (60% of traffic)",
      "Quick Fix: 44px minimum button size, 16px minimum font size",
    ],
  },
  {
    title: "Conversion Improvement",
    icon: "🔧",
    features: [
      "Time how long it takes to understand what you do",
      "Problem: Unclear value proposition = visitors leave confused",
      "Quick Fix: Clear headline + prominent contact button",
    ],
  },
  {
    title: "Security Verification",
    icon: "🔒",
    features: [
      "Check if your URL starts with 'https'",
      "Problem: 'Not secure' warnings scare away customers",
      "Quick Fix: Contact hosting provider for free SSL certificate",
    ],
  },
];

const Actionablesection = () => {
  return (
    <section className=" w-full mx-auto max-md:px-6 py-24">
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-12 md:col-span-4">
        Actionable Tips for 
        <span className="text-customBg"> Immediate Value </span>
      </h3>

      <section className="grid md:grid-cols-2 max-w-[67rem] w-full mx-auto lg:grid-cols-2 gap-9">
        {differenceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            className="bg-gradient-to-b from-customBg/5 to-white hover:from-white hover:to-white hover:scale-110 transform p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative border-2 border-white"
          >
            <div className="group" key={index}>
              <div className="absolute -top-[30px] right-[-20px] p-6 bg-[#E7F6FE] rounded-full flex items-center justify-center">
                <div className="w-[60px] h-[60px] bg-white rounded-full group-hover:scale-x-[-1] bg-gradient-to-b from-customBg/5 to-white hover:from-white hover:to-white transition-all duration-300 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl w-fit font-semibold border-b border-customBg/40 text-[#1D74CF] pb-3 mb-4">
                {service.title}
              </h3>

              <ul className="list-disc-none font-semibold ml-3 space-y-2 text-md text-gray-700">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Actionablesection;
