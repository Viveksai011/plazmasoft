import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Shield } from "lucide-react";

const Stoplosingcustomer = ({Stoplosing}) => {
  return (
    <div className="py-16 max-w-[86rem] w-full container mx-auto px-6 space-y-12">
      <h2 className="text-[2.25rem] max-w-[650px] w-full mx-auto text-center lg:leading-[1.2] lg:text-[3rem] font-bold text-pretty">
        {Stoplosing.header.title}{" "}
        <span className="text-customBg">
          {Stoplosing.header.subtitle.part1}
        </span>{" "}
        {Stoplosing.header.subtitle.part2}
      </h2>

      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {Stoplosing.stats.map((s, i) => (
          <motion.div
            key={s.value + s.label}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="rounded-full w-[200px] h-[200px] md:w-[250px] md:h-[250px] grid place-items-center border border-white bg-gradient-to-b from-transparent to-white  aspect-square"
          >
            <div className="text-center p-3 md:p-4">
              <div className="text-[1.5rem] justify-center md:text-[40px] text-customBg flex items-center font-bold ">
                <ChevronsDown className="h-12 w-12 " aria-hidden="true" />
                {s.value}
              </div>
              <p className="text-[17px] leading-snug mx-auto w-[92%] mt-2">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center flex flex-col space-y-3">
        <h3 className="text-base block md:text-lg font-semibold">
          {Stoplosing.cta.heading}
        </h3>
        <div className="flex flex-col items-center gap-1 w-full max-w-[400px] mx-auto text-center text-sm md:text-[15px] text-black">
          <p className="text-customBg font-semibold">{Stoplosing.cta.description.part1} </p>
          <p>{Stoplosing.cta.description.part2}</p>
        </div>
      
          <Button className="bg-customBg text-white font-medium px-8 py-3 w-[200px] mx-auto rounded-full text-base shadow-md hover:bg-customBg/85 transition-all duration-300">
            {Stoplosing.cta.buttonText}
          </Button>
       
        <p className="text-xs text-customBg inline-flex items-center justify-center gap-1">
          <Shield className="h-3.5 w-3.5" aria-hidden="true" />
          {Stoplosing.cta.securityNote}
        </p>
      </div>
    </div>
  );
};

export default Stoplosingcustomer;
