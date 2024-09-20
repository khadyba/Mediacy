import Hero from "./_section/Hero";
import { Navbar } from '@/app/_components/Navbar';
import { BackgroundImages } from '@/app/_components/BackgroundImage';

const  landingpage = () => {
  return (
        <div className="flex items-center justify-center w-full">
            <BackgroundImages />
            <Navbar />
          <Hero />
        </div>
  );
}
export default  landingpage  