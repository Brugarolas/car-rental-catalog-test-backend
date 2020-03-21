const express = require('express');
const { corsMiddleware } = require('./config/cors');
const { loadRoutes } = require('./endpoints');
const { log } = require('./utils/log');

const app = express();
const PORT = process.env.PORT || 80;

app.use(corsMiddleware);

// Load endpoints
loadRoutes(app);

app.listen(PORT, () => {
  log(`Listening on port ${PORT}`);
});
