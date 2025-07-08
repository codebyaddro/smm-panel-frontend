import React, { useState } from 'react';
import { Menu, X, ChevronDown, User, DollarSign, Bell, Grid3X3, LogOut } from 'lucide-react';

export default function SmmHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowMoreOpen, setIsShowMoreOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShowMore = () => {
    setIsShowMoreOpen(!isShowMoreOpen);
  };

  return (
    <header className= "sticky top-0 z-50 bg-dark-bg text-white font-poppins py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold">
              <img className='w-42 h-16' src="/public/images/Webssite.png" alt="" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button className=" border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 px-6 py-2 rounded-lg font-medium ">
              New order
            </button>
            <button className="border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Orders
            </button>
            <button className= "border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Deposit
            </button>
            <button className="border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Tickets
            </button>
            <button className="border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Services
            </button>
            <button className="border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors">
              Dashboard
            </button>
            <div className="relative">
              <button 
                onClick={toggleShowMore}
                className="border border-card-border bg-dark-card hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white px-4 py-2 rounded-lg transition-colors flex items-center"
              >
                Show More
                <ChevronDown className={`ml-1 h-4 w-4 transform transition-transform ${isShowMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {isShowMoreOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-dark-card rounded-lg shadow-lg border border-card-border z-50">
                  <div className="py-2">
                    <button className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700">
                      API Documentation
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700">
                      Affiliate Program
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700">
                      FAQ
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop User Section */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center space-x-2 bg-dark-card border border-card-border rounded-lg px-3 py-2 hover:bg-gradient-to-r from-fuchsia-400 to-purple-700">
              <DollarSign className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium">$0</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
           <div className="relative group">
              <div className="border border-card-border w-10 h-10 bg-dark-card rounded-full flex items-center justify-center cursor-pointer hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 transition-colors">
               <User className="h-8 w-8 text-gray-400 group-hover:text-white" />
              </div>
              {/* User Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-dark-card rounded-lg shadow-lg border border-card-border z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <button className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 transition-colors">
                    <User className="h-4 w-4 mr-3" />
                    My Account
                  </button>
                  <button className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 transition-colors">
                    <Bell className="h-4 w-4 mr-3" />
                    Notifications
                  </button>
                  <button className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 transition-colors">
                    <Grid3X3 className="h-4 w-4 mr-3" />
                    Dashboard
                  </button>
                  <div className="border-t border-gray-700 mt-2 pt-2">
                    <button className="flex items-center w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 transition-colors">
                      <LogOut className="h-4 w-4 mr-3" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              </div>
            <div className="w-10 h-10 bg-dark-card rounded-full flex items-center justify-center hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 border border-card-border transition-colors">
              <LogOut/>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dark-bg border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-bg">
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 w-full text-left px-3 py-2 rounded-md text-base font-medium">
              New order
            </button>
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Orders
            </button>
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Deposit
            </button>
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Tickets
            </button>
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Services
            </button>
            <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium">
              Dashboard
            </button>
            <div className="border-t border-gray-700 pt-2">
              <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium pt-1">
                API Documentation
              </button>
              <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium pt-1">
                Affiliate Program
              </button>
              <button className="border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 text-gray-300 hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium pt-1">
                FAQ
              </button>
            </div>
          </div>
          
          {/* Mobile User Section */}
          <div className="border-t border-card-border px-2 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 rounded-lg px-3 py-2">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium">$0</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
                <div className="w-10 h-10 border bg-dark-card border-card-border hover:bg-gradient-to-r from-fuchsia-400 to-purple-700 rounded-full flex items-center justify-center">
                  <LogOut/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}