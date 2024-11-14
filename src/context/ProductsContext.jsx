import { createContext, useContext, useEffect, useState } from "react";
import {
  getCategories,
  getProductById,
  getProducts,
  getProductsByCategory,
  searchForProducts,
} from "../services/axios";

const ProductContext = createContext({
  products: [],
  categories: [],
  loading: true,
  fetchSingleProduct: async (id) => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCategories();
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
      setSearchResults(response.products);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProductsByCategory = async (category) => {
    try {
      const response = await getProductsByCategory(category);
      setProducts(response.products);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        searchResults,
        loading,
        fetchSingleProduct,
        fetchSearchProduct,
        fetchProductsByCategory,
        categories,
        fetchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  return context;
};
