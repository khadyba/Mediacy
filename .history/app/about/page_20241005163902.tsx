
"use client";
import About from "@/app/_components/About"; 
import { BackgroundImages } from "../_components/BackgroundImage";
import { Navbar } from "../_components/Navbar";

const AboutPage = () => {
  return (
    <div >
      <div className="min-h-screen flex items-center" >
      <BackgroundImages />
      <About />

      </div>
    </div>
  );
};

export default AboutPage;
