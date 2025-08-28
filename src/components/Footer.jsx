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
      <svg
        id="wave"
        style={{ transform: "rotate(0deg)", transition: "0.3s" }}
        viewBox="0 0 1440 130"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(59, 7, 100, 1)" offset="0%"></stop>
            <stop
              stopColor="rgba(91.183, 0.156, 162.955, 1)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: 1 }}
          fill="url(#sw-gradient-0)"
          d="M0,52L80,62.8C160,74,320,95,480,95.3C640,95,800,74,960,58.5C1120,43,1280,35,1440,36.8C1600,39,1760,52,1920,60.7C2080,69,2240,74,2400,82.3C2560,91,2720,104,2880,108.3C3040,113,3200,108,3360,104C3520,100,3680,95,3840,88.8C4000,82,4160,74,4320,71.5C4480,69,4640,74,4800,71.5C4960,69,5120,61,5280,52C5440,43,5600,35,5760,43.3C5920,52,6080,78,6240,73.7C6400,69,6560,35,6720,32.5C6880,30,7040,61,7200,71.5C7360,82,7520,74,7680,62.8C7840,52,8000,39,8160,30.3C8320,22,8480,17,8640,26C8800,35,8960,56,9120,73.7C9280,91,9440,104,9600,99.7C9760,95,9920,74,10080,54.2C10240,35,10400,17,10560,15.2C10720,13,10880,26,11040,39C11200,52,11360,65,11440,71.5L11520,78L11520,130L11440,130C11360,130,11200,130,11040,130C10880,130,10720,130,10560,130C10400,130,10240,130,10080,130C9920,130,9760,130,9600,130C9440,130,9280,130,9120,130C8960,130,8800,130,8640,130C8480,130,8320,130,8160,130C8000,130,7840,130,7680,130C7520,130,7360,130,7200,130C7040,130,6880,130,6720,130C6560,130,6400,130,6240,130C6080,130,5920,130,5760,130C5600,130,5440,130,5280,130C5120,130,4960,130,4800,130C4640,130,4480,130,4320,130C4160,130,4000,130,3840,130C3680,130,3520,130,3360,130C3200,130,3040,130,2880,130C2720,130,2560,130,2400,130C2240,130,2080,130,1920,130C1760,130,1600,130,1440,130C1280,130,1120,130,960,130C800,130,640,130,480,130C320,130,160,130,80,130L0,130Z"
        ></path>
      </svg>

      <footer className="w-full bg-purple-950 flex flex-col xl:flex-row">
        <div className=" flex flex-col m-5 gap-6 justify-center bg-black/10 border border-secondarycustomBg rounded-lg text-white px-4 py-4 sm:px-6 lg:px-8 xl:w-[30%] ">
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
                    className=" h-14 w-14 sm:h-20 sm:w-20 object-cover"
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
