import React from 'react';
import Image from 'next/image';
import aboutImage from '.'; // Remplacez par le chemin réel de votre image

const AboutPage = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 flex flex-col lg:flex-row">
      <div className="flex-1 mb-4 lg:mr-4">
        <h1 className="text-3xl font-bold mb-4">À propos de notre plateforme</h1>
        <p className="mb-4">
          Bienvenue sur notre plateforme dédiée aux développeurs JavaScript ! 
          Nous avons créé cet espace pour permettre aux développeurs de partager leur code 
          et d&apos;aider les débutants à apprendre et à s&apos;améliorer.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Notre Mission</h2>
        <p className="mb-4">
          Notre mission est de créer une communauté collaborative où les développeurs 
          peuvent se connecter, partager des astuces et des solutions, et inspirer 
          la prochaine génération de programmeurs.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Pourquoi Partager?</h2>
        <p className="mb-4">
          Le partage de code permet de renforcer les compétences, d&apos;encourager la 
          créativité et d&apos;améliorer la qualité du code dans l&apos;ensemble de la communauté.
          Nous croyons que tout le monde a quelque chose à apprendre et à enseigner.
        </p>
        <h2 className="text-2xl font-semibold mt-6">Rejoignez-Nous!</h2>
        <p className="mb-4">
          Que vous soyez un développeur expérimenté ou un débutant, nous vous invitons à 
          rejoindre notre plateforme, à explorer les ressources disponibles et à 
          contribuer à la communauté.
        </p>
      </div>
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
