import {
  fintechFaq,
  taxiBookingFaq,
  groceryFaq,
  foodOrderingFaq,
  healthcareFaq,
  fitnessFaq,
  socialMediaFaq,
  datingFaq,
} from "@/utils/solutiondynamic/faqdynamic";

import {
  webAppDevTestimonials,
  mobileAppDevTestimonials,
  fintechTestimonials,
  taxiTestimonials,
  groceryTestimonials,
  foodOrderingTestimonials,
  healthcareTestimonials,
  fitnessTestimonials,
  socialMediaTestimonials,
  datingTestimonials,
} from "@/utils/solutiondynamic/testimonal";

export const solutionData = {
  "fintech-app-development": {
    heroSection: {
      heroTitle: "Fintech App Development That",
      subtitle: "Builds Trust, Security, and Scale",
      description:
        "We create secure and high-performance fintech applications that simplify payments, improve customer experience, and support long-term business growth.",
      cta: "Book Your Free Consultation Now",
       image: "/img/svgviewer.svg",
      imageText: "Get your custom fintech app estimate in 72 hours",
    },

    Stoplosing: {
      header: {
        title: "Stop Losing Users to",
        subtitle: {
          part1: "Slow, Insecure &",
          part2: "Outdated Fintech Products",
        },
      },
      stats: [
        { value: "88%", label: "Users expect secure digital financial experiences" },
        { value: "70%", label: "Customers abandon apps with confusing payment flows" },
        { value: "60%", label: "Poor UX reduces trust in finance products" },
        { value: "3x", label: "Better fintech UX improves user retention" },
      ],
      cta: {
        heading: "Take Action Today",
        description: {
          part1: "Get your personalized fintech product audit in 48 hours.",
          part2:
            "We’ll review your fintech idea or platform and show you what’s needed to improve usability, compliance readiness, and product performance.",
        },
        buttonText: "Get Free Audit",
        securityNote: "Secure process. No credit card required.",
      },
    },

    BenefitsSectiontext: [
      {
        title: "Security-First Development",
        Icon: "/img/fintech-app-design.webp",
        bullets: [
          "Secure Payment Flows",
          "Data Protection Best Practices",
          "Scalable App Architecture",
          "Compliance-Ready Approach",
        ],
      },
      {
        title: "Frictionless User Experience",
        Icon: "/img/mobile-app-design.webp",
        bullets: [
          "Smooth Onboarding",
          "Fast Transactions",
          "Simple Account Management",
          "Trust-Building Interfaces",
        ],
      },
      {
        title: "Growth-Focused Product Strategy",
        Icon: "/img/web-development.webp",
        bullets: [
          "Retention-Driven Features",
          "Performance Optimization",
          "Business-Centric Workflows",
          "Future-Ready Foundation",
        ],
      },
    ],

    Ourservices: [
      {
        title: "Custom Fintech App Development",
        icon: "💳",
        subpara:
          "Secure fintech platforms tailored for payments, wallets, lending, and digital finance use cases",
        icones: ["💳", "🔐", "📊", "⚡"],
        features: [
          "Build custom fintech applications for web and mobile",
          "Design products around trust, speed, and usability",
          "Support complex user journeys with a scalable architecture",
        ],
      },
      {
        title: "Payment & Wallet Solutions",
        icon: "🔐",
        subpara:
          "Reliable payment systems and digital wallet experiences built for modern users",
        icones: ["💳", "🔐", "📊", "⚡"],
        features: [
          "Create smooth transaction and wallet management flows",
          "Improve payment success and user confidence",
          "Support secure money movement across devices",
        ],
      },
      {
        title: "Analytics & User Insights",
        icon: "📊",
        subpara:
          "Track product performance and user behavior to improve financial experiences",
        icones: ["💳", "🔐", "📊", "⚡"],
        features: [
          "Measure onboarding, engagement, and transaction success",
          "Identify friction in user journeys",
          "Use insights to improve retention and growth",
        ],
      },
      {
        title: "Performance & Scalability",
        icon: "⚡",
        subpara:
          "Fintech products engineered for speed, reliability, and future expansion",
        icones: ["💳", "🔐", "📊", "⚡"],
        features: [
          "Optimize core flows for fast performance",
          "Prepare platforms for growing transaction volume",
          "Maintain stability under long-term product growth",
        ],
      },
    ],

    developmenttool: {
      title: "Fintech App Development Tools",
      description:
        "We use secure and scalable technologies to build fintech platforms that support modern financial workflows and user expectations.",
      unorderlist: [
        "Secure app architecture",
        "Scalable finance-ready systems",
        "Real-time performance optimization",
        "Cross-platform product delivery",
      ],
      technologiesused: [
        { name: "React Native", level: "Expert", icon: "⚛️", category: "Cross-platform" },
        { name: "Flutter", level: "Advanced", icon: "🐦", category: "Cross-platform" },
        { name: "Swift", level: "Advanced", icon: "🦉", category: "iOS" },
        { name: "Kotlin", level: "Advanced", icon: "🅺", category: "Android" },
        { name: "Node.js", level: "Expert", icon: "🌐", category: "Backend" },
        { name: "React", level: "Expert", icon: "⚛️", category: "Frontend" },
      ],
    },

    processsteps: [
      {
        step: "01",
        title: "Discovery & Compliance Planning",
        duration: "Week 1",
        whatHappens: [
          "Understand the business model and fintech use case",
          "Define core product features and user journeys",
          "Plan security, compliance, and platform requirements",
        ],
        clientRequirements: [
          "Share business goals and fintech use case",
          "Provide product requirements and priorities",
          "Approve scope and roadmap direction",
        ],
      },
      {
        step: "02",
        title: "UX Design & Architecture",
        duration: "Week 2-3",
        whatHappens: [
          "Design onboarding, payment, and account flows",
          "Create wireframes and user-friendly interfaces",
          "Finalize technical architecture for scale and reliability",
        ],
        clientRequirements: [
          "Review user flows and wireframes",
          "Approve design direction",
          "Confirm major product workflows",
        ],
      },
      {
        step: "03",
        title: "Development & Testing",
        duration: "Week 4-8",
        whatHappens: [
          "Build key fintech features and dashboards",
          "Integrate backend systems and APIs",
          "Test security, performance, and usability",
        ],
        clientRequirements: [
          "Review weekly progress",
          "Validate core features",
          "Approve testing milestones",
        ],
      },
      {
        step: "04",
        title: "Launch & Optimization",
        duration: "Week 9+",
        whatHappens: [
          "Deploy the product to production",
          "Monitor stability and transaction flows",
          "Improve the platform based on user behavior and feedback",
        ],
        clientRequirements: [
          "Approve launch readiness",
          "Review launch reports",
          "Align on ongoing improvements",
        ],
      },
    ],

    projects: [
      {
        id: 1,
        title: "Fintech App Design",
        description:
          "Designed and developed a secure fintech application focused on smooth transactions, user trust, and scalable financial workflows.",
        image: "/img/fintech-app-design.webp",
        tags: ["Fintech App", "Finance UX"],
        featured: true,
      },
    ],

    modalData: [
      {
        id: 1,
        title: "Fintech App Design",
        description:
          "A secure and scalable fintech application built for smooth transactions, intuitive onboarding, and modern financial user experiences.",
        techStack: [
          "React Native",
          "Node.js",
          "JavaScript",
          "Figma",
          "MongoDB",
          "CSS",
        ],
        demoLink: "https://example.com/fintech-app-demo",
        category: "Fintech Development",
      },
    ],

    testimonal: fintechTestimonials,

    faq: fintechFaq,

    comparisonData: {
      withoutUs: [
        "Poor Transaction Experience",
        "Low User Trust",
        "Weak Security Approach",
        "Confusing Financial Flows",
        "Low Retention",
        "Limited Product Scalability",
      ],
      withUs: [
        "Secure Financial Workflows",
        "Trust-Focused Product Design",
        "Better User Experience",
        "Improved Retention",
        "Scalable Fintech Infrastructure",
        "Business-Driven Growth",
      ],
    },

    Guarantee: [
      {
        title: "Security-First Delivery",
        desc: "We build fintech products with secure development practices and reliability at the core.",
      },
      {
        title: "Scalable Product Foundation",
        desc: "Your fintech application is designed to grow with increasing users, features, and business demands.",
      },
      {
        title: "UX-Driven Finance Experience",
        desc: "We create financial user journeys that improve trust, clarity, and task completion.",
      },
      {
        title: "Post-Launch Optimization Support",
        desc: "We help refine performance and product experience after launch through continuous improvement.",
      },
    ],
  },

  "taxi-booking-app-development": {
    heroSection: {
      heroTitle: "Taxi Booking App Development That",
      subtitle: "Improves Booking Speed and Rider Experience",
      description:
        "We build smart taxi booking applications with real-time tracking, seamless ride management, and scalable systems for passengers, drivers, and operators.",
      cta: "Book Your Free Consultation Now",
      image: "/img/taxi-booking-app.webp",
      imageText: "Get your custom taxi app estimate in 72 hours",
    },

    Stoplosing: {
      header: {
        title: "Stop Losing Riders to",
        subtitle: {
          part1: "Slow Booking &",
          part2: "Poor Ride Experience",
        },
      },
      stats: [
        { value: "70%", label: "Users expect fast and simple ride booking flows" },
        { value: "60%", label: "Riders leave apps with poor real-time updates" },
        { value: "88%", label: "A bad booking experience reduces repeat usage" },
        { value: "3x", label: "Better UX improves rider retention and bookings" },
      ],
      cta: {
        heading: "Take Action Today",
        description: {
          part1: "Get your personalized taxi app audit in 48 hours.",
          part2:
            "We’ll review your ride-booking idea or current platform and show how to improve booking speed, tracking, and user experience.",
        },
        buttonText: "Get Free Audit",
        securityNote: "Secure process. No credit card required.",
      },
    },

    BenefitsSectiontext: [
      {
        title: "Better Rider Experience",
        Icon: "/img/taxi-booking-app.webp",
        bullets: [
          "Fast Ride Booking",
          "Live Ride Tracking",
          "Simple Payment Flows",
          "Smooth User Journeys",
        ],
      },
      {
        title: "Driver & Admin Efficiency",
        Icon: "/img/mobile-app-design.webp",
        bullets: [
          "Driver Management",
          "Trip Monitoring",
          "Fleet Visibility",
          "Operational Control",
        ],
      },
      {
        title: "Scalable Booking Platform",
        Icon: "/img/web-development.webp",
        bullets: [
          "Real-Time Infrastructure",
          "High Availability",
          "Performance Optimization",
          "Growth-Ready Architecture",
        ],
      },
    ],

    Ourservices: [
      {
        title: "Custom Taxi Booking App Development",
        icon: "🚕",
        subpara:
          "End-to-end taxi booking applications tailored for riders, drivers, and dispatch teams",
        icones: ["🚕", "📍", "💳", "⚙️"],
        features: [
          "Build custom taxi apps for mobile and web",
          "Create rider, driver, and admin modules",
          "Support efficient trip management and booking flows",
        ],
      },
      {
        title: "Live Tracking & Dispatch",
        icon: "📍",
        subpara:
          "Real-time location tracking and trip coordination for better ride management",
        icones: ["🚕", "📍", "💳", "⚙️"],
        features: [
          "Enable real-time ride and driver tracking",
          "Improve dispatch visibility and control",
          "Reduce booking friction with live updates",
        ],
      },
      {
        title: "Payments & Booking Flows",
        icon: "💳",
        subpara:
          "Smooth booking and payment journeys built for reliability and ease of use",
        icones: ["🚕", "📍", "💳", "⚙️"],
        features: [
          "Design fast and intuitive ride booking flows",
          "Support secure in-app payment experiences",
          "Improve user trust through clear trip handling",
        ],
      },
      {
        title: "Admin Dashboard & Optimization",
        icon: "⚙️",
        subpara:
          "Operational dashboards and analytics to improve performance and business decisions",
        icones: ["🚕", "📍", "💳", "⚙️"],
        features: [
          "Monitor rides, drivers, and bookings in one place",
          "Track business and usage metrics",
          "Optimize platform performance over time",
        ],
      },
    ],

    developmenttool: {
      title: "Taxi Booking App Development Tools",
      description:
        "We use modern mobile and backend technologies to build reliable taxi booking platforms with real-time performance and smooth booking experiences.",
      unorderlist: [
        "Real-time booking systems",
        "Cross-platform app delivery",
        "Scalable backend architecture",
        "Performance-focused development",
      ],
      technologiesused: [
        { name: "React Native", level: "Expert", icon: "⚛️", category: "Cross-platform" },
        { name: "Flutter", level: "Advanced", icon: "🐦", category: "Cross-platform" },
        { name: "Swift", level: "Advanced", icon: "🦉", category: "iOS" },
        { name: "Kotlin", level: "Advanced", icon: "🅺", category: "Android" },
        { name: "Node.js", level: "Expert", icon: "🌐", category: "Backend" },
        { name: "Google Maps API", level: "Advanced", icon: "🗺️", category: "Tracking" },
      ],
    },

    processsteps: [
      {
        step: "01",
        title: "Discovery & Feature Planning",
        duration: "Week 1",
        whatHappens: [
          "Define rider, driver, and admin requirements",
          "Map booking, dispatch, and payment workflows",
          "Plan the technical foundation for real-time performance",
        ],
        clientRequirements: [
          "Share business model and target audience",
          "Define priority features",
          "Approve project scope and roadmap",
        ],
      },
      {
        step: "02",
        title: "UX Design & Prototype",
        duration: "Week 2-3",
        whatHappens: [
          "Design user-friendly booking and trip flows",
          "Create wireframes and interactive prototypes",
          "Finalize experience for riders, drivers, and operators",
        ],
        clientRequirements: [
          "Review user journeys",
          "Approve design direction",
          "Confirm key booking workflows",
        ],
      },
      {
        step: "03",
        title: "Development & Testing",
        duration: "Week 4-8",
        whatHappens: [
          "Develop the mobile app and backend systems",
          "Integrate real-time tracking and payments",
          "Test booking reliability, app performance, and usability",
        ],
        clientRequirements: [
          "Review progress updates",
          "Validate key features",
          "Approve staging milestones",
        ],
      },
      {
        step: "04",
        title: "Launch & Ongoing Support",
        duration: "Week 9+",
        whatHappens: [
          "Deploy the platform to production",
          "Monitor ride activity and system stability",
          "Support improvements based on user feedback and usage",
        ],
        clientRequirements: [
          "Approve launch readiness",
          "Review usage reports",
          "Align on future updates",
        ],
      },
    ],

    projects: [
      {
        id: 1,
        title: "Taxi Booking System",
        description:
          "Built a real-time taxi booking platform with rider booking, driver tracking, trip management, and smooth payment flows.",
        image: "/img/taxi-booking-app.webp",
        tags: ["Taxi Booking", "Ride App"],
        featured: true,
      },
    ],

    modalData: [
      {
        id: 1,
        title: "Taxi Booking System",
        description:
          "A real-time taxi booking application with rider booking, driver tracking, admin controls, and optimized ride management workflows.",
        techStack: [
          "React Native",
          "Node.js",
          "Google Maps API",
          "JavaScript",
          "MongoDB",
          "Figma",
        ],
        demoLink: "https://example.com/taxi-booking-demo",
        category: "Taxi App Development",
      },
    ],

    testimonal: mobileAppDevTestimonials,

    faq: taxiBookingFaq,

    comparisonData: {
      withoutUs: [
        "Slow Booking Flow",
        "Poor Tracking Experience",
        "Low Rider Retention",
        "Operational Confusion",
        "Weak Driver Coordination",
        "Limited Scalability",
      ],
      withUs: [
        "Fast Ride Booking",
        "Live Driver Tracking",
        "Better Rider Experience",
        "Improved Trip Management",
        "Stronger Operational Control",
        "Scalable Platform Growth",
      ],
    },

    Guarantee: [
      {
        title: "Real-Time Performance Promise",
        desc: "Your taxi booking platform is built for smooth booking, fast updates, and reliable trip handling.",
      },
      {
        title: "User Experience Guarantee",
        desc: "We design rider and driver journeys to reduce friction and improve repeat usage.",
      },
      {
        title: "Scalable Booking Infrastructure",
        desc: "Your platform is prepared for business growth, increased rides, and expanding operational needs.",
      },
      {
        title: "Post-Launch Support Included",
        desc: "We continue to support and optimize your taxi app after launch for long-term performance.",
      },
    ],
  },

  "grocery-app-development": {
    hero: {
      title: "Grocery App Development",
      description:
        "We build feature-rich grocery delivery apps that help businesses streamline operations, improve customer experience, and increase sales through efficient online grocery management and delivery solutions.",
      image: "/img/grocery-app-hero.webp",
      tags: ["Grocery App", "E-Commerce", "Delivery"],
    },

    whyUs: {
      title: "Why Choose Us for Grocery App Development?",
      description:
        "Our team has extensive experience in building scalable grocery delivery platforms with features like real-time order tracking, inventory management, and seamless payment integration.",
      points: [
        "Proven track record in e-commerce and delivery app development",
        "Expertise in grocery-specific features like inventory and order management",
        "Focus on performance, scalability, and user experience",
        "End-to-end development from planning to deployment and support",
      ],
    },

    keyFeatures: {
      title: "Key Features of Our Grocery Apps",
      description:
        "We build comprehensive grocery apps with features that enhance customer experience and streamline operations.",
      features: [
        {
          title: "Product Catalog & Search",
          icon: "🛒",
          subpara:
            "Organized product listings with powerful search and filtering capabilities",
          icones: ["🛒", "🔍", "💳", "⚙️"],
          features: [
            "Build searchable product catalogs with categories and filters",
            "Enable smart search and product recommendations",
            "Support product variations and pricing options",
          ],
        },
        {
          title: "Real-Time Order Tracking",
          icon: "📍",
          subpara:
            "Live tracking of orders from placement to delivery for enhanced transparency",
          icones: ["🛒", "🔍", "💳", "⚙️"],
          features: [
            "Enable real-time order status updates",
            "Provide live delivery tracking on maps",
            "Improve customer satisfaction through transparency",
          ],
        },
        {
          title: "Inventory Management",
          icon: "📦",
          subpara:
            "Real-time inventory tracking and stock management for businesses",
          icones: ["🛒", "🔍", "💳", "⚙️"],
          features: [
            "Track product stock levels in real-time",
            "Automate low-stock alerts and reordering",
            "Manage product variations and availability",
          ],
        },
        {
          title: "Payments & Checkout",
          icon: "💳",
          subpara:
            "Secure and seamless payment integration for easy transactions",
          icones: ["🛒", "🔍", "💳", "⚙️"],
          features: [
            "Integrate multiple payment gateways",
            "Support secure checkout flows",
            "Enable order management and history",
          ],
        },
      ],
    },

    developmenttool: {
      title: "Grocery App Development Tools",
      description:
        "We use modern technologies to build scalable and feature-rich grocery delivery platforms with real-time performance and seamless user experiences.",
      unorderlist: [
        "Scalable E-Commerce Architecture",
        "Real-Time Inventory Management",
        "Seamless Payment Integration",
        "Performance-Optimized Delivery Tracking",
      ],
      technologiesused: [
        { name: "React Native", level: "Expert", icon: "⚛️", category: "Cross-platform" },
        { name: "Flutter", level: "Advanced", icon: "🐦", category: "Cross-platform" },
        { name: "Node.js", level: "Expert", icon: "🌐", category: "Backend" },
        { name: "MongoDB", level: "Advanced", icon: "🗄️", category: "Database" },
        { name: "Stripe API", level: "Advanced", icon: "💳", category: "Payments" },
        { name: "Google Maps API", level: "Advanced", icon: "🗺️", category: "Tracking" },
      ],
    },

    processsteps: [
      {
        step: "01",
        title: "Discovery & Feature Planning",
        duration: "Week 1",
        whatHappens: [
          "Define business goals and target audience",
          "Map product catalog and inventory structure",
          "Plan order management and delivery workflows",
        ],
        clientRequirements: [
          "Share business model and product details",
          "Define priority features",
          "Approve project scope and roadmap",
        ],
      },
      {
        step: "02",
        title: "UX Design & Prototype",
        duration: "Week 2-3",
        whatHappens: [
          "Design intuitive product browsing and search flows",
          "Create seamless checkout and payment experiences",
          "Develop order tracking and management interfaces",
        ],
        clientRequirements: [
          "Review user journeys",
          "Approve design direction",
          "Confirm key workflows",
        ],
      },
      {
        step: "03",
        title: "Development & Testing",
        duration: "Week 4-8",
        whatHappens: [
          "Develop the mobile app and backend systems",
          "Integrate inventory management and payment gateways",
          "Test order tracking, scalability, and performance",
        ],
        clientRequirements: [
          "Review progress updates",
          "Validate features",
          "Approve staging milestones",
        ],
      },
      {
        step: "04",
        title: "Launch & Ongoing Support",
        duration: "Week 9+",
        whatHappens: [
          "Deploy the platform to production",
          "Monitor orders, inventory, and delivery performance",
          "Support updates based on user feedback and business needs",
        ],
        clientRequirements: [
          "Approve launch readiness",
          "Review performance metrics",
          "Align on future enhancements",
        ],
      },
    ],

    projects: [
      {
        id: 1,
        title: "Online Grocery Delivery App",
        description:
          "Built a comprehensive grocery delivery platform with product catalog, real-time order tracking, inventory management, and secure payment integration.",
        image: "/img/grocery-delivery-app.webp",
        tags: ["Grocery App", "E-Commerce", "Delivery"],
        featured: true,
      },
    ],

    modalData: [
      {
        id: 1,
        title: "Online Grocery Delivery App",
        description:
          "A comprehensive grocery delivery platform with product catalog, real-time order tracking, inventory management, and seamless payment integration.",
        techStack: [
          "React Native",
          "Node.js",
          "MongoDB",
          "Stripe API",
          "JavaScript",
          "Figma",
        ],
        demoLink: "https://example.com/grocery-app-demo",
        category: "E-Commerce App Development",
      },
    ],

    testimonal: groceryTestimonials,

    faq: groceryFaq,

    comparisonData: {
      withoutUs: [
        "Slow Order Processing",
        "Poor Inventory Visibility",
        "Inconsistent Delivery Tracking",
        "Limited Payment Options",
        "Poor Customer Experience",
        "Scalability Challenges",
      ],
      withUs: [
        "Fast Order Processing",
        "Real-Time Inventory Tracking",
        "Reliable Delivery Tracking",
        "Multiple Payment Options",
        "Enhanced Customer Experience",
        "Scalable Platform Growth",
      ],
    },

    Guarantee: [
      {
        title: "Real-Time Performance Promise",
        desc: "Your grocery platform is built for fast order processing, real-time inventory updates, and reliable delivery tracking.",
      },
      {
        title: "User Experience Guarantee",
        desc: "We design seamless browsing, checkout, and order tracking experiences to improve customer satisfaction and retention.",
      },
      {
        title: "Scalable Architecture",
        desc: "Your grocery platform is built to handle business growth, increased orders, and expanding inventory needs.",
      },
      {
        title: "Post-Launch Support Included",
        desc: "We continue to support and optimize your grocery app after launch for long-term performance.",
      },
    ],
  },
  
};
