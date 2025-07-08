import React, { useState } from 'react';
import { Star, Grid, List, ChevronDown, Filter, X, Menu } from 'lucide-react';

const AllProducts = () => {
  const [priceRange, setPriceRange] = useState([150, 64950]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('default');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Adobe Acrobat Pro DC',
      price: 2550,
      originalPrice: 5950,
      image: '/api/placeholder/300/200',
      rating: 0,
      reviews: 0,
      category: 'Software',
      description: 'Adobe Acrobat Pro DC Price in BD',
      discount: 0,
      color: 'bg-red-500'
    },
    {
      id: 2,
      name: 'Adobe Creative Cloud Photography Plan',
      price: 2950,
      originalPrice: 24990,
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 2,
      category: 'Subscription',
      description: 'Adobe Creative Cloud Photography Plan Price in BD',
      discount: 0,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      name: 'Adobe Creative Cloud Prepaid Subscription',
      price: 6950,
      originalPrice: 64950,
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 15,
      category: 'Subscription',
      description: 'Adobe Creative Cloud Prepaid Subscription Price in BD',
      discount: 0,
      color: 'bg-gradient-to-r from-pink-500 to-orange-500'
    },
    {
      id: 4,
      name: 'Adobe Creative Cloud Students & Teachers',
      price: 3550,
      originalPrice: 29950,
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 3,
      category: 'Subscription',
      description: 'Adobe Creative Cloud Students & Teachers Subscription',
      discount: 0,
      color: 'bg-gradient-to-r from-purple-500 to-orange-500'
    },
    {
      id: 5,
      name: 'Adobe Creative Cloud Team Subscription',
      price: 1450,
      originalPrice: 56450,
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 3,
      category: 'Subscription',
      description: 'Adobe Creative Cloud Team Subscription Price in BD',
      discount: 0,
      color: 'bg-gradient-to-r from-pink-500 to-orange-500'
    },
    {
      id: 6,
      name: 'Adobe Stock Premium Files Package',
      price: 1350,
      originalPrice: 53950,
      image: '/api/placeholder/300/200',
      rating: 0,
      reviews: 0,
      category: 'Software',
      description: 'Adobe Stock Premium Files Package Price in BD',
      discount: 0,
      color: 'bg-gray-800'
    },
    {
      id: 7,
      name: 'Autocad Subscription',
      price: 1550,
      originalPrice: 25000,
      image: '/api/placeholder/300/200',
      rating: 0,
      reviews: 0,
      category: 'Software',
      description: 'Autocad Subscription Price in BD',
      discount: 94,
      color: 'bg-red-700'
    },
    {
      id: 8,
      name: 'Autodesk All Apps Subscription',
      price: 3550,
      originalPrice: 116000,
      image: '/api/placeholder/300/200',
      rating: 5,
      reviews: 3,
      category: 'Subscription',
      description: 'Autodesk All Apps Subscription Price in BD',
      discount: 97,
      color: 'bg-teal-600'
    }
  ];

  const categories = [
    'All Products',
    'Antivirus',
    'Microsoft Office',
    'Physical Product',
    'Software',
    'Subscription',
    'VPN',
    'Windows',
    'Windows Server',
    'dStock',
    'Uncategorized'
  ];

  const filteredProducts = products.filter(product => {
    const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    return priceInRange && categoryMatch;
  });

  const handleCategoryChange = (category) => {
    if (category === 'All Products') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className={`h-48 ${product.color} flex items-center justify-center relative`}>
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        <div className="text-white text-center">
          <div className="text-2xl font-bold mb-2">
            {product.name.includes('Adobe') ? 'Adobe' : product.name.split(' ')[0]}
          </div>
          <div className="text-lg">
            {product.name.includes('Creative Cloud') ? 'Creative Cloud' : 
             product.name.includes('Acrobat') ? 'Acrobat Pro' :
             product.name.includes('Stock') ? 'Stock' :
             product.name.includes('Autocad') ? 'AutoCAD' :
             product.name.includes('Autodesk') ? 'AUTODESK' : ''}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.description}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-red-500 font-bold text-lg">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-gray-400 line-through text-sm">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div className="w-full lg:w-80 bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <h2 className="text-xl font-bold">Filters</h2>
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <X size={20} />
        </button>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter By Price</h3>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="range"
              min="150"
              max="64950"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Price: ৳{priceRange[0]}</span>
            <span>৳{priceRange[1].toLocaleString()}</span>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition-colors">
            FILTER
          </button>
        </div>
      </div>

      {/* Product Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
              <input
                type="checkbox"
                checked={category === 'All Products' ? selectedCategories.length === 0 : selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Running Notice */}
      <div className="mt-8 bg-blue-600 text-white p-4 rounded-lg">
        <h4 className="font-bold mb-2">Running Notice</h4>
        <p className="text-sm">
          কোন সমস্যা আছে তো? আমাদের সাথে যোগাযোগ করুন - আমরা সর্বদা আপনার সেবায় প্রস্তুত।
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:block">
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md"
              >
                <Menu size={20} />
                <span>Filters</span>
              </button>
            </div>
            
            <div className="hidden lg:block">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <Grid size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-yellow-500 text-white' : 'bg-white text-gray-600'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
                <span className="text-gray-600">
                  Showing 1–{Math.min(20, filteredProducts.length)} of {filteredProducts.length} results
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Default sorting</span>
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed left-0 top-0 h-full w-80 bg-white overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      )}

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #EAB308;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #EAB308;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default AllProducts;