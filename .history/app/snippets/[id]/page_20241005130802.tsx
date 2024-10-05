import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

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
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-bold">{snippet.titre}</h1>
      <p className="text-sm text-gray-600">{snippet.categorie}</p>
      <p className="my-4">{snippet.description}</p>

      <pre className="bg-gray-100 p-4 rounded-md">{snippet.code}</pre>

      <h2 className="text-xl font-semibold mt-6">Exemple de résultat :</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        <div dangerouslySetInnerHTML={{ __html: snippet.resultat }} />
      </div>
    </div>
  );
}
