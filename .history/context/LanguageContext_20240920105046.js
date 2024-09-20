"use client"; 
import React, { createContext, useState } from 'react';

// Crée le contexte avec une signature correcte pour changeLanguage
const LanguageContext = createContext({
  language: "en",
  changeLanguage: (lang: string) => {}, // Ajoutez un paramètre ici
});

// Fournit le contexte aux composants enfants
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string) => {
    setLanguage(lang); // Mettez à jour la langue ici
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
