import * as motion from "motion/react-client";

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
    <section className="mx-auto w-full py-24 max-md:px-6">
      <h3 className="mb-12 text-center text-3xl font-bold md:col-span-4 md:text-4xl">
        Actionable Tips for
        <span className="text-customBg"> Immediate Value </span>
      </h3>

      <section className="mx-auto grid w-full max-w-[67rem] gap-9 md:grid-cols-2 lg:grid-cols-2">
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

              <h3 className="mb-4 w-fit border-b border-customBg/40 pb-3 text-xl font-semibold text-[#1D74CF]">
                {service.title}
              </h3>

              <ul className="list-disc-none text-md ml-3 space-y-2 font-semibold text-gray-700">
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
