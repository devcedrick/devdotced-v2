import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { Certificate } from '../../../types/certificate';
import Image from 'next/image';

interface CertificateCardProps {
  certificate: Certificate;
  onClick: () => void;
  className?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ 
  certificate, 
  onClick, 
  className = '' 
}) => {
  const { title, issuer, description, image, dateIssued, category } = certificate;

  return (
    <div 
      className={`bg-sidebar rounded-xl shadow-lg border border-border hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-pointer ${className} h-full`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${title} certificate`}
    >
      {/* Certificate Preview Image */}
      <div className="relative h-48 w-full overflow-hidden bg-border">
        <Image
          src={image}
          alt={`${title} certificate preview`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300" />
        
        {/* Certificate icon overlay */}
        <div className="absolute top-3 right-3 p-2 bg-sidebar rounded-lg shadow-md">
          <Award className="w-4 h-4 text-accent" />
        </div>
      </div>
      
      {/* Certificate Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-primary mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-accent font-semibold text-sm">
            {issuer}
          </p>
        </div>
        
        <p className="text-secondary text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Certificate metadata */}
        <div className="flex justify-between items-center">
          <span className="tags">
            {category}
          </span>
          
          <div className="flex items-center gap-1 text-secondary text-xs">
            <Calendar className="w-3 h-3" />
            <span>{dateIssued}</span>
          </div>
        </div>
        
        {/* Click indicator */}
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-accent text-xs font-medium text-center">
            Click to view certificate
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;