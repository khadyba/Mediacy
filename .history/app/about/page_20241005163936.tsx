
"use client";
import About from "@/app/_components/About"; 
import { BackgroundImages } from "../_components/BackgroundImage";
import { Navbar } from "../_components/Navbar";

const AboutPage = () => {
  return (
    <div >
      <Navbar />
      <div className="min-h-screen f" >
      <BackgroundImages />
      <About />

      </div>
    </div>
  );
};

export default AboutPage;
