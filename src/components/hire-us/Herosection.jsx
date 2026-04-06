import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import Image from "next/image";

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] md:pb-[80px] md:pt-[150px] xl:pb-[60px] xl:pt-[180px] 2xl:pt-[210px]"
    >
      <div className="container mx-auto w-full">
        <div className="mx-auto flex flex-wrap justify-center px-4 text-center">
          <div className="flex-col flex-wrap">
            <h1 className="font-poppins mb-6 w-full text-[32px] font-medium not-italic leading-none text-customBg sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className="text-body-color font-poppins mx-auto mb-12 text-[25px] font-bold not-italic leading-none text-black sm:text-[55px] md:text-[60px] lg:text-[72px]">
              Developers who disappear
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center md:justify-between">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center px-4 text-center">
          <div className="flex-col flex-wrap">
            <h1 className="font-poppins mb-6 w-full text-[32px] font-medium not-italic leading-none text-customBg sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className="text-body-color font-poppins mx-auto mb-12 text-[25px] font-bold not-italic leading-none text-black sm:text-[55px] md:text-[60px] lg:text-[72px]">
              Developers who disappear
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center md:justify-between">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="mx-auto flex flex-wrap justify-center px-4 text-center">
          <div className="flex-col flex-wrap">
            <h1 className="font-poppins mb-6 w-full text-[32px] font-medium not-italic leading-none text-customBg sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className="text-body-color font-poppins mx-auto mb-12 text-[25px] font-bold not-italic leading-none text-black sm:text-[55px] md:text-[60px] lg:text-[72px]">
              Developers who disappear
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-center md:justify-between">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className="mr-4 h-[250px] w-[250px] rounded-full object-cover md:h-[270px] md:w-[270px] lg:h-[350px] lg:w-[350px]"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="mx-auto mt-20 w-full max-w-[92rem] text-center">
          <p>Hire</p>
          <div className="my-8 flex items-center justify-center gap-4">
            <div>Image</div>
            <div className="flex flex-col items-center">
              <p>Krishly</p>
              <p>Your Tech Solutions</p>
            </div>
          </div>
        </div>
      </div>
      <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
      <Inversecirclecurve className="absolute -left-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
    </section>
  );
};

export default Herosection;
