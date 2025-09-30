import { Certificate, CertificatesData } from '../types/certificate';

const certificatesData: Certificate[] = [
  {
    id: 'intro-to-python',
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    description: 'Fundamental Python programming concepts including variables, data types, control structures, and functions.',
    image: '/certificates/intro-to-python.png',
    dateIssued: '2024',
    category: 'Programming',
    featured: true
  },
  {
    id: 'intermediate-python',
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    description: 'Advanced Python concepts including list comprehensions, lambda functions, and object-oriented programming.',
    image: '/certificates/intermediate-python.png',
    dateIssued: '2024',
    category: 'Programming',
    featured: true
  },
  {
    id: 'intro-to-sql',
    title: 'Introduction to SQL',
    issuer: 'DataCamp',
    description: 'Database fundamentals and basic SQL queries for data retrieval and manipulation.',
    image: '/certificates/intro-to-sql.png',
    dateIssued: '2024',
    category: 'Database',
    featured: true
  },
  {
    id: 'intermediate-sql',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    description: 'Advanced SQL techniques including joins, subqueries, and database optimization.',
    image: '/certificates/intermediate-sql.png',
    dateIssued: '2024',
    category: 'Database',
    featured: true
  },
  {
    id: 'intro-to-data-science',
    title: 'Introduction to Data Science',
    issuer: 'DataCamp',
    description: 'Foundational concepts in data science including statistics, data analysis, and visualization.',
    image: '/certificates/intro-to-data-science.png',
    dateIssued: '2024',
    category: 'Data Science',
    featured: true
  },
  {
    id: 'data-manipulation-with-pandas',
    title: 'Data Manipulation with Pandas',
    issuer: 'DataCamp',
    description: 'Master data manipulation and analysis using Python\'s powerful Pandas library.',
    image: '/certificates/data-manipulation-with-pandas.png',
    dateIssued: '2024',
    category: 'Data Science',
    featured: true
  },
  {
    id: 'intro-to-cybersec',
    title: 'Introduction to Cybersecurity',
    issuer: 'DataCamp',
    description: 'Fundamentals of cybersecurity including threat assessment, security protocols, and best practices.',
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