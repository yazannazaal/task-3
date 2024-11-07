import Banner from "../../components/Banner";
import { useProducts } from "../../context/ProductsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

const Home = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!products) {
    return <div>Error loading products. Please try again later.</div>;
  }

  const featuredProducts = products.slice(0, 10);

  return (
    <div className="container mx-auto p-4">
      <Banner />
      <div className="flex justify-between my-3">
        <h2 className="text-2xl font-bold my-4">Featured Products</h2>
        <Link
          className="mt-5 py-2 px-6 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-500 transition-colors duration-300"
          to={"/Products"}
        >
          See All Products
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 h-[600px] flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-center mb-2">
                  {product.title}
                </h3>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-[199px] object-cover rounded-md"
                />
              </div>
              <p className="text-gray-600 text-center mt-2">
                {product.description}
              </p>
              <p className="text-gray-600 text-center mt-2">
                {product.category}
              </p>
              <p className="mt-2 text-lg font-bold text-center">
                ${product.price}
              </p>
              <Link
                to={`/Products/${product.id}`}
                className="mt-4 py-2 px-6 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-300 transition-colors duration-300"
              >
                View Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
