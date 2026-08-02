export interface CaseStudy {
  _id: string;
  title: string;
  description?: string;
  longDescription?: string;
  tag?: string;
  tech: string[];
  githubUrl?: string;
  demoUrl?: string;
  color?: string;
  borderAccent?: string;
}
