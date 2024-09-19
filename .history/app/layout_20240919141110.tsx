import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import '../config/i18n'; 
import React, { createContext } from 'react';

// import '../styles/globals.css'; 

const poppins = Poppins({ subsets: ["latin"], 
  weight:['300','400','500','600','700'] });

export const metadata: Metadata = {
  title: "landingpage",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body> 
    </html>
  );
}
