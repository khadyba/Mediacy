"use client";
import { ProfileForm } from "@/app/_components/Form"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Assure-toi d'importer Image
import { BackgroundImages } from "../_components/BackgroundImage";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <BackgroundImages />
      {/* Formulaire à gauche */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-4">Connexion</h1>
        <ProfileForm />
        <Link href="/register">
          <Button variant="secondary" className="mt-4 w-full"> {/* w-full pour même taille */}
            Créer un compte
          </Button>
        </Link>
      </div>

      {/* Image à droite */}
      <div className="w-1/2">
        <Image 
          src="/public" // Remplace par le chemin de ton image
          alt="Description de l'image"
          layout="responsive" // Utilise layout responsive pour une bonne adaptation
          width={500} // Ajuste selon tes besoins
          height={500} // Ajuste selon tes besoins
        />
      </div>
    </div>
  );
};

export default LoginPage;
