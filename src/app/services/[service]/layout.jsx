import { headers } from "next/headers";

export const metadata = {
  title:
    "PlazmaSoft IT Consulting and Services - Empowering Businesses with Innovative Technology",
  description:
    "PlazmaSoft is a leading IT consulting and services firm offering cutting-edge solutions in software development, cloud computing, AI, and digital transformation to help businesses achieve operational excellence and drive growth.",
};

export default function RootLayout({ children }) {
  const pathname = headers().get("x-next-pathname") ?? "";
  return <>{children}</>;
}
