import React from "react";
import { CardContent } from "@/components/ui/card";
import { cardTexts } from "@/utils/Carddata"; 
import Image from "next/image"; 
import * as motion from "motion/react-client";

const Techsection = () => {
  return (
    <div className="py-16 px-4 w-full mx-auto max-w-[92rem] ">
      <div className="w-full mb-12">
        <h2 className="font-Poppins max-w-[52rem] mx-auto text-center w-full font-bold text-[1.87rem] lg:text-[3.1rem] text-gray-900">
          We turn <span>Tech Headaches</span> into
          <span> Competitve Advantages</span> through
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-[78rem] w-full mx-auto">
        {cardTexts.map((category) => ( 
          <motion.div
            key={category.id}
            className="bg-white p-1 relative rounded-lg shadow-sm border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: category.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <CardContent className="p-0 bg-gradient-to-b from-customBg/15 rounded-md to-white">
              <div className="flex justify-center items-center mb-6">
                <Image src={category.icon} width={100} height={100} className="object-fill w-52 h-52" />
              </div>
              <h3 className="text-xl font-semibold w-[250px] text-center text-customBg pb-4">
                {category.title}
              </h3>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techsection;
