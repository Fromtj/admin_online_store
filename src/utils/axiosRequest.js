import axios from "axios";

const axiosRequest = axios.create({
  baseURL: 'https://store-api.softclub.tj',
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token") || ""}`, 
  },
});

axiosRequest.interceptors.response.use(
  (response) => response, 
  (error) => {
   
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
    
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error); 
  }
);

export default axiosRequest;