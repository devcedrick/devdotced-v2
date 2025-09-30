"use client"
import React, { useState } from 'react';
import { CertificatesData, Certificate } from '../../types/certificate';
import CertificateCard from './cards/CertificateCard';
import CertificateModal from './modals/CertificateModal';

interface CertificatesGridProps {
  data: CertificatesData;
}

const CertificatesGrid: React.FC<CertificatesGridProps> = ({ data }) => {
  const { certificates } = data;
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCertificateClick = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto">
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onClick={() => handleCertificateClick(certificate)}
              className="flex flex-col"
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default CertificatesGrid;