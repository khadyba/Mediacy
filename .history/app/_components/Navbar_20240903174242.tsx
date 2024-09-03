// composant coté client
"use client "
// importation de link pour les lient fournis par next
import Link from "next/link"

// importation du menu de navigation 

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
    },
    {
      id: 2,
      item: "About",
    },
    {
      id: 3,
      item: "Customers",
    },
    {
      id: 4,
      item: "Contact",
    },
    {
      id: 5,
      item: "Pricing",
    },
  ];
  
  export const Navbar = () => {
    return (
      <div className="flex items-center justify-center w-full pt-8 select-none">
        <NavigationMenu
          className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center"
        >
          {/* Première liste de navigation pour le logo */}
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="flex items-center space-x-2">
                <Logo />
                <h2 className="text-2xl font-bold">Medicy</h2>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
  
          {/* Liste de navigation pour les éléments */}
          <NavigationMenuList
            className="flex items-center justify-around font-light space-x-14 text-xs"
          >
            {/* Afficher les éléments de navigation */}
            {navigation.map((navItem) => (
              <NavigationMenuItem
                key={navItem.id} 
                className="cursor-pointer hover:underline"
              >
                {navItem.item} {/* Affichage du texte de navigation */}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

           <NavigationMenuLink>
            <NavigationMenuItem>
                 <Link href="/">
                 <Button variant="primary" size="lg">
                         login
                 </Button>
                 </Link>
            </NavigationMenuItem>
           </NavigationMenuLink>

        </NavigationMenu>
      </div>
    );
  };
  
// key Prop : Chaque élément dans une liste rendue avec map doit avoir une key unique. Cela aide React à identifier les éléments 
// qui ont été modifiés, ajoutés ou supprimés.

