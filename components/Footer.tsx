import React from 'react';
import Logo from './Logo';
import { WHATSAPP_NUMBER, EMAIL_ADDRESS, COMPANY_ADDRESS, NAV_LINKS } from '../constants';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo isWhite={true} className="h-16 w-auto" />
            <p className="mt-4 text-gray-400 text-sm">Eco Spaces, Expertly Crafted.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-300">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <FaWhatsapp className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="text-gray-400 hover:text-white transition-colors duration-300">{WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="text-gray-400 hover:text-white transition-colors duration-300">{EMAIL_ADDRESS}</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">{COMPANY_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Georcity Ventures Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;