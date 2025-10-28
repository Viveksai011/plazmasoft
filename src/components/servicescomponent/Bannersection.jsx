
import { Button } from "@/components/ui/button"
import * as motion from "motion/react-client";
import Image from "next/image"
import { Calendar } from "lucide-react"
import Link from "next/link";

export default function Bannersection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white max-w-[80rem] w-full mx-auto my-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8">
        <div className="md:col-span-7 lg:col-span-8 pt-2">
          <h3 className="text-2xl md:text-[40px] font-bold text-pretty">
            {"Stop Waiting & "}
            <span className="text-primary">{"Start Building!"}</span>
          </h3>
          <p className="mt-5 text-black font-semibold md:text-xl max-w-xl w-full">
            Your competitors are gaining ground every day your website isn&apos;t working for your business.
          </p>

          <div className="mt-4">
            <h4 className="text-customBg text-3xl font-semibold">Get Started Today:</h4>
            <ol className="mt-2 grid gap-2 text-sm md:text-[15px] text-black">
              <li>1. Schedule Your Free Strategy Session (45 minutes, no sales pitch)</li>
              <li>2. Receive Your Custom Proposal (detailed timeline and fixed pricing)</li>
              <li>3. Watch Your Business Grow (with a website that actually converts)</li>
            </ol>
          </div>

          <p className="mt-4 text-md text-customBg font-semibold">
            Questions? Call us directly: <span className="font-semibold">+44 77344 20336</span>
          </p>

          
        </div>

        <div className="md:col-span-5 lg:col-span-4 relative">
          <div className="h-full w-full rounded-lg overflow-hidden ">
            <Image
              src={"https://res.cloudinary.com/dko4n7zoc/image/upload/v1761026455/baneer_woav8p.png"}
              alt="Friendly illustration of a designer at a desk"
              width={400}
              height={300}
              className="h-[340px] w-full object-contain"
            />
          </div>
          <div className=" absolute bottom-0 right-10 flex flex-col  items-center justify-center gap-3">
            <Button className="bg-customBg w-fit hover:bg-customBg/90 rounded-2xl">
              Book Strategy Session
            </Button>
            <Link href={"#"} className=" text-customBg  font-bold">
              Schedule your free consultation
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
