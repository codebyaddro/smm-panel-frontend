import React, { useState } from "react";

const OrderPanel = () => {
  const [activeTab, setActiveTab] = useState("new-order");
  const [quantity, setQuantity] = useState("");
  const [link, setLink] = useState("");

  const charge = quantity
    ? (Math.max(100, Math.min(Number(quantity), 10000000)) / 1000 * 0.05).toFixed(4)
    : "";

  return (
    <div className="min-h-screen bg-main-bg text-white p-4 md:p-6 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-dark-bg p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex border-b border-gray-700 mb-5 ">
            {["New Order", "Mass Order", "Favorite"].map((tab, index) => {
              const key = tab.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-md font-medium transition-all ${
                    activeTab === key
                      ? "text-white border-b-2 border-purple-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Order Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 block mb-1">Category</label>
              <select className="w-full bg-dark-card p-2 rounded text-white border-none">
                <option>Facebook - Video/Reel Views/Plays</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">Service</label>
              <div className="w-full p-2 bg-dark-card text-sm rounded">
                <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs mr-2">
                  80
                </span>
                Facebook - Video/Reel Views/Plays ~ 10k/day ~ Instant ~ Lifetime
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">Link</label>
              <input
                type="text"
                className="w-full bg-dark-card p-2 rounded text-white border-none"
                placeholder="Paste your Facebook video URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">
                Quantity{" "}
                <span className="text-xs text-gray-500">(Min: 100 - Max: 10,000,000)</span>
              </label>
              <input
                type="number"
                min={100}
                max={10000000}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full bg-dark-card p-2 rounded text-white border-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-1">Charge</label>
              <input
                type="text"
                value={charge ? `$${charge}` : ""}
                readOnly
                className="w-full bg-dark-card p-2 rounded text-white border-none"
              />
            </div>

            <button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-500 text-white py-2 rounded hover:opacity-90 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-1/2 bg-dark-bg p-6 rounded-lg shadow-md">
          {/* Tabs */}
          <div className="flex border-b border-card-border mb-5">
            {["Service details", "Updates", "Contact Us"].map((tab, index) => {
              const key = tab.toLowerCase().replace(" ", "-");
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === key
                      ? "text-white border-b-2 border-purple-500"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Service Details */}
          {activeTab === "service-details" && (
            <div className="space-y-4">
              <div className="bg-dark-card p-4 rounded">
                <h4 className="text-sm text-purple-400 font-semibold mb-1">Service name</h4>
                <p className="text-sm">
                  80 - Facebook - Video/Reel Views/Plays ~ 10k/day ~ Instant ~{" "}
                  <span className="text-purple-300">Lifetime</span> [Can Stuck] -{" "}
                  <span className="text-green-400">$0.05 per 1000</span>
                </p>
              </div>

              <div className="bg-dark-card p-4 rounded">
                <h4 className="text-sm text-purple-400 font-semibold mb-1">Example link</h4>
                <p className="text-sm text-gray-300">Facebook - Video URL</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-card p-4 rounded">
                  <h4 className="text-sm text-purple-400 font-semibold">START TIME</h4>
                  <p className="text-sm">Instant</p>
                </div>
                <div className="bg-dark-card p-4 rounded">
                  <h4 className="text-sm text-purple-400 font-semibold">SPEED</h4>
                  <p className="text-sm">10k per day</p>
                </div>
                <div className="bg-dark-card p-4 rounded">
                  <h4 className="text-sm text-purple-400 font-semibold">GUARANTEED</h4>
                  <p className="text-sm">Lifetime</p>
                </div>
                <div className="bg-dark-card p-4 rounded">
                  <h4 className="text-sm text-purple-400 font-semibold">AVERAGE TIME</h4>
                  <p className="text-sm">53 hours 21 minutes</p>
                </div>
              </div>

              <div className="bg-dark-card p-4 rounded">
                <h4 className="text-sm text-purple-400 font-semibold mb-1">Description</h4>
                <p className="text-sm text-gray-300">
                  (If Facebook Update, the start can be too delayed)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPanel;
