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

const TopNav = () => {
  return (
    <>
      <header>
        <nav>
          {/* hotline and social media section */}
          <section className="max-w-7xl mx-auto flex items-center justify-between p-2 shadow-md">
            {/* hotline */}
            <div className="flex items-center justify-start gap-2 ">
              <PhoneOutgoing />
              <p className="text-lg font-poppins">
                Hotline:{" "}
                <span className="text-blue-700">
                  +88012345678, +880123456789
                </span>{" "}
                <span className="text-blue-500 font-medium">(10AM - 10PM)</span>
              </p>
            </div>
            {/* social media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <Facebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
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
          </section>
          {/* logo and search bar  */}
          <section className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center justify-between p-4">
              <img
                src="./images/Grow-authentic-png.png"
                alt="website logo"
                className="w-32 h-32"/>
            </div>
            <div>
                <form class=" flex items-center justify-center">
                  <select
                    id="categoried"
                    class="bg-gray-50  text-white text-md rounded-tl-lg rounded-bl-lg w-full p-2.5 dark:bg-gray-700 ">
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
                    <button type="submit" class="p-2.5  text-md  font-medium text-white bg-blue-700 rounded-tr-lg rounded-br-lg ">
                      <Search/>
                    </button>
                  </div>
                </form>
              </div>
            <div className="flex items-center justify-center p-4 gap-3 font-poppins">
              <User2/>
              <ShoppingCart/>
              <div>
                <p>Shopping Cart</p>
              <p className="text-red-600">$00.00</p>
              </div>
            </div>
          </section>
         {/* navlinks */}
          <section className="max-w-7xl mx-auto flex items-center justify-between bg-blue-800 px-4 py-3 text-white font-poppins ">
            <ul className="flex items-center gap-6 text-md px">
              <li className="hover:text-blue-500"><a href="#">Home</a></li>
              <li className="hover:text-blue-500"><a href="#">All Products</a></li>
              <li className="hover:text-blue-500"><a href="#">Windows</a></li>
              <li className="hover:text-blue-500"><a href="#">Office</a></li>
              <li className="hover:text-blue-500"><a href="#">Software</a></li>
              <li className="hover:text-blue-500"><a href="#">Windows Server</a></li>
              <li className="hover:text-blue-500"><a href="#">Subscription</a></li>
              <li className="hover:text-blue-500"><a href="#">Antivirus</a></li>
              <li className="hover:text-blue-500"><a href="#">VPN</a></li>
            </ul>
          </section>
         
        </nav>
      </header>
    </>
  );
};

export default TopNav;
