export interface Project {
  title: string;
  technologies: string[];
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}