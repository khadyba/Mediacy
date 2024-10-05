
"use client";
import About from "@/app/_components/About"; 
import { BackgroundImages } from "../_components/BackgroundImage";
import { Navbar } from "../_components/Navbar";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center">
      <BackgroundImages />
      <Navbar />
      <About />
    </div>
  );
};

export default AboutPage;
