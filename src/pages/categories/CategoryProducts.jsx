import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const CategoryProducts = () => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { fetchProductsByCategory, products, loading } = useProducts();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchProductsByCategory(category);
  }, [category, fetchProductsByCategory]);

  if (loading) return <div>Loading products...</div>;

  if (!products || products.length === 0)
    return (
      <div className="text-center text-gray-600 py-10">
        <p className="text-lg font-semibold text-red-500">
          No products available in this category.
        </p>
        <p className="text-gray-500 mt-2">Try browsing other categories.</p>
      </div>
    );
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 capitalize">{category}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="border relative rounded-lg p-4 shadow-md hover:shadow-lg h-[500px] transition-shadow duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-[200px] object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 text-center mb-2">
              {product.description}
            </p>
            <p className="text-lg font-bold text-center">${product.price}</p>
            <Link
              to={`/Products/${product.id}`}
              className="absolute bottom-0 left-0 mt-4 py-2 px-6 text-center bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors duration-300 w-full"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CategoryProducts;
