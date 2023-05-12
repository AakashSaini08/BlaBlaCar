import axios from "axios";
import { BASE_URL } from "../../Services/Api/Constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      config.headers.Authorization = "Token " + token;
    }
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  function (error) {
    if(error.response.status === 401){
      localStorage.clear();
      window.location.replace('/')
    }
    return Promise.reject(error);
  }
);

export default Request;
