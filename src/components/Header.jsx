"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { ModalDemo } from '@/components/ModalDemo';
import { navItems, Subnav, navigationData } from "@/utils/Headerdata";
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

;


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
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3 lg:w-[850px]">
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
                className={`text-sm font-medium whitespace-nowrap ${
                  isScrolled
                    ? "text-gray-900"
                    : "text-gray-700 hover:text-black"
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
