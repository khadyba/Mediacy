import Image from "next/image";

export const logo = () => {
    return(
        <Image 
        src={"/public/logo.png"}
        alt="Mediacy"
        width={36}
        height={36}
        priority
        className="cur"


        />
    )
}
export default logo