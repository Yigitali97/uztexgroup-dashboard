import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "https://uztexgroup.azurewebsites.net/uz/api",
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
  createUser: (payload) => axiosInstance.post('/user', payload),
  
  //get
  getAdmins: () => axiosInstance.get("/user"),
  getAllNews: () => axiosInstance.get("/news"),


  //put 
  updateUser: (payload) => axiosInstance.put('/user', payload),

  //delete
  deleteUser: (payload) => axiosInstance.delete(`/user/${payload}`),
};
