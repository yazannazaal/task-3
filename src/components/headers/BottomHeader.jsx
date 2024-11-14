import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function BottomHeader() {
  const [openNav, setOpenNav] = useState(false);

  const handleNavClick = () => {
    setOpenNav(!openNav);
  };

  const pages = [
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Products", route: "/Products" },
    { id: 3, name: "Categories", route: "/Categories" },
  ];

  return (
    <nav className="flex justify-between items-center  px-5">
      <Link
        to={"/Cart"}
        className="cursor-pointer flex items-center justify-end gap-2 w-full md:w-1/3 mt-4 md:mt-0"
      >
        <FaShoppingCart className="text-3xl text-main" />
        <p className="text-lg md:text-2xl font-semibold text-main">
          Shopping Cart
        </p>
      </Link>

      {/* desktop menu */}
      <ul className="hidden md:flex gap-5">
        {pages.map((page) => (
          <Link
            to={page.route}
            className="p-3 text-xl text-warning"
            key={page.id}
          >
            {page.name}
          </Link>
        ))}
      </ul>

      {/* mobile icon for meny */}
      <div
        className="md:hidden cursor-pointer text-warning"
        onClick={handleNavClick}
      >
        <IoMdMenu size={40} />
      </div>

      {/* mobile menu */}
      <ul
        className={`fixed top-0 right-0 text-center pt-20 bg-white text-black border-l border-l-gray-300 w-1/4 h-full z-50 transform transition-transform duration-500 ${
          openNav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleNavClick}
          className="absolute top-2 right-2 text-black"
        >
          <IoIosClose size={30} />
        </button>

        {pages.map((page) => (
          <li
            className="p-7 hover:bg-gray-200 transition duration-300"
            key={page.id}
          >
            <Link className="text-black" to={page.route}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
