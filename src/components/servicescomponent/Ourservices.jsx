import * as motion from "motion/react-client";
import React from "react";

const Ourservices = ({differenceData}) => {
  return (
    <section className="flex flex-col max-w-[80rem] w-full mx-auto max-md:px-6 py-24 gap-9">
      <h3 className="text-center text-3xl md:text-5xl font-bold mb-12 md:col-span-2 lg:col-span-3">
        Our <span className="text-customBg">Services</span>
      </h3>
      <div className="grid max-w-[70rem] w-full mx-auto md:grid-cols-2 gap-9">
        {differenceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            className="bg-gradient-to-b from-customBg/5 to-white hover:from-white hover:to-white hover:scale-110 transform p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative border-2 border-white"
          >
            <div className="group">
              <div className="absolute -top-[30px] right-[-20px] p-6 bg-[#E7F6FE] rounded-full flex items-center justify-center">
                <div className="w-[60px] h-[60px] bg-white rounded-full group-hover:scale-x-[-1] bg-gradient-to-b from-customBg/5 to-white hover:from-white hover:to-white transition-all duration-300 flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-xl w-fit font-semibold border-b-2 border-customBg/40 text-[#1D74CF] pb-3 mb-4">
                {service.title}
              </h3>

              <ul className="list-disc ml-3 space-y-2 text-md text-gray-700">
                <p className="font-semibold">{service.subpara}</p>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    {/* Display corresponding icon for each feature */}
                    <span className="mr-1">{service.icones[featureIndex]}</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Ourservices;
