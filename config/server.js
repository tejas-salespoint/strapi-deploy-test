// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

// Path: ./config/server.js

// module.exports = ({ env }) => ({
//   host: env('APP_HOST', '0.0.0.0'),
//   port: env.int('NODE_PORT', 1337),
// });


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});