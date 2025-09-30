"use client"
import React, { useEffect } from 'react';
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
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative bg-sidebar rounded-xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background rounded-full shadow-lg hover:bg-border transition-colors duration-200"
          aria-label="Close certificate modal"
        >
          <X className="w-5 h-5 text-primary" />
        </button>

        {/* Modal content */}
        <div className="p-6">
          <div className="mb-4">
            <h2 id="modal-title" className="text-2xl font-bold text-primary mb-2">
              {certificate.title}
            </h2>
            <p className="text-secondary">
              <span className="font-semibold">{certificate.issuer}</span> • {certificate.dateIssued}
            </p>
          </div>

          {/* Certificate Image */}
          <div className="relative w-full h-[60vh] min-h-[400px] bg-border rounded-lg overflow-hidden">
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Certificate details */}
          <div className="mt-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="tags">{certificate.category}</span>
              <span className="text-secondary text-sm">Issued: {certificate.dateIssued}</span>
            </div>
            <p className="text-secondary leading-relaxed">
              {certificate.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;