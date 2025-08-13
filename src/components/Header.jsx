"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { ModalDemo } from '@/components/ModalDemo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Industry", href: "#industry" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Popcorn Apps", href: "#apps" },
    { name: "About Us", href: "#about" },
  ];

  const Subnav = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Tech Blog", href: "#blog" },
  ]

  const navigationData = {
    Industry: [
      {
        title: "FMS",
        href: "#fms",
        description: "Facility Management Services for streamlined operations",
      },
      {
        title: "Retail",
        href: "#retail",
        description: "Retail management systems and e-commerce solutions",
      },
      {
        title: "Software",
        href: "#software",
        description: "Custom software development and integration",
      },
      {
        title: "Logistics",
        href: "#logistics",
        description: "Supply chain and logistics technology",
      },
      {
        title: "Education",
        href: "#education",
        description: "EdTech solutions for schools and universities",
      },
      {
        title: "Insurance",
        href: "#insurance",
        description: "Insurance technology for better risk management",
      },
      {
        title: "Real Estate",
        href: "#real-estate",
        description: "Real estate management and automation solutions",
      },
      {
        title: "E-Commerce",
        href: "#e-commerce",
        description: "End-to-end e-commerce solutions for businesses",
      },
      {
        title: "Manufacturing",
        href: "#manufacturing",
        description: "Industrial automation and IoT solutions",
      },
    ],

    Services: [
      {
        title: "ES",
        href: "#es",
        description: "Enterprise Solutions for large-scale operations",
      },
      {
        title: "CLM",
        href: "#clm",
        description: "Contract Lifecycle Management for improved efficiency",
      },
      {
        title: "CRM",
        href: "#crm",
        description:
          "Customer Relationship Management to enhance customer interactions",
      },
      {
        title: "CPQ",
        href: "#cpq",
        description: "Configure, Price, Quote automation for faster quoting",
      },
      {
        title: "AI Services",
        href: "#ai-services",
        description: "AI-powered services for smarter decision making",
      },
      {
        title: "Sales Cloud",
        href: "#sales-cloud",
        description: "Cloud-based sales management platform",
      },
      {
        title: "Service Cloud",
        href: "#service-cloud",
        description: "Cloud solutions for customer service and support",
      },
      {
        title: "Managed Services",
        href: "#managed-services",
        description: "End-to-end managed IT services",
      },
      {
        title: "Annual Maintenance System",
        href: "#ams",
        description: "Comprehensive system maintenance and support",
      },
    ],
    Products: [
      {
        title: "C-DART",
        href: "#cdart",
        description: "C-DART platform for digital asset management",
      },
      {
        title: "Virtual Trion",
        href: "#virtual-trion",
        description: "Virtual reality-based solution for immersive experiences",
      },
      {
        title: "Theft Prevention",
        href: "#theft-prevention",
        description: "Smart systems to prevent theft and security breaches",
      },
      {
        title: "Digital Marketing",
        href: "#digital-marketing",
        description: "End-to-end digital marketing solutions",
      },
      {
        title: "Inventory Management System",
        href: "#inventory-management",
        description: "Efficient inventory tracking and management platform",
      },
      {
        title: "Smart Inventory",
        href: "#smart-inventory",
        description:
          "AI-driven inventory management for optimized stock levels",
      },
      {
        title: "SETA",
        href: "#seta",
        description:
          "Smart Enterprise Technology Application for efficient operations",
      },
      {
        title: "Biriyani Hub",
        href: "#biriyani-hub",
        description: "Online platform for biriyani lovers and restaurants",
      },
      {
        title: "Doctor's Side Kick",
        href: "#doctors-side-kick",
        description: "Digital assistant for doctors to improve patient care",
      },
      {
        title: "AI Lab",
        href: "#ai-lab",
        description: "AI-powered solutions to optimize business operations",
      },
      {
        title: "Gully Cricket",
        href: "#gully-cricket",
        description: "Cricket gaming platform for fun and entertainment",
      },
    ],
    "Popcorn Apps": [
      {
        title: "Quick Deploy",
        href: "#quick-deploy",
        description: "Rapid application deployment tools",
      },
      {
        title: "Micro Services",
        href: "#micro-services",
        description: "Lightweight service components",
      },
      {
        title: "API Gateway",
        href: "#api-gateway",
        description: "Centralized API management",
      },
      {
        title: "DevOps Tools",
        href: "#devops",
        description: "Development and operations automation",
      },
    ],
    "About Us": [
      {
        title: "Our Team",
        href: "#our-team",
        description: "Meet our talented team of experts",
      },
      {
        title: "Overview",
        href: "#overview",
        description: "An overview of our company, mission, and values",
      },
      {
        title: "Our Clients",
        href: "#our-clients",
        description: "Learn about the clients we’ve worked with",
      },
    ],
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-[#f2f2f2]" : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-center text-gray-700 hover:text-black space-x-2 h-28 w-40 relative"
          >
            PlazmeSoft
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(navigationData).map(([key, items]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger 
                      className={`bg-transparent hover:bg-transparent data-[state=open]:hover:bg-transparent  ${
                        isScrolled
                          ? "text-gray-700"
                          : "text-gray-700 hover:text-black "
                      }`}
                    >
                      {key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.href}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            {Subnav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-900" : "text-gray-700 hover:text-black"
                }  transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="bg-customBg hover:bg-customBg/80 text-white px-6 py-2 rounded-full transition-all duration-200">
              Contact Us
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2  hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
