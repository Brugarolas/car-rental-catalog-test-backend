// const vehicles = require('../data/vehicles.json');
const { logError } = require('../utils/log');

const loadVehiclesRoutes = (app, connection) => {
  // Simple API - Only one method!
  app.get('/', function (req, res) {
    if (!connection.active) {
      res.status(500).send({ message: 'Connection with MongoDB server is lost' });
    }

    const vehicleModel = connection.models.vehicle;

    vehicleModel.find(function (error, result) {
      if (error) {
        logError(error);

        res.status(500).send({ message: `Internal server error (code ${error.code})` });
      } else {
        res.status(200).send({ vehicles: result, total: result.length });
      }
    });
  });
};

exports.loadVehiclesRoutes = loadVehiclesRoutes;
