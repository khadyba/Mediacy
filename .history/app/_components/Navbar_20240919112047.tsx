"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { id: 1, item: "Home" },
  { id: 2, item: "About" },
  { id: 3, item: "Customers" },
  { id: 4, item: "Contact" },
  { id: 5, item: "Pricing" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-center w-full pt-8 select-none">
      <div className="w-full max-w-[1200px] justify-between px-5 py-2 h-[60px] items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <h2 className="text-2xl font-bold">Medicy</h2>
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="hidden md:flex items-center space-x-14 text-xs">
          {navigation.map((navItem) => (
            <div key={navItem.id} className="cursor-pointer hover:underline">
              {navItem.item}
            </div>
          ))}
        </div>

        {/* Menu burger pour mobiles */}
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

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white w-full absolute top-[60px] left-0 px-5 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((navItem) => (
                <div key={navItem.id} className="cursor-pointer hover:underline">
                  {navItem.item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
