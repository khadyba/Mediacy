"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const snippets = [
  { id: 1, title: "Snippet 1", category: "JavaScript" },
  { id: 2, title: "Snippet 2", category: "React" },
  { id: 3, title: "Snippet 3", category: "CSS" },
];

export default function ExploreSnippets() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explorer les Snippets</h1>

      {/* Barre de recherche */}
      <div className="mb-6">
        <Input type="text" placeholder="Rechercher un snippet..." className="w-full" />
      </div>

      {/* Liste de snippets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {snippets.map((snippet) => (
          <Card key={snippet.id}>
            <CardHeader>
              <CardTitle>{snippet.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">{snippet.category}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Voir les détails</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bouton Ajouter un snippet (inactif) */}
      <div className="mt-8">
        <Button variant="secondary" size="lg" disabled>
          Ajouter un Snippet (Connectez-vous pour activer)
        </Button>
      </div>
    </div>
  );
}
