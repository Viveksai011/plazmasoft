import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

export function Servicetoolkit({ developmenttool }) {
  if (!developmenttool || typeof developmenttool !== "object") {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-5 font-serif text-3xl font-bold text-gray-900 lg:text-5xl">
            DEVELOPMENT TOOLKIT
          </h2>
          <p className="mx-auto max-w-4xl px-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
            {developmenttool.description}
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            <Card className="w-full border-2 border-white bg-gradient-to-b from-customBg/5 to-white shadow-lg lg:max-w-[400px]">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-customBg">
                  {developmenttool.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 leading-relaxed text-gray-700">{developmenttool.description}</p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Key Benefits:</h4>
                  <div className="space-y-3">
                    {developmenttool.unorderlist &&
                      developmenttool.unorderlist.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                            <CircleCheckBig className="h-5 w-5 text-customBg" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {developmenttool.technologiesused && developmenttool.technologiesused.length > 0 && (
              <div className="flex-1">
                <h4 className="font-poppins mb-6 pb-2 text-[24px] font-semibold text-customBg md:text-[28px] lg:text-[36px]">
                  Technologies We Use
                </h4>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {developmenttool.technologiesused.map((tech, index) => (
                    <Card
                      key={tech.name || index}
                      className="group relative w-full border border-white bg-gradient-to-b from-customBg/5 to-white shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="mt-0.5 text-2xl">{tech.icon}</div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h5 className="font-semibold text-gray-900">{tech.name}</h5>
                              {tech.level === "Expert" && (
                                <span className="absolute right-2 top-2 w-fit rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                                  Expert
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{tech.category}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
