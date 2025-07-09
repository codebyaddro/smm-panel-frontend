import { faFacebook, faGooglePlus, faPinterest, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ProductInfoToggle from "../components/ProductInfoToggle";

const SingleProduct = () => {
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
          <div className="bg-dark-card">
            <div>
              <h2>Windows 10 Professional License Key Price In BD</h2>
              <div className="text-sm">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
              </div>
              {/* pricing */}
              <div>
                <h2 className="text-xl font-semibold">৳750.00 - ৳1,500.00</h2>
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
              <div>
                <h3 className="text-lg font-semibold">Product Type:</h3>
                <p className="text-sm">OEM</p>
                <p className="text-sm">Retail</p>
              </div>

              <div>
                {/* quantity */}
                <div>
                  <button>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <input
                    type="number"
                    name="quantity"
                    value="1"
                    area-label="prduct quantity"
                    min="1"
                    max
                    step="1"
                    placeholder=""
                    inputMode="numeric"
                    autoComplete="off"
                  />
                  <button>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                {/* add to cart */}
                <div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add to Cart
                  </button>
                  <button>Buy Now </button>
                </div>
              </div>
              <hr />
              {/* short category description */}
              <div>
                <h2>SKU: <span>N/A</span></h2>
                <h2>Category: <span>Software</span></h2>
                <h2>Tags: <span>Windows 10, Software, License Key</span></h2>
              </div>

              {/* Social Icons */}
              <div>
                <h3 className="text-lg font-semibold">Share:</h3>
                <div className="flex space-x-4">
                  <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
                  <a href="#"> <FontAwesomeIcon icon={faTwitter}/></a>
                  <a href="#"><FontAwesomeIcon icon={faPinterest}/></a>
                  <a href="#">< FontAwesomeIcon icon={faWhatsapp}/></a>
                  <a href="#"><FontAwesomeIcon icon={faGooglePlus}/></a>
                 
                </div>
              </div>
            </div>
          </div>


            {/* product description */}
            <div>
                <ProductInfoToggle/>
            </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
