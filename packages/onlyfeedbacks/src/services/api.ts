import axios from "axios";

export const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333"
      : "https://onlyfeedbacks-server-production.up.railway.app",
});
