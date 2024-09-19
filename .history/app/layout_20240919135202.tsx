import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import '../config/i18n'; // Assure-toi que la configuration est chargée
import '../styles/globals.css'; // Autres styles globaux

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
