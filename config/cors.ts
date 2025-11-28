// config/cors.ts
export default {
  enabled: true,
  origin: [
    'https://nails-zeta.vercel.app',
    'http://localhost:3000',
  ],
  headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  keepHeaderOnError: true,
};
