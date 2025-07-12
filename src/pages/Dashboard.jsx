import SmmHeader from "../components/SmmHeader";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins">
        <SmmHeader/>
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5">
          {/* Left Column - Site Statistics */}
          <div className="space-y-6">
            <div className="bg-dark-bg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-300">Site Statistics</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Total number of orders on site</span>
                  <span className="text-purple-400 font-bold text-lg">8764645</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Total number of Tickets</span>
                  <span className="text-purple-400 font-bold text-lg">142383</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Total number of User</span>
                  <span className="text-purple-400 font-bold text-lg">73180</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Total number of Services</span>
                  <span className="text-purple-400 font-bold text-lg">4030</span>
                </div>
              </div>
            </div>

            {/* Next Level Card */}
            <div className="bg-dark-bg rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-300">Next Level: Power Reseller</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You have to spend <span className="text-purple-400 font-semibold">$500</span> more to reach the level.
              </p>
            </div>
          </div>

          {/* Right Column - User Information */}
          <div className="space-y-6">
            <div className="bg-dark-bg rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-300">Your Account</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Your balance</span>
                  <span className="text-white font-bold">≈ $0.00</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Your money spent</span>
                  <span className="text-white font-bold">≈ $0.00</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Your number of orders</span>
                  <span className="text-white font-bold">0</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">User level</span>
                  <span className="text-white font-bold text-sm">≈ $0.00 SPENT | New Reseller ACCOUNT</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">User Discount</span>
                  <span className="text-white font-bold">0%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">User points</span>
                  <span className="text-white font-bold">0.00</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Value in USD</span>
                  <span className="text-white font-bold">0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Responsive Adjustments */}
        <div className="mt-8 lg:hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white">Next Level</h3>
                <p className="text-sm text-gray-200">Power Reseller</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-200">Spend $500 more</p>
                <p className="text-xs text-gray-300">to reach next level</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;