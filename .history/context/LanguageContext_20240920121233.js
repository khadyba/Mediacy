"use client"; 
import React, { createContext, useState } from 'react';

const LanguageContext = createContext({
  language: "en",
  changeLanguage: () => {},
});

const LanguageProvider = ({ children }) => {

   const [language, setLanguage] = useState('en');
  return (
    <LanguageContext.Provider >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
