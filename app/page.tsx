import Hero from '@/app/(landing)/_section/Hero';
import { Navbar } from './_components/Navbar';
import { BackgroundImages } from './_components/BackgroundImage';

export default function HomePage() {
  return (
    <div>
      <BackgroundImages />
      <Navbar />
      <Hero />
    </div>
  );
}
