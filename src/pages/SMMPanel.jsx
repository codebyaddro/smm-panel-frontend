import React from "react";
import SmmHeader from "../components/SmmHeader";
import {
  DollarSignIcon,
  PlusIcon,
  ShoppingBag,
  Crown,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSoundcloud, faSpotify, faTelegram, faTiktok, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFilm, faGlobe } from "@fortawesome/free-solid-svg-icons";
import OrderPanel from "../components/OrderPanel";

const SMMPanel = () => {
  return (
    <div>
      <SmmHeader />
      <section className="bg-main-bg py-10">
        <div className="grid grid-cols-4 max-w-7xl mx-auto gap-4 p-4">
          {/* First Card */}
          <div className="col-span-2 bg-dark-bg font-poppins p-5 rounded-xl border border-card-border">
            <h2 className="text-txt-pink text-2xl font-bold">
              Welcome to Grow Authentic
            </h2>
            <p className="text-white text-lg">
              Grow Bigger, They Follow Quicker!
            </p>
            <div className="flex justify-start items-center mt-7">
              <div className="mr-7 flex flex-col gap-1 border-r-3 border-card-border pr-3">
                <div className="bg-txt-bg w-16 h-16 flex justify-center items-center rounded-full">
                  <ShoppingBag className=" text-txt-pink w-9 h-9" />
                </div>
                <div className="text-white ml-2">
                  <p>97969</p>
                  <p>Total Order</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-txt-bg w-16 h-16 flex justify-center items-center rounded-full">
                  <DollarSignIcon className=" text-txt-pink w-9 h-9" />
                </div>
                <div className="text-white ml-2">
                  <p>$00</p>
                  <p>Total Spend</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="bg-dark-bg border border-card-border rounded-xl ">
            <div className="flex items-center gap-3 p-3 font-poppins border-b-3 border-card-border">
              <img
                src="./images/3huo9rec5amxbk77.png"
                alt=""
                className="w-16 h-16"
              />
              <div>
                <h2 className="text-white text-lg ">Good Afternoon</h2>
                <h2 className="text-xl font-semibold text-txt-pink">
                  User Name
                </h2>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center ">
                <div className="flex justify-between items-center text-white font-poppins p-2 border-dashed border-2 mt-3 border-orange-300 m-2 bg-dark-card rounded-lg w-60">
                  <h2>Balance</h2>
                  <h2>$0</h2>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-400 to-purple-700 flex justify-center items-center rounded-lg mr-2">
                  <PlusIcon className="text-white" />
                </div>
              </div>
              <div className="flex items-center justify-center ">
                <div className="flex justify-between items-center text-white font-poppins p-2  border mt-3 border-card-border m-2 bg-dark-card rounded-lg w-full">
                  <h2>Points</h2>
                  <h2>0.0 = $0.0</h2>
                </div>
              </div>
            </div>
          </div>
          {/* third card */}
          <div className="bg-dark-bg border border-card-border rounded-2xl p-6 max-w-sm mx-auto text-white font-poppins">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-dark-card p-3 rounded-xl">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-300 text-sm">Account Status</p>
                <h2 className="text-white text-xl font-semibold">
                  New Reseller
                </h2>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mb-6"></div>

            {/* Benefits Section */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                The user level comes with exclusive benefits.
              </p>
            </div>

            {/* Discount Section */}
            <div>
              <h3 className="text-white text-lg font-semibold">
                Discount <span className="text-2xl">0%</span>
              </h3>
            </div>
          </div>
        </div>
        {/* social media icons for smm */}
        <div className="bg-dark-bg max-w-7xl mx-auto rounded-lg mt-6">
          <ul className="flex items-center justify-between text-white py-4 px-6">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram}  className="text-4xl hover:text-txt-pink"/>
              </a>
            </li>
            <li><a href="#"><FontAwesomeIcon icon={faFacebook}  className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faYoutube} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTiktok} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faTelegram} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faXTwitter} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faSpotify} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faSoundcloud} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faGlobe} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faWhatsapp} className="text-4xl hover:text-txt-pink"/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFilm} className="text-4xl hover:text-txt-pink"/></a></li>
          </ul>
        </div>
      </section>
      <OrderPanel/>
    </div>
  );
};

export default SMMPanel;
