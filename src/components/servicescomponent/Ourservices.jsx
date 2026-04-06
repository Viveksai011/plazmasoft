import * as motion from "motion/react-client";

const Ourservices = ({ differenceData }) => {
  return (
    <section className="mx-auto flex w-full max-w-[80rem] flex-col gap-9 py-24 max-md:px-6">
      <h3 className="mb-12 text-center text-3xl font-bold md:col-span-2 md:text-5xl lg:col-span-3">
        Our <span className="text-customBg">Services</span>
      </h3>
      <div className="mx-auto grid w-full max-w-[70rem] gap-9 md:grid-cols-2">
        {differenceData.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            className="relative transform rounded-2xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white p-8 transition-all duration-300 hover:scale-110 hover:from-white hover:to-white hover:shadow-lg"
          >
            <div className="group">
              <div className="absolute -top-[30px] right-[-20px] flex items-center justify-center rounded-full bg-[#E7F6FE] p-6">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white bg-gradient-to-b from-customBg/5 to-white text-2xl transition-all duration-300 hover:from-white hover:to-white group-hover:scale-x-[-1]">
                  {service.icon}
                </div>
              </div>

              <h3 className="mb-4 w-fit border-b-2 border-customBg/40 pb-3 text-xl font-semibold text-[#1D74CF]">
                {service.title}
              </h3>

              <ul className="text-md ml-3 list-disc space-y-2 text-gray-700">
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
