import { createContext, useContext, useEffect, useState } from "react";
import {
  getProductById,
  getProducts,
  searchForProducts,
} from "../services/axios";

const ProductContext = createContext({
  products: [],
  loading: true,
  fetchSingleProduct: async (id) => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fetchSingleProduct = async (id) => {
    try {
      const response = await getProductById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const fetchSearchProduct = async (query) => {
    try {
      const response = await searchForProducts(query);
      setProducts(response.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, loading, fetchSingleProduct, fetchSearchProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
