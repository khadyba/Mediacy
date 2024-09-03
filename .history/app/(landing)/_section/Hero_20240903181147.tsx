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
        return(
        
            <div className="flex float-start justify-between">

                        <HeroInfo />
                        <HeroDL /> 
            </div>
    
        )
    }

const HeroRight = () => {
    
    return (
        <Image 
        src="/hero-image.png"
        alt="logo"
        width={450}
        height={450}
        priority
        />
   )
    
}


const HeroInfo = () => {
    return (
            <div className="flex i flex-col space-y-6  select-none">
                <h1 className="font-bold text-[65px] leadind-[81px]">
                    Welcome to  <br />  
                       Cryptocurrentcy <br /> 
                        <span className="text-[#6841DA]">Social Media</span>
                </h1>
            </div>
    )
}


const HeroDL = () => {
    return (
          <div>
                
            </div>
    )
}
export default Hero