"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Certificate } from '../../../types/certificate';

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  isOpen,
  onClose
}) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative bg-sidebar rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-md rounded-full shadow-lg hover:bg-border transition-colors duration-200 border border-border group"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 md:p-6 custom-scrollbar">
          <div className="mb-4 pr-12">
            <h2 id="modal-title" className="text-xl md:text-2xl font-bold text-primary mb-1">
              {certificate.title}
            </h2>
            <p className="text-secondary text-base md:text-lg">
              <span className="font-semibold text-accent">{certificate.issuer}</span> • {certificate.dateIssued}
            </p>
          </div>

          {/* Certificate Image */}
          <div className="relative w-full bg-black/50 rounded-lg overflow-hidden shadow-inner border border-border/50 mb-4">
            <div className="relative h-[40vh] md:h-[50vh] w-full">
              <Image
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                className="w-full h-full object-contain"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Certificate details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                {certificate.category}
              </span>
            </div>
            <p className="text-secondary leading-relaxed text-base md:text-lg">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;