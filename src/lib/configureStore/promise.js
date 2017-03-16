import { omit } from 'lodash';

module.exports = _ => next => action => {
  const { types, promise } = action;
  const rest = omit(action, ['types', 'promise']);

  if (!types && !promise) {
    return next(action);
  }

  const { request, success, failure } = types;

  next({ type: request });

  return promise
    .then(payload => {
      next(Object.assign({}, rest, { payload, type: success }))
    }, payload => {
      next(Object.assign({}, rest, { payload, type: failure }))
    });
};
