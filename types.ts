
export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  recognition?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
  iconName: string;
}

export interface Metric {
  label: string;
  value: string;
  description: string;
}
