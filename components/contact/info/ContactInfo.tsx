import React from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-bold text-primary">Contact Information</h3>
        <p className="text-secondary leading-relaxed">
          Feel free to reach out for collaborations, job opportunities, or just a friendly hello. 
          I'm always open to discussing new projects and creative ideas.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent/10 text-accent">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-primary">Email</h4>
            <a href="mailto:kencedrickjimeno@gmail.com" className="text-secondary hover:text-accent transition-colors">
              kencedrickjimeno@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent/10 text-accent">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-primary">Location</h4>
            <p className="text-secondary">
              Philippines
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-primary">Follow Me</h4>
        <div className="flex gap-3">
          <a 
            href="https://github.com/devcedrick" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-sidebar border border-border hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/devcedrick/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-sidebar border border-border hover:border-accent/50 hover:bg-accent/5 hover:text-accent transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
