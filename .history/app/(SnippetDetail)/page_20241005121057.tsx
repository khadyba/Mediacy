import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SnippetDetail() {
  const { id } = useParams(); // Récupérer l'ID du snippet depuis l'URL
  const [snippet, setSnippet] = useState(null);

  useEffect(() => {
    // Récupérer le snippet correspondant à l'ID
    fetch(`/data/snippets.json`)
      .then((response) => response.json())
      .then((data) => {
        const selectedSnippet = data.find((snippet) => snippet.id === parseInt(id));
        setSnippet(selectedSnippet);
      });
  }, [id]);

  if (!snippet) return <div>Chargement...</div>;

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-bold">{snippet.titre}</h1>
      <p className="text-sm text-gray-600">{snippet.categorie}</p>
      <p className="my-4">{snippet.description}</p>

      {/* Afficher le code JS */}
      <pre className="bg-gray-100 p-4 rounded-md">{snippet.code}</pre>

      {/* Ajouter un exemple de résultat */}
      <h2 className="text-xl font-semibold mt-6">Exemple de résultat :</h2>
      <div className="bg-gray-100 p-4 rounded-md">
        {/* Utilisation de dangerouslySetInnerHTML pour insérer du code JS (ex: pour des résultats dynamiques) */}
        <div dangerouslySetInnerHTML={{ __html: snippet.resultat }} />
      </div>
    </div>
  );
}
