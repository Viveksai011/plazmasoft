import { CardContent } from "@/components/ui/card";
import { cardTexts } from "@/utils/Carddata";
import Image from "next/image";
import * as motion from "motion/react-client";

const Techsection = () => {
  return (
    <div className="mx-auto w-full max-w-[92rem] px-4 py-16">
      <div className="mb-12 w-full">
        <h2 className="font-Poppins mx-auto w-full max-w-[52rem] text-center text-[1.87rem] font-bold text-gray-900 lg:text-[3.1rem]">
          We turn <span>Tech Headaches</span> into
          <span> Competitve Advantages</span> through
        </h2>
      </div>

      <div className="mx-auto flex w-full max-w-[78rem] flex-wrap items-center justify-center gap-8">
        {cardTexts.map((category) => (
          <motion.div
            key={category.id}
            className="relative rounded-lg border-0 bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: category.id * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <CardContent className="rounded-md bg-gradient-to-b from-customBg/15 to-white p-0">
              <div className="mb-6 flex items-center justify-center">
                <Image
                  src={category.icon}
                  width={100}
                  height={100}
                  className="h-52 w-52 object-fill"
                />
              </div>
              <h3 className="w-[250px] pb-4 text-center text-xl font-semibold text-customBg">
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
