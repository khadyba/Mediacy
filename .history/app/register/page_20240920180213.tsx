"use client";

import Image from "next/image";
import { RegisterForm } from "@/app/_components/RegisterForm"; // Ton formulaire RegisterForm
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundImages } from "../_components/BackgroundImage";

const RegisterPage = () => {
  return (
    <div className="flex flex-row items-center justify-center min-h-screen">
      {/* Formulaire à gauche */}
      <div className="w-1/2 p-8">
      <BackgroundImages />
        <RegisterForm />
      </div>

      {/* Image à droite */}
      <div className="w-1/2 relative">
        <Image 
          src="/images/ordi.jpg" // Remplace par le chemin de ton image
          alt="Description de l'image"
          objectFit="cover" // L'image occupe tout l'espace sans déformer
          className="rounded-lg border border-gray-200 shadow-lg relative"
          width={200} 
          height={200} 
        />
      </div>
    </div>
  );
};

export default RegisterPage;
