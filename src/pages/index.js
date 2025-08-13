import Image from "next/image";
import { Cinzel, Geist, Geist_Mono, Outfit } from "next/font/google";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar/Navbar";
import GetStarted from "@/components/Home/GetStarted";
import WhySplitStay from "@/components/Home/WhySplitStay";
import EarnYourBadge from "@/components/Home/EarnYourBadge";
import OurPartners from "@/components/Home/OurPartners";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${cinzel.className} relative`}>
      <Navbar />
      <Hero />
      <GetStarted />
      <WhySplitStay />
      <EarnYourBadge />
      <OurPartners />
      <Footer />
    </div>
  );
}
