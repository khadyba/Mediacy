"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
  const [snippets, setSnippets] = useState<Snippet[]>([]);
  const [visibleCount, setVisibleCount] = useState(5); // État pour le nombre de snippets visibles
  const [showCode, setShowCode] = useState<number | null>(null); // État pour le code à afficher (par id)

  useEffect(() => {
    fetch("/data/snippets.json")
      .then((response) => response.json())
      .then((data) => setSnippets(data));
  }, []);

  // Fonction pour charger plus de snippets
  const loadMoreSnippets = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  // Fonction pour afficher/masquer le code d'un snippet
  const toggleShowCode = (id: number) => {
    if (showCode === id) {
      setShowCode(null); // Si on clique à nouveau, on cache le code
    } else {
      setShowCode(id); // Sinon on montre le code
    }
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
              {/* Bouton pour voir plus de détails */}
              <Button
                variant="secondary"
                className="mt-2"
                onClick={() => toggleShowCode(snippet.id)}
              >
                {showCode === snippet.id ? "Masquer le code" : "Voir détails"}
              </Button>

              {/* Affichage du code uniquement si le bouton est cliqué */}
              {showCode === snippet.id && (
                <pre className="bg-gray-100 p-2 mt-2 rounded-md max-h-40 overflow-auto">
                  {snippet.code}
                </pre>
              )}
            </CardContent>
          </Card>
        ))}
        {/* Bouton "Voir plus" */}
        {visibleCount < snippets.length && (
        <Button
        variant="secondary"
        className="mt-2"
      >
        <Link href={`/snippets/${snippet.id}`}>Voir détails</Link>
      </Button>
        )}
      </div>
    );
      </div>

}
