import axios from "axios";

const api = axios.create({
  baseURL: "https://mentoroo.liara.run/api/",
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
export default api;
