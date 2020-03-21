const cors = require('cors');
const { logRequest } = require('../utils/log');

const whitelist = ['http://localhost:8080', 'https://brugarolas.github.io', 'https://brugarolas.github.io/car-rental-catalog-test-frontend', 'https://bruga-car-rental-catalog.herokuapp.com'];

const corsOptions = {
  origin: (origin, callback) => {
    logRequest(origin);

    if (!origin) return callback(null, true); // Borwser, Mobile Apps, Post, Curl requests etc... has no origin

    if (!whitelist.includes(origin)) { // CORS policy for our site does not allow specified origin
      return callback(new Error(`Origin tot allowed by CORS (${origin})`), false);
    }

    return callback(null, true);
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

exports.corsMiddleware = cors(corsOptions);
