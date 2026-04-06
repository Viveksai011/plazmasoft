"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Dropdownselect from "@/components/generatorbody/Dropdownselect";
import StructureTemplate from "@/components/generatorbody/StructureTemplate";

const Aigenerator = () => {
  const [userInput, setUserInput] = useState("");
  const [generatedPrompts, setGeneratedPrompts] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [useCase, setUseCase] = useState("Optimize Prompt");
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      toast({
        title: "Input required",
        description: "Please describe your requirements to generate prompts.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      // Format the structured prompt before sending it to the API
      const structuredPrompt = StructureTemplate(useCase, userInput);

      const response = await fetch("/api/generate-prompts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: structuredPrompt }), // Send the structured prompt
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the API returns an array of prompts
        setGeneratedPrompts(data.prompts);
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong while generating prompts.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate prompts. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The prompt has been copied to your clipboard.",
    });
    setIsCopied(true);
  };

  return (
    <div className="mb-8">
      <div
        className="flex min-h-[200px] flex-col justify-between overflow-auto rounded-lg bg-gray-50 p-4 shadow-md"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Textarea
          placeholder="Describe your requirements or scenario in detail. For example: 'I need to create a marketing plan for a new eco-friendly product targeting millennials.'"
          className="h-full min-h-[125px] w-full resize-none border-none p-0 shadow-none focus:border-none focus:outline-none focus:ring-0 focus-visible:ring-transparent"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div className="mt-2 flex flex-wrap items-center justify-end gap-y-2 sm:justify-between">
          <Dropdownselect setUseCase={setUseCase} useCase={useCase} />
          <Button
            onClick={handleGenerate}
            className="rounded-xl bg-customBg hover:bg-customBg/60"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate {useCase === "Prompt Generator" ? "Prompt" : useCase}
              </>
            )}
          </Button>
        </div>
      </div>

      <div>
        {generatedPrompts && (
          <div className="mt-4 space-y-2">
            <div>
              <pre className="max-h-80 overflow-auto whitespace-pre-wrap rounded-md border bg-gray-50 p-4 shadow-md">
                <code>{generatedPrompts}</code>
              </pre>

              <Button
                onClick={() => handleCopy(generatedPrompts)}
                className="mt-2 w-full bg-customBg hover:bg-customBg/60"
              >
                {isCopied ? "Copied!" : "Copy to Clipboard"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Aigenerator;
