const { loadVehiclesRoutes } = require('./vehicles');

const loadRoutes = (app, connection) => {
  loadVehiclesRoutes(app, connection);
};

exports.loadRoutes = loadRoutes;
