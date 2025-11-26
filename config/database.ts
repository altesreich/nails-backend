export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite'); // Asegúrate que en Render uses 'postgres'

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'), // la URL completa de Render aquí
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
