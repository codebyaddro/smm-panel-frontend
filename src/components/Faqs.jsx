import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react'; // Importing icons from Lucide React

// Accordion Item Component
const AccordionItem = ({ title, content, isOpen, toggleAccordion }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-purple-600" /> : <ChevronDown className="w-5 h-5 text-purple-600" />}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, rating }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start min-w-[300px] max-w-sm mx-auto">
      <div className="text-4xl text-purple-600 mb-4">“</div>
      <p className="text-gray-700 text-base mb-4 flex-grow">{quote}</p>
      <div className="flex items-center justify-between w-full">
        <span className="font-semibold text-gray-800">{author}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const faqItems = [
    {
      title: 'I did not receive my order, what do I do now?',
      content: 'If you have not received your order, please contact our support team immediately with your order details. We will investigate the issue and ensure you receive your product or a full refund.',
    },
    {
      title: 'Why are my followers dropping?',
      content: 'Follower drops can occur for various reasons, including changes in platform algorithms or inactive accounts being removed. We strive to provide high-quality followers, but some natural fluctuations are normal. Contact support for more details.',
    },
    {
      title: 'I no longer want the followers I purchased, can they be removed?',
      content: 'Unfortunately, once followers are added to your account, they cannot be individually removed by us. You would need to block them manually if you wish to remove them from your follower list.',
    },
    {
      title: 'How do I stop follower replenishment?',
      content: 'Follower replenishment is an automatic process to maintain your follower count. If you wish to stop it, please reach out to our support team, and they will assist you with disabling this feature for your account.',
    },
    {
      title: 'How often does replenishment occur?',
      content: 'Replenishment typically occurs automatically whenever a drop in your follower count is detected, ensuring your numbers remain consistent with your purchase. The frequency depends on the rate of drops.',
    },
    {
      title: 'I did not receive my order, what do I do now?',
      content: 'If you have not received your order, please contact our support team immediately with your order details. We will investigate the issue and ensure you receive your product or a full refund.',
    },
    {
      title: 'How many followers can I buy?',
      content: 'You can purchase a wide range of followers, from a few hundred to tens of thousands, depending on your needs. Please check our pricing page for available packages and bulk options.',
    },
    {
      title: 'How many likes can I buy?',
      content: 'We offer various packages for likes, allowing you to buy from a small number for a single post to a large quantity for multiple posts. Visit our services page for detailed options and pricing.',
    },
  ];

  const testimonials = [
    {
      quote: 'I love Instagram, great platform to share photos, videos, etc., can\'t live a day without it lol. I guess I\'m not the only one crazy about this social network. It wasn\'t easy to attract followers, but I decided to try this service. Thank you very much, Instagram, for the stunning result, number of my subscribers has increased significantly.',
      author: 'Aspen Krogsaard',
      rating: 5,
    },
    {
      quote: 'This service is the best when you want to make your Instagram account more popular! The price is nice. You get followers and likes almost instantly. If something is wrong, the support team is always online. They will fix it, so you won\'t lose your money. I managed to increase the number of subscribers from 5000 to 76000 in a day! A great result. And no need to waste time doing it yourself.',
      author: 'Lindsay Franci',
      rating: 4,
    },
    {
      quote: 'Great service and like that you\'re given a trial before paying!',
      author: 'Lydia Botosh',
      rating: 5,
    },
    {
      quote: 'Excellent platform for increasing reach. Highly recommended for anyone looking to boost their social media presence quickly and effectively.',
      author: 'Marcus Aurelius',
      rating: 4,
    },
    {
      quote: 'Very satisfied with the results. My engagement has gone up significantly since using this service. The support team is also very responsive and helpful.',
      author: 'Cleopatra Jones',
      rating: 5,
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  
  const gradientStart = '#7B42F6'; // Gradient start color
  const gradientEnd = '#B842F6'; // Gradient end color

  return (
    <div className="font-inter antialiased bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="py-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-500 text-lg">Knowledge base</p>
      </header>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="md:col-span-1">
            {faqItems.slice(0, Math.ceil(faqItems.length / 2)).map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === index}
                toggleAccordion={() => toggleAccordion(index)}
              />
            ))}
          </div>
          <div className="md:col-span-1">
            {faqItems.slice(Math.ceil(faqItems.length / 2)).map((item, index) => (
              <AccordionItem
                key={index + Math.ceil(faqItems.length / 2)} // Adjust index for unique key
                title={item.title}
                content={item.content}
                isOpen={openAccordion === (index + Math.ceil(faqItems.length / 2))}
                toggleAccordion={() => toggleAccordion(index + Math.ceil(faqItems.length / 2))}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="rounded-xl p-8 flex flex-col md:flex-row items-center justify-between text-white"
          style={{ background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})` }}
        >
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-1">Didn't find answers to your questions?</h2>
            <p className="text-gray-100">Contact our support team</p>
          </div>
          <button className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300">
            Open Tickets
          </button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl md:text-4xl font-bold text-gray-800">Here's what our customers say:</h2>
          <div className="flex flex-col items-center space-x-2">
            <img src="https://placehold.co/24x24/000000/FFFFFF?text=T" alt="Trustpilot icon" className="w-6 h-6" />
            <span className="font-semibold text-gray-700">Trustpilot</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-green-500" fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-500 text-sm">4.8 out of 5 stars</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none -ml-4 md:-ml-8"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 rotate-90" />
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * (100 / (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3))}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition duration-300 focus:outline-none -mr-4 md:-mr-8"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 -rotate-90" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
