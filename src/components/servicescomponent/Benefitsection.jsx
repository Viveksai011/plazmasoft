import * as motion from "motion/react-client";
import Image from "next/image";

export default function BenefitsSection({ groups }) {
  return (
    <div className="space-y-12">
      <h2 className="mb-10 text-center text-3xl font-extrabold text-black md:text-5xl">
        Why Business Owners Choose <span className="text-customBg">Krishly</span> for{" "}
        <span className="mt-3 block text-customBg">Web Development</span>
      </h2>

      {/* Main container for the card layout */}
      <div className="mx-auto flex w-full max-w-[87rem] flex-wrap justify-center gap-8 px-6">
        {groups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            className="relative flex w-full max-w-[550px] transform items-center justify-between rounded-2xl border-2 border-white bg-gradient-to-b from-customBg/5 to-white p-8 transition-all duration-300 hover:scale-110 hover:from-white hover:to-white hover:shadow-lg max-sm:flex-col"
          >
            <Image
              src={g.Icon}
              alt={g.title}
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-cover"
            />
            <div className="group md:w-[70%]" key={i}>
              <h3 className="w-fit text-xl font-semibold text-[#1D74CF]">{g.title}</h3>
              <hr className="my-2 border-b border-customBg/40" />
              <ul className="text-md ml-3 list-disc font-semibold text-gray-700">
                {g.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
