import React from "react";
import Circlecurve from "@/Icons/Circlecurve";
import ListItem from "@/components/Listiteam";
import {
  aboutUsItems,
  servicesItems,
  resourcesItems,
  socialMediaLinks,
  locationItems
} from "@/utils/Footerdata";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden ">
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

          {/* <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Helpful Links</p>
            <ListItem items={helpfulLinksItems} />
          </div> */}
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Location Section</p>
            <ListItem items={locationItems} />
          </div>
        </div>

        <div className="mt-16">
          <ul className="flex justify-center gap-6 sm:justify-end">
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

          <div className="mt-16 sm:flex sm:items-center sm:justify-between">
            <p className="text-xl"> PlazmaSoft </p>
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
