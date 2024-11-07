import { useState } from "react";
import { useProducts } from "../../context/ProductsContext";

const SearchHeader = () => {
  const [query, setQuery] = useState("");
  const { fetchSearchProduct } = useProducts();

  const handleSearch = () => {
    if (query.trim()) {
      fetchSearchProduct(query);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-10 w-full">
      <section className="flex items-center w-full md:w-2/3">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-14 text-lg md:text-2xl rounded-l-lg px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="What do you want? phone, dress, food ..."
        />
        <button
          onClick={handleSearch}
          className="bg-success h-14 text-white text-lg md:text-xl rounded-r-lg px-4 transition duration-200 hover:bg-success-dark"
        >
          Search
        </button>
      </section>
    </div>
  );
};

export default SearchHeader;
