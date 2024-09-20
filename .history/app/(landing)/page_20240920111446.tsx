import { appWithTranslation } from 'next-i18next';
import Hero from "./_section/Hero";
const  landingpage = () => {
  return (
        <div className="flex items-center justify-center w-full">
          <Hero />
        </div>
  );
}
export default landingpage