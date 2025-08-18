import { Calendar, Users, Target, Zap } from "lucide-react";

export const processSteps = [
    {
      step: "Day 1",
      title: "Deep Dive Call",
      description: "We dig into your vision, users, and business goals",
      impact:
        "Most developers skip this. We don't. Because understanding your why shapes every line of code.",
      icon: Target,
     
    },
    {
      step: "Days 2-3",
      title: "Smart Planning",
      description:
        "We map your features, choose the perfect tech stack, and create a roadmap",
      impact: "No surprises. No scope creep. Just a clear path to success.",
      icon: Calendar,
 
    },
    {
      step: "Days 4-8",
      title: "Build & Demo",
      description: "Daily updates, working features, real progress you can see",
      impact:
        "You get a functioning MVP faster than most teams can write a proposal.",
      icon: Zap,
    
    },
    {
      step: "Week 2+",
      title: "Iterate & Scale",
      description: "Real user feedback drives smart improvements",
      impact: "Build what users actually want, not what we think they want.",
      icon: Users,
     
    },
  ];