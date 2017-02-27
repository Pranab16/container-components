const { handleActions } = require('redux-actions');
const { httpPost } = require('../../lib/Http');
const AuthStorage = require('../../lib/AuthStorage');

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const INITIAL_STATE = { error: null, loading: true };

const login = (credentials) => {
  return {
    types: {
      request: LOGIN_REQUEST,
      success: LOGIN_SUCCESS,
      failure: LOGIN_FAILURE
    },
    promise: httpPost('/people/auth', credentials)
      .then(response => {
        AuthStorage.set('getSatKey', JSON.stringify({accessToken: response.data.auth_token}));
        return {
          logged: true
        }
      })
  };
};

const actionHandlers = {
  [LOGIN_REQUEST]: state => ({
    error: null,
    loading: true,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    error: null,
    loading: false,
    logged: payload.logged
  }),
  [LOGIN_FAILURE]: (state, { payload }) => ({
    error: payload,
    loading: false
  })
};

const reducer = handleActions(actionHandlers, INITIAL_STATE);

module.exports = {
  reducer,
  login
};
