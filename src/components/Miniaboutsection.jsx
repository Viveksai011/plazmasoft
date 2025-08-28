import { Button } from "@/components/ui/button";
import { ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import { Ourcompanydata } from "@/utils/Ourcompanydata";

const Miniaboutsection = () => {
  return (
    <div className="max-w-[92rem] mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="space-y-8 w-full">
          <div className="flex flex-col max-md:gap-5 lg:flex-row max-w-[1000px]">
            <div className="flex flex-col justify-around space-y-4">
              <p className="text-sm font-medium py-1 px-3 w-fit rounded-2xl bg-white text-gray-600 tracking-wide uppercase">
                {Ourcompanydata.companyLabel}
              </p>
              <h2 className="text-[27px] sm:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {Ourcompanydata.heading}
              </h2>
            </div>
            <div className="flex flex-col justify-center items-start space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                {Ourcompanydata.description}
              </p>
              <Button className="bg-customBg hover:bg-customBg/80 w-fit group text-white px-8 py-6 text-base font-medium rounded-full">
                {Ourcompanydata.button}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Image
              src="/img/TeamImage2.webp"
              alt="Business professionals working together"
              width={540}
              height={480}
              className="w-full max-w-[1000px] rounded-3xl h-80 object-cover"
            />
          </div>
        </div>

        <div className="space-y-8 lg:max-w-[380px] w-full">
          <div className="relative rounded-3xl overflow-hidden">
            <Image
              src="/img/TeamImage.webp"
              alt="Business team collaboration"
              width={380}
              height={380}
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all">
                <Play className="h-8 w-8 text-gray-700 ml-1" />
              </button>
            </div>
          </div>

          <div className=" flex flex-col  justify-between rounded-3xl bg-thirdbg px-8 py-4 items-center">
            <div className="flex items-center w-full justify-between">
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {" "}
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-gray-600 font-medium">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="bg-gray-200 h-16 w-[1px]  max-sm:my-4" />
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {" "}
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-gray-600 font-medium">
                  {Ourcompanydata.expertTeamLabel}
                </p>
              </div>
            </div>
            <hr className="bg-gray-200  w-full my-4" />
            <div className="flex items-start w-full justify-between ">
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {" "}
                  {Ourcompanydata.completedWork}
                  <span className="text-2xl">k</span>
                </p>
                <p className="text-gray-600 font-medium">
                  {Ourcompanydata.completedWorkLabel}
                </p>
              </div>
              <hr className="bg-gray-200 h-16 w-[1px]  max-sm:my-4" />
              <div className="flex flex-col space-y-2">
                <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {" "}
                  {Ourcompanydata.expertTeam}
                  <span className="text-2xl">+</span>
                </p>
                <p className="text-gray-600 font-medium">
                  {Ourcompanydata.expertTeamLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Miniaboutsection;
