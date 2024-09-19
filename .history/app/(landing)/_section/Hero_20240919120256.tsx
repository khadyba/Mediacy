import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] flex flex-col-reverse md:flex-row items-center h-[calc(100%-60px)] mt-[]">
      <HeroLeft />
      <HeroRight />
    </section>
  )
}

const HeroLeft = () => {
  return (
    <div className="flex flex-col justify-between mt-8 md:mt-0">
      <HeroInfo />
      <HeroDL />
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
        className="max-[320px]:mt-[10px]"
      />
      </div>
    );
  };

const HeroInfo = () => {
    return (
      <div className="flex flex-col space-y-6 select-none">
        <h1 className="font-bold text-[60px] leading-[81px] max-[320px]:text-[40px] max-[320px]:leading-[50px]">
          Welcome to <br />  
          Cryptocurrentcy <br /> 
          <span className="text-[#6841DA]">Social Media</span>
        </h1>
        <p className="font-light text-xs">
          Measure social media performance, create great reports, and get <br />
          recommendations to increase reach, engagement and sales.
        </p>
        <div className="flex gap-6">
          <Button variant={"secondary"} size={"lg"} className="max-[320px]:text-xs max-[320px]:py-2 max-[320px]:px-4">
            Get started now
          </Button>
          <Button variant={"primary"} size={"lg"} className="max-[320px]:text-xs max-[320px]:py-2 max-[320px]:px-4">
            Contact Us
          </Button>
        </div>   
      </div>
    );
  };
  


const HeroDL = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <Image src={"/star.svg"} alt="Star" width={20} height={20} />
        <p className="text-xs text-[#979797] font-bold">
          PAY ONE-TIME SMALL FEE, USE LIFETIME
        </p>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/appstore-badge.svg"}
            alt="AppStore Badge"
            width={120}
            height={50}
          />
        </Link>
        <Link href="/" className="cursor-pointer">
          <Image
            src={"/googleplay-badge.svg"}
            alt="Google Play Badge"
            width={120}
            height={50}
          />
        </Link>
      </div>
    </div>
  )
}

export default Hero
