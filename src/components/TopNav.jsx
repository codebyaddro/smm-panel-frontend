import {
  Facebook,
  Instagram,
  Linkedin,
  PhoneOutgoing,
  Search,
  ShoppingCart,
  Twitter,
  User,
  User2,
} from "lucide-react";
import { Link } from "react-router";

const TopNav = () => {
  return (
    <>
      <header>
        <nav>
          {/* hotline and social media section */}
          <section className="bg-gray-50 border-b-1 border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-2 ">
              {/* hotline */}
              <div className="flex items-center justify-start gap-2 ">
                <PhoneOutgoing className="text-gray-800" />
                <p className="text-lg font-poppins text-gray-800">
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
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 border-r-1 border-gray-300 pr-2"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 border-r-1 border-gray-300 pr-2"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 border-r-1 border-gray-300 pr-2"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 border-r-1 border-gray-300 pr-2"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center text-gray-600 hover:text-blue-500"
                >
                  <User />
                  <h2>LOGIN OR RESISTER</h2>
                </a>
              </div>
            </div>
          </section>
          {/* logo and search bar  */}
          <section className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-between p-4">
              <img
                src="./images/Webssite.png"
                alt="website logo"
                className="w-44 h-16"
              />
            </div>
            <div>
              <form class=" flex items-center justify-center">
                <select
                  id="categoried"
                  class="bg-gray-50  text-white text-md rounded-tl-lg rounded-bl-lg w-full p-2.5 dark:bg-gray-700 "
                >
                  <option selected>All Categories</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
                <div class="flex">
                  <input
                    type="search"
                    id=""
                    class=" text-md  text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none"
                    placeholder="Search for products, brands and more"
                    required
                  />
                  <button
                    type="submit"
                    class="p-2.5  text-md  font-medium text-white bg-blue-700 rounded-tr-lg rounded-br-lg "
                  >
                    <Search />
                  </button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center p-4 gap-3 font-poppins">
              <User2 />
              <ShoppingCart />
              <div>
                <p>Shopping Cart</p>
                <p className="text-red-600">$00.00</p>
              </div>
            </div>
          </section>
          {/* navlinks */}
          <section className="bg-blue-900">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-white font-poppins ">
              <ul className="flex items-center gap-6 text-md px">
                <li className="hover:text-blue-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-blue-100">
                  <Link to="/AllProducts">All Products</Link>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Windows</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Office</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Software</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Windows Server</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Subscription</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">Antivirus</a>
                </li>
                <li className="hover:text-blue-100">
                  <a href="#">VPN</a>
                </li>
              </ul>
              <div>
                <ul>
                  <li>
                    <a href="">Log in to SMM Panel</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};

export default TopNav;
