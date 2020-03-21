const process = require('process');
const exitEvents = ['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'];

const setOnClose = (callback) => {
  exitEvents.forEach(eventType => {
    process.on(eventType, callback);
  });
};

exports.setOnClose = setOnClose;
