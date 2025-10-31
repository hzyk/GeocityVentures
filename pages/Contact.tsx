
import React from 'react';
import { WHATSAPP_LINK, WHATSAPP_NUMBER, EMAIL_ADDRESS, COMPANY_ADDRESS } from '../constants';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="bg-green-600 py-16 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-green-100">
            We're here to help you with your construction needs. Reach out to us for quotes, inquiries, or expert advice.
          </p>
        </div>
      </header>
      
      {/* Contact Details & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8">
               <img 
                src="https://images.pexels.com/photos/8093375/pexels-photo-8093375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="A team of happy, professional builders from GeoCity Ventures." 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-3xl font-bold text-gray-800">Contact Information</h2>
              <p className="text-gray-600">
                For the fastest response, please contact us on WhatsApp. You can also reach us via email or visit us at our main office.
              </p>
              
              <div className="space-y-6">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <FaWhatsapp className="text-green-500 text-3xl flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">WhatsApp (Primary)</h3>
                    <p className="text-green-600 font-medium">{WHATSAPP_NUMBER}</p>
                  </div>
                </a>

                <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <FaEnvelope className="text-gray-500 text-3xl flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">{EMAIL_ADDRESS}</p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
                  <FaMapMarkerAlt className="text-gray-500 text-3xl flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Optional Google Map */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.3585374465!2d36.70737279257696!3d-1.302860278786236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1672522778841!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Nairobi, Kenya Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;