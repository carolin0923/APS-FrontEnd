import axios from "axios";

// 1. Configuração da Conexão Axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
