import React from "react";
import * as motion from "motion/react-client";
import { processstepsHire } from "@/utils/Ourprocess";


const ProcessSteps = ({processstepsHire}) => {

  return (
    <section className="bg-[#EAF6FE] py-16 px-4">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
        Our Proven <span className="text-customBg">4-Step</span> Process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {processstepsHire.map(
          (
            { step, title, duration, whatHappens, clientRequirements },
            index
          ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center text-cente rounded-xl  transition-all duration-300hover:-translate-y-1"
            >
              <h3 className="text-customBg font-semibold text-lg md:text-2xl">
                {title}
              </h3>
              <p className="text-md md:text-xl text-black mb-4 font-semibold">
                ({duration})
              </p>
            
              <div className="relative mb-6">
              
                <div className="relative flex items-center justify-center rounded-full p-4 border border-pink-500">
                  <div className="w-[120px] h-[120px] transition-transform duration-500 transform group-hover:rotate-180">
                  
                    <div className="w-full h-full rounded-full border-[15px] group-hover:-rotate-180 border-pink-200 group-hover:border-red-500 flex items-center justify-center text-3xl font-bold text-black bg-white">
                      {step}
                    </div>

                 
                    <div className="absolute left-[-22px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-pink-500 rounded-full" />
                    <div className="absolute right-[-22px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-pink-500 rounded-full" />
                  </div>
                </div>
              </div>

            

            
              {/* <div className="text-left w-full transition-all bg-white p-6 rounded-2xl hover:shadow-lg duration-300">
                <h4 className="font-semibold mb-2">
                  <span className="group-hover:hidden block text-xl">
                    What Happens:
                  </span>
                  <span className="hidden group-hover:block text-xl">
                    Client Requirements:
                  </span>
                </h4>
                <ul className="list-disc ml-4 space-y-2 text-md text-gray-700">
                  {(clientRequirements || []).map((item, i) => (
                    <li
                      key={`client-${i}`}
                      className="hidden group-hover:list-item"
                    >
                      {item}
                    </li>
                  ))}
                  {(whatHappens || []).map((item, i) => (
                    <li
                      key={`what-${i}`}
                      className="group-hover:hidden list-item"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div> */}
              <div className="relative w-fit md:w-full bg-white p-6 rounded-2xl overflow-hidden transition-shadow duration-300 group hover:shadow-lg text-left">
               
                <div className="transition-all duration-500 ease-in-out group-hover:opacity-0">
                  <h4 className="font-semibold text-xl mb-2">What Happens:</h4>
                  <ul className="list-disc ml-4 space-y-2 text-md text-gray-700">
                    {(whatHappens || []).map((item, i) => (
                      <li key={`what-${i}`}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 bg-white p-6 rounded-2xl transition-all duration-500 ease-in-out transform translate-x-full group-hover:translate-x-0">
                  <h4 className="font-semibold text-xl mb-2">
                    Client Requirements:
                  </h4>
                  <ul className="list-disc ml-4 space-y-2 text-md text-gray-700">
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
