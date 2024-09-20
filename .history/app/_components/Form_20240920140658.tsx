"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Schéma de validation
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom d'utilisateur doit contenir au moins 2 caractères.",
  }),
});

// Définir le type des données du formulaire
type FormData = z.infer<typeof formSchema>;

export function ProfileForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Logique à exécuter lors de la soumission du formulaire
    console.log(data);
  };
  const formSchema = z.object({
    email: z.string().email("Email invalide"),
    password: z.string().min(6, {
      message: "Le mot de passe doit contenir au moins 6 caractères.",
    }),
  });
  
  export function ProfileForm() {
    const form = useForm({
      resolver: zodResolver(formSchema),
    });
  
    const onSubmit = (data) => {
      // Logique de connexion ici
      console.log(data);
      alert("Connexion réussie !");
    };
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Envoyer</Button>
      </form>
    </Form>
  )
}
