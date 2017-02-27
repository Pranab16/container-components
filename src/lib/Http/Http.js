const axios = require('axios');
const { has } = require('lodash');

const { getCredentials } = require('../Auth');

const request = (req = axios) => {
  const headers = {};
  const credentials = getCredentials();
  if (has(credentials, 'accessToken')) {
    headers['Authorization'] = `Bearer ${credentials.accessToken}`;
  }

  return req.create({
    baseURL: 'http://services.dev.gsfn.us/v1',
    params: {
      client_id: '9f94e4975d33538a4f04a0002adcfbfe0ca119a046b04b342a6874fe3cb242f9'
    },
    headers: headers
  });
};

const queryString = (filters) => {
  return Object.keys(filters).map(key => `${key}=${encodeURIComponent(filters[key])}`).join('&')
};

const httpGet = (path, queryParams = {}) => {
  const params = queryString(queryParams);
  const url = params ? `${path}?${params}` : path;
  return request().get(url);
};

const httpPost = (path, data = {}) => {
  return request().post(path, queryString(data), {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
};

module.exports = {
  httpGet,
  httpPost
};
