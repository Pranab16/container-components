import { omit } from 'lodash';

module.exports = _ => next => action => {
  const { types, promise } = action;
  const rest = omit(action, ['types', 'promise']);

  if (!types && !promise) {
    return next(action);
  }

  const { request, success, failure } = types;

  console.log('request....');
  next({ type: request });

  return promise
    .then(payload => {
      console.log('success....', payload);
      next(Object.assign({}, rest, { payload, type: success }))
    }, payload => {
      console.log('error....');
      next(Object.assign({}, rest, { payload, type: failure }))
    });
};
