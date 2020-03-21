const mongoose = require('mongoose');
const { models } = require('../models');
const { log, logError } = require('../utils/log');
const { setOnClose } = require('../utils/on-close');

const DATABASE_NAME = 'car-rental';
const USER = 'bipi_test_user'; // bipi_incorrect for testing mongo errors
const PASS = 'bipi2020';

const openConnection = () => {
  const connection = {
    active: false,
    models: {}
  };

  return new Promise((resolve, reject) => {
    mongoose.connect(`mongodb+srv://${USER}:${PASS}@bruga-xun25.mongodb.net/${DATABASE_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', (error) => {
      logError(error);

      reject(error);
    });

    db.once('open', function () {
      log(`Connection with MongoDB is opened (database ${DATABASE_NAME})`);

      setOnClose(() => {
        log('Connection with MongoDB is closed');
        mongoose.disconnect();
      });

      models.forEach(modelData => {
        connection.models[modelData.name] = modelData.model;
      });

      connection.active = true;

      resolve(connection);
    });

    db.on('disconnected', () => {
      connection.active = false;

      logError('Mongoose default connection is disconnected');
    });
  });
};

exports.openConnection = openConnection;
