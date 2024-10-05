// About.js
import React from 'react';
import Image from 'next/image';
import aboutImage from '@/public/images/about.png'; 

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row">
        

      {/* Image à gauche */}
      <div className="flex-1 mb-4 lg:mr-4">
        <Image 
          src={aboutImage} 
          alt="À propos de notre plateforme" 
          layout="responsive" 
          width={500} 
          height={300} // Ajustez la taille selon vos besoins
          className="rounded-lg shadow-lg border border-gray-200"
        />
      </div>

    </div>
  );
}

export default About;
