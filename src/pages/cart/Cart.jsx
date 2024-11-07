import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { state, removeProduct, deleteProduct } = useCart();
  const { products, total } = state;

  const handleRemove = (product) => {
    removeProduct(product);
  };

  const handleDelete = (product) => {
    deleteProduct(product);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Cart Page</h2>

      {products.length === 0 ? (
        <p className="text-4xl text-red-600 text-center">Your cart is empty.</p>
      ) : (
        <div>
          <div className="space-y-4">
            {/* crt items */}
            {products.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>
                    <p className="text-gray-600">{product.category}</p>
                    <p className="text-sm text-gray-500">
                      Brand: {product.brand}
                    </p>
                    <p className="text-sm text-gray-500">
                      Availability: {product.availabilityStatus}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">x {product.quantity}</p>

                  {/* remove btn */}
                  <button
                    onClick={() => handleRemove(product)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-400"
                  >
                    Remove 1
                  </button>

                  {/* delete btn */}
                  <button
                    onClick={() => handleDelete(product)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total</h3>
            <p className="text-xl font-semibold">${total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
