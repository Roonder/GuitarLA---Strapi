module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceuq34g2i3mq2ss04hdg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_q7rg'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'EAf3wLOM6wh3bino1LqnlPZFtTvagNGL'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
