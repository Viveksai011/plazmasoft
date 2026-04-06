import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
export default function Bannersection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto my-20 w-full max-w-[80rem] rounded-xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white"
    >
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-12 md:p-8">
        <div className="pt-2 md:col-span-7 lg:col-span-8">
          <h3 className="text-pretty text-2xl font-bold md:text-[40px]">
            {"Stop Waiting & "}
            <span className="text-primary">{"Start Building!"}</span>
          </h3>
          <p className="mt-5 w-full max-w-xl font-semibold text-black md:text-xl">
            Your competitors are gaining ground every day your website isn&apos;t working for your
            business.
          </p>

          <div className="mt-4">
            <h4 className="text-3xl font-semibold text-customBg">Get Started Today:</h4>
            <ol className="mt-2 grid gap-2 text-sm text-black md:text-[15px]">
              <li>1. Schedule Your Free Strategy Session (45 minutes, no sales pitch)</li>
              <li>2. Receive Your Custom Proposal (detailed timeline and fixed pricing)</li>
              <li>3. Watch Your Business Grow (with a website that actually converts)</li>
            </ol>
          </div>

          <p className="text-md mt-4 font-semibold text-customBg">
            Questions? Call us directly: <span className="font-semibold">+44 77344 20336</span>
          </p>
        </div>

        <div className="relative md:col-span-5 lg:col-span-4">
          <div className="h-full w-full overflow-hidden rounded-lg">
            <Image
              src={
                "https://res.cloudinary.com/dko4n7zoc/image/upload/v1761026455/baneer_woav8p.png"
              }
              alt="Friendly illustration of a designer at a desk"
              width={400}
              height={300}
              className="h-[340px] w-full object-contain"
            />
          </div>
          <div className="absolute bottom-0 right-10 flex flex-col items-center justify-center gap-3">
            <Button className="w-fit rounded-2xl bg-customBg hover:bg-customBg/90">
              Book Strategy Session
            </Button>
            <Link href={"#"} className="font-bold text-customBg">
              Schedule your free consultation
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
