import * as motion from "motion/react-client";
import React from "react";

const differenceData = [
  {
    title: "Business-First Approach",
    icon: "🎯",
    features: [
      "Don't just build pretty websites – build profit-generating machines",
      "Every design decision based on conversion data, not personal preference",
      "Focus on ROI and measurable business impact",
    ],
  },
  {
    title: "Same-Day Communication",
    icon: "⚡",
    features: [
      "Questions answered within 4 hours, not 4 days",
      "Emergency support available 24/7",
      "Direct access to your developer (no account managers)",
    ],
  },
  {
    title: "No-Excuses Guarantee",
    icon: "🛡️",
    features: [
      "Miss deadline = next milestone free",
      "No ROI improvement in 90 days = free work until you get results",
      "Bug-free guarantee with immediate fixes",
    ],
  },
  {
    title: "ROI-Focused Results",
    icon: "📊",
    features: [
      "Measure success by business metrics: leads, conversion rates, reduced costs",
      "If it doesn’t impact your bottom line, we don’t build it",
      "Regular performance reporting and optimization",
    ],
  },
  {
    title: "We Teach You Everything",
    icon: "🧠",
    features: [
      "No vendor lock-in strategies",
      "Train your team to manage the site",
      "Documentation you can actually understand",
      "Full knowledge transfer",
    ],
  },
  {
    title: "Transparent, Fair Pricing",
    icon: "💰",
    features: [
      "Fixed prices, clear deliverables",
      "No mysterious line items or hourly billing",
      "See exactly what you’re paying for",
    ],
  },
];

const DifferenceSection = () => {
  return (
    <section className="grid md:grid-cols-2 max-w-[87rem] w-full mx-auto max-md:px-6 lg:grid-cols-3 py-24 gap-9">
      <h3 className="text-center text-3xl md:text-5xl font-bold mb-12 md:col-span-2 lg:col-span-3">
        What Makes Us Different
      </h3>

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

            <h3 className="text-xl w-fit font-semibold border-b-2 border-customBg/40 text-[#1D74CF] pb-3 mb-4">
              {service.title}
            </h3>

            <ul className="list-disc ml-3 space-y-2 text-md text-gray-700">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default DifferenceSection;
