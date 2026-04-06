import Maingenerator from "@/components/generatorbody/Maingenerator";

export async function generateMetadata({ params }) {
  const slug = params.component || "";
  const formattedName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return {
    title: formattedName
      ? `${formattedName} | Krishly - Free AI Tools`
      : "AI Tools | Krishly - Free AI Tools",
    description: formattedName
      ? `Use our free ${formattedName} tool to boost your productivity. Powered by Krishly's AI technology.`
      : "Explore Krishly's free AI-powered tools designed to help you work smarter and faster.",
  };
}

export default function Generator() {
  return (
    <>
      <Maingenerator />
    </>
  );
}
