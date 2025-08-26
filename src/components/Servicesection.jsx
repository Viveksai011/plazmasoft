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
  "React Native": <Reacticon className="w-2 h-2"  />,
  Flutter: <Flutter className="w-6 h-6 "  />,
  "Android App": <Androidicon className="w-2 h-2"  />,
  "iOS App": <Appstore className="w-6 h-6"  />,

  Laravel: <CodeIcon className="w-6 h-6 text-purple-700" />,
  "Node.js": <NodeIcons className="w-6 h-6 "  />,
  "Angular.js": <Angular className="w-6 h-6 "  />,
  "React.js": <Reacttwo className="w-6 h-6 "  />,

  Figma: <Figmaicons className="w-6 h-6 "  />,
  "Adobe XD": <Adobexdicons className="w-6 h-6 "  />,
  Sketch: <DesignIcon className="w-6 h-6 text-purple-700" />,
  Photoshop: <Photoshopicons className="w-6 h-6 "  />,

  "React Native App Maintenance": (
    <Reacticon className="w-2 h-2"  />
  ),
  "Flutter App Maintenance": <Flutter className="w-6 h-6 "  />,
  "Android App Maintenance": (
    <Androidicon className="w-2 h-2"  />
  ),
  "iOS App Maintenance": <Appstore className="w-6 h-6"  />,

  "IoT Apps": <IoTIcon className="w-6 h-6 text-purple-700" />,
  "IoT Dashboard & Analytics": <WebIcon className="w-6 h-6 text-purple-700" />,
  "SaaS App Development": <ServerIcon className="w-6 h-6 text-purple-700" />,
  "IoT Software": <IoTIcon className="w-6 h-6 text-purple-700" />,

  OpenAI: <BrainIcon className="w-6 h-6 text-purple-700" />,
  "ChatGPT Development": <AIIcon className="w-6 h-6 text-purple-700" />,
  "ChatGPT Bots": <ChatIcon className="w-6 h-6 text-purple-700" />,
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
    features: [
      "IoT Apps",
      "IoT Dashboard & Analytics",
      "SaaS App Development",
      "IoT Software",
    ],
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
    <section className="py-20 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
          Our Services
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          Comprehensive IT solutions designed to accelerate your business growth
          and digital transformation journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#F0FFF1] p-8 hover:border-t-4 group hover:border-t-purple-500 relative rounded-lg shadow-sm  hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="p-0">
              <span className="text-gray-400 text-sm  group-hover:border-4 group-hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 absolute top-[-15px] right-[-19px] font-medium h-[80px] flex items-center justify-center w-[80px] bg-[#f0ecfa] rounded-full">
                <span className="p-4 bg-white rounded-full text-gray-500 font-semibold">
                  {React.createElement(service.icon, {
                    className: "!text-purple-600",
                  })}
                </span>
              </span>
              <h3 className="text-xl text-gray-900 font-bold mb-4">
                {service.title}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
