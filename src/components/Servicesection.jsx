import * as motion from "motion/react-client";
import Androidicon from "@/Icons/Androidicon";
import Reacticon from "@/Icons/Reacticon";
import Flutter from "@/Icons/Flutter";
import Appstore from "@/Icons/Appstore";
import Angular from "@/Icons/Angular";
import NodeIcons from "@/Icons/NodeIcons";
import Reacttwo from "@/Icons/Reacttwo";
import Figmaicons from "@/Icons/Figmaicons";
import Adobexdicons from "@/Icons/Adobexdicons";
import {
  Smartphone as MobileIcon,
  Monitor as WebIcon,
  Paintbrush as DesignIcon,
  Cpu as IoTIcon,
  Settings as MaintenanceIcon,
  Bot as AIIcon,
  Code2 as CodeIcon,
  Server as ServerIcon,
  BrainCircuit as BrainIcon,
  MessageSquare as ChatIcon,
} from "lucide-react";
import React from "react";
import Photoshopicons from "@/Icons/Photoshopicons";

const featureIcons = {
  "React Native": <Reacticon className="h-2 w-2" />,
  Flutter: <Flutter className="h-6 w-6" />,
  "Android App": <Androidicon className="h-2 w-2" />,
  "iOS App": <Appstore className="h-6 w-6" />,

  Laravel: <CodeIcon className="h-6 w-6 text-customBg" />,
  "Node.js": <NodeIcons className="h-6 w-6" />,
  "Angular.js": <Angular className="h-6 w-6" />,
  "React.js": <Reacttwo className="h-6 w-6" />,

  Figma: <Figmaicons className="h-6 w-6" />,
  "Adobe XD": <Adobexdicons className="h-6 w-6" />,
  Sketch: <DesignIcon className="h-6 w-6 text-customBg" />,
  Photoshop: <Photoshopicons className="h-6 w-6" />,

  "React Native App Maintenance": <Reacticon className="h-2 w-2" />,
  "Flutter App Maintenance": <Flutter className="h-6 w-6" />,
  "Android App Maintenance": <Androidicon className="h-2 w-2" />,
  "iOS App Maintenance": <Appstore className="h-6 w-6" />,

  "IoT Apps": <IoTIcon className="h-6 w-6 text-customBg" />,
  "IoT Dashboard & Analytics": <WebIcon className="h-6 w-6 text-customBg" />,
  "SaaS App Development": <ServerIcon className="h-6 w-6 text-customBg" />,
  "IoT Software": <IoTIcon className="h-6 w-6 text-customBg" />,

  OpenAI: <BrainIcon className="h-6 w-6 text-customBg" />,
  "ChatGPT Development": <AIIcon className="h-6 w-6 text-customBg" />,
  "ChatGPT Bots": <ChatIcon className="h-6 w-6 text-customBg" />,
};

const services = [
  {
    icon: MobileIcon,
    title: "Mobile App Development",
    description:
      "Create high-performance mobile apps for Android and iOS with cutting-edge frameworks like React Native and Flutter.",
    features: ["React Native", "Flutter", "Android App", "iOS App"],
  },
  {
    icon: WebIcon,
    title: "Web App Development",
    description:
      "Build powerful web applications using modern technologies like Laravel, Node.js, Angular.js, and React.js.",
    features: ["Laravel", "Node.js", "Angular.js", "React.js"],
  },
  {
    icon: DesignIcon,
    title: "UI/UX Design",
    description:
      "Design beautiful and user-friendly interfaces with tools like Figma, Adobe XD, Sketch, and Photoshop.",
    features: ["Figma", "Adobe XD", "Sketch", "Photoshop"],
  },
  {
    icon: MaintenanceIcon,
    title: "App Maintenance",
    description:
      "Ensure your apps remain up-to-date and optimized with expert maintenance services for Android, iOS, React Native, and Flutter apps.",
    features: [
      "React Native App Maintenance",
      "Flutter App Maintenance",
      "Android App Maintenance",
      "iOS App Maintenance",
    ],
  },
  {
    icon: IoTIcon,
    title: "IoT Development",
    description:
      "Develop IoT solutions including apps, dashboards, SaaS applications, and IoT software for smarter operations.",
    features: ["IoT Apps", "IoT Dashboard & Analytics", "SaaS App Development", "IoT Software"],
  },
  {
    icon: AIIcon,
    title: "ChatGPT Development",
    description:
      "Leverage the power of OpenAI to build intelligent ChatGPT bots and enhance customer interactions.",
    features: ["OpenAI", "ChatGPT Development", "ChatGPT Bots"],
  },
];

export function Servicesection() {
  return (
    <section className="mx-auto max-w-[92rem] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-16 space-y-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-900 lg:text-5xl">OUR SERVICES</h2>
        <p className="mx-auto max-w-4xl px-4 text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
          Comprehensive IT solutions designed to accelerate your business growth and digital
          transformation journey.
        </p>
      </div>

      <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
            className="group relative rounded-lg bg-thirdbg p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-t-4 hover:border-t-customBg hover:shadow-xl"
          >
            <div className="p-0">
              <span className="absolute right-[-19px] top-[-15px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#E7F6FE] text-sm font-medium text-gray-400 transition-all duration-300 hover:-translate-y-2 group-hover:border-4 group-hover:border-customBg">
                <span className="rounded-full bg-white p-4 font-semibold text-gray-500">
                  {React.createElement(service.icon, {
                    className: "!text-customBg ",
                  })}
                </span>
              </span>
              <h3 className="mb-4 text-xl font-bold text-gray-900">{service.title}</h3>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-600">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      {featureIcons[feature]}
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
