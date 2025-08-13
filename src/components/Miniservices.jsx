import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Carddata } from "@/utils/Carddata";



const Miniservices = () => {
  return (
    <section className="py-16 px-4 max-w-[92rem] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Carddata.map((category) => (
          <Card
            key={category.id}
            className="bg-white p-8 relative rounded-lg shadow-sm border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <CardContent className="p-0">
              <span className="text-gray-400 text-sm absolute top-[-15px] right-[-19px] font-medium h-[80px] flex items-center justify-center w-[80px] bg-[#f4f6f8] rounded-full">
                <span className="p-4 bg-white rounded-full text-gray-500 font-semibold">
                  {String(category.id).padStart(2, "0")}
                </span>
              </span>
              <h3 className="text-xl font-semibold w-[250px] text-gray-900 mb-4 border-b pb-4">
                {category.title}
              </h3>
              <div className="flex justify-between items-start mb-6">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
                <div className="w-[100px] h-12 bg-[#F0FFF1] rounded-lg hover:animate-tada flex items-center justify-center">
                  {category.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Miniservices;
