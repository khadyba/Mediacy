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

const navigation = [
    {
        item: "Home",
    },
    {
        item: "About"
    },
    {
        item: "Customers"
    },
    {
        item: "Contact"
    },
    {
        item: "Pricing"
    }
]
export const Navbar = () =>  {
    return(
        <div className="flex items-center justify-center w-full pt-8 select-none ">
            <NavigationMenu  className="w-full max-w-[1200px] justify-between px-5 py-2 
            h-[60px] items-center" >
             <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                    <h2 className="text-2xl font-bold">Medicy</h2>
                    </Link>
                </NavigationMenuItem>
             </NavigationMenuList>

             <NavigationMenuList className="flex items-center justify-around font-light 
             space-x-14 text-xs">
                {navigation.map((link ) =>())}
                <NavigationMenuItem>


                </NavigationMenuItem>
             </NavigationMenuList>
            </NavigationMenu>

        </div>
    )
}


