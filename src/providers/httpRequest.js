import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const axiosInstance = (axiosConfig) => {
  const instance = axios.create({
    ...axiosConfig,
  });

  instance.interceptors.response.use(
    (response) => (response.data),
    (error) => Promise.reject(error),
  );

  return instance;
};
