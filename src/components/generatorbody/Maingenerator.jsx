import Aigenerator from "@/components/generatorbody/Aigenerator";
import Tips from "@/components/generatorbody/Tips";

export default function Maingenerator() {
  return (
    <div className="mt-[6rem] min-h-[92.5dvh] py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl">
            AI Prompt Generator
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Describe your requirements or scenario, and we will generate optimized prompts to help
            you get the best results from AI models.
          </p>

          <div className="mb-5 flex-col gap-2 text-center">
            <div>What do you need help with?</div>
            <div>The more details you provide, the better prompts we can generate.</div>
          </div>

          <Aigenerator />

          <Tips />
        </div>
      </div>
    </div>
  );
}
