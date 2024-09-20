"use client";
import React, { createContext, useState } from 'react';

// Crée le contexte
const LanguageContext = createContext({
  language: "en",
  changeLanguage: () => {},
});
const LanguageProvider = ({ children }) => {
   const [language, setLanguage] = useState('en');

   const changeLanguage = (lang) => {
     setLanguage(lang);
   };

   return (
     <LanguageContext.Provider value={{ language, changeLanguage }}>
       {children}
     </LanguageContext.Provider>
   );
};

export { LanguageContext, LanguageProvider };
