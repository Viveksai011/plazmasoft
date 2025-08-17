"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toolkitData } from "@/utils/Developementdata";

export function DevelopmentSection() {
  const [activeTab, setActiveTab] = useState("Web Development");

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-3xl mb-5 lg:text-5xl text-gray-900">
            Development Toolkit
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            At our company, we leverage scalable and cutting-edge frameworks and
            technologies to build mobile apps, backend systems, and web
            applications for our clients.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
            {Object.keys(toolkitData).map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab
                    ? "bg-customBg hover:bg-customBg/80 text-white shadow-lg"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-customBg/80 hover:text-customBg"
                }`}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <Card className="lg:max-w-[400px] w-full shadow-lg border-0">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-green-700">
                  {activeTab}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {toolkitData[activeTab].description}
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
                        <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {toolkitData[activeTab].technologies.map((tech, index) => (
                  <Card
                    key={tech.name}
                    className="group transition-all duration-300 hover:shadow-md hover:border-green-300"
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
                              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">
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
