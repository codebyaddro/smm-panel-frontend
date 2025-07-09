import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; // Importing social media icons

function BottomNav () {
  return (
    <footer className="bg-[#1a1c20] text-gray-400 py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Top section of the footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          {/* Logo section */}
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">SMM</span>
          </div>

          {/* Navigation links and language selector */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Tickets</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
            <div className="flex items-center space-x-2">
              {/* US Flag icon - using an SVG for simplicity and scalability */}
              <svg
                width="20"
                height="15"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-sm"
              >
                <rect width="30" height="20" fill="#002868"/>
                <rect y="2.22222" width="30" height="2.22222" fill="white"/>
                <rect y="6.66667" width="30" height="2.22222" fill="white"/>
                <rect y="11.1111" width="30" height="2.22222" fill="white"/>
                <rect y="15.5556" width="30" height="2.22222" fill="white"/>
                <rect x="0" y="0" width="12" height="11.1111" fill="#BF0A30"/>
                {/* Stars can be added here if needed, but for a simple flag, stripes are sufficient */}
              </svg>
              <span className="text-white">English</span>
            </div>
          </div>
        </div>

        {/* Bottom section of the footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright information */}
          <div className="text-sm mb-4 md:mb-0">
            © 2022 All Rights Reserved
          </div>

          {/* Payment method icons and social media icons */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Payment icons - using placeholder images for demonstration */}
            <div className="flex space-x-2">
              <img src="https://placehold.co/40x25/2d3748/ffffff?text=Symantec" alt="Symantec" className="rounded-md" />
              <img src="https://placehold.co/40x25/2d3748/ffffff?text=ApplePay" alt="Apple Pay" className="rounded-md" />
              <img src="https://placehold.co/40x25/2d3748/ffffff?text=Visa" alt="Visa" className="rounded-md" />
              <img src="https://placehold.co/40x25/2d3748/ffffff?text=Amex" alt="American Express" className="rounded-md" />
              <img src="https://placehold.co/40x25/2d3748/ffffff?text=Discover" alt="Discover" className="rounded-md" />
            </div>

            {/* Social media icons from Lucide React */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BottomNav;
