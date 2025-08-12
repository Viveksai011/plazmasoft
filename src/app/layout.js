import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sathkrutha Tech Solutions - Innovation in Technology",
  description:
    "Leading technology solutions provider specializing in CRM, CPQ, CLM, AI, and Cloud services. Transform your business with our cutting-edge solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex bg-[#f4f6f8] flex-col`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
