"use client";
import { ProfileForm } from "@/app/_components/Form"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; 
import { BackgroundImages } from "../_components/BackgroundImage";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center">
      <BackgroundImages />
      {/* Formulaire à gauche */}
      <div className="flex flex-col items-center justify-center w-1/2 p-8">
        <h1 className="text-2xl text-[38px] font-bold text-purple mb-4">Connexion</h1>
        <ProfileForm />
        <Link href="/register" className="mt-[50px]  text-white hover:text-[#6841DA]">
          {/* <Button variant="primary" className="mt-4 w-full  ">  */}
            Pas Encor de compte inscrivez-vous !
          {/* </Button> */}
        </Link>
      </div>

      {/* Image à droite */}
      <div className="w-1/2 relative mr-10 shadow-lg  border-300 rounded">
        <Image 
          src="/images/photo.jpeg" 
          alt="Description de l'image"
          layout="responsive" 
          width={200} 
          height={200} 
          className="rounded"
        />
      </div>
    </div>
  );
};

export default LoginPage;
