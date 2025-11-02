

import React from 'react';
import { SERVICES_DATA, WHATSAPP_LINK } from '../constants';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
    <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{service.longDescription || service.description}</p>
      <a
        href={`${WHATSAPP_LINK}?text=${encodeURIComponent(`Hello Georcity Ventures, I would like a quote for ${service.title}.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all duration-300"
      >
        Request a Quote
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Expertise in Quality Building Materials</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            We provide a comprehensive range of high-quality, sustainable materials to meet all your construction needs, ensuring reliability from the ground up.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* General Inquiry CTA */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Don't See What You're Looking For?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Our inventory is extensive. Contact us for special orders or general inquiries about our full range of building materials.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-10 py-4 bg-gray-800 text-white rounded-full font-semibold text-lg hover:bg-black transition-all duration-300 transform hover:scale-105"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;