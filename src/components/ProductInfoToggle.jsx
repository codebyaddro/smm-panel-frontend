import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBox, faBullseye, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

export default function ProductInfoToggle() {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'additional', label: 'Additional information' },
    { id: 'reviews', label: 'Reviews (319)' }
  ];

  const features = [
    "1 PC or Laptop.",
    "Digital License.",
    "Lifetime Activation. (Reusable)",
    "The key is activated online (via the Internet).",
    "Built-in update security at no extra cost.",
    "Stay protected against the latest security threats.",
    "Get updates all time from Microsoft.",
    "Unlock a lot of tools & gaming features.",
    "Latest Update Windows Defender Antivirus.",
    "No need to use extra Antivirus."
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-3 font-poppins">
            {/* Contact Info */}
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <p className="text-white flex items-center gap-2">
                <span className="font-medium">For Bulk Amount Order, contact us via</span>
                <span className="text-green-600 font-semibold"><FontAwesomeIcon icon={faWhatsapp}/> What's App</span>
              </p>
            </div>

            {/* Order Info */}
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <p className="text-white  flex items-center gap-2">
               <FontAwesomeIcon icon={faBox}/>
                <span className="font-medium">To Order FPP Retail USB or OEM DVD Unit:</span>
                <span className="text-fuchsia-600 font-semibold underline cursor-pointer ">Click here</span>
              </p>
            </div>

            {/* Product Title */}
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <FontAwesomeIcon icon={faKey} />
                Genuine Windows 10 Pro / Professional License Product Key Price In Bd
              </h2>
            </div>

            {/* Features List */}
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <h3 className="text-lg font-semibold text-white mb-4">Key Features:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white text-sm mt-1">•</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* License Type */}
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
              <p className="text-gray-700 flex items-center gap-2">
                <FontAwesomeIcon icon={faBullseye} className="text-red-600" />
                <span className="font-semibold">Retail License.</span>
              </p>
            </div>
          </div>
        );
      
      case 'additional':
        return (
          <div className="space-y-6 font-poppins">
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <h3 className="text-lg font-semibold text-white mb-4">Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div className="space-y-2">
                  <p><span className="font-medium">Product Type:</span> Digital License</p>
                  <p><span className="font-medium">Compatibility:</span> Windows 10 Pro</p>
                  <p><span className="font-medium">Installation:</span> 1 PC or Laptop</p>
                  <p><span className="font-medium">Activation:</span> Online (Internet Required)</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-medium">Updates:</span> Lifetime from Microsoft</p>
                  <p><span className="font-medium">Security:</span> Built-in Windows Defender</p>
                  <p><span className="font-medium">Support:</span> Official Microsoft Support</p>
                  <p><span className="font-medium">License Type:</span> Retail License</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'reviews':
        return (
          <div className="space-y-6 font-poppins">
            <div className="bg-dark-card p-4 rounded-lg border border-card-border">
              <h3 className="text-lg font-semibold text-white mb-4">Customer Reviews (319)</h3>
              
              {/* Rating Summary */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white  ">4.8</span>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <span className="text-white">Based on 319 reviews</span>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-white">Ahmed R.</span>
                    <div className="flex text-yellow-400 text-sm">{'★'.repeat(5)}</div>
                  </div>
                  <p className="text-white">Great product! Activation was smooth and works perfectly on my laptop. Highly recommended!</p>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-white">Ahmed R.</span>
                    <div className="flex text-yellow-400 text-sm">{'★'.repeat(5)}</div>
                  </div>
                  <p className="text-white">Great product! Activation was smooth and works perfectly on my laptop. Highly recommended!</p>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-white">Ahmed R.</span>
                    <div className="flex text-yellow-400 text-sm">{'★'.repeat(5)}</div>
                  </div>
                  <p className="text-white">Great product! Activation was smooth and works perfectly on my laptop. Highly recommended!</p>
                </div>
                
              
                
               
              </div>
              
              <button className="mt-4 text-fuchsia-300 font-medium">
                View all reviews →
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tab Navigation */}
      <div className="flex flex-wrap  mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border border-card-border text-white bg-dark-card rounded-md'
                : 'border-transparent text-white '
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300 ease-in-out">
        {renderContent()}
      </div>
    </div>
  );
}