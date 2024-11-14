import { Link } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";

const Categories = () => {
  const { categories, loading } = useProducts();

  if (loading) return <p className="text-gray-500">Loading categories...</p>;

  if (!categories || categories.length === 0)
    return <p className="text-red-500">No categories available</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <div
          key={category}
          className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-100 ease-in-out transform "
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            {category}
          </h2>
          <Link
            to={`/Categories/${category}`}
            className="inline-block text-slate-600 border px-6 py-2 font-medium hover:bg-slate-800 hover:text-white transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
