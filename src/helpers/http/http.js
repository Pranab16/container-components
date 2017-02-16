import axios from 'axios';

import { has } from 'lodash';

const request = (req = axios) => {

  // add service apis client_id or token if needed
  return req.create({
    baseURL: 'http://services.dev.gsfn.us/v1',
    params: {
      client_id: '9f94e4975d33538a4f04a0002adcfbfe0ca119a046b04b342a6874fe3cb242f9'
    }
  });

};

module.exports = request;
