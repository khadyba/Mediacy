
import React  from "react"
// import { BackgroundImages } from "../_components/BackgroundImage"

// import { Navbar } from "../_components/Navbar"
//   interface landingLayoutPropos {
//     children : React.ReactNode

// }


// const landingLayout = ({ children}: landingLayoutPropos) => {
//     return (
//         <>
//            <BackgroundImages />
//            <Navbar />
//            {children}
//         </>
//     )
// }
// export default landingLayout








import { BackgroundImages } from "../_components/BackgroundImage"

import { Navbar } from "../_components/Navbar"
import { LanguageProvider } from '.@/context/LanguageContext';

  interface landingLayoutPropos {
    children : React.ReactNode

}


const landingLayout = ({ children}: landingLayoutPropos) => {
    return (
        <LangageProvider>
           <BackgroundImages />
           <Navbar />
           {children}
        </LangageProvider>
    )
}
export default landingLayout