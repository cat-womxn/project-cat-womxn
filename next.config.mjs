import { paraglide } from '@inlang/paraglide-next/plugin'
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },

  reactStrictMode: true,
  images: {
    domains: [
      'cdn.litt.ly',
      'cdn.imweb.me',
      'www.sisters.or.kr',
      'ywca.or.kr',
      'women21.or.kr',
      'womenfund.or.kr',
      'www.nanumkorea.go.kr',
      'raw.githubusercontent.com',
      'cdn.huffingtonpost.kr',
      'merryyear.org',
      'encrypted-tbn0.gstatic.com',
      'res.cloudinary.com',
      'cdn.myportfolio.com',
      'kumsn.org',
      'cdn-icons-png.flaticon.com',
    ],
  },
}

export default paraglide({
  paraglide: {
    project: './project.inlang',
    outdir: './src/paraglide',
  },
  ...nextConfig,
})
