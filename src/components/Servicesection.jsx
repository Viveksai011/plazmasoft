import { Smartphone , Monitor , Palette, Brain , MonitorCog , MessageCircleCode  } from "lucide-react";

const services = [
  {
    icon: Smartphone ,
    title: "Mobile App Development",
    description:
      "Create high-performance mobile apps for Android and iOS with cutting-edge frameworks like React Native and Flutter.",
    features: [
      "React Native",
      "Flutter",
      "Android App",
      "iOS App",
    ],
  },
  {
    icon: Monitor ,
    title: "Web App Development",
    description:
      "Build powerful web applications using modern technologies like Laravel, Node.js, Angular.js, and React.js.",
    features: [
      "Laravel",
      "Node.js",
      "Angular.js",
      "React.js",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Design beautiful and user-friendly interfaces with tools like Figma, Adobe XD, Sketch, and Photoshop.",
    features: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Photoshop",
    ],
  },
  {
    icon: MonitorCog ,
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
    icon: Brain ,
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
    icon: MessageCircleCode ,
    title: "ChatGPT Development",
    description:
      "Leverage the power of OpenAI to build intelligent ChatGPT bots and enhance customer interactions.",
    features: [
      "OpenAI",
      "ChatGPT Development",
      "ChatGPT Bots",
    ],
  },
];


export function Servicesection() {
  return (
    <section className="py-20 max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-serif font-bold text-3xl lg:text-5xl text-gray-900">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to accelerate your business growth
          and digital transformation journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 relative rounded-lg shadow-sm border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="p-0">
              <span className="text-gray-400 text-sm absolute top-[-15px] right-[-19px] font-medium h-[80px] flex items-center justify-center w-[80px] bg-[#f4f6f8] rounded-full">
                <span className="p-4 bg-white rounded-full text-gray-500 font-semibold">
                  <service.icon className="w-6 h-6 text-green-700 transition-colors duration-300" />
                </span>
              </span>
              <h3 className="text-xl text-gray-900">{service.title}</h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
                      {feature}
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
