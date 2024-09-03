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
        item: "About"
    },
    {
        item: "About"
    }
]