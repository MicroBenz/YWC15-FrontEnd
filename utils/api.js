// import fetch from 'whatwg-fetch';
import axios from 'axios';
import config from '../config';

const apiInstance = axios.create({
  baseURL: '/api',
});

function handleResponse(response) {
  if (response.statusText === 'OK' && response.data) {
    return response.data;
  }
}

function catchError(e) {
  throw new Error(e);
}

export default {
  get: path => (
    apiInstance.get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    apiInstance
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
}
