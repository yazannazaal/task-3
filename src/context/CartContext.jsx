import { Children, createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  products: [],
  total: 0,
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const isExist = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedArray;
      let newTotalPrice = state.total;

      if (isExist >= 0) {
        let updatedProduct = {
          ...state.products[isExist],
          quantity: state.products[isExist].quantity + action.payload.quantity,
        };
        updatedArray = [...state.products];
        updatedArray[isExist] = updatedProduct;

        newTotalPrice += action.payload.price * action.payload.quantity;
      } else {
        updatedArray = [
          ...state.products,
          {
            ...action.payload,
            quantity: action.payload.quantity,
          },
        ];
        newTotalPrice += action.payload.price * action.payload.quantity;
      }

      return { ...state, products: updatedArray, total: newTotalPrice };
    }

    case "REMOVE_PRODUCT": {
      const isExist = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (isExist < 0) return state;

      let updatedArray;
      let newTotalPrice = state.total;
      let removedProduct = state.products[isExist];

      if (removedProduct.quantity > 1) {
        let updatedProduct = {
          ...removedProduct,
          quantity: removedProduct.quantity - 1,
        };
        updatedArray = [...state.products];
        updatedArray[isExist] = updatedProduct;
        newTotalPrice -= removedProduct.price;
      } else {
        updatedArray = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        newTotalPrice -= removedProduct.price * removedProduct.quantity;
      }

      return { ...state, products: updatedArray, total: newTotalPrice };
    }

    case "DELETE_PRODUCT": {
      const productToRemove = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (!productToRemove) return state;

      let newTotalPrice =
        state.total - productToRemove.price * productToRemove.quantity;
      let updatedArray = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      return { ...state, products: updatedArray, total: newTotalPrice };
    }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };
  const removeProduct = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  };
  const deleteProduct = (product) => {
    dispatch({ type: "DELETE_PRODUCT", payload: product });
  };
  return (
    <CartContext.Provider
      value={{ state, addProduct, removeProduct, deleteProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
