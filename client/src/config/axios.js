import axios from "axios";
const axiosCost = axios.create({
  baseURL: "http://localhost:9888/api",
  // baseURL: "https://CarSell.varlson.repl.co/api",
  timeout: 16000,
});

export default axiosCost;
