import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';
import Logo from './Logo';
import { FiMenu, FiX } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-green-600 font-semibold';
  const inactiveLinkClass = 'text-gray-700 hover:text-green-600 transition-colors duration-300';

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex-shrink-0">
            <Logo className="h-14 w-auto" />
          </NavLink>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => (isActive ? activeLinkClass : inactiveLinkClass)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-40">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`}
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
