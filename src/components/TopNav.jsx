import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal , LogIn} from 'lucide-react';

export default function LibgramNavbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: 'Instagram', hasDropdown: true },
    { name: 'Youtube', hasDropdown: true },
    { name: 'TikTok', hasDropdown: true },
    { name: 'Telegram', hasDropdown: true },
    { name: 'Twitter', hasDropdown: true },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-semibold text-gray-900">SMM</span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>
              
              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Option 1
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Option 2
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Option 3
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* More button */}
          <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200">
            <MoreHorizontal size={20} />
          </button>
        </div>

        {/* Login */}
        <div className="flex items-center justify-center space-x-2">
          <button className="text-lg font-medium text-black hover:text-gray-900 transition-colors duration-200">
            Log in 
          </button>
          <LogIn/>
        </div>
      </div>
    </nav>
  );
}