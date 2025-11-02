import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { FaBullseye, FaRegLightbulb, FaHeart, FaShieldAlt, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  const coreValues = [
    { icon: FaShieldAlt, title: 'Integrity', description: 'We operate with honesty and transparency in all our dealings.' },
    { icon: FaHeart, title: 'Quality', description: 'Our commitment to excellence ensures we deliver only the best materials.' },
    { icon: FaRegLightbulb, title: 'Sustainability', description: 'We champion eco-friendly practices to protect our planet for future generations.' },
    { icon: FaRocket, title: 'Innovation', description: 'We continuously seek better solutions to meet the evolving needs of construction.' },
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <header className="bg-gray-800 py-20 text-white text-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-black bg-opacity-50 py-20">
            <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">About Georcity Ventures</h1>
            <p className="mt-4 text-lg text-gray-300">Redefining Urban Development in Kenya</p>
            </div>
        </div>
      </header>

      {/* Company Story & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story & Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Georcity Ventures Limited, we are redefining urban development through sustainable and high-quality building solutions. Founded on the principle of building a better, greener future, we have grown to become a trusted partner for contractors, developers, and homeowners across the nation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our goal is to support Kenya’s growth with eco-smart materials that last. We believe that modern construction should not come at the expense of our environment. That's why we are committed to sourcing and supplying materials that are not only durable and reliable but also environmentally responsible.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/5691535/pexels-photo-5691535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="A smiling African builder representing Georcity Ventures' professional and positive approach." 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Vision & Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600">The principles that guide our every action.</p>
          </div>
          <div className="max-w-4xl mx-auto">
             <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex items-center space-x-6">
                <FaBullseye className="text-green-600 text-5xl flex-shrink-0" />
                <div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                    <p className="mt-2 text-gray-600">To be the leading provider of sustainable building materials in East Africa, powering a new generation of eco-conscious construction.</p>
                </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {coreValues.map((value) => (
              <div key={value.title} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center items-center h-16 w-16 mx-auto bg-green-100 rounded-full mb-4">
                  <value.icon className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold">Ready to Build Sustainably?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Let's discuss how our materials can bring your project to life. Our team is ready to assist you.</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block px-10 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Talk to Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;