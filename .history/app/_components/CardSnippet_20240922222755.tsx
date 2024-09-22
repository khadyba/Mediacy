"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [visibleCount, setVisibleCount] = useState(5); // État pour le nombre de snippets visibles

  useEffect(() => {
    fetch("/data/snippets.json")
      .then((response) => response.json())
      .then((data) => setSnippets(data));
  }, []);

  // Fonction pour charger plus de snippets
  const loadMoreSnippets = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Grille des cartes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl">
        {snippets.slice(0, visibleCount).map((snippet) => (
          <Card key={snippet.id} className="w-full max-w-xs">
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

      {/* Bouton "Voir plus" */}
      {visibleCount < snippets.length && (
        <Button variant="secondary" className="mt-6" onClick={loadMoreSnippets}>
          Voir plus
        </Button>
      )}
    </div>
  );
}
