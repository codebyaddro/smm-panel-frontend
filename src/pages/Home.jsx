import React from 'react';
import { Search, Heart, Hash, Star , Calendar, User , Rocket, ThumbsUp, Headphones} from 'lucide-react';
import SocialMediaGrowthSlider from '../components/SocialMediaGrowthSlider';
import Faqs from '../components/Faqs';
import TopSellingProducts from '../components/TopSellingProducts';
import AutoCarousel from '../components/AutoCarousel';

export default function LibgramHero() {
  return (
    <div>
      <AutoCarousel/>
    
    <TopSellingProducts/>
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automated<br />
                promotion system
              </h1>
              
              <div className="text-gray-600 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                <p className="mb-4">
                  Our service provides social media promotion marketing
                </p>
                <p className="mb-4">
                  services for bloggers, musicians and entrepreneurs.
                </p>
                <p>
                  The service uses several large sources for advertising.
                </p>
              </div>
              
              <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto">
                Get Started
              </button>
            </div>

            {/* Right Content - Hero Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-md bg-gray-200 rounded-lg shadow-lg aspect-square flex items-center justify-center">
                <span className="text-gray-500 text-sm">Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section with Testimonials and Main Content */}
          <div className="flex flex-col lg:flex-row items-start mb-12 lg:mb-16">
            {/* Left Side - Testimonials */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
              <div className="space-y-6 lg:space-y-8">
                {/* First Testimonial */}
                <div className="relative">
                  <div className="bg-red-400 text-white p-6 rounded-2xl max-w-sm mx-auto lg:mx-0 relative">
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
                <div className="relative lg:ml-8">
                  <div className="bg-blue-400 text-white p-6 rounded-2xl max-w-sm mx-auto lg:mx-0 relative">
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
              </div>
            </div>

            {/* Right Side - Main Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Just a Few Steps<br />
                to Popularity!
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                People want to follow social media accounts with quality content.<br className="hidden sm:block" />
                But they often don't have the time or patience<br className="hidden sm:block" />
                to judge an profile or page.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-6 sm:space-y-0 sm:space-x-8">
                {/* Trustpilot */}
                <div className="flex flex-col items-center lg:items-start">
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
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <div className="text-gray-400 font-bold text-sm lg:text-base">MEN'S JOURNAL</div>
                  <div className="text-gray-400 font-bold text-sm lg:text-base">IT.WEEKLY</div>
                  <div className="text-gray-400 font-bold text-sm lg:text-base flex items-center">
                    <span className="mr-2">📱</span>
                    DIGITAL TRENDS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl">👆</div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Pick a package</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Choose the Instagram likes, followers, or views package that you're interested in. Feel free to get in touch if you have an inquiry about a bulk order.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Fill the info</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We will never ask you for sensitive details such as your password. All you have to do is provide us with your username and leave the rest to us!
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-500 fill-current" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">See the growth</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                All orders start within a few minutes, so you'll see growth in your account very quickly. We've made the process super easy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-16">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight">
                The Best<br />
                Service for Users
              </h2>
              
              <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Social media accounts without followers, likes, and views seem like very lonely places – and they're unlikely to attract visitors who will come back again and again, and they may not attract visitors at all.
              </p>
              
              <button className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 w-full sm:w-auto">
                Get Started
              </button>
              
              {/* Curved Arrow - Hidden on mobile */}
              <div className="mt-12 relative hidden lg:block">
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
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Quick Results Card */}
              <div className="bg-white border-4 sm:border-6 border-green-200 rounded-2xl p-4 sm:p-6 relative">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Quick Results</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      You won't have to wait for your likes, views, or follows. Twicsy begins work on your order immediately, and we promise delivery in 24 hours or less.
                    </p>
                  </div>
                  <div className="ml-0 sm:ml-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </div>

              {/* Satisfaction Guarantee Card */}
              <div className="bg-white border-4 sm:border-6 border-blue-200 rounded-2xl p-4 sm:p-6 relative">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Satisfaction Guarantee</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Libergram wants you to feel comfortable and confident through the entire process. We offer a complete refund on any order that didn't complete correctly.
                    </p>
                  </div>
                  <div className="ml-0 sm:ml-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <ThumbsUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Experienced Support Staff Card */}
              <div className="bg-white border-4 sm:border-6 border-orange-200 rounded-2xl p-4 sm:p-6 relative">
                <div className="flex flex-col sm:flex-row items-start">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Experienced Support Staff</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      You won't have to wait for your likes, views, or follows. Twicsy begins work on your order immediately, and we promise delivery in 24 hours or less.
                    </p>
                  </div>
                  <div className="ml-0 sm:ml-4 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
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
    </div>
                {/* Slider Components imports */}
                  <SocialMediaGrowthSlider />
                  <Faqs/>
    </div>
    
  );
}