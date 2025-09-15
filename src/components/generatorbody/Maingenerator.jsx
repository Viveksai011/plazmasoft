import Aigenerator from "@/components/generatorbody/Aigenerator";
import Tips from "@/components/generatorbody/Tips";


export default function Maingenerator() {


  return (
    <div className="min-h-[92.5dvh] mt-[6rem]  py-12">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 ">
            AI Prompt Generator
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Describe your requirements or scenario, and we will generate optimized prompts to help you get the best
            results from AI models.
          </p>

           <div className="flex-col gap-2 mb-5 text-center">
                <div>What do you need help with?</div>
                <div>The more details you provide, the better prompts we can generate.</div>
              </div>

     <Aigenerator/>

          <Tips/>   
        </div>
      </div>
    </div>
  )
}
