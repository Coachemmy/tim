import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent-cream via-primary-50 to-secondary-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-accent-gold/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-primary-100 rounded-full">
              <span className="text-primary-700 font-medium text-sm">
                Welcome to Total Invasion Ministries
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Your Mission <br />
              <span className="text-primary-600">Awaits</span> Your Action
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Join us in fulfilling the Great Commission. We are a community of believers 
              dedicated to spreading the Gospel and empowering lives through Christ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about" className="btn-primary inline-flex items-center justify-center">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <button className="btn-secondary inline-flex items-center justify-center">
                <Play size={18} className="mr-2" />
                Watch Service
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-300">
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">500+</p>
                <p className="text-gray-600 text-sm">Members</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">10+</p>
                <p className="text-gray-600 text-sm">Ministries</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-primary-600">15+</p>
                <p className="text-gray-600 text-sm">Years of Service</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop" 
                alt="Church Community" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Play size={20} className="text-primary-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Join Us This Sunday</p>
                  <p className="text-sm text-gray-600">9:00 AM - 11:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;