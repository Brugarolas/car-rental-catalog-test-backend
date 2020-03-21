const express = require('express');
const { corsMiddleware } = require('./config/cors');
const { openConnection } = require('./config/mongoose');
const { loadRoutes } = require('./endpoints');
const { setOnClose } = require('./utils/on-close');
const { log } = require('./utils/log');

const app = express();
const PORT = process.env.PORT || 80;

app.use(corsMiddleware);

openConnection().then((connection) => {
  // Load endpoints
  loadRoutes(app, connection);

  const server = app.listen(PORT, () => {
    log(`Listening on port ${PORT}`);
  });

  setOnClose(() => {
    log('Closed Express server');

    server.close();
  });
}).catch((error) => {
  throw new Error(`Connection with MongoDB failed (${error.message})`);
});
