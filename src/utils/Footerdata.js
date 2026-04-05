import {
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Github,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const aboutUsItems = [
  { text: "About us", link: "/about-us" },
  { text: "Meet the Team", link: "#" },
  { text: "Our Story", link: "#" },
  { text: "Contact Us", link: "/contact-us" },
];

export const servicesItems = [
  { text: "Web App Development", link: "/web-app-development" },
  { text: "Mobile App Development", link: "/mobile-app-development" },
  { text: "E-Commerce Development", link: "/e-commerce-development" },
  { text: "UI/UX Design", link: "/ui-ux-design" },
];

export const locationItems = [
  { icon: <MapPin className="h-5 w-5 text-customBg transition hover:text-white/65 hover:transition duration-200 " />, text: "England", link: "#" },
  { icon: <Mail className="h-5 w-5 text-customBg transition hover:text-white/65 hover:transition duration-200 " />, text: "+91 987656789", link: "#" },
  {
    icon: <Phone className="h-5 w-5 text-customBg transition hover:text-white/65 hover:transition duration-200 " />,
    text: "Marketing@gmail.com",
    link: "#",
  },
];

export const resourcesItems = [
  { text: "Fintech App Development", link: "/fintech-app-development" },
  { text: "Taxi App Development", link: "/taxi-app-development" },
  { text: "Grocery App Development", link: "/grocery-app-development" },
  { text: "Food Ordering App Development", link: "/food-ordering-app-development" },
];

export const helpfulLinksItems = [
  { text: "FAQs", link: "#" },
  { text: "Support", link: "#" },
];

// Social media links and their corresponding icons
export const socialMediaLinks = [
  { icon: <Instagram className="size-6 text-customBg " />, link: "#", name: "Instagram" },
  { icon: <Github className="size-6 text-customBg" />, link: "#", name: "GitHub" },
  { icon: <Linkedin className="size-6 text-customBg" />, link: "#", name: "LinkedIn" },
  { icon: <Facebook className="size-6 text-customBg" />, link: "#", name: "Facebook" },
  { icon: <Twitter className="size-6 text-customBg" />, link: "#", name: "Twitter" },
];
