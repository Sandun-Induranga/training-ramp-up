import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

api.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
