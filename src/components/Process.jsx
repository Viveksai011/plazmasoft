import { processSteps } from "@/utils/Processdata";
export function ProcessSection() {



  return (
    <section className="py-12  relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="font-serif font-bold mb-5 text-3xl lg:text-5xl text-gray-900">
              OUR PROCESS
            </h2>
          </div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Work with groundbreakers who create top-notch mobile and web apps on
            time & on budget
          </p>
        </div>

        <div className="hidden lg:block relative mb-[80px]">
          <div className="relative z-10 flex justify-between items-start">
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
                      className={`${step.bgColor} group relative rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} transform transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 max-w-xs`}
                    >
                      <h3 className="text-xl font-bold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                      <div
                        class={`absolute inset-0 rounded-2xl p-6 shadow-xl border-2 ${step.borderColor} transform bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                        style={{
                          backgroundImage:
                            `url(${step.gifurl})`,
                        }}
                      ></div>
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
