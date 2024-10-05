import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-screen-md mx-auto p-4 flex flex-col md:flex-row">
      {/* Colonne de texte */}
      <div className="md:w-1/2">
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

      {/* Colonne d'image */}
      <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
        <Image 
          src="/path/to/your/image.jpg" // Remplacez par le chemin de votre image
          alt="Description de l'image" 
          className="w-full h-auto rounded-lg shadow-lg" 
        />
      </div>
    </div>
  );
}

export default AboutPage;
