import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlazmaSoft IT Consulting and Services - Empowering Businesses with Innovative Technology",
  description:
    "PlazmaSoft is a leading IT consulting and services firm offering cutting-edge solutions in software development, cloud computing, AI, and digital transformation to help businesses achieve operational excellence and drive growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex bg-[#f0ecfa] flex-col overflow-x-hidden`}>
        <Header />
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  );
}
