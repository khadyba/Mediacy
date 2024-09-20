"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form"; // Importation des hooks nécessaires
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Définition du schéma de validation avec Zod
const formSchema = z.object({
  email: z.string().email("Email invalide"), // Vérifie que l'email est au bon format
  password: z.string().min(6, {
    message: "Le mot de passe doit contenir au moins 6 caractères.", // Validation pour le mot de passe
  }),
});

// Type pour les données du formulaire
type FormData = z.infer<typeof formSchema>; // Infère le type basé sur le schéma Zod

export function ProfileForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema), // Utilise Zod pour valider les données du formulaire
  });

  // Fonction appelée lors de la soumission du formulaire
  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Ici, tu peux gérer la connexion
    console.log(data); // Affiche les données du formulaire
    alert("Connexion réussie !"); // Affiche un message de succès
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-purple text-">Email</FormLabel>
              <FormControl>
                <Input placeholder="exemple@mail.com" {...field}  
                 className="h-[50px] w-[500px] text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field}
                 className="h-[50px] w-[500px] text-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="purple" size="lg">Se connecter</Button>
      </form>
    </Form>
  );
}
