"use client";

import ExploreSnippets from "../_components/CardSnippet";


export default function PageSnippets() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explorer les Snippets</h1>
               
               <SnippetList />
    </div>
  );
}
