import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
 
    async redirects() {
      return [
        {
          source: '/',
          destination: '/', // ou '/fr' selon ta langue par défaut
          permanent: true,
        },
      ];
    },
  };
  

export default nextConfig;
