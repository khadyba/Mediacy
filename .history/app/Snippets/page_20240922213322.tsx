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

   
    </div>
  );
}
