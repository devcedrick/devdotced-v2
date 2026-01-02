export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  dateIssued: string;
  category: string;
  description?: string;
  featured?: boolean;
}

export interface CertificatesData {
  certificates: Certificate[];
  totalCertificates: number;
  featuredCertificates: Certificate[];
  categories: string[];
}