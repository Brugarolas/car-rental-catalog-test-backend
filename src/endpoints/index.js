const { loadVehiclesRoutes } = require('./vehicles');

const loadRoutes = (app) => {
  loadVehiclesRoutes(app);
};

exports.loadRoutes = loadRoutes;
