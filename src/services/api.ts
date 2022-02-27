import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BACKEND_URL = 'https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c';
const REQUEST_TIMEOUT = 5000;

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => Promise.reject(error),
  );

  return api;
};

export { createAPI };
