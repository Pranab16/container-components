const { createStore } = require('redux');

const middleware = require('./middleware');

const configureStore = (reducer, initialState) => {
  return createStore(
    reducer,
    initialState,
    middleware
  );
};

module.exports = configureStore;
