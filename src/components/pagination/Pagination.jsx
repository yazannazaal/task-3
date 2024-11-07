const Pagination = ({
  currentPage,
  totalProducts,
  productsPerPage,
  paginate,
}) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex items-center justify-center mt-4">
      {pages.map((page) => (
        <div
          key={page}
          onClick={() => paginate(page)}
          className={`mx-1 px-3 py-2 border rounded-lg cursor-pointer transition duration-200 ${
            currentPage === page
              ? "bg-slate-800 text-white"
              : "border-gray-300 hover:bg-slate-700 hover:text-white"
          }`}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
