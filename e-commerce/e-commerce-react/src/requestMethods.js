import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzRlODhmMjE3ODNjZGQ1OTRhMmE0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzc5NjIyOCwiZXhwIjoxNjQ4MDU1NDI4fQ.R2xuPPcGGPPlPQYLLAfzmuXW8uyxUIukoY9Zl5tIwMc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});