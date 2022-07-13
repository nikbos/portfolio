const siteMetadata = {
  title: 'NKBS',
  author: 'NKBS',
  headerTitle: 'NKBS',
  description: 'Nikola Bosnjak, Software Developer in Serbia.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://nikolabosnjak.com',
  siteRepo: 'https://github.com/nikbos/portfolio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpeg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'nikolabosnjak93@gmail.com',
  github: 'https://github.com/nikbos',
  linkedin: 'https://www.linkedin.com/in/nikbos',

  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: 'G-LEKDQZG4GD', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
};

module.exports = siteMetadata;
