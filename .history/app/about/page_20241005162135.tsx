import React from 'react';
import Image from 'next/image';
import aboutImage from '@/public/images/about.png'; 
import About from '../_components/About';
const AboutPage = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 flex flex-col ">
         <About />
     
    </div>
  );
}

export default AboutPage;
