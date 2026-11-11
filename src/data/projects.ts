export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  sourceUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [];
