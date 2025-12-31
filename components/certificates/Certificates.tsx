"use client"
import React from 'react';
import { useCertificatesData } from '../../data/certificates';
import CertificatesGrid from './CertificatesGrid';

const Certificates: React.FC = () => {
  const certificatesData = useCertificatesData();

  return (
    <section 
      id="certificates" 
      data-section="certificates"
      className="bg-background min-h-screen w-full text-primary p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className='flex flex-col gap-2 mb-8'>
          <h1 className='text-3xl font-bold'>CERTIFICATES</h1>
          <p className='text-secondary'>
            Professional certifications and achievements in technology and data science
          </p>
          <div className='flex items-center gap-4 mt-2'>
            <div className='flex items-center gap-2'>
              <span className='stats-values'>{certificatesData.totalCertificates}</span>
              <span className='text-secondary text-sm'>Total Certificates</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='stats-values'>{certificatesData.featuredCertificates.length}</span>
              <span className='text-secondary text-sm'>Featured</span>
            </div>
          </div>
        </div>
        
        <CertificatesGrid data={certificatesData} />
      </div>
    </section>
  );
}

export default Certificates;