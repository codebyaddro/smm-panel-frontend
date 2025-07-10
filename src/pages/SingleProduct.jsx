import {
  faFacebook,
  faGooglePlus,
  faPinterest,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ProductInfoToggle from "../components/ProductInfoToggle";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const min = 1;
  const max = 99;

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(min);
    }
  };
  return (
    <div className="bg-dark-bg">
      <section className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* product image */}
          <div>
            <img
              src="./images/Windows_10.jpg"
              alt=""
              className="shadow-lg shadow-main-bg"
            />
          </div>
          {/* product details */}
          <div className="bg-dark-card rounded-md">
            <div className="p-6 space-y-2 text-white font-poppins">
              <h2 className="text-xl">
                Windows 10 Professional License Key Price In BD
              </h2>
              <div className="text-sm">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
              {/* pricing */}
              <div>
                <h2 className="text-md text-red-500 font-semibold">
                  ৳750.00 - ৳1,500.00
                </h2>
              </div>
              {/* product key features */}
              <div>
                <h3 className="text-lg font-semibold">Key Features:</h3>
                <ul className="list-disc pl-5">
                  <li>Genuine Windows 10 Professional License</li>
                  <li>Lifetime Activation</li>
                  <li>Supports 64-bit architecture</li>
                  <li>Free updates and support</li>
                  <li>Easy installation process</li>
                </ul>
              </div>
              {/* product type */}
              <div className="flex flex-col space">
                <h3 className="text-lg font-semibold">Product Type:</h3>
                <p className="text-sm">OEM</p>
                <p className="text-sm">Retail</p>
              </div>

              <div>
                {/* quantity */}
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    disabled={quantity <= min}
                    className="w-8 h-8 flex items-center justify-center text-white hover:text-black hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FontAwesomeIcon icon={faMinus} className="border border-gray-50 p-2 rounded-md "/>
                  </button>

                  <input
                    type="number"
                    name="quantity"
                    value={quantity}
                    onChange={handleInputChange}
                    aria-label="product quantity"
                    min={min}
                    max={max}
                    step="1"
                    placeholder=""
                    inputMode="numeric"
                    autoComplete="off"
                    className="w-14 h-9 bg-white text-black text-center rounded outline-none mx-2"
                  />

                  <button
                    onClick={handleIncrement}
                    disabled={quantity >= max}
                    className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FontAwesomeIcon icon={faPlus} className="border border-gray-50 rounded-md p-2 text-white"/>
                  </button>
                </div>
                {/* add to cart */}
                <div className="flex gap-2  items-center">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
                    Add to Cart
                  </button>
                  <button className= "border border-blue-500 px-4 py-2 flex justify-center items-center mt-3 rounded-md hover:bg-blue-500 transition delay-75 ease-in-out">Buy Now </button>
                </div>
              </div>
              <hr  className="m-5"/>
              {/* short category description */}
              <div className="mt-4">
                <h2>
                  SKU: <span>N/A</span>
                </h2>
                <h2>
                  Category: <span>Software</span>
                </h2>
                <h2>
                  Tags: <span>Windows 10, Software, License Key</span>
                </h2>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-lg font-semibold">Share:</h3>
                <div className="flex space-x-4 text-3xl mt-2">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#">
                    {" "}
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterest} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faGooglePlus} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* product description */}
          <div>
            <ProductInfoToggle />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
