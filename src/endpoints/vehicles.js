const vehicles = require('../data/vehicles.json');

const loadVehiclesRoutes = (app) => {
  // Simple API - Only one method!
  app.get('/', function (req, res) {
    res.status(200).send({ vehicles, total: vehicles.length });
  });
};

exports.loadVehiclesRoutes = loadVehiclesRoutes;
