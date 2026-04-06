import { Card, CardContent } from "@/components/ui/card";
import { Carddata } from "@/utils/Carddata";
import * as motion from "motion/react-client";

const Miniservices = () => {
  return (
    <section className="mx-auto max-w-[92rem] px-4 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Carddata.map((category) => (
          <motion.div
            key={category.id}
            className="relative rounded-lg border-0 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: category.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <CardContent className="p-0">
              <span className="absolute right-[-19px] top-[-15px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#E7F6FE] text-sm font-medium text-gray-400">
                <span className="rounded-full bg-white p-4 font-semibold text-customBg">
                  {String(category.id).padStart(2, "0")}
                </span>
              </span>
              <h3 className="mb-4 w-[250px] border-b pb-4 text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
              <div className="mb-6 flex items-start justify-between">
                <p className="text-sm leading-relaxed text-gray-600">{category.description}</p>
                <div className="hover:animate-tada flex h-12 w-[100px] items-center justify-center rounded-lg">
                  {category.icon}
                </div>
              </div>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Miniservices;
