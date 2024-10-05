"use client";

import { BackgroundImages } from "../_components/BackgroundImage";
import SnippetList from "../_components/CardSnippet";


export default function PageSnippets() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center font-bold mb-6  text-purple mb-4">Les Snippets</h1>
               <BackgroundImages />
               <SnippetList />
    </div>
  );
}
