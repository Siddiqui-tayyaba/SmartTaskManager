import axios from "axios";

const BASE_URL = "https://6a0cb47c769682b8ee755c24.mockapi.io/:endpoint"; //MockAPI URL

export const api = axios.create({
  baseURL: BASE_URL,
});
