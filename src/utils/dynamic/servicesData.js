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
  heroSection: {
    heroTitle: "Mobile App Development That",
    subtitle: "Scales Your Business",
    description:
      "We build high-performance mobile applications that deliver seamless user experiences, drive engagement, and support long-term business growth.",
    cta: "Book Your Free Consultation Now",
    image: "/img/mobile-app-design.webp",
    imageText: "Get your custom mobile app estimate in 72 hours",
  },

  Stoplosing: {
    header: {
      title: "Stop Losing Users to",
      subtitle: {
        part1: "Slow & Poorly Built",
        part2: "Mobile Apps",
      },
    },
    stats: [
      { value: "53%", label: "Users uninstall apps that perform poorly" },
      { value: "70%", label: "Users expect fast and smooth mobile experiences" },
      { value: "88%", label: "Users won’t return after a bad app experience" },
      { value: "60%", label: "Mobile users leave after repeated crashes or bugs" },
    ],
    cta: {
      heading: "Take Action Today",
      description: {
        part1: "Get your personalized mobile app audit in 48 hours.",
        part2:
          "We’ll analyze your app idea or current product and show what’s needed to improve performance and user engagement.",
      },
      buttonText: "Get Free Audit",
      securityNote: "Secure process. No credit card required.",
    },
  },

  BenefitsSectiontext: [
    {
      title: "User-Focused Development",
      Icon: "/img/mobile-benefit-1.webp",
      bullets: [
        "Cross-Platform Performance",
        "Scalable App Architecture",
        "Smooth User Experience",
        "Business-Driven Features",
      ],
    },
    {
      title: "Reliable Delivery",
      Icon: "/img/mobile-benefit-2.webp",
      bullets: [
        "Fast Development Cycles",
        "Quality Assurance Testing",
        "App Store Readiness",
        "Ongoing Support",
      ],
    },
    {
      title: "Complete Transparency",
      Icon: "/img/mobile-benefit-3.webp",
      bullets: [
        "Real-Time Progress Updates",
        "Clear Communication",
        "Fixed Scope Planning",
        "Full Code Ownership",
      ],
    },
  ],

  Ourservices: [
    {
      title: "Custom Mobile App Development",
      icon: "📱",
      subpara: "Native and cross-platform apps tailored to your business goals",
      icones: ["📱", "⚡", "🔒", "📈"],
      features: [
        "Create scalable mobile apps for Android and iOS",
        "Build with performance, usability, and growth in mind",
        "Tailor every feature to your business requirements",
      ],
    },
    {
      title: "Cross-Platform Development",
      icon: "⚡",
      subpara: "Single codebase solutions using Flutter and React Native",
      icones: ["📱", "⚡", "🔒", "📈"],
      features: [
        "Reduce development cost and launch time",
        "Maintain consistent experience across platforms",
        "Speed up delivery without sacrificing quality",
      ],
    },
    {
      title: "App Security & Stability",
      icon: "🔒",
      subpara: "Secure, reliable, and optimized mobile applications",
      icones: ["📱", "⚡", "🔒", "📈"],
      features: [
        "Protect user data with secure development practices",
        "Minimize crashes and performance issues",
        "Ensure long-term maintainability and stability",
      ],
    },
    {
      title: "Growth-Focused Results",
      icon: "📈",
      subpara: "Apps designed to improve retention, engagement, and ROI",
      icones: ["📱", "⚡", "🔒", "📈"],
      features: [
        "Track success through usage and engagement metrics",
        "Optimize app flows for retention and conversion",
        "Support ongoing iterations based on user feedback",
      ],
    },
  ],

  developmenttool: {
    title: "App Development Tools",
    description:
      "We use cutting-edge tools and frameworks to develop high-performance mobile applications for iOS and Android.",
    unorderlist: [
      "Cross-platform development expertise",
      "Scalable app architecture",
      "Performance optimization",
      "Secure deployment process",
    ],
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

  processsteps: [
    {
      step: "01",
      title: "Discovery & Planning",
      duration: "Week 1",
      whatHappens: [
        "Understand product goals and user needs",
        "Define app scope, features, and roadmap",
        "Choose the right platform and tech stack",
      ],
      clientRequirements: [
        "Business requirement gathering",
        "Feature prioritization",
        "Timeline and milestone approval",
      ],
    },
    {
      step: "02",
      title: "UI/UX Design",
      duration: "Week 2-3",
      whatHappens: [
        "Create wireframes and user journeys",
        "Design intuitive mobile-first interfaces",
        "Review and approve clickable prototypes",
      ],
      clientRequirements: [
        "Feedback on designs",
        "Brand asset sharing",
        "Approval before development starts",
      ],
    },
    {
      step: "03",
      title: "Development & Testing",
      duration: "Week 4-8",
      whatHappens: [
        "Build core app functionality",
        "Integrate APIs and backend systems",
        "Test performance, usability, and security",
      ],
      clientRequirements: [
        "Weekly feedback and review",
        "Staging app validation",
        "Feature sign-off",
      ],
    },
    {
      step: "04",
      title: "Launch & Support",
      duration: "Week 9+",
      whatHappens: [
        "Deploy app to stores or internal distribution",
        "Monitor usage and stability",
        "Provide post-launch improvements and support",
      ],
      clientRequirements: [
        "Store account access if needed",
        "Launch checklist approval",
        "Support planning and future roadmap",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Mobile App Design",
      description:
        "Designed and developed a high-performance mobile application focused on user engagement, usability, and scalability.",
      image: "/img/mobile-app-design.webp",
      tags: ["App Design", "UX Research"],
      featured: true,
    },
  ],

  testimonal: mobileAppDevTestimonials,

  faq: mobileapp,

  comparisonData: {
    withoutUs: [
      "Slow App Performance",
      "Poor User Retention",
      "Unstable Releases",
      "Inconsistent UX",
      "High Maintenance Costs",
      "Missed Business Opportunities",
    ],
    withUs: [
      "Optimized Performance",
      "Better User Engagement",
      "Stable App Releases",
      "Smooth UX Across Devices",
      "Long-Term Support",
      "Measurable Business Growth",
    ],
  },

  Guarantee: [
    {
      title: "On-Time Delivery Promise",
      desc: "Your mobile app project is delivered on schedule with milestone-based execution and clear communication.",
    },
    {
      title: "Quality Assurance Guarantee",
      desc: "We thoroughly test your application for performance, security, and usability before launch.",
    },
    {
      title: "Post-Launch Support Included",
      desc: "We provide continued technical support and minor improvements after launch.",
    },
    {
      title: "Performance Promise",
      desc: "Your app will be optimized for smooth performance and usability across supported devices.",
    },
  ],
},

"ui-ux-design": {
  heroSection: {
    heroTitle: "UI/UX Design That Creates",
    subtitle: "Better User Experiences",
    description:
      "We design intuitive, conversion-focused digital experiences that make your product easier to use, more engaging, and more profitable.",
    cta: "Book Your Free Consultation Now",
    image: "/img/ui-ux-design.webp",
    imageText: "Get your custom UI/UX estimate in 72 hours",
  },

  Stoplosing: {
    header: {
      title: "Stop Losing Users to",
      subtitle: {
        part1: "Confusing & Frustrating",
        part2: "Interfaces",
      },
    },
    stats: [
      { value: "88%", label: "Users won’t return after a poor experience" },
      { value: "70%", label: "Users prefer intuitive and simple interfaces" },
      { value: "75%", label: "Credibility depends heavily on design" },
      { value: "60%", label: "Users abandon flows that feel too complex" },
    ],
    cta: {
      heading: "Take Action Today",
      description: {
        part1: "Get your personalized design audit in 48 hours.",
        part2:
          "We’ll review your current UX, identify friction points, and suggest improvements that increase engagement and usability.",
      },
      buttonText: "Get Free Audit",
      securityNote: "Secure process. No credit card required.",
    },
  },

  BenefitsSectiontext: [
    {
      title: "User-Centered Design",
      Icon: "/img/ui-ux-design.webp",
      bullets: [
        "Research-Driven Decisions",
        "Improved Usability",
        "Clear Navigation Flows",
        "Higher Engagement",
      ],
    },
    {
      title: "Design Consistency",
      Icon: "/img/web-design.webp",
      bullets: [
        "Component-Based Systems",
        "Consistent UI Patterns",
        "Brand-Aligned Interfaces",
        "Scalable Design Language",
      ],
    },
    {
      title: "Faster Product Validation",
      Icon: "/img/brand-design.webp",
      bullets: [
        "Interactive Prototypes",
        "Quick User Testing",
        "Faster Feedback Loops",
        "Reduced Rework",
      ],
    },
  ],

  Ourservices: [
    {
      title: "UI Design",
      icon: "🎨",
      subpara: "Visually strong interfaces designed for clarity and usability",
      icones: ["🎨", "🔍", "🧩", "⚡"],
      features: [
        "Design clean and modern interfaces",
        "Align layouts with user goals and brand identity",
        "Improve visual hierarchy and clarity",
      ],
    },
    {
      title: "UX Research & Testing",
      icon: "🔍",
      subpara: "Research-backed experiences that reduce friction and improve retention",
      icones: ["🎨", "🔍", "🧩", "⚡"],
      features: [
        "Study user behavior and pain points",
        "Validate ideas through usability testing",
        "Turn feedback into better product decisions",
      ],
    },
    {
      title: "Interaction Design",
      icon: "🧩",
      subpara: "Thoughtful interactions that make products feel intuitive",
      icones: ["🎨", "🔍", "🧩", "⚡"],
      features: [
        "Create seamless user journeys",
        "Design interactions that feel natural",
        "Improve task completion and satisfaction",
      ],
    },
    {
      title: "Prototype & Handoff",
      icon: "⚡",
      subpara: "Production-ready design systems and developer-friendly handoff",
      icones: ["🎨", "🔍", "🧩", "⚡"],
      features: [
        "Build clickable prototypes for validation",
        "Prepare organized files for development",
        "Reduce confusion between design and engineering",
      ],
    },
  ],

  developmenttool: {
    title: "UI/UX Design Tools",
    description:
      "We use modern design and prototyping tools to craft user-friendly, visually strong interfaces and product experiences.",
    unorderlist: [
      "Research-backed design decisions",
      "Interactive prototyping",
      "Scalable design systems",
      "Developer-ready handoff",
    ],
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

  processsteps: [
    {
      step: "01",
      title: "Research & Discovery",
      duration: "Week 1",
      whatHappens: [
        "Understand business goals and user needs",
        "Audit existing flows and pain points",
        "Define design direction and priorities",
      ],
      clientRequirements: [
        "Share product goals and target audience",
        "Provide brand assets and references",
        "Approve scope and priorities",
      ],
    },
    {
      step: "02",
      title: "Wireframes & User Flows",
      duration: "Week 2",
      whatHappens: [
        "Map user journeys and screen structures",
        "Create low-fidelity wireframes",
        "Validate usability before visual design",
      ],
      clientRequirements: [
        "Review flow logic",
        "Approve layout direction",
        "Provide workflow feedback",
      ],
    },
    {
      step: "03",
      title: "Visual Design & Prototype",
      duration: "Week 3-4",
      whatHappens: [
        "Design polished screens and components",
        "Create interactive prototypes",
        "Refine experience through iterations",
      ],
      clientRequirements: [
        "Review visual direction",
        "Approve prototype interactions",
        "Consolidate stakeholder feedback",
      ],
    },
    {
      step: "04",
      title: "Testing & Handoff",
      duration: "Week 5+",
      whatHappens: [
        "Test usability and gather insights",
        "Prepare final design system and assets",
        "Support handoff to development team",
      ],
      clientRequirements: [
        "Approve final screens",
        "Confirm handoff package",
        "Coordinate developer review",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Designed user-centric digital experiences focused on clarity, usability, and business impact.",
      image: "/img/ui-ux-design.webp",
      tags: ["UI/UX Design", "UX Research"],
      featured: true,
    },
  ],

  testimonal: uiUxDesignTestimonials,
  faq: uiux,

  comparisonData: {
    withoutUs: [
      "Confusing Navigation",
      "Low Engagement",
      "High Drop-Off Rates",
      "Poor Usability",
      "Inconsistent UI",
      "Frustrated Users",
    ],
    withUs: [
      "Clear User Journeys",
      "Better Engagement",
      "Improved Retention",
      "Intuitive Interfaces",
      "Consistent Design Systems",
      "Higher User Satisfaction",
    ],
  },

  Guarantee: [
    {
      title: "User-Focused Design Promise",
      desc: "Every design decision is made to improve usability, clarity, and business outcomes.",
    },
    {
      title: "Prototype Before Build",
      desc: "You’ll see and validate the experience before development begins, reducing risk and rework.",
    },
    {
      title: "Consistent Design Systems",
      desc: "We create organized and scalable systems that support long-term product growth.",
    },
    {
      title: "Developer-Ready Handoff",
      desc: "Your team receives structured, implementation-ready files for smoother development.",
    },
  ],
},

"mvp-development": {
  heroSection: {
    heroTitle: "MVP Development That Helps You",
    subtitle: "Launch and Validate Faster",
    description:
      "We build lean, scalable MVPs that help startups and businesses validate ideas quickly, reduce risk, and reach the market faster.",
    cta: "Book Your Free Consultation Now",
    image: "/img/mobile-app-design.webp",
    imageText: "Get your MVP estimate in 72 hours",
  },

  Stoplosing: {
    header: {
      title: "Stop Losing Time on",
      subtitle: {
        part1: "Overbuilt & Delayed",
        part2: "Product Launches",
      },
    },
    stats: [
      { value: "60%", label: "Startups fail from building the wrong features" },
      { value: "3x", label: "Faster validation reduces waste and risk" },
      { value: "70%", label: "Early feedback improves product direction" },
      { value: "50%", label: "Lean launches save major development cost" },
    ],
    cta: {
      heading: "Take Action Today",
      description: {
        part1: "Get your personalized MVP roadmap in 48 hours.",
        part2:
          "We’ll identify your core features, launch strategy, and fastest path to user validation.",
      },
      buttonText: "Get Free Audit",
      securityNote: "Secure process. No credit card required.",
    },
  },

  BenefitsSectiontext: [
    {
      title: "Lean Product Strategy",
      Icon: "/img/mobile-app-design.webp",
      bullets: [
        "Faster Go-To-Market",
        "Core Feature Prioritization",
        "Reduced Build Waste",
        "Validation-Focused Planning",
      ],
    },
    {
      title: "Scalable Foundation",
      Icon: "/img/web-development.webp",
      bullets: [
        "Future-Ready Architecture",
        "Flexible Tech Stack",
        "Clean Development Approach",
        "Growth-Ready Codebase",
      ],
    },
    {
      title: "Feedback-Driven Iteration",
      Icon: "/img/web-design.webp",
      bullets: [
        "Real User Validation",
        "Faster Product Learning",
        "Iteration Based on Data",
        "Smarter Roadmap Decisions",
      ],
    },
  ],

  Ourservices: [
    {
      title: "Product Strategy & Ideation",
      icon: "🧠",
      subpara: "Define the smallest valuable product that solves the right problem",
      icones: ["🧠", "🚀", "🛠️", "📈"],
      features: [
        "Prioritize must-have features only",
        "Align product scope with user needs",
        "Reduce time and budget waste",
      ],
    },
    {
      title: "MVP Design & Development",
      icon: "🚀",
      subpara: "Build a functional MVP fast without compromising future scalability",
      icones: ["🧠", "🚀", "🛠️", "📈"],
      features: [
        "Develop a lean product for quick release",
        "Balance speed with product quality",
        "Create a foundation for future expansion",
      ],
    },
    {
      title: "Rapid Testing & Validation",
      icon: "🛠️",
      subpara: "Launch quickly and gather real-world insight from users",
      icones: ["🧠", "🚀", "🛠️", "📈"],
      features: [
        "Validate assumptions with real users",
        "Identify what should improve next",
        "Reduce product risk with market feedback",
      ],
    },
    {
      title: "Growth Roadmap Planning",
      icon: "📈",
      subpara: "Turn MVP feedback into a practical product evolution plan",
      icones: ["🧠", "🚀", "🛠️", "📈"],
      features: [
        "Translate feedback into roadmap priorities",
        "Plan features based on validated demand",
        "Support long-term product growth",
      ],
    },
  ],

  developmenttool: {
    title: "MVP Development Tools",
    description:
      "We use flexible frameworks and rapid development tools to launch MVPs quickly while keeping them scalable.",
    unorderlist: [
      "Fast build cycles",
      "Scalable technical foundation",
      "Lean product delivery",
      "Validation-first approach",
    ],
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

  processsteps: [
    {
      step: "01",
      title: "Discovery & Prioritization",
      duration: "Week 1",
      whatHappens: [
        "Define problem, audience, and business goal",
        "Prioritize core MVP features",
        "Choose the fastest suitable tech stack",
      ],
      clientRequirements: [
        "Share idea, goals, and user problem",
        "Help rank features by importance",
        "Approve MVP scope",
      ],
    },
    {
      step: "02",
      title: "Prototype & Planning",
      duration: "Week 2",
      whatHappens: [
        "Map product flow and wireframes",
        "Validate the concept before heavy build work",
        "Finalize roadmap for initial launch",
      ],
      clientRequirements: [
        "Review wireframes",
        "Confirm priority journeys",
        "Approve development plan",
      ],
    },
    {
      step: "03",
      title: "Build & Launch",
      duration: "Week 3-6",
      whatHappens: [
        "Develop the MVP rapidly",
        "Test key flows and product stability",
        "Prepare for live user launch",
      ],
      clientRequirements: [
        "Review weekly progress",
        "Validate feature delivery",
        "Approve launch readiness",
      ],
    },
    {
      step: "04",
      title: "Feedback & Iteration",
      duration: "Week 7+",
      whatHappens: [
        "Track user adoption and feedback",
        "Identify improvements and opportunities",
        "Build the post-MVP roadmap",
      ],
      clientRequirements: [
        "Share user feedback",
        "Review analytics and findings",
        "Approve next-phase priorities",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "MVP Development",
      description:
        "Built a launch-ready MVP focused on speed, validation, and future scalability.",
      image: "/img/mobile-app-design.webp",
      tags: ["MVP Development", "MVP Support"],
      featured: true,
    },
  ],

  testimonal: mvpDevTestimonials,
  faq: mvp,

  comparisonData: {
    withoutUs: [
      "Overbuilt Features",
      "Slow Time To Market",
      "High Initial Costs",
      "Weak Product Validation",
      "Poor Roadmap Clarity",
      "Missed Market Feedback",
    ],
    withUs: [
      "Lean Product Scope",
      "Faster Launch Cycles",
      "Smarter Budget Use",
      "Real User Validation",
      "Clear Product Direction",
      "Scalable Next Steps",
    ],
  },

  Guarantee: [
    {
      title: "Lean Launch Promise",
      desc: "We focus only on what is needed to validate your product and launch quickly.",
    },
    {
      title: "Scalable MVP Foundation",
      desc: "Your MVP is built to support future improvements without starting over.",
    },
    {
      title: "Validation-Driven Delivery",
      desc: "Every milestone is aligned with testing assumptions and learning from real users.",
    },
    {
      title: "Clear Roadmap Guarantee",
      desc: "You leave with both a launched MVP and a practical plan for what comes next.",
    },
  ],
},

"app-maintenance": {
  heroSection: {
    heroTitle: "App Maintenance That Keeps Your Product",
    subtitle: "Stable, Secure, and Growing",
    description:
      "We provide ongoing maintenance, monitoring, and optimization to keep your web and mobile applications secure, updated, and performing at their best.",
    cta: "Book Your Free Consultation Now",
    image: "/img/mobile-app-design.webp",
    imageText: "Get your app maintenance estimate in 72 hours",
  },

  Stoplosing: {
    header: {
      title: "Stop Losing Users to",
      subtitle: {
        part1: "Bugs, Downtime &",
        part2: "Security Risks",
      },
    },
    stats: [
      { value: "88%", label: "Users leave products after repeated issues" },
      { value: "60%", label: "Crashes and bugs reduce trust quickly" },
      { value: "24/7", label: "Apps need continuous monitoring and support" },
      { value: "3x", label: "Preventive maintenance reduces larger failures" },
    ],
    cta: {
      heading: "Take Action Today",
      description: {
        part1: "Get your personalized maintenance audit in 48 hours.",
        part2:
          "We’ll review your current app health, identify technical risks, and recommend the right maintenance plan.",
      },
      buttonText: "Get Free Audit",
      securityNote: "Secure process. No credit card required.",
    },
  },

  BenefitsSectiontext: [
    {
      title: "Reliable Performance",
      Icon: "/img/mobile-app-design.webp",
      bullets: [
        "Continuous Monitoring",
        "Faster Issue Detection",
        "Performance Optimization",
        "Reduced Downtime",
      ],
    },
    {
      title: "Security & Stability",
      Icon: "/img/web-development.webp",
      bullets: [
        "Regular Security Updates",
        "Bug Fixes",
        "Risk Prevention",
        "Long-Term Stability",
      ],
    },
    {
      title: "Ongoing Product Improvement",
      Icon: "/img/web-design.webp",
      bullets: [
        "Feature Enhancements",
        "Version Updates",
        "Maintenance Planning",
        "Technical Support",
      ],
    },
  ],

  Ourservices: [
    {
      title: "App Updates & Enhancements",
      icon: "🔄",
      subpara: "Keep your app current with regular improvements and upgrades",
      icones: ["🔄", "🔒", "🐞", "📊"],
      features: [
        "Roll out improvements without disruption",
        "Keep features relevant and up to date",
        "Support changing business and user needs",
      ],
    },
    {
      title: "Security & Performance Optimization",
      icon: "🔒",
      subpara: "Protect and optimize your app through proactive maintenance",
      icones: ["🔄", "🔒", "🐞", "📊"],
      features: [
        "Identify and reduce security risks",
        "Improve speed and reliability",
        "Maintain platform compatibility",
      ],
    },
    {
      title: "Bug Fixes & Issue Resolution",
      icon: "🐞",
      subpara: "Resolve technical problems before they impact your users",
      icones: ["🔄", "🔒", "🐞", "📊"],
      features: [
        "Track and fix bugs quickly",
        "Reduce recurring technical problems",
        "Improve user trust and product stability",
      ],
    },
    {
      title: "Monitoring & Support",
      icon: "📊",
      subpara: "Maintain visibility into product health with ongoing support",
      icones: ["🔄", "🔒", "🐞", "📊"],
      features: [
        "Monitor uptime and system health",
        "Respond quickly to incidents",
        "Support long-term app performance",
      ],
    },
  ],

  developmenttool: {
    title: "App Maintenance Tools",
    description:
      "We use monitoring, analytics, and diagnostics tools to keep your application secure, healthy, and optimized.",
    unorderlist: [
      "Real-time issue monitoring",
      "Security-first maintenance",
      "Performance tracking",
      "Continuous optimization",
    ],
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

  processsteps: [
    {
      step: "01",
      title: "Audit & Assessment",
      duration: "Week 1",
      whatHappens: [
        "Review current app performance and issues",
        "Assess infrastructure, code, and dependencies",
        "Identify high-risk technical gaps",
      ],
      clientRequirements: [
        "Provide codebase or access details",
        "Share known issues and priorities",
        "Approve maintenance scope",
      ],
    },
    {
      step: "02",
      title: "Stabilization Plan",
      duration: "Week 2",
      whatHappens: [
        "Prioritize bugs, updates, and vulnerabilities",
        "Define maintenance workflow",
        "Prepare monitoring and reporting setup",
      ],
      clientRequirements: [
        "Review issue priority list",
        "Confirm maintenance goals",
        "Approve support plan",
      ],
    },
    {
      step: "03",
      title: "Fixes & Optimization",
      duration: "Week 3-4",
      whatHappens: [
        "Resolve bugs and technical issues",
        "Apply updates and optimizations",
        "Improve performance and reliability",
      ],
      clientRequirements: [
        "Review progress reports",
        "Test fixes on staging or production",
        "Approve completed changes",
      ],
    },
    {
      step: "04",
      title: "Ongoing Monitoring & Support",
      duration: "Week 5+",
      whatHappens: [
        "Monitor app health continuously",
        "Respond to incidents and issues",
        "Recommend future improvements",
      ],
      clientRequirements: [
        "Define support escalation process",
        "Review monthly maintenance reports",
        "Approve future enhancement priorities",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "App Maintenance",
      description:
        "Provided continuous monitoring, bug fixing, updates, and optimization for long-term product stability.",
      image: "/img/mobile-app-design.webp",
      tags: ["App Maintenance", "App Support"],
      featured: true,
    },
  ],

  testimonal: appMaintenanceTestimonials,
  faq: appmaintenance,

  comparisonData: {
    withoutUs: [
      "Frequent Bugs",
      "Unexpected Downtime",
      "Slow Performance",
      "Security Vulnerabilities",
      "Delayed Fixes",
      "User Frustration",
    ],
    withUs: [
      "Stable App Performance",
      "Ongoing Monitoring",
      "Faster Issue Resolution",
      "Improved Security",
      "Regular Updates",
      "Better User Retention",
    ],
  },

  Guarantee: [
    {
      title: "Proactive Maintenance Promise",
      desc: "We identify and address issues before they become major product failures.",
    },
    {
      title: "Performance Stability Guarantee",
      desc: "Your app is continuously monitored and optimized for reliability and usability.",
    },
    {
      title: "Security-First Support",
      desc: "We prioritize updates, fixes, and protection against common technical vulnerabilities.",
    },
    {
      title: "Ongoing Support Commitment",
      desc: "You receive continuous technical support and maintenance planning, not just one-time fixes.",
    },
  ],
},

"chatgpt-development": {
  heroSection: {
    heroTitle: "ChatGPT Development That",
    subtitle: "Automates and Scales Conversations",
    description:
      "We build AI-powered conversational products that improve support, streamline workflows, and create better customer interactions at scale.",
    cta: "Book Your Free Consultation Now",
    image: "/img/mobile-app-design.webp",
    imageText: "Get your ChatGPT solution estimate in 72 hours",
  },

  Stoplosing: {
    header: {
      title: "Stop Losing Time to",
      subtitle: {
        part1: "Manual Support &",
        part2: "Slow Responses",
      },
    },
    stats: [
      { value: "24/7", label: "AI support can serve users around the clock" },
      { value: "60%", label: "Automation reduces repetitive support work" },
      { value: "3x", label: "Faster responses improve customer satisfaction" },
      { value: "70%", label: "AI workflows improve team efficiency" },
    ],
    cta: {
      heading: "Take Action Today",
      description: {
        part1: "Get your personalized AI audit in 48 hours.",
        part2:
          "We’ll review your use case and show how conversational AI can reduce cost, improve speed, and scale support.",
      },
      buttonText: "Get Free Audit",
      securityNote: "Secure process. No credit card required.",
    },
  },

  BenefitsSectiontext: [
    {
      title: "Smarter Automation",
      Icon: "/img/mobile-app-design.webp",
      bullets: [
        "Automated Support Flows",
        "Reduced Manual Work",
        "Faster Response Times",
        "Improved Efficiency",
      ],
    },
    {
      title: "Better User Experience",
      Icon: "/img/web-design.webp",
      bullets: [
        "Natural Conversations",
        "Context-Aware Replies",
        "Always-On Availability",
        "Consistent Interactions",
      ],
    },
    {
      title: "Scalable AI Solutions",
      Icon: "/img/web-development.webp",
      bullets: [
        "System Integrations",
        "Multi-Use Case Support",
        "Flexible Deployment",
        "Business Process Optimization",
      ],
    },
  ],

  Ourservices: [
    {
      title: "Custom Chatbot Development",
      icon: "🤖",
      subpara: "AI assistants tailored to your workflows, users, and business needs",
      icones: ["🤖", "🔗", "🧠", "📈"],
      features: [
        "Build customized conversational assistants",
        "Automate support and lead handling",
        "Tailor responses to your business context",
      ],
    },
    {
      title: "Integration with Existing Systems",
      icon: "🔗",
      subpara: "Connect AI with your internal tools, websites, and business systems",
      icones: ["🤖", "🔗", "🧠", "📈"],
      features: [
        "Integrate with CRMs, support tools, and internal systems",
        "Automate workflows across platforms",
        "Improve data access and operational speed",
      ],
    },
    {
      title: "Conversational AI Solutions",
      icon: "🧠",
      subpara: "Deploy intelligent AI experiences for support, sales, and operations",
      icones: ["🤖", "🔗", "🧠", "📈"],
      features: [
        "Design AI for multiple business use cases",
        "Improve interaction quality with structured prompts and logic",
        "Support internal and customer-facing workflows",
      ],
    },
    {
      title: "Optimization & Analytics",
      icon: "📈",
      subpara: "Continuously improve AI quality through monitoring and iteration",
      icones: ["🤖", "🔗", "🧠", "📈"],
      features: [
        "Track usage and performance",
        "Improve outputs over time",
        "Align AI outcomes with business goals",
      ],
    },
  ],

  developmenttool: {
    title: "ChatGPT Development Tools",
    description:
      "We use leading conversational AI platforms and NLP tools to build intelligent automation and assistant experiences.",
    unorderlist: [
      "AI workflow automation",
      "Context-aware conversations",
      "Business system integration",
      "Continuous optimization",
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

  processsteps: [
    {
      step: "01",
      title: "Use Case Discovery",
      duration: "Week 1",
      whatHappens: [
        "Identify automation opportunities",
        "Define user journeys and assistant goals",
        "Select the right AI architecture",
      ],
      clientRequirements: [
        "Share workflows and pain points",
        "Define success metrics",
        "Approve use case scope",
      ],
    },
    {
      step: "02",
      title: "Conversation Design",
      duration: "Week 2",
      whatHappens: [
        "Design prompts, logic, and flow structure",
        "Map fallback and escalation paths",
        "Prototype the assistant experience",
      ],
      clientRequirements: [
        "Review conversation flows",
        "Approve tone and response style",
        "Confirm business rules",
      ],
    },
    {
      step: "03",
      title: "Development & Integration",
      duration: "Week 3-5",
      whatHappens: [
        "Build and configure the AI solution",
        "Integrate with required systems",
        "Test reliability, accuracy, and workflow fit",
      ],
      clientRequirements: [
        "Provide API or system access",
        "Validate integration needs",
        "Approve testing milestones",
      ],
    },
    {
      step: "04",
      title: "Launch & Optimization",
      duration: "Week 6+",
      whatHappens: [
        "Deploy the assistant into production",
        "Monitor conversations and usage",
        "Improve quality based on real interactions",
      ],
      clientRequirements: [
        "Approve launch readiness",
        "Review usage reports",
        "Align on iteration priorities",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "ChatGPT Development",
      description:
        "Built an AI-powered conversational solution designed to automate interactions and improve operational efficiency.",
      image: "/img/mobile-app-design.webp",
      tags: ["ChatGPT Development", "ChatGPT Integration"],
      featured: true,
    },
  ],

  testimonal: chatGptDevTestimonials,
  faq: chatgpt,

  comparisonData: {
    withoutUs: [
      "Manual Support Work",
      "Slow Response Times",
      "Inconsistent Customer Replies",
      "High Support Cost",
      "Missed Automation Opportunities",
      "Low Operational Efficiency",
    ],
    withUs: [
      "AI-Powered Automation",
      "Faster User Responses",
      "Consistent Conversations",
      "Lower Support Load",
      "Smarter Workflow Integration",
      "Scalable Efficiency",
    ],
  },

  Guarantee: [
    {
      title: "Use-Case Focused Delivery",
      desc: "We build AI solutions around clear business workflows, not generic chatbot demos.",
    },
    {
      title: "Integration-Ready Architecture",
      desc: "Your ChatGPT solution is designed to work with your existing systems and processes.",
    },
    {
      title: "Optimization Promise",
      desc: "We monitor and refine assistant performance to improve quality after launch.",
    },
    {
      title: "Scalable AI Foundation",
      desc: "Your solution is built to support future automation, expansion, and new use cases.",
    },
  ],
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

    Ourservices : [
  {
    title: "Business-First Approach",
    icon: "🎯",
    subpara: "Tailored, responsive websites designed to reflect your brand",
    icones: ["🎯", "⚡", "🛡️", "📊"],
    features: [
      "Don't just build pretty websites – build profit-generating machines",
      "Every design decision based on conversion data, not personal preference",
      "Focus on ROI and measurable business impact",
    ],
  },
  {
    title: "Same-Day Communication",
    icon: "⚡",
    subpara:
      "Secure, scalable platforms for smooth online shopping experiences",
    icones: ["🎯", "⚡", "🛡️", "📊"],
    features: [
      "Questions answered within 4 hours, not 4 days",
      "Emergency support available 24/7",
      "Direct access to your developer (no account managers)",
    ],
  },
  {
    title: "No-Excuses Guarantee",
    icon: "🛡️",
    subpara:
      "Robust web apps ensuring efficiency, scalability, and performance",
    icones: ["🎯", "⚡", "🛡️", "📊"],
    features: [
      "Miss deadline = next milestone free",
      "No ROI improvement in 90 days = free work until you get results",
      "Bug-free guarantee with immediate fixes",
    ],
  },
  {
    title: "ROI-Focused Results",
    icon: "📊",
    subpara:
      "Reliable updates, monitoring, and round-the-clock technical support",
    icones: ["🎯", "⚡", "🛡️", "📊"],
    features: [
      "Measure success by business metrics: leads, conversion rates, reduced costs",
      "If it doesn’t impact your bottom line, we don’t build it",
      "Regular performance reporting and optimization",
    ],
  },
],

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
      technologiesused: [
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
    Guarantee: [
      {
        title: "30-Day Launch Promise",
        desc: "Your website goes live within 30 days of project start, or you receive 50% of your final invoice.",
      },
      {
        title: "100% Satisfaction Guarantee",
        desc: "We’ll work with you until you’re completely happy with your website, or we’ll refund your investment.",
      },
      {
        title: "90-Day Support Included",
        desc: "Full technical support, training, and minor updates included for 90 days after launch.",
      },
      {
        title: "Performance Promise",
        desc: "Your website will load in under 3 seconds and work perfectly on all devices, guaranteed.",
      },
    ]
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
