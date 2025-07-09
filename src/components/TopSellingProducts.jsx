import React from 'react';
import { ArrowRight, Link, Star } from 'lucide-react';
import { NavLink } from 'react-router';

const TopSellingProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Top Selling Products</h2>
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group">
          <span className="text-sm font-medium">Shop All Deals</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Product Card 1 - Office Home & Business */}
        <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
          <div className="relative h-64 p-6 flex flex-col justify-between text-white overflow-hidden">
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-red-900 bg-opacity-80"><img src="./images/smm_panel.png" alt="" /></div>
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
          <div className="">
            <NavLink to="/SMMPanel" className="w-full  flex justify-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200">
              Log In
            </NavLink>
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
            <NavLink to="/SingleProduct" className="w-full flex justify-center items-center bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 transform translate-y-4 group-hover:translate-y-0">
              View Details
            </NavLink>
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

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <NavLink to="/AllProducts"  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Explore More Products
        </NavLink>
      </div>
    </div>
  );
};

export default TopSellingProducts;