import React from "react";
import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import ListItem from "@/components/Listiteam";
import {
  aboutUsItems,
  servicesItems,
  resourcesItems,
  socialMediaLinks,
  locationItems,
} from "@/utils/Footerdata";
import Image from "next/image";
import { title } from "@/utils/Comapanytitle";

const Footer = () => {
  const Logos = [
    { src: "/img/awardone.png", alt: "Logo 1" },
    { src: "/img/awardtwo.png", alt: "Logo 2" },
    { src: "/img/awardthree.webp", alt: "Logo 3" },
    { src: "/img/awardfour.png", alt: "Logo 4" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 relative">
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>
            <ListItem items={aboutUsItems} />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Our Services</p>
            <ListItem items={servicesItems} />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Resources</p>
            <ListItem items={resourcesItems} />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">
              Location Section
            </p>
            <ListItem items={locationItems} isLocation  />
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
            <div className="flex gap-6">
              {Logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="h-20 w-20 object-cover"
                />
              ))}
            </div>

            <ul className="flex justify-center gap-6 sm:justify-end mt-4">
              {socialMediaLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <p className="text-xl">{title}</p>
            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
              Copyright &copy; 2022. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Inversecirclecurve className="absolute right-0 bottom-0 z-[-1] opacity-30 lg:opacity-100 transform scale-x-100 rotate-180" />
      <Circlecurve className="absolute left-0 bottom-0 z-[-1] opacity-30 lg:opacity-100 transform scale-x-100 rotate-180" />
    </footer>
  );
};

export default Footer;
