import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};
export const getProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const searchForProducts = async (query) => {
  const response = await api.get(`/products/search?q=${query}`);
  return response.data;
};

export default api;
