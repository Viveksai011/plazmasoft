import * as motion from "motion/react-client";

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
    <section className="mx-auto grid w-full max-w-[87rem] gap-9 py-24 max-md:px-6 md:grid-cols-2 lg:grid-cols-3">
      <h3 className="mb-12 text-center text-3xl font-bold md:col-span-2 md:text-5xl lg:col-span-3">
        What Makes Us Different
      </h3>

      {differenceData.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
          className="relative transform rounded-2xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white p-8 transition-all duration-300 hover:scale-110 hover:from-white hover:to-white hover:shadow-lg"
        >
          <div className="group" key={index}>
            <div className="absolute -top-[30px] right-[-20px] flex items-center justify-center rounded-full bg-[#E7F6FE] p-6">
              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white bg-gradient-to-b from-customBg/5 to-white text-2xl transition-all duration-300 hover:from-white hover:to-white group-hover:scale-x-[-1]">
                {service.icon}
              </div>
            </div>

            <h3 className="mb-4 w-fit border-b-2 border-customBg/40 pb-3 text-xl font-semibold text-[#1D74CF]">
              {service.title}
            </h3>

            <ul className="text-md ml-3 list-disc space-y-2 text-gray-700">
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
