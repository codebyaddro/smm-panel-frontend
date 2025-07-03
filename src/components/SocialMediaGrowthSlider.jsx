import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Users, Heart, Eye, FileText } from 'lucide-react';

const SocialMediaGrowthSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const platforms = [
    {
      name: 'Instagram',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500',
      textColor: 'text-purple-500',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
      services: [
        { icon: <Play size={16} />, label: 'IGTV' },
        { icon: <Users size={16} />, label: 'Followers' },
        { icon: <Heart size={16} />, label: 'Likes' },
        { icon: <Eye size={16} />, label: 'Views' },
        { icon: <FileText size={16} />, label: 'Stories' }
      ]
    },
    {
      name: 'TikTok',
      color: 'bg-gradient-to-br from-black to-gray-800',
      textColor: 'text-black',
      buttonColor: 'bg-black hover:bg-gray-800',
      services: [
        { icon: <Play size={16} />, label: 'IGTV' },
        { icon: <Users size={16} />, label: 'Followers' },
        { icon: <Heart size={16} />, label: 'Likes' },
        { icon: <Eye size={16} />, label: 'Views' },
        { icon: <FileText size={16} />, label: 'Stories' }
      ]
    },
    {
      name: 'Twitch',
      color: 'bg-gradient-to-br from-purple-600 to-purple-700',
      textColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      services: [
        { icon: <Play size={16} />, label: 'IGTV' },
        { icon: <Users size={16} />, label: 'Followers' },
        { icon: <Heart size={16} />, label: 'Likes' },
        { icon: <Eye size={16} />, label: 'Views' },
        { icon: <FileText size={16} />, label: 'Stories' }
      ]
    },
    {
      name: 'Spotify',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      textColor: 'text-green-500',
      buttonColor: 'bg-green-500 hover:bg-green-600',
      services: [
        { icon: <Play size={16} />, label: 'IGTV' },
        { icon: <Users size={16} />, label: 'Followers' },
        { icon: <Heart size={16} />, label: 'Likes' },
        { icon: <Eye size={16} />, label: 'Views' },
        { icon: <FileText size={16} />, label: 'Stories' }
      ]
    },
    {
      name: 'YouTube',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      textColor: 'text-red-500',
      buttonColor: 'bg-red-500 hover:bg-red-600',
      services: [
        { icon: <Play size={16} />, label: 'Videos' },
        { icon: <Users size={16} />, label: 'Subscribers' },
        { icon: <Heart size={16} />, label: 'Likes' },
        { icon: <Eye size={16} />, label: 'Views' },
        { icon: <FileText size={16} />, label: 'Shorts' }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % platforms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + platforms.length) % platforms.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % platforms.length;
      cards.push(platforms[index]);
    }
    return cards;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose the Way You Want to Grow:
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Views, Followers, Likes!
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            All social media marketing campaigns are different,
            <br />
            and that's why we give you a wide variety
            <br />
            of options to choose from.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-16">
            {getVisibleCards().map((platform, index) => (
              <div
                key={`${platform.name}-${currentSlide}-${index}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6"
              >
                {/* Platform Title */}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${platform.textColor}`}>
                    {platform.name}
                  </h3>
                </div>

                {/* Services List */}
                <div className="space-y-4 mb-8">
                  {platform.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-gray-600">
                          {service.icon}
                        </div>
                        <span className="text-gray-700 font-medium">
                          {service.label}
                        </span>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </div>
                  ))}
                </div>

                {/* Show More Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${platform.buttonColor}`}
                >
                  Show more
                </button>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {platforms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaGrowthSlider;