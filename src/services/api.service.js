import axios from 'axios';
// import { BASE_URL } from '../utils/constants';
import { getErrorMessage, toastError } from 'utils/helpers';
import { getTokenFromLocalStorage } from './localStorage.sevice';
// import { GetToken } from "../services/auth.service";

// axios.defaults.baseURL = BASE_URL;

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

console.log(process.env.REACT_APP_API_BASE_URL, 'env');

export const axiosService = axios;

const api = axios.create({
  timeout: 60 * 1000,
});

api.interceptors.request.use(
  (config) => {
    let token = getTokenFromLocalStorage();
    return {
      ...config,
      headers: {
        // ...(token !== null && { Authorization: `${token}` }),
        Authorization: `${token ? token : ''}`,
        Accept: 'application/json',
        // "Access-Control-Allow-Origin": "*",
        // 'x-access-token': token
      },
    };
  },
  (exc) => Promise.reject(exc)
);

api.interceptors.response.use(
  (response) => {
    console.log('new response', response);
    return {
      data: {
        status: true,
        data: response.data,
      },
    };
  },
  (error) => {
    const errorMessage = getErrorMessage(error);
    switch (error?.response?.status) {
      case 401:
        // logout();
        // window.location.href = "/login";
        toastError(errorMessage);
        break;
      case 400:
        break;
      default:
        toastError(errorMessage);
        break;
    }
    console.log('errorMessage', errorMessage);
    return {
      data: {
        message: errorMessage,
        status: false,
        data: null,
      },
    };
  }
);

export { api };
