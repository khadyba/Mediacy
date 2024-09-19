// import Image from "next/image"
// import bgImage from '@/public/background.webp'

// export const BackgroundImages = () => {
//       return (
//         <Image 
//            src={bgImage}
//            alt="Background"
//            placeholder="blur"
//            fill 
//            sizes="100vw"
//            className="object-cover z-[-1]"
//         />
//       )
// }



import Image from "next/image";
import bgImage from '@/public/background.webp';

export const BackgroundImages = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
      <Image 
        src={bgImage}
        alt="Background"
        placeholder="blur"
        fill 
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
};


