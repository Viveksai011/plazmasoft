// components/servicescomponent/Developmentservices.tsx

import React from "react";
import Html from "@/Icons/Html";  // Import icons
import NodeIcons from "@/Icons/NodeIcons";
import Flutter from "@/Icons/Flutter";
import Reacticon from "@/Icons/Reacticon";

export default function DevelopmentServices({ services = [] }) {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 opacity-10">
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full"></div>
        <div className="absolute top-8 left-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-12 left-8 w-40 h-40 border-2 bg-yellow-500 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 right-16 w-40 h-40 border-2 bg-blue-600 border-primary-foreground rounded-full"></div>
      </div>

      <div className="container max-w-[86rem] w-full mx-auto px-4">
        <h2 className="text-4xl text-center  font-semibold text-black">
          Professional Web App Development Services
        </h2>
        <div className="mt-4 mb-6 h-1 w-32 bg-secondarycustomBg mx-auto"></div>
        <p className="text-black/80 text-center max-w-3xl mx-auto">
          Get ready to avail expert web{" "}
          <a href="#" className="text-customBg hover:underline">
            app development services
          </a>{" "}
          to create tailored, efficient, and user-friendly solutions for your
          business needs. Contact us for a competitive edge in the digital
          landscape.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="block relative z-10 rounded-lg border  bg-white p-8 text-left shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 group overflow-hidden"
            >
              <h4 className="text-xl font-semibold text-foreground">
                {service.title}
              </h4>
              <div className="my-3 h-[2px] w-10 bg-secondarycustomBg" />

              <div className="my-4 flex h-10 items-center">
                {/* Render icons dynamically */}
                {service.icon === "html" && <Html width="38" height="38" />}
                {service.icon === "node" && <NodeIcons width="38" />}
                {service.icon === "flutter" && <Flutter width="38" />}
                {service.icon === "react" && <Reacticon width="38" />}
              </div>
              <p className="text-sm text-black/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
