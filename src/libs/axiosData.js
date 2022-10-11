import axios from "axios";

const token = `9|H3AoNh5dd9CwJMI2oBb4XNN95mjPsy6uP0EqCvQX`;

const axiosData = axios.create({
  baseURL: "https://storeup.amuz",
  headers: { Authorization: `Bearer ${token}` },
});

export default axiosData;
