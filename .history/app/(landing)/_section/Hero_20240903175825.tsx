import link from "next/link"

import Image from "next/image"


import { Button } from "@/components/ui/button"

const Hero = () => {
        return(
             <section className="w-full max-[1200px] flex items-center h-[calc(100%-60px)]">


                <div className="flex  justify-between w-full pt-16">
                        <HeroLeft />
                        <HeroRight />

                </div>
             </section>
        )
    }
    const HeroLeft = () => {
       return (
<Image />
       )
    }

const HeroRight = () => {
    return(
        
        <div></div>

    )
    
}

export default Hero