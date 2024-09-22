"use client";

import Image from "next/image";
import { RegisterForm } from "@/app/_components/RegisterForm"; // Ton formulaire RegisterForm
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackgroundImages } from "../_components/BackgroundImage";

const RegisterPage = () => {
  return (
    <div className="flex  items-center  min-h-screen">
      {/* Formulaire à gauche */}
      <div className="w-1/2 p-8">
      <BackgroundImages />
        <RegisterForm />
      </div>

      {/* Image à droite */}
      <div className="w-[550px] w-full relative mr-10">
        <Image 
          src="/images/ordina.avif" 
          alt="Description de l'image"
          layout="responsive" 
        //   objectFit="cover" 
          width={200} // Largeur de l'image (augmentée)
          height={200} // Hauteur de l'image (augmentée)
          className="rounded-lg border border-gray-200 shadow-lg "
        />
      </div>
    </div>
  );
};

export default RegisterPage;
