import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductsContext";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";

const SingleProductPage = () => {
  const { id } = useParams();
  const { fetchSingleProduct } = useProducts();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addProduct } = useCart();

  const handleAddToCart = () => {
    if (product) {
      addProduct({ ...product, quantity });
    }
  };

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductData();
  }, [id, fetchSingleProduct]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* left side */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
          <div className="mb-4">
            <span className="font-semibold">Brand:</span> {product.brand}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Price:</span> $
            {product.price.toFixed(2)}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Availability:</span>
            {product.availabilityStatus}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Rating:</span> {product.rating} ⭐
          </div>
          <div className="mb-4">
            <span className="font-semibold">Description:</span>
            {product.description}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="quantity" className="font-semibold">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border border-gray-300 rounded-md p-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddToCart}
              className="bg-slate-800 text-white py-2 px-6 rounded-lg hover:bg-slate-600 transition duration-300 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded shadow-md w-full max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
