import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? "put" : "post";
  //Os metodos de envio e atualização
  const apiUrl = id ? `${url}/${id}` : url;
  //se tiver um id, a url vai ter um id, senão, apenas a url

  return api[method](apiUrl, data, config);
};

export default api;
