import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK, SERVICES_DATA } from '../constants';
import { FaCheckCircle, FaLeaf, FaTruck, FaHeadset } from 'react-icons/fa';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  const whyChooseUsItems = [
    { icon: FaCheckCircle, title: 'Quality Materials', description: 'We source only the best materials to ensure durability and excellence in every project.' },
    { icon: FaLeaf, title: 'Sustainable Sourcing', description: 'Committed to eco-friendly practices, we provide materials that build a greener future.' },
    { icon: FaTruck, title: 'Reliable Delivery', description: 'Our logistics ensure your materials arrive on-site, on time, every time.' },
    { icon: FaHeadset, title: 'Expert Support', description: 'Our knowledgeable team is here to guide you in selecting the right materials for your needs.' },
  ];

  const featuredMaterials = SERVICES_DATA.slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-40 text-center text-white"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block mb-8">
              <Logo isWhite={true} className="h-24 md:h-28 w-auto"/>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Eco Spaces, Expertly Crafted.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              GeoCity Ventures Limited delivers sustainable construction materials and solutions designed for modern, eco-conscious building projects.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/services" className="px-10 py-4 bg-white text-gray-800 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">
                View Our Services
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-green-600 text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">From foundation to finish, we provide a comprehensive range of materials.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-green-100 p-5 rounded-full text-green-600">
                  {service.icon && <service.icon size={32} />}
                </div>
                <h3 className="mt-4 font-semibold text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose GeoCity Ventures?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">We are dedicated to providing unparalleled value and service.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <item.icon className="text-green-600" size={40} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Materials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Materials</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">High-quality materials for every stage of your construction project.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMaterials.map((material, index) => (
              <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <img src={material.imageUrl} alt={material.title} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-bold">{material.title}</h3>
                    <p className="mt-2">{material.description}</p>
                    <Link to="/services" className="mt-4 inline-block px-6 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
