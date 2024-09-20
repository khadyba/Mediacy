"use client";
import { ProfileForm } from "@/app/_components/Form"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <ProfileForm />
      <Link href="/register">
        <Button variant="secondary" className="mt-4">
          Créer un compte
        </Button>
      </Link>
    </div>
  );
};

export default LoginPage;
