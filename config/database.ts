export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite'); // Asegúrate que en Render uses 'postgres'

  const connections = {
    postgres: {
      connection: {
        connectionString: env('postgresql://strapi_nails_user:EWF883J2smpCf7V6vs20RC834rVRDusw@dpg-d4jjtp8dl3ps73ehn240-a.oregon-postgres.render.com/strapi_nails'), // la URL completa de Render aquí
        ssl: {
          rejectUnauthorized: false,
        },
      },
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
    // otras configuraciones...
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
