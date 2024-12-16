import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Menu } from 'lucide-react';

const CarouselData = [
  {
    id: 1,
    title: "Make Protecting New Jersey Your Career",
    description: "From community policing to homeland security, from aviation to marine law enforcement, from forensics to communications, we've got a specialty area that's sure to suit your unique skills and interests.",
    buttonText: "Visit Recruiting",
    buttonStyle: "bg-blue-600"
  },
  {
    id: 2,
    title: "NJGUNStat Reports",
    description: "The comprehensive monthly report breaks down the number of guns recovered by county and city and additionally lists the type and caliber of gun, number of individuals arrested with more than one crime gun, total crime guns recovered, and a breakdown of shooting victims.",
    buttonText: "View the most recent NJGUNStat report",
    buttonStyle: "bg-blue-600"
  },
  {
    id: 3,
    title: "ALERT: Important Notice",
    description: "If you see any of these wanted persons please contact the U.S. Embassy and immediately report their location.",
    buttonText: "More Information",
    buttonStyle: "bg-red-600"
  },
  {
    id: 4,
    title: "Stop Corruption in New Jersey",
    description: "Report allegations involving elected officials, appointed officials, county officials, and state employees. Contact the New Jersey State Police Official Corruption Bureau.",
    buttonText: "Report Corruption",
    buttonStyle: "bg-red-700"
  },
  {
    id: 5,
    title: "Report Data Breaches",
    description: "For more information on NJ's Identity Theft Protection Act and to report data breaches affecting NJ residents, please click below:",
    buttonText: "Report Data Breaches",
    buttonStyle: "bg-red-600"
  }
];

const SpotlightData = [
  {
    title: "Crash Report Requests",
    description: "Request official accident reports and documentation."
  },
  {
    title: "NJ Sex Offender Registry",
    description: "Access the public database of registered offenders."
  },
  {
    title: "Firearms Information",
    description: "Learn about permits, regulations, and requirements."
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % CarouselData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % CarouselData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? CarouselData.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold">NJ State Police</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><button className="hover:text-blue-200 transition-colors">Home</button></li>
                <li><button className="hover:text-blue-200 transition-colors">About</button></li>
                <li><button className="hover:text-blue-200 transition-colors">Services</button></li>
                <li><button className="hover:text-blue-200 transition-colors">Resources</button></li>
                <li><button className="hover:text-blue-200 transition-colors">Contact</button></li>
              </ul>
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-48 px-4 py-1 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute right-3 top-1.5 h-4 w-4 text-gray-500" />
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 bg-blue-800">
            <nav>
              <ul className="space-y-2">
                <li><button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Home</button></li>
                <li><button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">About</button></li>
                <li><button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Services</button></li>
                <li><button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Resources</button></li>
                <li><button className="block w-full text-left px-4 py-2 hover:bg-blue-700 rounded">Contact</button></li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Carousel */}
      <div className="relative w-full h-[500px] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
        
        {/* Carousel Content */}
        <div className="relative h-full flex items-center z-20">
          <div className="container mx-auto px-6">
            <div className="max-w-xl text-white space-y-6">
              <h2 className="text-4xl font-bold">{CarouselData[current].title}</h2>
              <p className="text-lg">{CarouselData[current].description}</p>
              <button
                className={`${CarouselData[current].buttonStyle} px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity`}
              >
                {CarouselData[current].buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white transition-colors z-20"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {CarouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Spotlight Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SpotlightData.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="bg-yellow-50 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Current Alerts</h2>
          <p className="text-lg font-bold text-red-600">No AMBER alerts at this time</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Emergency: 911</p>
              <p>Non-Emergency: (609) 882-2000</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button className="hover:text-blue-200">FAQs</button></li>
                <li><button className="hover:text-blue-200">Careers</button></li>
                <li><button className="hover:text-blue-200">Press Releases</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><button className="hover:text-blue-200">Forms</button></li>
                <li><button className="hover:text-blue-200">Publications</button></li>
                <li><button className="hover:text-blue-200">Statistics</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <p className="mb-2">Follow us on social media for updates and alerts.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-800 text-center">
            <p>&copy; 2024 New Jersey State Police. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}