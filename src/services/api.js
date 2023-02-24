import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://3896-91-90-219-174.in.ngrok.io/uz/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");

      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const API = {
  //Login
  login: (payload) => axiosInstance.post("/auth/login", payload),
};
