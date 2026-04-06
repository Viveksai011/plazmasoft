import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { ChevronsDown, Shield } from "lucide-react";

const Stoplosingcustomer = ({ Stoplosing }) => {
  return (
    <div className="container mx-auto w-full max-w-[86rem] space-y-12 px-6 py-16">
      <h2 className="mx-auto w-full max-w-[650px] text-pretty text-center text-[2.25rem] font-bold lg:text-[3rem] lg:leading-[1.2]">
        {Stoplosing.header.title}{" "}
        <span className="text-customBg">{Stoplosing.header.subtitle.part1}</span>{" "}
        {Stoplosing.header.subtitle.part2}
      </h2>

      <div className="grid grid-cols-1 justify-items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {Stoplosing.stats.map((s, i) => (
          <motion.div
            key={s.value + s.label}
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            className="grid aspect-square h-[200px] w-[200px] place-items-center rounded-full border border-white bg-gradient-to-b from-transparent to-white md:h-[250px] md:w-[250px]"
          >
            <div className="p-3 text-center md:p-4">
              <div className="flex items-center justify-center text-[1.5rem] font-bold text-customBg md:text-[40px]">
                <ChevronsDown className="h-12 w-12" aria-hidden="true" />
                {s.value}
              </div>
              <p className="mx-auto mt-2 w-[92%] text-[17px] leading-snug">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-col space-y-3 text-center">
        <h3 className="block text-base font-semibold md:text-lg">{Stoplosing.cta.heading}</h3>
        <div className="mx-auto flex w-full max-w-[400px] flex-col items-center gap-1 text-center text-sm text-black md:text-[15px]">
          <p className="font-semibold text-customBg">{Stoplosing.cta.description.part1} </p>
          <p>{Stoplosing.cta.description.part2}</p>
        </div>

        <Button className="mx-auto w-[200px] rounded-full bg-customBg px-8 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:bg-customBg/85">
          {Stoplosing.cta.buttonText}
        </Button>

        <p className="inline-flex items-center justify-center gap-1 text-xs text-customBg">
          <Shield className="h-3.5 w-3.5" aria-hidden="true" />
          {Stoplosing.cta.securityNote}
        </p>
      </div>
    </div>
  );
};

export default Stoplosingcustomer;
