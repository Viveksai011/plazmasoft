import * as motion from "motion/react-client";
import Image from "next/image";

const groups = [
  {
    title: "Results-Focused Approach",

    Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180324/benifitis-3_ymdj0y.webp",
    bullets: [
      "Growth-Driven Design",
      "Conversion-Centered Decisions",
      "Business Impact First",
      "Beyond Aesthetics",
    ],
  },
  {
    title: "Guaranteed Performance",
    Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180323/benifitis-2_fw5hoq.webp",
    bullets: [
      "30-Day Launch Guarantee",
      "100% Mobile-Responsive",
      "Page Speed Promise",
      "Conversion Optimization",
    ],
  },
  {
    title: "Complete Transparency",
    Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180323/benifitis-1_lw9klu.webp",
    bullets: [
      "Real-Time Project Dashboard",
      "Fixed-Price Contracts",
      "Plain-English Communication",
      "Full Code Ownership",
    ],
  },
];

export default function BenefitsSection() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-10">
        Why Business Owners Choose{" "}
        <span className="text-customBg">Krishly</span> for{" "}
        <span className="text-customBg block mt-3">Web Development</span>
      </h2>

      {/* Main container for the card layout */}
      <div className="flex flex-wrap justify-center gap-8 max-w-[87rem] w-full mx-auto px-6">
        {groups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
            className="bg-gradient-to-b flex items-center justify-between max-sm:flex-col  from-customBg/5 to-white hover:from-white max-w-[550px] w-full hover:to-white hover:scale-110 transform p-8 rounded-2xl hover:shadow-lg transition-all duration-300 relative border-2 border-white"
          >
            <Image
              src={g.Icon}
              alt={g.title}
              width={100}
              height={100}
              className=" w-[100px] h-[100px] object-cover"
            />
            <div className="group md:w-[70%]" key={i}>
              <h3 className="text-xl w-fit font-semibold text-[#1D74CF]">
                {g.title}
              </h3>
              <hr className=" border-b my-2 border-customBg/40" />
              <ul className="list-disc ml-3 text-md font-semibold text-gray-700">
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
