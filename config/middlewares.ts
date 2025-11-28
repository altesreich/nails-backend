export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:'],
          'media-src': ["'self'", 'data:', 'blob:'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://nails-zeta.vercel.app',
        'http://localhost:3000',
        'http://localhost:3001'
      ],
      headers: [
        'Content-Type', 
        'Authorization', 
        'Origin', 
        'Accept', 
        'X-Requested-With'
      ],
      methods: [
        'GET', 
        'POST', 
        'PUT', 
        'PATCH', 
        'DELETE', 
        'HEAD', 
        'OPTIONS'
      ],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
