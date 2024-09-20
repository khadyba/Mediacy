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
    email: z.string().email("Email invalide"),
    password: z.string().min(6, {
      message: "Le mot de passe doit contenir au moins 6 caractères.",
    }),
  });
  // Définir le type des données du formulaire
type FormData = z.infer<typeof formSchema>;
  
  export function ProfileForm() {
    const form = useForm({
      resolver: zodResolver(formSchema),
    });
  
    const onSubmit = (data: FormData) => {
        // Logique à exécuter lors de la soumission du formulaire
        console.log(data);
      };
  
    return (
      <Form {...form}>
           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="exemple@mail.com" {...field} />
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
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Se connecter</Button>
        </form>
      </Form>
    );
  }
