import axios from "axios";
import { BASE_API_URL, REQUEST_TIME_OUT } from "utils";

const client = axios.create({
  timeout: REQUEST_TIME_OUT,
  baseURL: BASE_API_URL,
});

client.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default client;
