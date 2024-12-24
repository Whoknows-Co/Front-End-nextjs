import axios from "axios";
import { getCookie, setCookie } from "../utils/cookie";

const api = axios.create({
  baseURL: "https://mentoroo.liara.run/api/",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");

    console.log(accessToken);
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const orginialRequest = error.config;
    if (error.response.status === 401 && !orginialRequest._retry) {
      orginialRequest._retry = true;

      const res = await getNewTokens();
      if (res?.response?.status === 201) {
        setCookie("accessToken", res?.response?.data.accessToken, 30);

        return api(orginialRequest);
      } else {
        setCookie("accessToken", "", 0);
      }
    }
    return Promise.reject(error.response.data);
  }
);
export default api;
