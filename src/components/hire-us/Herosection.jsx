import Circlecurve from "@/Icons/Circlecurve";
import Inversecirclecurve from "@/Icons/Inversecirclecurve";
import Image from "next/image";

const Herosection = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden  pb-16 pt-[120px] md:pb-[80px] md:pt-[150px]  xl:pt-[180px] xl:pb-[60px]  2xl:pt-[210px]"
    >
      <div className="container w-full mx-auto">
        <div className=" flex flex-wrap px-4 mx-auto text-center justify-center">
          <div className="flex-col flex-wrap">
            <h1 className="mb-6 w-full text-customBg font-poppins not-italic font-medium leading-none text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className=" mb-12 text-[25px] text-body-color mx-auto sm:text-[55px] md:text-[60px] lg:text-[72px] text-black font-poppins not-italic font-bold leading-none">
              Developers who disappear
            </p>
          </div>
          <div className="max-w-[1200px] w-full flex items-center flex-wrap justify-center md:justify-between mx-auto">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className=" flex flex-wrap px-4 mx-auto text-center justify-center">
          <div className="flex-col flex-wrap">
            <h1 className="mb-6 w-full text-customBg font-poppins not-italic font-medium leading-none text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className=" mb-12 text-[25px] text-body-color mx-auto sm:text-[55px] md:text-[60px] lg:text-[72px] text-black font-poppins not-italic font-bold leading-none">
              Developers who disappear
            </p>
          </div>
          <div className="max-w-[1200px] w-full flex items-center flex-wrap justify-center md:justify-between mx-auto">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className=" flex flex-wrap px-4 mx-auto text-center justify-center">
          <div className="flex-col flex-wrap">
            <h1 className="mb-6 w-full text-customBg font-poppins not-italic font-medium leading-none text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px]">
              Stop Wasting Money On
            </h1>

            <p className=" mb-12 text-[25px] text-body-color mx-auto sm:text-[55px] md:text-[60px] lg:text-[72px] text-black font-poppins not-italic font-bold leading-none">
              Developers who disappear
            </p>
          </div>
          <div className="max-w-[1200px] w-full flex items-center flex-wrap justify-center md:justify-between mx-auto">
            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 1"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />

            <Image
              src="https://res.cloudinary.com/dko4n7zoc/image/upload/v1758381157/2_v0dzt5.webp"
              alt={"Clinet Desk 2"}
              className=" w-[250px] md:w-[270px] lg:w-[350px]  h-[250px] md:h-[270px] lg:h-[350px] rounded-full object-cover mr-4"
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="mt-20 text-center w-full mx-auto max-w-[92rem]">
          <p>Hire</p>
          <div className="flex  items-center justify-center my-8 gap-4">
            <div>Image</div>
            <div className="flex flex-col items-center">
              <p>Krishly</p>
              <p>Your Tech Solutions</p>
            </div>
          </div>
        </div>
      </div>
      <Circlecurve className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100" />
      <Inversecirclecurve className="absolute -left-0  top-0 z-[-1] opacity-30 lg:opacity-100" />
    </section>
  );
};

export default Herosection;
