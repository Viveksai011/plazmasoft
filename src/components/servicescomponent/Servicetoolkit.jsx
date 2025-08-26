import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig, CodeIcon } from "lucide-react";

import NodeIcons from "@/Icons/NodeIcons";
import Vueicons from "@/Icons/Vueicons";

const toolkitData = {
  "Web Development": {
    description:
      "We employ an agile methodology and robust technology framework to develop web applications that exceed your expectations.",
    technologies: [
      { name: "React", level: "Expert", icon: "⚛️", category: "Frontend" },
      { name: "Next.js", level: "Expert", icon: "▲", category: "Full-stack" },
      {
        name: "Vue.js",
        level: "Advanced",
        icon: <Vueicons width="30px" />,
        category: "Frontend",
      },
      { name: "Angular", level: "Advanced", icon: "🅰️", category: "Frontend" },
      {
        name: "Node.js",
        level: "Expert",
        icon: <NodeIcons width="30px" />,
        category: "Backend",
      },
      { name: "Django", level: "Advanced", icon: "🐍", category: "Backend" },
      {
        name: "Laravel",
        level: "Advanced",
        icon: <CodeIcon className="w-6 h-6 text-purple-700" />,
        category: "Backend",
      },
      { name: "Express", level: "Expert", icon: "⚡", category: "Backend" },
       { name: ".Net", level: "Advanced", icon: "🖥️", category: "Frontend" },
    ],
  },
};

export function Servicetoolkit() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-3xl mb-5 lg:text-5xl text-gray-900">
            DEVELOPMENT TOOLKIT
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            At our company, we leverage scalable and cutting-edge frameworks and
            technologies to build mobile apps, backend systems, and web
            applications for our clients.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="lg:max-w-[400px] bg-[#F0FFF1] w-full shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-purple-700">
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {toolkitData["Web Development"].description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Key Benefits:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Industry-leading performance",
                      "Scalable architecture",
                      "Continuous security updates",
                      "Agile development process",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                          <CircleCheckBig className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Technologies We Use
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {toolkitData["Web Development"].technologies.map((tech) => (
                  <Card
                    key={tech.name}
                    className="group transition-all relative duration-300 hover:shadow-md hover:border-green-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl mt-0.5">{tech.icon}</div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-semibold text-gray-900 group-hover:text-green-700">
                              {tech.name}
                            </h5>
                            {tech.level === "Expert" && (
                              <span className="text-xs absolute top-2 w-fit right-2  px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
                                Expert
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {tech.category}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
