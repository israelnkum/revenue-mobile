import axios from 'axios';
import Store from '../utils/store';
import {REACT_NATIVE_APP_API_BASE, REACT_NATIVE_APP_API_BASE_URL} from '../env';

export default function api(auth = null) {
  const {bearerToken} = Store.getState().loginReducer;
  const makeRequest = axios.create({
    baseURL:
      auth === null ? REACT_NATIVE_APP_API_BASE_URL : REACT_NATIVE_APP_API_BASE,
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json',
    },
  });

  makeRequest.interceptors.request.use(
    function (config) {
      // config.headers.Authorization = `Bearer ${authContext.authState.token}`
      // config.headers.Accept = 'application/json'
      // config.headers.ContentType = 'application/json'
      return config;
    },
    function (error) {
      return Promise.reject(error);
    },
  );

  makeRequest.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      const code = error && error.response ? error.response.status : 0;
      if (code === 401 || code === 403 || code === 419) {
        // window.location.replace('/login')
        //  console.log('err')
      }
      return Promise.reject(error);
    },
  );

  return makeRequest;
}
