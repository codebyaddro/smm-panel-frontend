import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PhoneOutgoing, Search, ShoppingCart, User, User2 } from "lucide-react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const TopNav = () => {
  return (
    <>
      <header>
        <nav>
          {/* hotline and social media section */}
          <section className="bg-gray-50 border-b-1 border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between p-2 gap-2">
              {/* hotline */}
              <div className="flex items-center justify-start gap-2 order-2 sm:order-1">
                <PhoneOutgoing className="text-gray-800 w-4 h-4" />
                <p className="text-xs sm:text-sm lg:text-md font-poppins text-gray-800 text-center sm:text-left">
                  Hotline:{" "}
                  <span className="text-blue-700">
                    +88012345678, +880123456789
                  </span>{" "}
                  <span className="text-blue-500 font-medium">
                    (10AM - 10PM)
                  </span>
                </p>
              </div>
              {/* social media */}
              <div className="flex items-center gap-2 sm:gap-4 order-1 sm:order-2">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 border-r-1 border-gray-300 pr-2"
                >
                  <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 border-r-1 border-gray-300 pr-2"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 border-r-1 border-gray-300 pr-2"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 border-r-1 border-gray-300 pr-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-500 gap-1"
                >
                  <User className="w-4 h-4" />
                  <NavLink
                    to="/signup"
                    className="text-xs sm:text-sm hidden sm:inline"
                  >
                    LOGIN OR REGISTER
                  </NavLink>
                  <NavLink to="/signup" className="text-xs sm:hidden">
                    LOGIN
                  </NavLink>
                </a>
              </div>
            </div>
          </section>

          {/* logo and search bar section */}
          <section className="max-w-7xl mx-auto ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* logo */}
              <div className="flex items-center justify-center lg:justify-start">
                <img
                  src="./images/Webssite.png"
                  alt="website logo"
                  className="w-32 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16"
                />
              </div>

              {/* search bar */}
              <div className="w-full lg:w-auto lg:flex-1 lg:max-w-2xl lg:mx-8">
                <form className="flex items-center justify-center w-full">
                  <select
                    id="categoried"
                    className="bg-gray-50 text-gray-900 text-sm rounded-tl-lg rounded-bl-lg w-24 sm:w-32 lg:w-40 p-2.5 dark:bg-gray-700 dark:text-white border-r-0"
                  >
                    <option selected>All Categories</option>
                    <option value="Software">Software</option>
                    <option value="Antivirus">Antivirus</option>
                    <option value="Office">Office</option>
                    <option value="Windows">Windows</option>
                  </select>
                  <div className="flex flex-1">
                    <input
                      type="search"
                      id="search-input"
                      className="w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-3 py-2.5 placeholder:text-center sm:placeholder:text-left"
                      placeholder="Search for products, brands and more"
                      required
                    />
                    <button
                      type="submit"
                      className="p-2.5 text-sm font-medium text-white bg-blue-800 rounded-tr-lg rounded-br-lg hover:bg-blue-800 transition-colors"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </div>
                </form>
              </div>

              {/* shopping cart */}
              <div className="flex items-center justify-center gap-3 font-poppins">
                <User2 className="w-5 h-5 text-gray-600" />
                <ShoppingCart className="w-5 h-5 text-gray-600" />
                <div className="hidden sm:block">
                  <p className="text-sm">Shopping Cart</p>
                  <p className="text-red-600 text-sm font-medium">$00.00</p>
                </div>
              </div>
            </div>
          </section>

          {/* navigation links */}
          <section className="bg-blue-900">
            <div className="max-w-7xl mx-auto px-4 py-3 text-white font-poppins">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* main navigation - horizontal scroll on mobile */}
                <div className="w-full lg:w-auto overflow-x-auto">
                  <ul className="flex items-center gap-4 lg:gap-6 text-sm lg:text-md whitespace-nowrap min-w-max lg:min-w-0">
                    <li className="hover:text-blue-200 transition-colors">
                      <NavLink to="/" className={({ isActive }) =>
                ` px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-fuchsia-400 to-purple-700 text-white"
                    : "b"
                }`
              }
            >
                        Home
                      </NavLink>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <NavLink to="/AllProducts" className={({ isActive }) =>
                `px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-fuchsia-400 to-purple-700 text-white"
                    : " "
                }`
              }
            >
                        All Products
                      </NavLink>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Windows
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Office
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Software
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Windows Server
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Subscription
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        Antivirus
                      </a>
                    </li>
                    <li className="hover:text-blue-100 transition-colors">
                      <a href="#" className="block py-2">
                        VPN
                      </a>
                    </li>
                  </ul>
                </div>

                {/* SMM Panel button */}
                <div className="w-full lg:w-auto">
                  <NavLink
                    to="/SMMPanel"
                    className="block w-full lg:w-auto text-center bg-gradient-to-r from-fuchsia-600 to-violet-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm lg:text-base"
                  >
                    <span className="hidden sm:inline">
                      Log in to SMM Panel
                    </span>
                    <span className="sm:hidden">SMM Panel</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default TopNav;
