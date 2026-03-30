import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">T</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Total Invasion Ministries</h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering believers to fulfill the Great Commission. Your mission awaits your action.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/ministries" className="text-gray-400 hover:text-primary-400 transition-colors">Ministries</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Give Online</a></li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Service Times</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary-500 mt-1" />
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p className="text-gray-400 text-sm">9:00 AM - 11:00 AM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-primary-500 mt-1" />
                <div>
                  <p className="font-medium">Midweek Service</p>
                  <p className="text-gray-400 text-sm">Wednesday 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 mt-1" />
                <p className="text-gray-400 text-sm">
                  Namon Katengeza (Chongoni)<br />
                  Lilongwe/Dedza District<br />
                  Malawi
                </p>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-500" />
                <p className="text-gray-400 text-sm">+265 XXX XXX XXX</p>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500" />
                <p className="text-gray-400 text-sm">info@totalinvasion.org</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Total Invasion Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;