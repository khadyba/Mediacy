import { LanguageProvider } from '@/context/LanguageContext';
import React  from "react"
import { BackgroundImages } from "../_components/BackgroundImage"
import { Navbar } from "../_components/Navbar"
  interface landingLayoutPropos {
    children : React.ReactNode

}

const landingLayout = ({ children}: landingLayoutPropos) => {
    return (
       di
           <BackgroundImages />
           <Navbar />
           {children}
    )
}
export default landingLayout