"use client"; 
import React, { createContext, useState } from 'react';

const LanguageContext = createContext({
  language: "en",
  changeLanguage: (lang) => {}, 
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang); // Mettez à jour la langue ici
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
