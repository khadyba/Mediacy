
"use client";
import About from "@/app/_components/About"; // Ajustez le chemin selon votre structure de dossier
import { BackgroundImages } from "../_components/BackgroundImage";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center">
      <BackgroundImages />
      <About />
    </div>
  );
};

export default AboutPage;
