import React from 'react';
import { Search, Heart, Hash, Star , Calendar, User , Rocket, ThumbsUp, Headphones} from 'lucide-react';
import SocialMediaGrowthSlider from '../components/SocialMediaGrowthSlider';
import Faqs from '../components/Faqs';

export default function LibgramHero() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 flex items-center">
          {/* Left Content */}
          <div className="w-1/2 z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Automated<br />
              promotion system
            </h1>
            
            <p className="text-gray-600 text-lg mb-4 max-w-md">
              Our service provides social media promotion marketing
            </p>
            <p className="text-gray-600 text-lg mb-4 max-w-md">
              services for bloggers, musicians and entrepreneurs.
            </p>
            <p className="text-gray-600 text-lg mb-8 max-w-md">
              The service uses several large sources for advertising.
            </p>
            
            <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 bg-red-400 hover:bg-red-500">
              Get Started
            </button>
          </div>

          {/* Right Content - Hero Image */}
          <div className="w-1/2 relative flex items-center justify-center">
            <img 
              src="../assets/images/hero-image-1.jpg" 
              alt="Hero"
              className="w-full h-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section with Testimonials and Main Content */}
        <div className="flex items-start justify-between mb-16">
          {/* Left Side - Testimonials */}
          <div className="w-1/2 relative">
            {/* First Testimonial */}
            <div className="relative mb-8">
              <div className="bg-red-400 text-white p-6 rounded-2xl max-w-sm relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <p className="text-white leading-relaxed">
                  Really love the simplicity of the interface and amazing customer support.
                </p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-red-400 transform rotate-45"></div>
              </div>
             
            </div>

            {/* Second Testimonial */}
            <div className="relative ml-8">
              <div className="bg-blue-400 text-white p-6 rounded-2xl max-w-sm relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <p className="text-white leading-relaxed">
                  Great service and like that you're given a trial before paying!
                </p>
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-blue-400 transform rotate-45"></div>
              </div>
             
            </div>

            {/* Arrow */}
           
          </div>

          {/* Right Side - Main Content */}
          <div className="w-1/2 pl-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Just a Few Steps<br />
              to Popularity!
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              People want to follow social media accounts with quality content.<br />
              But they often don't have the time or patience<br />
              to judge an profile or page.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8">
              {/* Trustpilot */}
              <div className="flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600 font-semibold">Trustpilot</span>
                </div>
                <div className="flex items-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-green-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">TrustScore | 365 reviews</span>
              </div>

              {/* Logos */}
              <div className="flex items-center space-x-6">
                <div className="text-gray-400 font-bold text-lg">MEN'S JOURNAL</div>
                <div className="text-gray-400 font-bold text-lg">IT.WEEKLY</div>
                <div className="text-gray-400 font-bold text-lg flex items-center">
                  <span className="mr-2">📱</span>
                  DIGITAL TRENDS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Three Steps */}
        <div className="grid grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-2xl">👆</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pick a package</h3>
            <p className="text-gray-600 leading-relaxed">
              Choose the Instagram likes, followers, or views package that you're interested in. Feel free to get in touch if you have an inquiry about a bulk order.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fill the info</h3>
            <p className="text-gray-600 leading-relaxed">
              We will never ask you for sensitive details such as your password. All you have to do is provide us with your username and leave the rest to us!
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-red-500 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">See the growth</h3>
            <p className="text-gray-600 leading-relaxed">
              All orders start within a few minutes, so you'll see growth in your account very quickly. We've made the process super easy.
            </p>
          </div>
        </div>
      </div>
    </div>

              <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="w-1/2 pr-16">
            <h2 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
              The Best<br />
              Service for Users
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Social media accounts without followers, likes, and views seem like very lonely places – and they're unlikely to attract visitors who will come back again and again, and they may not attract visitors at all.
            </p>
            
            <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Get Started
            </button>
            
            {/* Curved Arrow */}
            <div className="mt-12 relative">
              <svg width="300" height="80" viewBox="0 0 300 80" className="absolute">
                <path
                  d="M 20 60 Q 150 20 280 40"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="w-1/2 space-y-6">
            {/* Quick Results Card */}
            <div className="bg-white border-6 border-green-200 rounded-2xl p-6 relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You won't have to wait for your likes, views, or follows. Twicsy begins work on your order immediately, and we promise delivery in 24 hours or less.
                  </p>
                </div>
                <div className="ml-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Satisfaction Guarantee Card */}
            <div className="bg-white border-6 border-blue-200 rounded-2xl p-6 relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guarantee</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Libergram wants you to feel comfortable and confident through the entire process. We offer a complete refund on any order that didn't complete correctly.
                  </p>
                </div>
                <div className="ml-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <ThumbsUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Experienced Support Staff Card */}
            <div className="bg-white border-6 border-orange-200 rounded-2xl p-6 relative">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Support Staff</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You won't have to wait for your likes, views, or follows. Twicsy begins work on your order immediately, and we promise delivery in 24 hours or less.
                  </p>
                </div>
                <div className="ml-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
                {/* Slider Components imports */}
                  <SocialMediaGrowthSlider />
                  <Faqs/>
    </div>
    
  );
}