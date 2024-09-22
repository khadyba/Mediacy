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
          src="/images/ordi.jpg" 
          alt="Description de l'image"
          layout="responsive" // Rend l'image réactive
          objectFit="cover" // Ajuste l'image sans déformation
          width={700} // Largeur de l'image (augmentée)
          height={500} // Hauteur de l'image (augmentée)
          className="rounded-lg border border-gray-200 shadow-lg "
        />
      </div>
    </div>
  );
};

export default RegisterPage;
