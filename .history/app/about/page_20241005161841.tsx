import React from 'react';
import Image from 'next/image';
import aboutImage from '@/public/images/about.png'; 
import About from '../_components/About';
const AboutPage = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 flex flex-col ">
         <About />
      <div className="flex-1">
        <Image 
          src={aboutImage} 
          alt="À propos de notre plateforme" 
          layout="responsive" 
          width={500} 
          height={300} 
        />
      </div>
    </div>
  );
}

export default AboutPage;
