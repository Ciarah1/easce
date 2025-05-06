export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Process {
  number: number;
  title: string;
  description: string;
  timeline: string;
}

export interface TeamMember {
  image: string;
  name: string;
  role: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}
