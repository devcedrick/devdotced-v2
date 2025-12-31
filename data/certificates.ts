import { Certificate, CertificatesData } from '../types/certificate';

const certificatesData: Certificate[] = [
  {
    id: 'intro-to-python',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    image: '/certificates/intro-to-python.png',
    dateIssued: '2024',
    category: 'Programming',
    featured: true
  },
  {
    id: 'intermediate-python',
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    image: '/certificates/intermediate-python.png',
    dateIssued: '2024',
    category: 'Programming',
    featured: true
  },
  {
    id: 'intro-to-sql',
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    image: '/certificates/intro-to-sql.png',
    dateIssued: '2024',
    category: 'Database',
    featured: true
  },
  {
    id: 'intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    image: '/certificates/intermediate-sql.png',
    dateIssued: '2024',
    category: 'Database',
    featured: true
  },
  {
    id: 'intro-to-data-science',
    title: 'Introduction to Data Science',
    issuer: 'DataCamp',
    image: '/certificates/intro-to-data-science.png',
    dateIssued: '2024',
    category: 'Data Science',
    featured: true
  },
  {
    id: 'data-manipulation-with-pandas',
    title: 'Data Manipulation with Pandas',
    issuer: 'DataCamp',
    image: '/certificates/data-manipulation-with-pandas.png',
    dateIssued: '2024',
    category: 'Data Science',
    featured: true
  },
  {
    id: 'intro-to-cybersec',
    title: 'Introduction to Cybersecurity',
    issuer: 'DataCamp',
    image: '/certificates/intro-to-cybersec.png',
    dateIssued: '2024',
    category: 'Security',
    featured: true
  }
];

export const useCertificatesData = (): CertificatesData => {
  const certificates = certificatesData;
  const featuredCertificates = certificates.filter(cert => cert.featured);
  const categories = [...new Set(certificates.map(cert => cert.category))];
  
  return {
    certificates,
    totalCertificates: certificates.length,
    featuredCertificates,
    categories
  };
};