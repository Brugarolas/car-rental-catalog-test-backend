const twoDigits = (number) => {
  return number > 9 ? number : `0${number}`;
};

const currentTime = () => {
  const now = new Date();

  return `${twoDigits(now.getHours())}:${twoDigits(now.getMinutes())}:${twoDigits(now.getSeconds())}`;
};

const log = (message) => {
  console.log(`${currentTime()} - ${message}`);
};

const logRequest = (origin) => {
  const originMessage = origin ? `Origin: ${origin}` : 'No origin';

  log(`Incoming request (${originMessage})`);
};

const logError = (error) => {
  console.error(`${currentTime()} -`, error);
};

exports.log = log;
exports.logRequest = logRequest;
exports.logError = logError;
