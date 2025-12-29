
import { Experience, SkillCategory, Metric } from './types';

export const PERSONAL_INFO = {
  name: "Nagendra Srinivas Mavuri",
  title: "Principal Software Architect",
  location: "Chennai, Tamil Nadu",
  phone: "9840966041",
  email: "nagendrasrinivas08@gmail.com",
  linkedin: "https://www.linkedin.com/in/nagendrasrinivasm",
  github: "https://github.com/mnsrinivas89",
  summary: "Visionary Principal Software Architect and Technology Leader with 15+ years of progressive experience specializing in high-volume eCommerce and telecommunications platforms. Focused on aligning technology roadmaps with core business objectives and scaling revenue-generating platforms. Strategic expert in modernizing complex systems and leveraging Generative AI Tools."
};

export const METRICS: Metric[] = [
  { label: "Performance Boost", value: "40%", description: "Core web app speed improvement" },
  { label: "Daily Users", value: "3M+", description: "Scale of systems managed at Verizon" },
  { label: "Experience", value: "15+", description: "Years in software leadership" },
  { label: "Page Load", value: "3s", description: "Reduced from 5 seconds average" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Architectural Strategy",
    iconName: "Layout",
    skills: ["Microservices", "Event-Driven Design (DDD)", "System Design", "REST/gRPC", "High-Availability", "Performance Tuning"]
  },
  {
    category: "Generative AI & LLMs",
    iconName: "Cpu",
    skills: ["GitHub Copilot", "ChatGPT", "Google Gemini", "Architectural Analysis", "Complex Prototyping"]
  },
  {
    category: "Languages & Frameworks",
    iconName: "Code",
    skills: ["JavaScript", "Python", "Java", "React", "Next.js", "Node.js", "Spring Reactive Programming", "Micro Frontends (MFE)"]
  }
];

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    role: "Principal Engineer",
    company: "Verizon",
    location: "Chennai, Tamil Nadu",
    period: "September 2016 – Present",
    highlights: [
      "Spearheaded the architectural design of a major platform modernization, migrating a monolith to a multi-repository SPA serving 3 million daily users.",
      "Established and drove the Generative AI roadmap using Gemini and ChatGPT for improving conversion funnel velocity.",
      "Directed a critical performance engineering initiative, reducing page load times from 5s to 3s.",
      "Managed and mentored a high-performing team of 10+ engineers."
    ]
  },
  {
    role: "IT Analyst",
    company: "Tata Consultancy Services (TCS)",
    location: "Chennai, Tamil Nadu",
    period: "February 2014 – September 2016",
    highlights: [
      "Secured major client contracts through accurate RFP technical scoping and resource estimation.",
      "Managed a team of 3 engineers, overseeing successful project outcomes.",
      "Received the 'Certificate of Excellence' for outstanding contribution towards mobility projects."
    ],
    recognition: "Certificate of Excellence"
  },
  {
    role: "Software Developer",
    company: "Virtusa",
    location: "Chennai, Tamil Nadu",
    period: "July 2010 – February 2014",
    highlights: [
      "Explored and applied multiple UX-related libraries and frameworks for iOS and hybrid (PhoneGap) development.",
      "Received the 'Best Team Player' award."
    ],
    recognition: "Best Team Player"
  }
];
