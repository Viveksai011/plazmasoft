import * as motion from "motion/react-client";
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const items = [
  {
    title: "30-Day Launch Promise",
    desc: "Your website goes live within 30 days of project start, or you receive 50% of your final invoice.",
  },
  {
    title: "100% Satisfaction Guarantee",
    desc: "We’ll work with you until you’re completely happy with your website, or we’ll refund your investment.",
  },
  {
    title: "90-Day Support Included",
    desc: "Full technical support, training, and minor updates included for 90 days after launch.",
  },
  {
    title: "Performance Promise",
    desc: "Your website will load in under 3 seconds and work perfectly on all devices, guaranteed.",
  },
]

export default function GuaranteeSection() {
  return (
    <section className="space-y-10 container mx-auto px-5 lg:px-0 py-20 max-w-[70rem]">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 md:col-span-2 lg:col-span-3">
        {"Our "}
        <span className="text-customBg ">{"Guarantee"}</span>
        {" to You"}
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
            <div className=" lg:max-w-[250px] w-full ">
              <div className="flex justify-center">
                <div
                  className="h-14 w-14 rounded-full flex items-center justify-center border-4 border-dashed border-rose-700"
                    aria-hidden="true"
                >
                  <Check className="h-10 w-10  text-rose-700" aria-hidden="true" />
                  <span className="sr-only">Guaranteed</span>
                </div>
              </div>
              <Card className="mt-4 text-center space-y-2 min-w-[200px] w-full bg-gradient-to-b from-customBg/5 to-white hover:from-white hover:to-white hover:scale-110 transform p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative border-2 border-white">
                <h3 className="text-base md:text-lg font-semibold text-customBg">{item.title}</h3>
                <hr className="border border-customBg" />
                <p className="text-sm leading-relaxed text-black">{item.desc}</p>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
