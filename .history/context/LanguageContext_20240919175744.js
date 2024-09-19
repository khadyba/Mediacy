"use client"; 
import exp from 'constants';
import React, { createContext, useState } from 'react';

// Crée le contexte
 const LanguageContext = createContext();
// Fournit le contexte aux composants enfants
 export  const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState('en');
  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Logique pour changer la langue de l'application
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// export { LanguageContext, LanguageProvider };
export function useLangageContext(){

  return useContext(LangageContext)
}