"use client"; 
import React, { createContext, useState } from 'react';

const LanguageContext = createContext({
  language: "en",
  changeLanguage: () => {},
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
