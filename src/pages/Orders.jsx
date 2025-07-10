import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import SmmHeader from '../components/SmmHeader';

const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [isBarVisible, setIsBarVisible] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    'All',
    'Pending',
    'In progress',
    'Completed',
    'Partial',
    'Processing',
    'Canceled'
  ];

  const tableHeaders = [
    'ID',
    'Date',
    'Link',
    'Charge',
    'Start count',
    'Quantity',
    'Service',
    'Remains',
    'Action',
    'Status',
    'Order'
  ];


  return (
    <div className='bg-main-bg'>
        <SmmHeader/>
    
    <div className="min-h-screen bg-main-bg text-white max-w-7xl mx-auto mt-3 font-poppins">
        
      

      {/* Navigation Bar */}
      {isBarVisible && (
        <div className="px-4 py-3 rounded-lg mb-3 animate-in slide-in-from-top duration-300 bg-dark-bg">
          <div className="flex flex-wrap items-center gap-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-md  font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-dark-card text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex items-center ml-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-4 pr-12 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-[200px]"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 rounded-md p-2 transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="px-4">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="bg-gray-700 px-6 py-4">
            <div className="grid grid-cols-11 gap-4 text-sm font-medium text-gray-300">
              {tableHeaders.map((header) => (
                <div key={header} className="text-left">
                  {header}
                </div>
              ))}
            </div>
          </div>

          {/* Table Body - Empty State */}
          <div className="px-6 py-12 text-center">
            <div className="text-gray-400 text-lg">
              No orders found
            </div>
            <div className="text-gray-500 text-sm mt-2">
              {activeTab === 'All' ? 'No orders available' : `No ${activeTab.toLowerCase()} orders found`}
            </div>
          </div>
        </div>
      </div>

      {/* Sample Data Rows (Hidden by default, can be toggled) */}
      {searchQuery && (
        <div className="px-4 mt-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-sm text-gray-400">
              Searching for: "{searchQuery}"
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Orders;