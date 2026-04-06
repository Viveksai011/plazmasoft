import NodeIcons from "@/Icons/NodeIcons";
import Vueicons from "@/Icons/Vueicons";
import { CodeIcon } from "lucide-react";

export const toolkitData = {
  "Web Development": {
    description:
      "We employ an agile methodology and robust technology framework to develop web applications that exceed your expectations.",
    technologies: [
      { name: "React", level: "Expert", icon: "⚛️", category: "Frontend" },
      { name: "Next.js", level: "Expert", icon: "▲", category: "Full-stack" },
      { name: "Vue.js", level: "Advanced", icon: <Vueicons width="30px" />, category: "Frontend" },
      { name: "Angular", level: "Advanced", icon: "🅰️", category: "Frontend" },
      { name: "Node.js", level: "Expert", icon: <NodeIcons width="30px" />, category: "Backend" },
      { name: "Django", level: "Advanced", icon: "🐍", category: "Backend" },
      {
        name: "Laravel",
        level: "Advanced",
        icon: <CodeIcon className="h-6 w-6 text-purple-700" />,
        category: "Backend",
      },
      { name: "Express", level: "Expert", icon: "⚡", category: "Backend" },
      { name: ".Net", level: "Advanced", icon: "🖥️", category: "Frontend" },
    ],
  },
  "Mobile Development": {
    description:
      "Our Mobile App Development teams utilize the latest tech frameworks to bring your dream mobile apps to life.",
    technologies: [
      { name: "Flutter", level: "Expert", icon: "🐦", category: "Cross-platform" },
      { name: "React Native", level: "Expert", icon: "⚛️", category: "Cross-platform" },
      { name: "Swift", level: "Advanced", icon: "🦉", category: "iOS" },
      { name: "Kotlin", level: "Advanced", icon: "🅺", category: "Android" },
      { name: "Java", level: "Advanced", icon: "☕︎", category: "Android" },
      { name: "Dart", level: "Expert", icon: "🎯", category: "Language" },
      { name: "Xamarin", level: "Advanced", icon: "🔷", category: "Cross-platform" },
      { name: "Ionic", level: "Advanced", icon: "⚡", category: "Hybrid" },
      { name: ".Net", level: "Advanced", icon: "🖥️", category: "Frontend" },
    ],
  },
  "Database & Backend": {
    description:
      "Robust and scalable database solutions with modern backend architectures for optimal performance.",
    technologies: [
      { name: "MongoDB", level: "Expert", icon: "🍃", category: "Database" },
      { name: "PostgreSQL", level: "Expert", icon: "🐘", category: "Database" },
      { name: "MySQL", level: "Advanced", icon: "🐬", category: "Database" },
      { name: "Firebase", level: "Advanced", icon: "🔥", category: "Backend" },
      { name: "Redis", level: "Expert", icon: "🔴", category: "Cache" },
      { name: "AWS", level: "Expert", icon: "☁️", category: "Cloud" },
      { name: "Docker", level: "Advanced", icon: "🐳", category: "DevOps" },
      { name: "GraphQL", level: "Advanced", icon: "🔗", category: "API" },
      { name: "Oracle SQL", level: "Advanced", icon: "🛢️", category: "Database" },
    ],
  },
  "DevOps & Cloud": {
    description:
      "Modern DevOps practices and cloud infrastructure for seamless deployment and scaling.",
    technologies: [
      { name: "AWS", level: "Expert", icon: "☁️", category: "Cloud" },
      { name: "Azure", level: "Advanced", icon: "🔷", category: "Cloud" },
      { name: "GCP", level: "Advanced", icon: "🌈", category: "Cloud" },
      { name: "Docker", level: "Expert", icon: "🐳", category: "Containerization" },
      { name: "Kubernetes", level: "Expert", icon: "⚙️", category: "Orchestration" },
      { name: "Jenkins", level: "Advanced", icon: "🔧", category: "CI/CD" },
      { name: "GitLab", level: "Advanced", icon: "🦊", category: "CI/CD" },
      { name: "Terraform", level: "Expert", icon: "🏗️", category: "Infrastructure" },
      { name: "Salesforce", level: "Expert", icon: "💭", category: "Cloud/CRM" },
    ],
  },
};
