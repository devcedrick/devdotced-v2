"use client"

import React from 'react';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
      } else {
        toast.success('Message sent successfully! Please check your email regularly for the response.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
      

    } catch (error) {
      
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-xl bg-sidebar border border-border shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-primary">
            Name
          </label>
          <input
            value={formData.name}
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            value={formData.email}
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm font-medium text-primary">
          Subject
        </label>
        <input
          value={formData.subject}
          type="text"
          id="subject"
          name="subject"
          placeholder="Project Collaboration"
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          value={formData.message}
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me more about your intent..."
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-primary placeholder:text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]"
      >
        <Send className="w-4 h-4" />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default ContactForm;
