"use client"
import { BackgroundImages } from '@/app/_components/BackgroundImage';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Snippet = {
  id: number;
  titre: string;
  categorie: string;
  description: string;
  code: string;
  resultat: string;
};

export default function SnippetDetail() {

  const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID
  const [snippet, setSnippet] = useState<Snippet | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`/data/snippets.json`)
        .then((response) => response.json())
        .then((data) => {
          const selectedSnippet = data.find((snippet: Snippet) => snippet.id === parseInt(id as string));
          setSnippet(selectedSnippet);
        });
    }
  }, [id]);

  if (!snippet) return <div>Chargement...</div>;

  

  return (
    <div className="max-w-screen-md mx-auto p-6">
      <BackgroundImages />
                         <h1 className="text-3xl text-center font-bold mb-6  text-purple mt-10">Details Snippet</h1>
      <Card className="shadow-lg transition-shadow duration-300 hover:shadow-2xl mt-[100px] bg-violet-50">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-purple">{snippet.titre}</CardTitle>
          <CardDescription className="text-sm text-gray-600">{snippet.categorie}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="my-4 text-gray-700">{snippet.description}</p>
  
          <h2 className="text-xl font-semibold mt-6">Code :</h2>
          <pre className="bg-white p-4 rounded-md shadow-md overflow-auto">
            {snippet.code}
          </pre>
  
          <h2 className="text-xl font-semibold mt-6">Exemple de résultat :</h2>
          <div className="bg-white p-4 rounded-md shadow-md">
            <div dangerouslySetInnerHTML={{ __html: snippet.resultat }} />
          </div>
                 {/* Bouton Commenter */}
                <Button variant="secondary" className="mt-4">
                Commenter
                </Button>
        </CardContent>
      </Card>
    </div>
  );
  
}
