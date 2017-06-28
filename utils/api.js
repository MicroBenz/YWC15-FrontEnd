import fetch from 'whatwg-fetch';
import axios from 'axios';

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
    axios.get(path)
      .then(handleResponse)
      .catch(catchError)
  )
}
