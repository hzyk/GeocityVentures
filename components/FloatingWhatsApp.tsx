
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default FloatingWhatsApp;
