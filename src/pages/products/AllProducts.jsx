import { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductsContext";
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const { products, loading } = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Error loading products. Please try again later.</div>;
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold my-4">All Products</h2>

      {/* check if there are no products to display */}
      {products.length === 0 ? (
        <div className="text-center text-gray-600 py-10">
          <p className="text-lg font-semibold text-red-500">
            No products match your search.
          </p>
          <p className="text-gray-500 mt-2">
            Please try a different search query.
          </p>
        </div>
      ) : (
        <>
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
                <p className="text-gray-600 font-semibold text-center mb-2">
                  Category: {product.category}
                </p>
                <p className="text-lg font-bold text-center">
                  ${product.price}
                </p>
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
        </>
      )}
    </div>
  );
};

export default AllProducts;
