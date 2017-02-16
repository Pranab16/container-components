const { createStore } = require('redux');

const middleware = require('./middleware');

let store = null;

module.exports = function configureStore(reducer, initialState) {
  if (store === null) {
    store = createStore(
      reducer,
      initialState,
      middleware
    );
  }

  return store;
};
