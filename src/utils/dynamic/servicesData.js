import { CodeIcon } from "lucide-react";
import {mobileapp, webapp, chatgpt, mvp, appmaintenance, uiux } from "@/utils/dynamic/faqdynamic"
import NodeIcons from "@/Icons/NodeIcons";
import Vueicons from "@/Icons/Vueicons";
import { faqs } from "@/utils/Faqdata";

const commonTechnologies = [
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
];

export const servicesData = {
  "mobile-app-development": {
    heroTitle: "App Development",
    description:
      "Our expert team builds scalable and performant mobile and web applications.",
    developmenttool: {
      title: "App Development Tools",
      description:
        "We use cutting-edge tools and frameworks to develop high-performance mobile applications for iOS and Android.",
      unorderlist: ["Flutter", "React Native", "Swift", "Kotlin"],
      technologiesused: [
        {
          name: "Flutter",
          level: "Expert",
          icon: "🐦",
          category: "Cross-platform",
        },
        {
          name: "React Native",
          level: "Expert",
          icon: "⚛️",
          category: "Cross-platform",
        },
        { name: "Swift", level: "Advanced", icon: "🦉", category: "iOS" },
        { name: "Kotlin", level: "Advanced", icon: "🅺", category: "Android" },
        { name: "Java", level: "Advanced", icon: "☕︎", category: "Android" },
        { name: "Dart", level: "Expert", icon: "🎯", category: "Language" },
        {
          name: "Xamarin",
          level: "Advanced",
          icon: "🔷",
          category: "Cross-platform",
        },
        { name: "Ionic", level: "Advanced", icon: "⚡", category: "Hybrid" },
        { name: ".Net", level: "Advanced", icon: "🖥️", category: "Frontend" },
      ],
    },
    services: [
      {
        title: "Mobile App Development",
        description:
          "Create high-performing and scalable mobile apps tailored to your business needs, ensuring seamless user experiences across platforms.",
        icon: "mobile",
      },
      {
        title: "Web App Development",
        description:
          "Build dynamic and responsive web apps to engage users across devices with modern technologies like React, Angular, and Vue.",
        icon: "web",
      },
      {
        title: "Cross-Platform App Development",
        description:
          "Develop apps that run seamlessly on both Android and iOS platforms using frameworks like Flutter and React Native.",
        icon: "cross-platform",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Mobile App Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/mobile-app-design.webp",
        tags: ["App Design", "UX Research"],
        featured: true,
      },
    ],
    faq: mobileapp,
  },

  "ui-ux-design": {
    heroTitle: "UI/UX Design",
    description:
      "Design user-centric interfaces that create seamless experiences and drive user engagement.",
    developmenttool: {
      title: "UI/UX Design",
      description:
        "We use industry-leading design tools to create stunning, user-friendly interfaces and optimize the user experience.",
      unorderlist: ["Figma", "Sketch", "Adobe XD", "InVision"],
      technologiesused: [
        { name: "Figma", level: "Expert", icon: "🎨", category: "Design" },
        { name: "Sketch", level: "Expert", icon: "✏️", category: "Design" },
        { name: "Adobe XD", level: "Advanced", icon: "🖌️", category: "Design" },
        {
          name: "InVision",
          level: "Advanced",
          icon: "👁️",
          category: "Prototyping",
        },
      ],
    },
    services: [
      {
        title: "UI Design",
        description:
          "Design visually appealing and intuitive interfaces to enhance user experience and usability.",
        icon: "design",
      },
      {
        title: "UX Research & Testing",
        description:
          "Conduct user research, usability testing, and gather insights to optimize the user experience for better interaction and satisfaction.",
        icon: "research",
      },
      {
        title: "Interaction Design",
        description:
          "Design smooth and engaging interactions that improve user satisfaction and usability within your app or website.",
        icon: "interaction",
      },
    ],
    projects: [
      {
        id: 1,
        title: "UI/UX Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/ui-ux-design.webp",
        tags: ["UI/UX Design", "UX Research"],
      },
    ],
    faq: uiux,
  },

  "mvp-development": {
    heroTitle: "MVP Development",
    description:
      "Quickly launch a Minimum Viable Product (MVP) to validate your business ideas and attract early-stage feedback from users.",
    developmenttool: {
      title: "MVP Development",
      description:
        "We use a set of powerful tools and frameworks to build your MVP quickly, focusing on efficiency and scalability.",
      unorderlist: ["Ruby on Rails", "React", "Node.js", "Vue.js"],
      technologiesused: [
        { name: "React", level: "Expert", icon: "⚛️", category: "Frontend" },
        {
          name: "Node.js",
          level: "Expert",
          icon: <NodeIcons width="30px" />,
          category: "Backend",
        },
        {
          name: "Ruby on Rails",
          level: "Advanced",
          icon: "💎",
          category: "Full-stack",
        },
        {
          name: "Vue.js",
          level: "Advanced",
          icon: <Vueicons width="30px" />,
          category: "Frontend",
        },
      ],
    },
    services: [
      {
        title: "Product Strategy & Ideation",
        description:
          "Strategize and conceptualize the core features of your MVP to ensure quick market validation.",
        icon: "strategy",
      },
      {
        title: "MVP Design & Development",
        description:
          "Develop a fully functional MVP using lean principles to launch quickly and gather user feedback for future iterations.",
        icon: "code",
      },
      {
        title: "Market Testing & Feedback",
        description:
          "Launch your MVP to gather real user feedback, assess market interest, and identify necessary improvements.",
        icon: "feedback",
      },
    ],
    projects: [
      {
        id: 1,
        title: "MVP Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/mobile-app-design.webp",
        tags: ["MVP Development", "MVP Support"],
        featured: true,
      },
    ],
    faq: mvp,
  },

  "app-maintenance": {
    heroTitle: "App Maintenance",
    description:
      "Ensure your mobile and web apps remain up-to-date, secure, and running smoothly with ongoing maintenance services.",
    developmenttool: {
      title: "App Maintenance",
      description:
        "We utilize the latest tools to monitor, update, and maintain the health and security of your app.",
      unorderlist: ["Sentry", "New Relic", "Datadog", "Google Analytics"],
      technologiesused: [
        { name: "Sentry", level: "Expert", icon: "🔍", category: "Monitoring" },
        {
          name: "New Relic",
          level: "Advanced",
          icon: "📊",
          category: "Analytics",
        },
        {
          name: "Datadog",
          level: "Advanced",
          icon: "🐶",
          category: "Monitoring",
        },
        {
          name: "Google Analytics",
          level: "Expert",
          icon: "📈",
          category: "Analytics",
        },
      ],
    },
    services: [
      {
        title: "App Updates & Enhancements",
        description:
          "Regularly update your app with new features, improvements, and bug fixes to keep it relevant and functional.",
        icon: "update",
      },
      {
        title: "Security & Performance Optimization",
        description:
          "Perform regular security audits and optimize your app's performance to ensure it runs smoothly at all times.",
        icon: "security",
      },
      {
        title: "Bug Fixes & Issue Resolution",
        description:
          "Quickly address and resolve any bugs or issues affecting app performance and user experience.",
        icon: "bug-fix",
      },
    ],
    projects: [
      {
        id: 1,
        title: "App Maintenance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/mobile-app-design.webp",
        tags: ["App Maintenance", "App Support"],
        featured: true,
      },
    ],
    faq: appmaintenance,
  },

  "chatgpt-development": {
    heroTitle: "ChatGPT Development",
    description:
      "Develop advanced conversational AI applications using ChatGPT to automate communication and improve customer engagement.",
    developmenttool: {
      title: "ChatGPT Development",
      description:
        "We leverage advanced AI frameworks and integration tools to develop intelligent conversational agents.",
      unorderlist: [
        "OpenAI GPT",
        "Dialogflow",
        "Microsoft Bot Framework",
        "Rasa",
      ],
      technologiesused: [
        { name: "OpenAI GPT", level: "Expert", icon: "🤖", category: "AI" },
        {
          name: "Dialogflow",
          level: "Advanced",
          icon: "💬",
          category: "Conversational AI",
        },
        {
          name: "Microsoft Bot Framework",
          level: "Advanced",
          icon: "🔷",
          category: "Bot Development",
        },
        { name: "Rasa", level: "Expert", icon: "🗣️", category: "NLP" },
      ],
    },
    services: [
      {
        title: "Custom Chatbot Development",
        description:
          "Build custom AI-driven chatbots with personalized responses to automate customer support and communication.",
        icon: "chat",
      },
      {
        title: "Integration with Existing Systems",
        description:
          "Integrate ChatGPT seamlessly with your existing systems to improve workflow automation and data access.",
        icon: "integration",
      },
      {
        title: "Conversational AI Solutions",
        description:
          "Create intelligent conversational agents for a variety of use cases including customer service, sales, and support.",
        icon: "ai",
      },
    ],
    projects: [
      {
        id: 1,
        title: "ChatGPT Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/mobile-app-design.webp",
        tags: ["ChatGPT Development", "ChatGPT Integration"],
        featured: true,
      },
    ],
    faq: chatgpt,
  },

  "web-app-development": {
    heroTitle: "Web App Development",
    description:
      "PlazmaSoft offers comprehensive web app development services, specializing in creating custom, responsive, and user-friendly web applications. Our expert web app developers leverage the latest technologies to deliver innovative solutions tailored to clients' specific needs.",
    developmenttool: {
      title: "Web Development",
      description:
        "We employ a variety of tools and frameworks to create robust and scalable web applications.",
      unorderlist: [
        "Industry-leading performance",
        "Scalable architecture",
        "Continuous security updates",
        "Agile development process",
      ],
      technologiesused: commonTechnologies,
    },
    services: [
      {
        title: "Web Development",
        description:
          "Create stunning websites using the latest technologies such as React, Vue, and Node.js to ensure responsiveness and high performance.",
        icon: "react",
      },
      {
        title: "SEO Services",
        description:
          "Boost your website's visibility on search engines through targeted on-page and off-page SEO strategies.",
        icon: "html",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Develop powerful e-commerce platforms that provide smooth transactions and enhance user experience for online stores.",
        icon: "ecommerce",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Web Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/web-design.webp",
        tags: ["Web Design", "UX Research"],
      },
      {
        id: 2,
        title: "Brand Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/brand-design.webp",
        tags: ["Brand Design", "UX Research"],
      },

      {
        id: 3,
        title: "Web Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/web-development.webp",
        tags: ["Web Development", "UX Research"],
      },
    ],
    faq: webapp,
  },

  default: {
    heroTitle: "Web App Development",
    description:
      "PlazmaSoft offers comprehensive web app development services, specializing in creating custom, responsive, and user-friendly web applications. Our expert web app developers leverage the latest technologies to deliver innovative solutions tailored to clients' specific needs.",
    developmenttool: {
      title: "Web Development",
      description:
        "We employ a variety of tools and frameworks to create robust and scalable web applications.",
      unorderlist: [
        "Industry-leading performance",
        "Scalable architecture",
        "Continuous security updates",
        "Agile development process",
      ],
      technologiesused: commonTechnologies,
    },
    services: [
      {
        title: "Web Development",
        description:
          "Create stunning websites using the latest technologies such as React, Vue, and Node.js to ensure responsiveness and high performance.",
        icon: "react",
      },
      {
        title: "SEO Services",
        description:
          "Boost your website's visibility on search engines through targeted on-page and off-page SEO strategies.",
        icon: "html",
      },
      {
        title: "E-Commerce Solutions",
        description:
          "Develop powerful e-commerce platforms that provide smooth transactions and enhance user experience for online stores.",
        icon: "ecommerce",
      },
    ],
    projects: [
      {
        id: 1,
        title: "Mobile App Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/mobile-app-design.webp",
        tags: ["App Design", "UX Research"],
        featured: true,
      },
      {
        id: 2,
        title: "Web Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/web-design.webp",
        tags: ["Web Design", "UX Research"],
      },
      {
        id: 3,
        title: "Brand Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/brand-design.webp",
        tags: ["Brand Design", "UX Research"],
      },
      {
        id: 4,
        title: "UI/UX Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/ui-ux-design.webp",
        tags: ["UI/UX Design", "UX Research"],
      },
      {
        id: 5,
        title: "Web Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/web-development.webp",
        tags: ["Web Development", "UX Research"],
      },
      {
        id: 6,
        title: "Graphic Design",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "/img/graphic-design.webp",
        tags: ["Graphic Design", "UX Research"],
      },
    ],
    faq: faqs,
  },
};
