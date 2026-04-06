import * as motion from "motion/react-client";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function GuaranteeSection({ items, customTitle }) {
  return (
    <section className="container mx-auto max-w-[70rem] space-y-10 px-5 py-20 lg:px-0">
      <h2 className="mb-12 text-center text-3xl font-bold md:col-span-2 md:text-5xl lg:col-span-3">
        {customTitle ? (
          customTitle
        ) : (
          <>
            {"Our "}
            <span className="text-customBg">{"Guarantee"}</span>
            {" to You"}
          </>
        )}
      </h2>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
          >
            <div className="w-full lg:max-w-[250px]">
              <div className="flex justify-center">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-dashed border-rose-700"
                  aria-hidden="true"
                >
                  <Check className="h-10 w-10 text-rose-700" aria-hidden="true" />
                  <span className="sr-only">Guaranteed</span>
                </div>
              </div>
              <Card className="relative mt-4 w-full min-w-[200px] transform space-y-2 rounded-2xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white p-8 text-center transition-all duration-300 hover:scale-110 hover:from-white hover:to-white hover:shadow-lg">
                <h3 className="text-base font-semibold text-customBg md:text-lg">{item.title}</h3>
                <hr className="border border-customBg" />
                <p className="text-sm leading-relaxed text-black">{item.desc}</p>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
