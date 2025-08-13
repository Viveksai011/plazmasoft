import { Lightbulb, Palette, Code, Bug, Rocket } from "lucide-react";

export function ProcessSection() {
  const processSteps = [
    {
      icon: Lightbulb,
      title: "Idea",
      description:
        "We provide no obligation free consultation to discuss your project idea and help you with tech stack, budget and timelines.",
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-600/50",
    },
    {
      icon: Palette,
      title: "UI/UX design",
      description:
        "Our clients work with our product design team to bring project concept to live. We provide prototype so you can experience the app flow.",
      color: "bg-secondarycustomBg",
      bgColor: "bg-[#F0F4FF]",
      borderColor: "border-secondarycustomBg",
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Development team starts the coding. The process is divided into sprints. Our agile model allow you to assess what we're building and provide you with weekly updates.",
      color: "from-green-700 to-green-800",
      bgColor: "bg-[#F0FFF1]",
      borderColor: "border-green-600/50",
    },
    {
      icon: Bug,
      title: "Testing",
      description:
        "We test all use cases, critical scenarios, and all functional on real time device for iOS and Android along with Desktop",
      color: "bg-secondarycustomBg",
      bgColor: "bg-[#F0F4FF]",
      borderColor: "border-secondarycustomBg",
    },
    {
      icon: Rocket,
      title: "Launching",
      description:
        "Passing through a final round of QA and client approval. We manage the submission in the app and play store. Additionally we help with tech support for 30 days after going live.",
      color: "from-green-700 to-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-600/50",
    },
  ];

  return (
    <section className="pb-[100px] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="font-serif font-bold mb-5 text-3xl lg:text-5xl text-gray-900">
              Our Process
            </h2>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium">
            Work with groundbreakers who create top-notch mobile and web apps on
            time & on budget
          </p>
        </div>

        <div className="hidden lg:block relative">
          <svg
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 200 Q300 100 500 200 T900 200 Q1000 150 1100 200"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="10,5"
              fill="none"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="25%" stopColor="#2563eb" />
                <stop offset="50%" stopColor="#16a34a" />
                <stop offset="75%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 flex justify-between items-start pt-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const positions = [
                "translate-y-16",
                "translate-y-0",
                "translate-y-20",
                "translate-y-4",
                "translate-y-12",
              ];

              return (
                <div
                  key={index}
                  className={`flex-1 relative ${positions[index]} group`}
                >
                  <div className="flex flex-col items-center text-center px-2">
                    <div
                      className={`relative mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-30 scale-150`}
                      ></div>

                      <div
                        className={`relative w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white`}
                      >
                        <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>

                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg border-2 border-gray-200">
                        {index + 1}
                      </div>
                    </div>

                    <div
                      className={`${step.bgColor} rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} transform transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 max-w-xs`}
                    >
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-16  z-0"></div>
                )}

                <div
                  className={`${step.bgColor} rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} relative z-10`}
                >
                  <div className="flex max-sm:flex-col max-sm:gap-2 items-start space-x-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-700 shadow border border-gray-200">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
