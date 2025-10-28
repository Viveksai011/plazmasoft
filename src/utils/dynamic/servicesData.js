import { CodeIcon } from "lucide-react";
import {
  mobileapp,
  webapp,
  chatgpt,
  mvp,
  appmaintenance,
  uiux,
} from "@/utils/dynamic/faqdynamic";
import {
  mobileAppDevTestimonials,
  webAppDevTestimonials,
  uiUxDesignTestimonials,
  mvpDevTestimonials,
  appMaintenanceTestimonials,
  chatGptDevTestimonials,
} from "@/utils/dynamic/testimonal";
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
      subPara: "Dummy as of now",

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
    servicesheading: {
      title: "Our Mobile & Web App Development Services",
      description:
        "We offer a comprehensive suite of mobile and web app development services designed to bring your ideas to life and drive business growth.",
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
    testimonal: mobileAppDevTestimonials,
    faq: mobileapp,
  },

  "ui-ux-design": {
    heroTitle: "UI/UX Design",
    description:
      "Design user-centric interfaces that create seamless experiences and drive user engagement.",
    developmenttool: {
      subPara: "Dummy as of now",
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
    servicesheading: {
      title: "Our UI/UX Design Services",
      description:
        "We offer a comprehensive range of UI/UX design services to create engaging and user-friendly digital experiences.",
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
    testimonal: uiUxDesignTestimonials,
    faq: uiux,
  },

  "mvp-development": {
    heroTitle: "MVP Development",
    description:
      "Quickly launch a Minimum Viable Product (MVP) to validate your business ideas and attract early-stage feedback from users.",
    developmenttool: {
      subPara: "Dummy as of now",
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
    servicesheading: {
      title: "Our MVP Development Services",
      description:
        "We provide end-to-end MVP development services to help startups and businesses quickly validate their ideas and enter the market.",
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
    testimonal: mvpDevTestimonials,
    faq: mvp,
  },

  "app-maintenance": {
    heroTitle: "App Maintenance",
    description:
      "Ensure your mobile and web apps remain up-to-date, secure, and running smoothly with ongoing maintenance services.",
    developmenttool: {
      subPara: "Dummy as of now",
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
    servicesheading: {
      title: "Our App Maintenance Services",
      description:
        "We offer comprehensive app maintenance services to ensure your applications remain secure, up-to-date, and perform optimally.",
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
    testimonal: appMaintenanceTestimonials,
    faq: appmaintenance,
  },

  "chatgpt-development": {
    heroTitle: "ChatGPT Development",
    description:
      "Develop advanced conversational AI applications using ChatGPT to automate communication and improve customer engagement.",
    developmenttool: {
      subPara: "Dummy as of now",
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
    servicesheading: {
      title: "Our ChatGPT Development Services",
      description:
        "We provide end-to-end ChatGPT development services to help businesses leverage conversational AI for enhanced customer engagement and automation.",
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
    testimonal: chatGptDevTestimonials,
    faq: chatgpt,
  },

  "web-app-development": {
    heroSection: {
      heroTitle: "Web Development That Actually",
      subtitle: "Grows Your Business",
      description:
        "Your website should be your #1 salesperson, not your biggest headache. We build web solutions that convert visitors into customers and problems into profit.",
      cta: "Book Your Free Consultation Now",
      image: "/img/svgviewer.svg",
      imageText: "Get your custom website estimate in 72 hours",
    },
    BenefitsSectiontext: [
      {
        title: "Results-Focused Approach",

        Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180324/benifitis-3_ymdj0y.webp",
        bullets: [
          "Growth-Driven Design",
          "Conversion-Centered Decisions",
          "Business Impact First",
          "Beyond Aesthetics",
        ],
      },
      {
        title: "Guaranteed Performance",
        Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180323/benifitis-2_fw5hoq.webp",
        bullets: [
          "30-Day Launch Guarantee",
          "100% Mobile-Responsive",
          "Page Speed Promise",
          "Conversion Optimization",
        ],
      },
      {
        title: "Complete Transparency",
        Icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1760180323/benifitis-1_lw9klu.webp",
        bullets: [
          "Real-Time Project Dashboard",
          "Fixed-Price Contracts",
          "Plain-English Communication",
          "Full Code Ownership",
        ],
      },
    ],
    Stoplosing: {
      header: {
        title: "Stop Losing Customers to",
        subtitle: {
          part1: "Slow & Outdated",
          part2: "Websites",
        },
      },
      stats: [
        { value: "7%", label: "Conversions drop every extra second" },
        {
          value: "25%",
          label: "Visitors leave if load time > 4s",
        },
        {
          value: "57%",
          label: "Users won’t recommend poor mobile sites",
        },
        {
          value: "88%",
          label: "Customers don’t return after bad experience",
        },
      ],
      cta: {
        heading: "Take Action Today",
        description: {
          part1: "Get your personalized audit in 48 hours.",
          part2:
            "We'll analyze your current site and show you exactly what’s costing you customers.",
        },
        buttonText: "Get Free Audit",
        securityNote: "Secure process. No credit card required.",
      },
    },
    developmenttool: {
      subPara: "Dummy as of now",
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
    servicesheading: {
      title: "Our Web Development Services",
      description:
        "We offer a wide range of web development services to help businesses establish a strong online presence and deliver exceptional user experiences.",
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
    processsteps: [
      {
        step: "01",
        title: "Discovery & Strategy",
        duration: "Week 1",
        whatHappens: [
          "Audit current setup and interview team",
          "Analyze competition and market positioning",
          "Create detailed roadmap with ROI projections",
        ],
        clientRequirements: [
          "Client requirement gathering",
          "Analytics setup and training",
          "Performance reports and recommendations",
        ],
      },
      {
        step: "02",
        title: "Design & Approval",
        duration: "Week 2–3",
        whatHappens: [
          "Create interactive wireframes and prototypes",
          "Develop content strategy and user flows",
          "Get approval before any coding begins",
        ],
        clientRequirements: [
          "Client requirement gathering",
          "Analytics setup and training",
          "Performance reports and recommendations",
        ],
      },
      {
        step: "03",
        title: "Development & Testing",
        duration: "Week 4–8",
        whatHappens: [
          "Build solution with weekly progress updates",
          "Allow real-time change requests",
          "Test on multiple devices and browsers",
        ],
        clientRequirements: [
          "Client requirement gathering",
          "Analytics setup and training",
          "Performance reports and recommendations",
        ],
      },
      {
        step: "04",
        title: "Launch & Optimization",
        duration: "Week 9+",
        whatHappens: [
          "Launch and monitor performance",
          "Optimize based on real user data",
          "90 days included support and improvements",
        ],
        clientRequirements: [
          "Client requirement gathering",
          "Analytics setup and training",
          "Performance reports and recommendations",
        ],
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
    testimonal: [
      {
        id: 1,
        name: "Sam L.",
        title: "Mobile Developer",
        avatar: null,
        content:
          "The mobile app development service was exceptional. They delivered exactly what we envisioned.",
        rating: 5,
      },
      {
        id: 2,
        name: "Emma G.",
        title: "CTO",
        avatar: null,
        content:
          "Their team understood our needs and built a flawless app with perfect UI. Highly recommend!",
        rating: 5,
      },
      {
        id: 3,
        name: "Daniel B.",
        title: "Product Manager",
        avatar: null,
        content:
          "We needed a cross-platform solution, and their Flutter expertise delivered beyond our expectations.",
        rating: 5,
      },
      {
        id: 4,
        name: "Alex T.",
        title: "Founder",
        avatar: null,
        content:
          "Great experience. The app is not only functional but also beautifully designed.",
        rating: 5,
      },
      {
        id: 5,
        name: "Mia W.",
        title: "CEO",
        avatar: null,
        content:
          "The mobile app development team provided top-tier support from start to finish. The app is smooth and fast.",
        rating: 5,
      },
    ],
    faq: [
      {
        id: "item-1",
        question: "What technologies do you use for web app development?",
        answer:
          "We use modern web development frameworks such as React, Angular, Vue.js, and Node.js to build scalable and interactive web applications.",
      },
      {
        id: "item-2",
        question: "Can you develop custom web apps for our business?",
        answer:
          "Yes, we specialize in custom web application development tailored to your business needs, whether it's a small business tool or a complex enterprise solution.",
      },
      {
        id: "item-3",
        question: "Do you offer web app maintenance and updates?",
        answer:
          "Absolutely! We provide ongoing support, maintenance, and updates to ensure your web application remains secure, functional, and up-to-date with the latest technology.",
      },
      {
        id: "item-4",
        question: "Is your web app development scalable?",
        answer:
          "Yes, we design and develop scalable web applications that can grow with your business, ensuring long-term performance and adaptability.",
      },
      {
        id: "item-5",
        question: "How do you ensure web app security?",
        answer:
          "We implement best practices for web security, including encryption, authentication, and regular security audits to ensure that your web application is protected from vulnerabilities.",
      },
      {
        id: "item-6",
        question: "What is the average development timeline for a web app?",
        answer:
          "The timeline can vary depending on the project complexity, but most custom web applications take between 3 to 6 months to develop from start to finish.",
      },
      {
        id: "item-7",
        question: "What is the average development timeline for a web app?",
        answer:
          "The timeline can vary depending on the project complexity, but most custom web applications take between 3 to 6 months to develop from start to finish.",
      },
    ],
    comparisonData: {
      withoutUs: [
        "Endless Delays",
        "Budget Nightmares",
        "Technical Confusion",
        "Poor Results",
        "No Support",
        "Wasted Investment",
      ],
      withUs: [
        "Guaranteed Launch Dates",
        "Fixed-Price Projects",
        "Weekly Progress Calls",
        "Conversion-Focused Design",
        "90-Day Support Included",
        "Measurable ROI",
      ],
    },
  },

  default: {
    heroTitle: "Web Development That Actually",
    description: "Grows Your Business",
    developmenttool: {
      subPara: "Dummy as of now",
      title: "Web Development",
      description:
        "We employ a variety of tools and frameworks to create robust and scalable web applicasca.",
      unorderlist: [
        "Industry-leading performance",
        "Scalable architecture",
        "Continuous security updates",
        "Agile development process",
      ],
      technologiesused: commonTechnologies,
    },
    servicesheading: {
      title: "Our Web Development Services",
      description:
        "We offer a wide range of web development services to help businesses establish a strong online presence and deliver exceptional user experiences.",
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
    testimonal: webAppDevTestimonials,
    faq: faqs,
  },
};
