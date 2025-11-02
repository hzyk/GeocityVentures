
import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ContactFormProps {
  serviceName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ serviceName }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let prefillText = `Hello Georcity Ventures, I would like to make an inquiry.`;

    if (serviceName) {
        prefillText = `Hello Georcity Ventures, I would like a quote for *${serviceName}*.`;
    }

    prefillText += `\n\nMy details:\nName: ${formData.name}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    const whatsappUrl = `${WHATSAPP_LINK}?text=${encodeURIComponent(prefillText)}`;
    
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {serviceName ? `Quote for ${serviceName}` : 'Send Us a Message'}
      </h3>
      {submitted ? (
         <div className="text-center p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
           <p className="font-bold">Thank you!</p>
           <p>Your message is ready to be sent on WhatsApp.</p>
           <button 
             onClick={() => setSubmitted(false)} 
             className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
           >
             Send another message
           </button>
         </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
            >
              Get a Quote on WhatsApp
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;