import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://c39a-91-90-219-174.in.ngrok.io/uz/api",
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
  getDocuments: () => axiosInstance.get("/documents"),
  getSignleDocuments: (payload) => axiosInstance.get(`/document/${payload}`),
  createDocument: (payload) => axiosInstance.post("/documents/create", payload),
};
