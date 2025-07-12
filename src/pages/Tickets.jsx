import React, { useState } from "react";
import SmmHeader from "../components/SmmHeader";

const Tickets = () => {
  const [category, setCategory] = useState("Order");
  const [subcategory, setSubcategory] = useState("Refill");
  const [orderId, setOrderId] = useState("");
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div>
      <SmmHeader />
      <div className="bg-main-bg">
        <div className="min-h-screen bg-main-bg md:max-w-7xl md:mx-auto text-white p-6 flex flex-col lg:flex-row gap-6 font-poppins">
          {/* New Ticket */}
          <div className="w-full lg:w-1/2 bg-dark-bg rounded-xl p-5 shadow-lg">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
              🎟️ New Ticket
            </h2>
            <div className="border-b-2 border-purple-500 mb-4"></div>

            <div className="mb-4">
              <label className="block mb-1">Category</label>
              <select
                className="w-full bg-dark-card border border-gray-700 rounded px-3 py-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Order</option>
                <option>Payment</option>
                <option>Bug</option>
                <option>Discount</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Subcategory</label>
              <select
                className="w-full bg-dark-card border border-gray-700 rounded px-3 py-2"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
              >
                <option>Refill</option>
                <option>Cancel</option>
                <option>Speed up</option>
                <option>Restart</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block mb-1">Order ID</label>
              <input
                type="text"
                className="w-full bg-dark-card border border-gray-700 rounded px-3 py-2"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1">Message</label>
              <textarea
                rows="6"
                className="w-full bg-dark-card border border-gray-700 rounded px-3 py-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-2 rounded font-semibold">
              Submit ticket
            </button>
          </div>

          {/* Ticket History */}
          <div className="w-full lg:w-1/2 bg-dark-bg rounded-xl p-5 shadow-lg">
            <h2 className="text-lg font-semibold flex items-center gap-2 mb-2">
              🔄 Ticket History
            </h2>
            <div className="border-b-2 border-purple-500 mb-4"></div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-[#100c1c] border border-gray-700 rounded px-3 py-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-purple-600 p-2 rounded">🔍</button>
            </div>

            <div className="flex gap-2">
              {["All", "Pending", "Answered"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded ${
                    activeTab === tab
                      ? "bg-[#2d2344] text-white"
                      : "bg-[#100c1c] text-gray-400"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
