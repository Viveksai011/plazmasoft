import { Layers } from "lucide-react";
import React from "react";
import Html from "@/Icons/Html";
import NodeIcons from "@/Icons/NodeIcons";
import Flutter from "@/Icons/Flutter";
import Reacticon from "@/Icons/Reacticon";

const servicesData = [
  {
    title: "Front-end Development",
    description:
      "We create user-friendly and robust Android apps tailored to your business needs.",
    icon: <Html width="40" height="40" color="#963beb" />,
  },
  {
    title: "Back-end Development",
    description:
      "Reach a wider audience with apps that work seamlessly on iOS, Android, and Windows.",
    icon: <NodeIcons width="38px" />,
    href: "#",
  },
  {
    title: "Full Stack Development",
    description:
      "We build visually stunning and fast-performing mobile apps for iOS and Android using Flutter.",
    icon: <Flutter width="38px" />,
  },
  // {
  //   title: "MERN Stack",
  //   description:
  //     "Our skilled team develops cutting-edge iOS apps that align with your business objectives.",
  //   icon: <Layers className="h-10 w-10 text-[#963beb]" />,
  // },
  // {
  //   title: "React js",
  //   description:
  //     "Our skilled team develops cutting-edge iOS apps that align with your business objectives.",
  //   icon: <Reacticon width="38px" height="38px" />,
  // },
];

export default function DevelopmentServices() {
  return (
    <section className="relative py-20  ">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 right-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full">
          <div className="absolute bottom-0 top-[50%] right-[70%] w-20 h-20 border-2 bg-rose-500 border-primary-foreground rounded-full"></div>
        </div>
        <div className="absolute top-8 left-8 w-40 h-40 border-2 bg-rose-500 border-primary-foreground rounded-full">
          <div className="absolute bottom-0 top-[50%] left-[70%] w-20 h-20 border-2 bg-rose-500 border-primary-foreground rounded-full"></div>
        </div>
        <div className="absolute bottom-12 left-8 w-40 h-40 border-2 bg-yellow-500 border-primary-foreground rounded-full"></div>
        <div className="absolute top-1/2 right-16 w-40 h-40 border-2 bg-blue-600 border-primary-foreground rounded-full"></div>
      </div>

      <div className="container max-w-[86rem] w-full mx-auto px-4">
        <h2 className="text-4xl text-center  font-semibold text-black">
        PROFESSIONAL WEB APP DEVELOPMENT SERVICES

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
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="block relative z-10 rounded-lg border bg-[#F0FFF1] p-8 text-left shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[rgba(150,59,235,0.1)] to-transparent transition-all duration-600 ease-in-out group-hover:left-[100%]"></div>

              <h4 className="text-xl font-semibold text-foreground">
                {service.title}
              </h4>
              <div className="my-3 h-[2px] w-10 bg-secondarycustomBg" />
              <div className="my-4 flex h-10 items-center">{service.icon}</div>
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
