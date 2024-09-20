import Hero from "./_section/Hero";
import { Navbar } from '._components/Navbar';
import { BackgroundImages } from '@/app/_components/';

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