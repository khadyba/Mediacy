
import Image from "next/image";
import bgImage from '@/public/background.webp';

export const BackgroundImages = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <Image 
        src={bgImage}
        alt="Background"
        fill 
        placeholder="blur"
        sizes="100vw"
        className="object-cover w-full h-full"
      />
    </div>
  );
};



