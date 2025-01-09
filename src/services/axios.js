import axios from "axios";
import store from "../redux/store";
import logout from "../pages/Auth/utils/logout";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    const token = store.getState().user.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    console.log("service", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("An error occurred", error);
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403) &&
      window.location.pathname !== "/login"
    ) {
      logout();
    }

    return Promise.reject(error);
  }
);

export default api;
