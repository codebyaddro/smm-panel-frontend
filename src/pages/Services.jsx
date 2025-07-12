import React, { useState } from 'react';
import { FaSearch, FaFilter, FaShoppingCart, FaFacebook } from 'react-icons/fa';
import SmmHeader from '../components/SmmHeader';

const services = [
  {
    id: 80,
    title: 'Facebook - Video/Reel Views/Plays ~ 10k/day ~ Instant ~ LifeTime [ Can Stuck ]',
    rate: '$0.05',
    min: 100,
    max: 10000000,
    refill: 'No Refill',
    time: '49 hours 15 minutes',
  },
  {
    id: 55,
    title: 'Facebook - Video/Reel Views/Plays ~ 50k/day ~ Instant ~ LifeTime [ Never Stuck ]',
    rate: '$0.09',
    min: 100,
    max: 50000000,
    refill: 'No Refill',
    time: '20 minutes',
  },
];

const Services = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
        <SmmHeader />
        <div className='bg-main-bg'>
          <div className="min-h-screen max-w-7xl mx-auto bg-[#0f0b1d] text-white p-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-3 md:items-center mb-4">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#18122b] border border-gray-700 rounded px-4 py-2 pr-10"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
        </div>
        <button className="bg-[#18122b] border border-gray-700 rounded px-4 py-2 flex items-center gap-2">
          <FaFilter /> Filter
        </button>
      </div>

      {/* Category Header */}
      <div className="bg-[#18122b] p-4 rounded-t-lg text-sm flex items-center gap-2 font-semibold">
        <FaFacebook />
        Facebook – Video/Reel Views/Plays <span className="text-xs text-purple-400">~NEW~</span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm bg-[#18122b] rounded-b-lg">
          <thead>
            <tr className="text-left text-gray-300 border-b border-gray-700">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Service</th>
              <th className="py-3 px-4">Rate/1000</th>
              <th className="py-3 px-4">Min/Max</th>
              <th className="py-3 px-4">Refill</th>
              <th className="py-3 px-4">Average time</th>
              <th className="py-3 px-4">Description</th>
            </tr>
          </thead>
          <tbody>
            {services
              .filter((s) => s.title.toLowerCase().includes(search.toLowerCase()))
              .map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-gray-800 hover:bg-[#1e1b2e] transition"
                >
                  <td className="py-3 px-4 flex items-center gap-2">
                    ⭐ {s.id}
                  </td>
                  <td className="py-3 px-4">{s.title}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <button className="bg-[#2a243a] p-2 rounded-full">
                        <FaShoppingCart />
                      </button>
                      {s.rate}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    {s.min} / {s.max.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-[#2a243a] text-sm px-3 py-1 rounded">
                      {s.refill}
                    </span>
                  </td>
                  <td className="py-3 px-4">{s.time}</td>
                  <td className="py-3 px-4">
                    <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-1 rounded text-white">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
        </div>
        </div>
    </div>
  );
};

export default Services;
