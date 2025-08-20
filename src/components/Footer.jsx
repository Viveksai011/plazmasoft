import React from "react";
// import Circlecurve from "@/Icons/Circlecurve";
// import Inversecirclecurve from "@/Icons/Inversecirclecurve";
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
import { Button } from "@/components/ui/button";

const Footer = () => {
  const Logos = [
    { src: "/img/awardone.png", alt: "Logo 1" },
    { src: "/img/awardtwo.png", alt: "Logo 2" },
    { src: "/img/awardthree.webp", alt: "Logo 3" },
    { src: "/img/awardfour.png", alt: "Logo 4" },
  ];

  return (
    <>
   <svg id="wave" style={{transform: 'rotate(0deg)', transition: '0.3s'}} viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
      <stop stop-color="rgba(59, 7, 100, 1)" offset="0%"></stop>
      <stop stop-color="rgba(47, 6, 80, 1)" offset="100%"></stop>
    </linearGradient>
  </defs>
  <path style={{transform: 'translate(0, 0px)', opacity: 1}} fill="url(#sw-gradient-0)" d="M0,48L80,46C160,44,320,40,480,48C640,56,800,76,960,82C1120,88,1280,80,1440,72C1600,64,1760,56,1920,56C2080,56,2240,64,2400,60C2560,56,2720,40,2880,32C3040,24,3200,24,3360,36C3520,48,3680,72,3840,82C4000,92,4160,88,4320,84C4480,80,4640,76,4800,76C4960,76,5120,80,5280,80C5440,80,5600,76,5760,64C5920,52,6080,32,6240,34C6400,36,6560,60,6720,66C6880,72,7040,60,7200,50C7360,40,7520,32,7680,24C7840,16,8000,8,8160,18C8320,28,8480,56,8640,68C8800,80,8960,76,9120,74C9280,72,9440,72,9600,78C9760,84,9920,96,10080,96C10240,96,10400,84,10560,76C10720,68,10880,64,11040,70C11200,76,11360,92,11440,100L11520,108L11520,120L11440,120C11360,120,11200,120,11040,120C10880,120,10720,120,10560,120C10400,120,10240,120,10080,120C9920,120,9760,120,9600,120C9440,120,9280,120,9120,120C8960,120,8800,120,8640,120C8480,120,8320,120,8160,120C8000,120,7840,120,7680,120C7520,120,7360,120,7200,120C7040,120,6880,120,6720,120C6560,120,6400,120,6240,120C6080,120,5920,120,5760,120C5600,120,5440,120,5280,120C5120,120,4960,120,4800,120C4640,120,4480,120,4320,120C4160,120,4000,120,3840,120C3680,120,3520,120,3360,120C3200,120,3040,120,2880,120C2720,120,2560,120,2400,120,2240,120,2080,120,1920,120C1760,120,1600,120,1440,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
</svg>




      <footer className="relative overflow-hidden w-full bg-purple-950 flex flex-col xl:flex-row">
        <div className=" flex flex-col gap-6 justify-center rounded-3xl  bg-black/20 text-white px-4 py-4 sm:px-6 lg:px-8 xl:w-[30%] ">
          <p>{title}</p>

          <p className="text-gray-200">
            Proptifi is an AI-driven platform empowering property owners and
            investors with smart tools to streamline renovations, save costs,
            and maximise value. Our innovative solutions include virtual
            staging, design tools, and market intelligence, simplifying property
            transformations. With a focus on sustainability and accessibility,
            Proptifi is redefining the real estate and renovation landscape.
          </p>

          <Button className="bg-customBg hover:bg-customBg/80 w-fit group text-white px-8 py-6 text-base font-medium rounded-full">
            Book Now
          </Button>
        </div>
        <div className="w-full py-4  ">
          <div className=" px-6  lg:px-8 pt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-left">
              <p className="text-lg font-medium text-gray-100">About Us</p>
              <ListItem items={aboutUsItems} />
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-gray-100">Our Services</p>
              <ListItem items={servicesItems} />
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-gray-100">Resources</p>
              <ListItem items={resourcesItems} />
            </div>

            <div className="text-left">
              <p className="text-lg font-medium text-gray-100">
                Location Section
              </p>
              <ListItem items={locationItems} isLocation />
            </div>
          </div>

          <div className="mt-16 ">
            <div className="flex flex-col px-6  lg:px-8 md:flex-row justify-between items-start sm:items-center gap-6 ">
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

              <ul className="flex justify-center  gap-6 sm:justify-end mt-4">
                {socialMediaLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-secondarycustomBg transition hover:text-white/65 hover:transition duration-200 "
                    >
                      <span className="sr-only">{social.name}</span>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-7 border border-white/10" />
            <div className=" sm:flex sm:items-center px-6  lg:px-8 text-gray-200 sm:justify-between">
              <p className="text-xl">{title}</p>
              <p className="mt-4 text-center text-sm  sm:mt-0 sm:text-right">
                Copyright &copy; 2022. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* <Inversecirclecurve className="absolute right-0 bottom-0 z-[-1] opacity-30 lg:opacity-100 transform scale-x-100 rotate-180" /> */}
        {/* <Circlecurve className="absolute left-0 bottom-0 z-[-1] opacity-30 lg:opacity-100 transform scale-x-100 rotate-180" /> */}
      </footer>
    </>
  );
};

export default Footer;
