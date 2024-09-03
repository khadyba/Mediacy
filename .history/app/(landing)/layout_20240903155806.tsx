import { BackgroundImages } from "../_components/BackgroundImage"

import N
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