const { applyMiddleware, compose } = require('redux');
const thunk = require('redux-thunk').default;

const promise = require('./promise');

const middleware = applyMiddleware(promise, thunk);
let devMiddleware;

if (process.env.NODE_ENV === 'development') {
  const devComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  devMiddleware = devComposer(middleware);
}

module.exports = (devMiddleware || middleware);
