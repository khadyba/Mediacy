import React  from "react"
import { BackgroundImages } from "../_components/BackgroundImage"

import { Navbar } from "../_components/Navbar"
  interface landingLayoutPropos {
    children : React.ReactNode

}


const landingLayout = ({ children}: landingLayoutPropos) => {
    return (
        <>
           <BackgroundImages />
           <Navbar />
           {children}
        </>
    )
}
export default landingLayout