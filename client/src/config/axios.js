import axios from "axios";
const axiosCost = axios.create({
  baseURL: "http://localhost:9888/api",
  //   baseURL: "https://carsSell-2.varlson.repl.co/api",
  timeout: 16000,
});

export default axiosCost;
