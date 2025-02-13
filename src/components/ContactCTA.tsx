import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 mix-blend-multiply"></div>
          </div>
          <div className="relative px-8 py-16 sm:px-16 sm:py-24">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-extrabold tracking-tight text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-xl text-blue-100">
                Get in touch with our experts for a free consultation and discover how we can help you achieve your digital goals.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <a href="tel:+1234567890" className="flex items-center text-blue-100 hover:text-white">
                  <Phone className="h-6 w-6 mr-2" />
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:contact@skyline.tech" className="flex items-center text-blue-100 hover:text-white">
                  <Mail className="h-6 w-6 mr-2" />
                  <span>contact@skyline.tech</span>
                </a>
                <button className="flex items-center text-blue-100 hover:text-white">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  <span>Live Chat</span>
                </button>
              </div>
              <form className="mt-8 sm:flex">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full px-4 py-3 rounded-md border border-transparent text-base font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 sm:px-8"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;