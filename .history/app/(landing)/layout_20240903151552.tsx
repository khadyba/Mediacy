import { Children, ReactHTML } from "react"

  interface landingLayoutPropos {
    children : React.ReactNode

}


const landingLayout = ({ children}: landingLayoutPropos) => {
    return (
        <>

           <BackgroundImages />
           <Navbar />
           
        </>
    )
}
export default landingLayout