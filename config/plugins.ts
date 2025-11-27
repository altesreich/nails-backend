// path: ./config/plugins.ts
export default ({ env }) => ({
  'users-permissions': {
    enabled: true,
    config: {
      jwtSecret: env('JWT_SECRET', 'DEV_FALLBACK_SECRET_123'),
    },
  },
});
