import * as motion from "motion/react-client";

const ProcessSteps = ({ processstepsHire }) => {
  return (
    <section className="bg-[#EAF6FE] px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-5xl">
        Our Proven <span className="text-customBg">4-Step</span> Process
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processstepsHire.map(
          ({ step, title, duration, whatHappens, clientRequirements }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-cente duration-300hover:-translate-y-1 group relative flex flex-col items-center rounded-xl transition-all"
            >
              <h3 className="text-lg font-semibold text-customBg md:text-2xl">{title}</h3>
              <p className="text-md mb-4 font-semibold text-black md:text-xl">({duration})</p>

              <div className="relative mb-6">
                <div className="relative flex items-center justify-center rounded-full border border-pink-500 p-4">
                  <div className="h-[120px] w-[120px] transform transition-transform duration-500 group-hover:rotate-180">
                    <div className="flex h-full w-full items-center justify-center rounded-full border-[15px] border-pink-200 bg-white text-3xl font-bold text-black group-hover:-rotate-180 group-hover:border-red-500">
                      {step}
                    </div>

                    <div className="absolute left-[-22px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-pink-500 bg-white" />
                    <div className="absolute right-[-22px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-pink-500 bg-white" />
                  </div>
                </div>
              </div>

              <div className="group relative w-fit overflow-hidden rounded-2xl bg-white p-6 text-left transition-shadow duration-300 hover:shadow-lg md:w-full">
                <div className="transition-all duration-500 ease-in-out group-hover:opacity-0">
                  <h4 className="mb-2 text-xl font-semibold">What Happens:</h4>
                  <ul className="text-md ml-4 list-disc space-y-2 text-gray-700">
                    {(whatHappens || []).map((item, i) => (
                      <li key={`what-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 translate-x-full transform rounded-2xl bg-white p-6 transition-all duration-500 ease-in-out group-hover:translate-x-0">
                  <h4 className="mb-2 text-xl font-semibold">Client Requirements:</h4>
                  <ul className="text-md ml-4 list-disc space-y-2 text-gray-700">
                    {(clientRequirements || []).map((item, i) => (
                      <li key={`client-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default ProcessSteps;
