"use client"; // Assurez-vous que ce fichier est marqué comme client

import { LanguageProvider } from '@/context/LanguageContext'; // Import correct du LanguageProvider
import { BackgroundImages } from "../_components/BackgroundImage";
import { Navbar } from "../_components/Navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <LanguageProvider>
      <BackgroundImages />
      <Navbar />
      {children}
    </LanguageProvider>
  );
};

export default LandingLayout;
