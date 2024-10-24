import axios from "axios";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_API_URL;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
