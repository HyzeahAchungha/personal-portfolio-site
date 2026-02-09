"use client";

import { useState } from "react";
import SplashScreen from "@/components/splash-screen";
import About from "@/components/about";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Initiatives from "@/components/Initiatives";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EyeOpeningSection from "@/components/eye-opening-section";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Initiatives />
      <Tools />
      <Contact />
      <Footer />
      <EyeOpeningSection/>
    </main>
  );
}
