"use client"
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section 
      id="contact" 
      data-section="contact"
      className="bg-background min-h-screen w-full text-primary p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-2 mb-8'>
          <h1 className='text-3xl font-bold'>CONTACT</h1>
          <p className='text-secondary'>
            Get in touch for collaborations, opportunities, or just to say hello
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <div className='flex items-center gap-2'>
              <span className='stats-values'>24/7</span>
              <span className='text-secondary text-sm'>Response Time</span>
            </div>
          </div>
        </div>
        
        {/* Coming Soon Content */}
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <div className="bg-sidebar rounded-xl border border-border p-12 max-w-2xl ">
            <div className="mb-6">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-accent" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-primary mb-4">
              Coming Soon!
            </h2>
            
            <p className="text-secondary text-sm leading-relaxed mb-6">
              I'm currently working on building an amazing contact experience. 
              This section will feature multiple ways to get in touch, including 
              a contact form, social links, and more interactive elements.
            </p>
            
            {/* Preview of future features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 ">
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Mail className="w-6 h-6 text-accent mb-2" />
                <span className="text-secondary text-sm">Email Form</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Phone className="w-6 h-6 text-accent mb-2" />
                <span className="text-secondary text-sm">Direct Call</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <MapPin className="w-6 h-6 text-accent mb-2" />
                <span className="text-secondary text-sm">Location</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-background rounded-lg">
                <Clock className="w-6 h-6 text-accent mb-2" />
                <span className="text-secondary text-sm">Availability</span>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;