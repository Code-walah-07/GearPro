function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300 px-6 lg:px-12 py-12">
      {/* Logo Section */}
      <div className="max-w-screen-xl mx-auto mb-10 text-center lg:text-left">
        <img className="h-12 mx-auto lg:mx-0 dark:bg-white rounded-lg" src="new_logo_2.svg" alt="GearPro Logo" />
      </div>

      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-8 md:grid-cols-9 lg:grid-cols-8 divide-gray-200 dark:divide-gray-700 divide-y-2 md:divide-x-2 md:divide-y-0 md:-mx-8">
          {/* Products Section */}
          <div className="col-span-8 md:col-span-3 lg:col-span-2 md:px-8 py-6 md:py-0">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Products</h5>
            <ul className="mt-4 space-y-2">
              {["T-Shirts", "Cycles", "Tracking Accessories", "Sports Collections"].map(
                (item, i) => (
                  <li key={i}>
                    <a href="#" className="text-base hover:text-blue-500 transition">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Brands Section */}
          <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-6 md:py-0">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Brands</h5>
            <ul className="mt-4 grid lg:grid-cols-2 gap-2">
              {["Nike", "Puma", "Under Armour", "Nivia"].map((brand, i) => (
                <li key={i}>
                  <a href="#" className="text-base hover:text-blue-500 transition">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-span-8 md:col-span-3 lg:col-span-3 md:px-8 py-6 md:py-0">
            <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Follow us</h5>
            <ul className="mt-4 space-y-3">
              {[
                {
                  name: "Twitter",
                  svg: (
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..." />
                  ),
                },
                {
                  name: "Instagram",
                  svg: (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06..."
                    />
                  ),
                },
                {
                  name: "Facebook",
                  svg: (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2..."
                    />
                  ),
                },
              ].map((social, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="flex items-center space-x-3 hover:text-blue-500 transition"
                  >
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.svg}
                    </svg>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-10 border-t border-gray-200 dark:border-gray-700 pt-6">
        <nav className="flex flex-wrap justify-center space-x-6">
          <a href="#" className="text-sm hover:text-blue-500 transition">
            Cookie settings
          </a>
        </nav>
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} GearPro. | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
