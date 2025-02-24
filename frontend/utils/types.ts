export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  features: string[];
}

export interface ServiceFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}