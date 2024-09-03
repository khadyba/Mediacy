import Image from "next/image";

export const Logo = () => {
    return(

        <Image 
        src={"/logo.png"}
        alt="Mediacy"
        width={36}
        height={36}
        priority
        className="cursor-pointer "


        />
    )
}
