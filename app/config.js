const config = {
  user: process.env.POST_USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  idleTimeoutMillis: 0.001,
};

module.exports = config;
