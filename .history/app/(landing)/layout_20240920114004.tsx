// import { LanguageProvider } from '@/context/LanguageContext'; 
import { BackgroundImages } from "../_components/BackgroundImage";
import { Navbar } from "../_components/Navbar";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
<div>
      <BackgroundImages />
      <Navbar />
      {children}
    
  );
};

export default LandingLayout;
