import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
export default {
  i18n,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en,
        permanent: true,
      },
    ];
  },
};



