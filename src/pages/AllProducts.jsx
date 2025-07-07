import React from 'react';
import { ArrowRight, Link, Star } from 'lucide-react';
const AllProducts = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Product Card 1 - Office Home & Business */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <div className="relative h-64 p-6 flex flex-col justify-between text-white overflow-hidden">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-red-900 bg-opacity-80"><img src="../../public/images/smm_panel.png" alt="" /></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Product Content */}
            <div className="relative z-10">
              <div className="w-16 h-16 mb-2 group-hover:scale-110 transition-transform duration-300">
                
              </div>
              
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2 text-2xl text-center group-hover:text-blue-600 transition-colors duration-300">
              SMM PANEL 
            </h4>
          </div>

          {/* Hover Button */}
          <div className=" duration-300 ">
            <button className="w-full  bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Log In
            </button>
          </div>
        </div>

        {/* Product Card 2 - Windows 10 */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <div className="relative h-64 p-6 flex flex-col justify-between text-white overflow-hidden" >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-purple-900 bg-opacity-80"><img src="./images/Windows_10.jpg" alt="" /></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Brand Logo */}
            <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            {/* Vendor Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs opacity-80">
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">OS Digital</span>
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">Microsoft</span>
            </div>

            
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors duration-300">
              Windows 10 Professional License Key Price In BD
            </h4>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-sm text-gray-500">(319)</span>
            </div>

            {/* Price */}
            <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
              ৳750 - ৳790
            </div>
          </div>

          {/* Hover Button */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              View Details
            </button>
          </div>
        </div>
        {/* Product Card 2 - Windows 10 */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <div className="relative h-64 p-6 flex flex-col justify-between text-white overflow-hidden" >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-purple-900 bg-opacity-80"><img src="./images/Windows_10.jpg" alt="" /></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Brand Logo */}
            <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            {/* Vendor Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs opacity-80">
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">OS Digital</span>
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">Microsoft</span>
            </div>

            
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors duration-300">
              Microsoft Office 2021 Premium key
            </h4>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-sm text-gray-500">(319)</span>
            </div>

            {/* Price */}
            <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
              ৳750 - ৳790
            </div>
          </div>

          {/* Hover Button */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              View Details
            </button>
          </div>
        </div>
        {/* Product Card 4 - office 2021 */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <div className="relative h-64 p-6 flex flex-col justify-between text-white overflow-hidden" >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-purple-900 bg-opacity-80"><img src="./images/OFFICE HOME.jpg" alt="" /></div>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-6 translate-y-6 group-hover:scale-110 transition-transform duration-500"></div>
            </div>

            {/* Brand Logo */}
            <div className="absolute top-4 right-4 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            </div>

            {/* Vendor Badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs opacity-80">
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">OS Digital</span>
              <span className="bg-black bg-opacity-20 px-2 py-1 rounded">Microsoft</span>
            </div>

            
          </div>

          {/* Product Details */}
          <div className="bg-white p-4 border-t border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2 text-sm group-hover:text-blue-600 transition-colors duration-300">
              Windows 10 Professional License Key Price In BD
            </h4>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span className="text-sm text-gray-500">(319)</span>
            </div>

            {/* Price */}
            <div className="text-lg font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
              ৳750 - ৳790
            </div>
          </div>

          {/* Hover Button */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
            <button className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              View Details
            </button>
          </div>
        </div>

      </div>
        </div>
    );
};

export default AllProducts;