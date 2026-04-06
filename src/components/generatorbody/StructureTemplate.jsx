const PROMPT_GENERATOR = "Prompt Generator";
const STORY = "Story";
const CODE = "Code";
const CREATIVITY = "Creativity";
const OPTIMIZE_PROMPT = "Optimize Prompt";

const generateGoals = (goals) => {
  return goals.length > 0 ? `- ${goals.join("\n- ")}` : "";
};

const StructureTemplate = (useCase, userInput) => {
  const templates = {
    [PROMPT_GENERATOR]: {
      intro:
        "You are an expert in generating good prompts for AI models to get the best results in maximum in 12 points.",
      instructions:
        "Your task is to generate an optimized prompt based on this description. Use clear and effective language. Structure it professionally.",
      goals: [
        "Goal-driven",
        "Detailed",
        "Role-assigned (if relevant)",
        "Specific about tone or style",
      ],
    },
    [STORY]: {
      intro: "You are an expert storyteller.",
      instructions: "Your task is to generate a compelling story based on this description.",
      goals: [
        "Clear narrative structure",
        "Interesting characters",
        "Engaging dialogue",
        "Strong setting and atmosphere",
      ],
    },
    [CODE]: {
      intro: "You are a coding expert. ",
      instructions: "Your task is to write the code that solves this problem.",
      goals: [
        "Clean and efficient code",
        "Well-documented",
        "Easy to understand",
        "Follows best practices",
        "Present code in code blocks with proper syntax highlighting",
      ],
    },
    [CREATIVITY]: {
      intro: "You are a creative expert.",
      instructions: "Your task is to generate a creative solution or concept based on this idea.",
      goals: ["Innovative", "Unique", "Feasible", "Clear and impactful"],
    },
    [OPTIMIZE_PROMPT]: {
      intro: "You are an expert in optimizing prompts.",
      instructions: "Your task is to generate an optimized prompt based on this description.",
      goals: [
        "Goal-driven",
        "Detailed",
        "Role-assigned (if relevant)",
        "Specific about tone or style",
      ],
    },
  };

  const template = templates[useCase];

  if (!template) {
    throw new Error("Invalid use case selected");
  }

  // Use the helper function to format the goals
  const formattedGoals = generateGoals(template.goals);

  return `${template.intro}
The user has provided the following description:
"${userInput}"
${template.instructions}
Make sure the prompt includes:
${formattedGoals}
Make sure to use clear and effective language. Structure it professionally.`;
};

export default StructureTemplate;
