import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (

    <section className="w-full max-w-[1200px] mx-auto flex items-center h-[calc(100%-60px)] px-4">
    <div className="flex flex-col md:flex-row justify-between w-full pt-16">
      <HeroLeft />
      <HeroRight />
    </div>
  </section>
  
  )
}

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-between mt-8 md:mt-0">
      <HeroInfo />
      {/* <HeroDL /> */}
    </div>
  )
}
const HeroRight = () => {
    return (
        <div className="">
      <Image 
        src="/hero-image.png"
        alt="logo"
        width={450}
        height={450}
        priority
        className="max-[768px]:mt-[10px]"
      />
      </div>
    );
  };

  const HeroInfo = () => {
    return (
      <div className="flex flex-col space-y-6 select-none items-center md:items-start text-center md:text-left max-w-full">
        <h1 className="font-bold text-[40px] leading-[50px] md:text-[60px] md:leading-[81px] max-w-full">
          Welcome to <br />
          Cryptocurrentcy <br />
          <span className="text-[#6841DA]">Social Media</span>
        </h1>
        <p className="font-light text-xs md:text-base max-w-full">
          Measure social media performance, create great reports, and get <br />
          recommendations to increase reach, engagement and sales.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <Button variant={"secondary"} size={"lg"} className="text-xs py-2 px-4">
            Get started now
          </Button>
          <Button variant={"primary"} size={"lg"} className="text-xs py-2 px-4">
            Contact Us
          </Button>
        </div>
      </div>
    );
  };
  

  
  
  

export default Hero
