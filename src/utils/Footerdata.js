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
  { text: "Company History", link: "#" },
  { text: "Meet the Team", link: "#" },
  { text: "Employee Handbook", link: "#" },
  { text: "Careers", link: "#" },
];

export const servicesItems = [
  { text: "Web Development", link: "#" },
  { text: "Web Design", link: "#" },
  { text: "Marketing", link: "#" },
  { text: "Google Ads", link: "#" },
];

export const locationItems = [
  { icon: <MapPin className="size-2" />, text: "England", link: "#" },
  { icon: <Mail className="size-2" />, text: "+91 987656789", link: "#" },
  {
    icon: <Phone className="size-2" />,
    text: "Marketing@gmail.com",
    link: "#",
  },
];

export const resourcesItems = [
  { text: "Online Guides", link: "#" },
  { text: "Conference Notes", link: "#" },
  { text: "Forum", link: "#" },
  { text: "Downloads", link: "#" },
  { text: "Upcoming Events", link: "#" },
];

export const helpfulLinksItems = [
  { text: "FAQs", link: "#" },
  { text: "Support", link: "#" },
];

// Social media links and their corresponding icons
export const socialMediaLinks = [
  { icon: <Instagram className="size-6" />, link: "#", name: "Instagram" },
  { icon: <Github className="size-6" />, link: "#", name: "GitHub" },
  { icon: <Linkedin className="size-6" />, link: "#", name: "LinkedIn" },
  { icon: <Facebook className="size-6" />, link: "#", name: "Facebook" },
  { icon: <Twitter className="size-6" />, link: "#", name: "Twitter" },
];
