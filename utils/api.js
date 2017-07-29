// import fetch from 'whatwg-fetch';
import axios from 'axios';
// import config from '../config';

function createApiInstance() {
  return axios.create({
    baseURL: '/api',
    headers: {
      'x-access-token': window.localStorage.getItem('ywc15Token') || ''
    }
  });
}

function handleResponse(response) {
  if (response.statusText === 'OK' && response.data) {
    return response;
  }
  throw new Error(response.error);
}

function catchError(e) {
  throw new Error(e);
}

export default {
  get: path => (
    createApiInstance()
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'POST',
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}) => (
    createApiInstance()
      .request({
        url: path,
        method: 'PUT',
        data: body,
      })
      .then(handleResponse)
      .catch(catchError)
  ),
};
