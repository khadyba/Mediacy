"use client";
import React, { createContext, useState } from 'react';

// Crée le contexte
const LanguageContext = createContext({
  language: "en",
  changeLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
   const [language, setLanguage] = useState('en');

  //  <Button
  onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')} // Ajoute l'argument ici
  variant="primary"
  size="lg"
>
  {language === 'en' ? 'Français' : 'English'}
</Button>


   return (
     <LanguageContext.Provider value={{ language, changeLanguage }}>
       {children}
     </LanguageContext.Provider>
   );
};

export { LanguageContext, LanguageProvider };
