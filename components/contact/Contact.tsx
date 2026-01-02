"use client"
import React from 'react';
import ContactInfo from './info/ContactInfo';
import ContactForm from './form/ContactForm';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      data-section="contact"
      className="bg-background min-h-screen w-full text-primary p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-2 mb-12'>
          <h1 className='text-3xl font-bold'>CONTACT</h1>
          <p className='text-secondary'>
            Get in touch for collaborations, opportunities, or just to say hello
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Info */}
          <div className="order-2 lg:order-1">
            <ContactInfo />
          </div>

          {/* Right Column: Contact Form */}
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;