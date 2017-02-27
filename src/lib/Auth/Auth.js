const AuthStorage = require('../AuthStorage');

const CREDENTIALS_KEY = 'getSatKey';

const getCredentials = () => {
  const storedCredentials = AuthStorage.get(CREDENTIALS_KEY);
  return storedCredentials && JSON.parse(storedCredentials);
};

const logged = () => {
  return !!getCredentials();
};

module.exports = {
  getCredentials,
  logged
};
