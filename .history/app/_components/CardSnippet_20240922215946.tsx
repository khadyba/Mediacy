"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent,  CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Définir un type pour les snippets
type Snippet = {
  id: number;
  titre: string;
  description: string;
  code: string;
  categorie: string;
};

export default function SnippetList() {
  // Déclarer l'état en spécifiant le type `Snippet[]`
  const [snippets, setSnippets] = useState<Snippet[]>([]);

  useEffect(() => {
    fetch("/data/snippets.json")
      .then((response) => response.json())
      .then((data) => setSnippets(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {snippets.map((snippet) => (
        <Card key={snippet.id}>
          <CardHeader>
            <CardTitle>{snippet.titre}</CardTitle>
            <CardDescription>{snippet.categorie}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{snippet.description}</p>
            <pre className="bg-gray-100 p-2 mt-2 rounded-md">{snippet.code}</pre>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
