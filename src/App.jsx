import { Routes, Route } from "react-router-dom";
import AllProducts from "./pages/products/AllProducts";
import Home from "./pages/home/Home";
import Header from "./components/headers/Header";
import SingleProductPage from "./pages/products/SingleProductPage";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Categories from "./pages/categories/Categories";
import CategoryProducts from "./pages/categories/CategoryProducts";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<AllProducts />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/:category" element={<CategoryProducts />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Products/:id" element={<SingleProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
