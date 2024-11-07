const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-300 py-10 shadow-lg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-8"></div>

        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-gray mb-4">
              About Our Store
            </h4>
            <p className="text-gray-400 leading-relaxed">
              We offer the finest collection of products curated for quality and
              style. Experience an unparalleled shopping journey with us.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-gray mb-4">
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <p className="text-gray-400">123 Market Street, Shopping City</p>
            <p className="text-gray-400">+1 (234) 567-8901</p>
            <p className="text-gray-400">support@ecommerce.com</p>

            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Ecommerce App. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
