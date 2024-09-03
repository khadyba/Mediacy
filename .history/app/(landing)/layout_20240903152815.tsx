import { Children, ReactHTML } from "react"
implements
  interface landingLayoutPropos {
    children : React.ReactNode

}


const landingLayout = ({ children}: landingLayoutPropos) => {
    return (
        <>

           <BackgroundImages />
           {/* <Navbar /> */}
           {children}
        </>
    )
}
export default landingLayout