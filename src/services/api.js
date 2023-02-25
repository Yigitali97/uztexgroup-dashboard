import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:5092/uz/api",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem("token");
    
      if (token)  {
        config.headers.Authorization =`Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const API = {
  //post
  login: (payload) => axiosInstance.post("/auth/login", payload),
  createAdmin: (payload) => axiosInstance.post('/user', payload),
  
  //get
  getAdmins: () => axiosInstance.get("/user"),
  getAllNews: () => axiosInstance.get("/news"),

};
