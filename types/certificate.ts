export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  description: string;
  image: string;
  dateIssued: string;
  category: string;
  featured?: boolean;
}

export interface CertificatesData {
  certificates: Certificate[];
  totalCertificates: number;
  featuredCertificates: Certificate[];
  categories: string[];
}