export default {
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
    'GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'
  ],
  keepHeaderOnError: true,
};
