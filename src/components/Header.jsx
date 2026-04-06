"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Subnav, navigationData } from "@/utils/Headerdata";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-sm " : "bg-transparent text-black"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="relative flex h-28 w-40 items-center space-x-2 text-gray-700 hover:text-black"
          >
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758613823/Transparent_5_1_1_jdcqyh.png"
              alt="Logo"
              width={500}
              height={200}
              className="h-auto w-full"
            />
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                {Object.entries(navigationData).map(([key, items]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger
                      className={`bg-transparent hover:bg-transparent data-[state=open]:hover:bg-transparent ${
                        isScrolled ? "text-gray-700" : "text-gray-700 hover:text-black "
                      }`}
                    >
                      {key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[850px]">
                        {items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <a
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                href={item.href}
                              >
                                <div className="text-sm font-medium leading-none">{item.title}</div>
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
                className={`whitespace-nowrap text-sm font-medium ${
                  isScrolled ? "text-gray-900" : "text-gray-700 hover:text-black"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button className="rounded-full bg-customBg px-6 py-2 text-white transition-all duration-200 hover:bg-customBg/80">
              Book Consultation
            </Button>
          </div>

          <button className="p-2 lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        <div className={`lg:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <div className="mt-2 space-y-3 rounded-lg bg-white/10 py-4 backdrop-blur-md">
            {Object.entries(navigationData).map(([key, items], index) => (
              <div key={key} className="border-b border-gray-200">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-medium text-gray-800"
                >
                  {key}
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
                  >
                    <ChevronRight
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-auto transition-all duration-300 ${
                    openIndex === index ? "max-h-96 py-2" : "max-h-0"
                  }`}
                >
                  {items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Normal Links */}
            {Subnav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Button */}
            <div className="px-4">
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
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
