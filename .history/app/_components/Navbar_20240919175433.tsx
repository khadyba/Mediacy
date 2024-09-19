// composant coté client
"use client "
import Link from "next/link"
import React, { useContext, useState } from 'react';
import { useLangageContext } from '@/context/LanguageContext';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
}from "@/components/ui/navigation-menu"
import { Logo } from "@/components/ui/Logo"
import { link } from "fs"
import { Button } from "@/components/ui/button"

const navigation = [
  {
    id: 1,
    item: "Home",
    href: "/" // Page d'accueil
  },
  {
    id: 2,
    item: "Explore Snippets",
    href: "/explore" // Page pour explorer les snippets
  },
  {
    id: 3,
    item: "Collections",
    href: "/collections" // Page pour voir les collections de snippets
  },
  {
    id: 4,
    item: "My Library",
    href: "/library" // Page pour voir les snippets enregistrés ou favoris
  },
  {
    id: 5,
    item: "About",
    href: "/about" // Page à propos de l'application
  },
  {
    id: 6,
    item: "Contact",
    href: "/contact" // Page de contact
  }
];

 
type Language = 'en' | 'fr';
  export const Navbar = () => {

    const { language, changeLanguage } = useContext(LangageContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <div className="flex items-center justify-center w-full pt-8 select-none">
        {/* Encapsuler tout dans un seul NavigationMenu */}
        <NavigationMenu className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center">
         {/* Première liste de navigation pour le logo */}
         <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <h2 className="text-2xl font-bold">SnippetVault</h2>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
  
          {/* Liste de navigation pour les écrans moyens et grands */}
          <NavigationMenuList className="hidden md:flex items-center justify-around font-light space-x-14 text-xs">
            {navigation.map((navItem) => (
              <NavigationMenuItem
                key={navItem.id}
                className="cursor-pointer hover:underline"
              >
                {navItem.item}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
  
          {/* Bouton Login */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="primary" size="lg">
                  login
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
            {/* Bouton de traduction */}
          <NavigationMenuList>
            <NavigationMenuItem>
            <div className="relative">
              <Button
                onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}
                variant="primary"
                size="lg"
              >
                {language === 'en' ? 'Français' : 'English'}
              </Button>
            </div>
            </NavigationMenuItem>
          </NavigationMenuList>
  
          {/* Menu burger pour les petits écrans */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </NavigationMenu>
  
        {/* Menu déroulant sur mobile */}
        {isMenuOpen && (
          <NavigationMenu className="md:hidden bg-white   w-full absolute top-[60px] left-0 px-5 py-4 z-50">
            <NavigationMenuList className="flex flex-col space-y-4">
              {navigation.map((navItem) => (
                <NavigationMenuItem
                  key={navItem.id}
                  className="cursor-pointer hover:underline"
                >
                  {navItem.item}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    );
  };
  
  
// key Prop : Chaque élément dans une liste rendue avec map doit avoir une key unique. Cela aide React à identifier les éléments 
// qui ont été modifiés, ajoutés ou supprimés.


