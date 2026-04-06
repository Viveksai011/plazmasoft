import { ExpandingCards } from "@/components/hire-us/expanding-cards";

const painPoints = [
  {
    id: "01",
    title: "You're Their Side Project",
    description:
      "Most companies juggle 20+ clients simultaneously. Your 'urgent' project sits in queue for weeks.",
    content:
      "Maximum 5 active projects.\nWhen you call, we answer.\nWhen you need changes, they happen fast.",
    imgSrc: "",
    icon: null,
    linkHref: "#",
  },
  {
    id: "02",
    title: "Scope Creep & Hidden Costs",
    description:
      "'$500 extra' becomes their favorite phrase. $5,000 projects become $12,000 disasters.",
    content: "Fixed-price guarantee. If we underestimated, that's our problem, not yours.",
    imgSrc: "",
    icon: null,
    linkHref: "#",
  },
  {
    id: "03",
    title: "They Vanish After Launch",
    description:
      "Many developers disappear once the initial project is complete, leaving you stranded when you need updates.",
    content:
      "Long-term partnership focus.\nOngoing support and maintenance plans.\nDedicated team that knows your business.",
    imgSrc: "",
    icon: null,
    linkHref: "#",
  },
];

export default function ExpandingCardsDemo() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-8 p-4 py-24 md:p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Pain Points We Address
        </h1>
      </div>
      <ExpandingCards items={painPoints} defaultActiveIndex={0} />
    </div>
  );
}
