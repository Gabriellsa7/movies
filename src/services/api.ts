import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "e05d0800abd825a93b0d65f21ae5fe6f",
  },
});
