import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="w-full max-w-[1200px] flex flex-col-reverse md:flex-row items-center h-[calc(100%-60px)] mt-[50px] justify-center">
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
        className="max-[768px]:mt-[10px]"
      />
      </div>
    );
  };

  const HeroInfo = () => {
    return (
      <div className="flex flex-col space-y-6 select-none items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-[60px] leading-[81px] max-[768px]:text-[40px] max-[768px]:leading-[50px]">
          Welcome to <br />
          Cryptocurrentcy <br />
          <span className="text-[#6841DA]">Social Media</span>
        </h1>
        <p className="font-light text-xs max-[768px]:text-[12px] max-[">
          Measure social media performance, create great reports, and get <br />
          recommendations to increase reach, engagement and sales.
        </p>
        <div className="flex flex-col max-[768px]:items-center gap-4 md:flex-row md:gap-6">
          <Button variant={"secondary"} size={"lg"} className="max-[768px]:text-xs max-[768px]:py-2 max-[768px]:px-4">
            Get started now
          </Button>
          <Button variant={"primary"} size={"lg"} className="max-[768px]:text-xs max-[768px]:py-2 max-[768px]:px-4">
            Contact Us
          </Button>
        </div>
      </div>
    );
  };
  
  const HeroDL = () => {
    return (
      <div className="flex flex-col space-y-4 items-center">
        <div className="flex items-center space-x-2">
          <Image src={"/star.svg"} alt="Star" width={20} height={20} />
          <p className="text-xs text-[#979797] font-bold ">
            PAY ONE-TIME SMALL FEE, USE LIFETIME
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
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
    );
  };
  

export default Hero
