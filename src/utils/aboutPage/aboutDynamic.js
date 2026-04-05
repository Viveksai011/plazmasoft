 import {
   
   Monitor as WebIcon,

   CircleCheck,
   Gauge,
   Waypoints,
   Smartphone,
   CalendarSync,
   ShieldPlus,
 } from "lucide-react";
 const problems = [
    {
      icon: "🚀",
      title: "Outdated Website Hurting Your Business",
      problem:
        "Your website looks outdated, loads slowly, and doesn't convert visitors.",
      solution:
        "We develop modern mobile-first designs optimized for speed and conversion-focused elements that turn visitors into customers.",
    },
    {
      icon: "💼",
      title: "Manual Processes Wasting Time & Money",
      problem:
        "Your team spends hours on repetitive tasks that could be automated.",
      solution:
        "We develop custom automation solutions that streamline your workflows, integrate your systems, and free up your team to focus on growth activities.",
    },
    {
      icon: "📈",
      title: "Poor Online Visibility",
      problem:
        "Your competitors are ranking higher and getting more online business.",
      solution:
        "We build optimized websites, implement proper analytics, and create digital marketing strategies that improve your online presence and drive qualified leads.",
    },
    {
      icon: "🤯",
      title: "Technology Overwhelm",
      problem:
        "You know you need better tech solutions but don't know where to start.",
      solution:
        "We provide free technology audits, create clear roadmaps, and implement solutions in phases that fit your budget and timeline.",
    },
  ];

  const PracticalTips = [
    {
      icon: Gauge,
      title: "Optimize Your Website Speed",
      description: "Action",
      features: [
        "Use Google PageSpeed Insights to test your site.",
        "Compress images, enable caching, and remove unnecessary plugins.",

        "A 1-second delay can reduce conversions by 7%.",
      ],
    },
    {
      icon: WebIcon,
      title: "Implement Clear CTAs",
      description: "Action",
      features: [
        "Every page should have one primary call-to-action. ",
        `Use action words like "Get Started," "Download Now," or "Schedule Demo" instead of generic "Click Here."`,
      ],
    },
    {
      icon: Waypoints,
      title: "Set Up Proper Analytics",
      description: "Action",
      features: [
        "Install Google Analytics 4 and set up conversion goals.",
        "Track which pages convert best and which sources bring quality traffic to optimize your marketing spend.",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Action",
      features: [
        "Over 60% of users browse on mobile.",
        "Test your site on different devices and ensure buttons are thumb-friendly (minimum 44px) and text is readable without zooming.",
      ],
    },
    {
      icon: CalendarSync,
      title: "Automate Customer Follow-ups",
      description: "Action",
      features: [
        "Set up email sequences for new leads.",
        "A simple welcome series with valuable content can increase customer lifetime value by 30%.",
      ],
    },
    {
      icon: ShieldPlus,
      title: "Regular Security Updates",
      description: "Action",
      features: [
        "Schedule monthly security checks. Update your CMS, plugins, and backup your data. 43% of cyber attacks target small businesses.",
      ],
    },
  ];
  const ProTips = [
    {
      icon: Gauge,
      title: "Investment Decision Framework",
      description: "Action",
      features: [
        `Before investing in any tech solution, ask yourself: "Will this save time, increase revenue, or improve customer experience?" If the answer isn't a clear yes to at least one, reconsider the investment. We help you focus on solutions that move the needle for your business.`,
      ],
    },
    {
      icon: Smartphone,
      title: "ROI-Focused Approach",
      description: "Action",
      features: [
        `Every project we take on must demonstrate clear return on investment. Whether it's reducing operational costs, increasing sales, or improving customer satisfaction - we measure success by your business results, not just pretty designs.`,
      ],
    },
    {
      icon: Waypoints,
      title: "Data-Driven Decisions",
      description: "Action",
      features: [
        `We don't guess - we measure. From website analytics to user behavior, we use real data to make decisions that improve your bottom line.`,
      ],
    },
  ];
    const approachCards = [
    {
      id: 1,
      title: "Discovery & Analysis",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758548647/Guarantees-4_fypfpk.webp",
      description:
        "We start by understanding your business goals, target audience, and current challenges to create a tailored strategy.",
    },
    {
      id: 2,
      title: "Design & Planning ",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758548647/Guarantees-1_oyimtd.webp",
      description:
        "User-centered design meets business objectives. We create wireframes and prototypes you can see and test before development.",
    },
    {
      id: 3,
      title: "Agile Development",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758548647/Guarantees-1_oyimtd.webp",
      description:
        "Rapid iterations with regular feedback. You see progress every week and can request changes throughout the process.",
    },
    {
      id: 4,
      title: "Launch & Optimize",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758548647/Guarantees-3_ybwuns.webp",
      description:
        "We don't just launch and leave. We monitor performance, gather user feedback, and continuously optimize for better results.",
    },
  ];
  const differentCard = [
    {
      id: 1,
      title: "Speak Language",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758387390/1-1_m1i1ex.webp",
      desc:
        "No confusing tech jargon. We explain everything in plain English on how it impacts your business.",
    },
    {
      id: 2,
      title: "Transparent Pricing ",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758387390/1-3_jpnj5g.webp",
      desc:
        "Fixed-price projects with no hidden costs. You know exactly what you're paying for before we start.",
    },
    {
      id: 3,
      title: "Fast Response",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758387390/1-2_epieby.webp",
      desc:
        "Questions answered within 4 hours during business days. Emergency support available 24/7.",
    },
    {
      id: 4,
      title: "Long-term",
      icon: "https://res.cloudinary.com/dko4n7zoc/image/upload/v1758387390/1-2_epieby.webp",
      desc:
        "We're not just vendors - we're your tech team. We grow with business adapt solutions as you scale.",
    }
  ];
    const OurStory = {
    description:
      "Founded with a simple yet powerful vision: to bridge the gap between complex technology and practical business solutions. At Krishly.com, we've grown from a passionate tech solution and development to a trusted partner for businesses of all sizes, helping them navigate the digital landscape with confidence.",

    vision: {
      quote:
        "Technology shouldn't be frustrating it should be your business's best asset.",
      content:
        "We see a world where every business owner can confidently say 'yes' when asked if their technology is helping them grow. Where you never again hear 'our website is down' or 'this process takes forever.' Where your digital tools actually make your life easier, not harder.",
    },

    mission: {
      quote: "We turn your tech headaches into competitive advantages.",
      content:
        "Every day, we help business owners like you stop losing sleep over technology problems. We believe you should spend your time growing your business, not fixing broken systems. Our mission is to be the tech partner who actually gets it - someone who speaks your language, respects your budget, and delivers results you can see.",
    },
  };
  export {problems, PracticalTips, ProTips, approachCards, differentCard , OurStory};