import { Experience, SkillCategory, Metric } from './types';

export const PERSONAL_INFO = {
  name: "Nagendra Srinivas Mavuri",
  title: "Principal Software Architect",
  location: "Chennai, Tamil Nadu",
  phone: "+91 9840966041",
  email: "nagendrasrinivas08@gmail.com",
  linkedin: "https://www.linkedin.com/in/nagendrasrinivasm",
  github: "https://github.com/mnsrinivas89",
  summary: "Principal Software Architect and Engineering Leader with 15+ years of experience designing and delivering high-throughput eCommerce and telecommunications platforms at scale. Proven track record of driving platform modernization, AI/ML integration, and Agentic AI adoption. Expert in microservices architecture, distributed systems, cloud-native solutions, and leading cross-functional engineering teams. Currently spearheading Generative AI and Agentic Experience initiatives — including LLM-powered customer journeys using AG-UI, CopilotKit, and Agent Guardrails — to accelerate business outcomes and conversion velocity. Experienced in Agile/Scrum delivery, stakeholder alignment, and mentoring high-performing teams."
};

export const METRICS: Metric[] = [
  { label: "Performance Boost", value: "40%", description: "Core web app speed improvement" },
  { label: "Daily Users", value: "3M+", description: "Scale of systems managed" },
  { label: "Experience", value: "15+", description: "Years in software leadership" },
  { label: "Mentored", value: "10+", description: "Engineers managed and mentored" }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Architecture & Systems Design",
    iconName: "Layout",
    skills: ["Microservices Architecture", "Event-Driven Design (EDA)", "Domain-Driven Design (DDD)", "Distributed Systems", "REST APIs", "gRPC", "High-Availability Systems", "Scalability", "Performance Engineering", "System Design"]
  },
  {
    category: "Agentic AI & Generative AI",
    iconName: "Cpu",
    skills: ["AG-UI", "AG2UI", "CopilotKit", "Agent Guardrails", "LLM Integration", "Prompt Engineering", "Google Gemini", "ChatGPT (GPT-4)", "GitHub Copilot", "RAG", "AI Roadmap Strategy", "Agentic Workflow Design"]
  },
  {
    category: "Frontend & Frameworks",
    iconName: "Code",
    skills: ["React.js", "Next.js", "Micro Frontends (MFE)", "Single Page Applications (SPA)", "Node.js", "TypeScript", "JavaScript (ES6+)", "Spring Reactive (WebFlux)", "Java"]
  },
  {
    category: "Cloud & DevOps",
    iconName: "Cloud",
    skills: ["CI/CD Pipelines", "Cloud-Native Architecture", "API Gateway", "Containerization", "Performance Monitoring", "SEO Optimization", "Agile / Scrum", "OKRs"]
  }
];

export const PROFESSIONAL_EXPERIENCE: Experience[] = [
  {
    role: "Principal Engineer",
    company: "Verizon",
    location: "Chennai, Tamil Nadu",
    period: "September 2016 – Present",
    highlights: [
      "Architected the end-to-end Agentic customer purchase journey for device and plan selection, leveraging AG-UI, AG2UI, and CopilotKit protocols combined with Agent Guardrails to deliver safe, intent-driven, and compliant AI interactions across the eCommerce funnel.",
      "Established and drove the enterprise Generative AI roadmap, translating Proof-of-Concept results using Google Gemini and GPT-4 (ChatGPT) into production-ready strategies that improved conversion funnel velocity.",
      "Spearheaded the architectural migration of a legacy monolith to a cloud-native, multi-repository Single Page Application (SPA) using React.js and Next.js, scaling to serve 3M+ daily active users.",
      "Directed a high-impact performance optimization initiative, reducing average page load times by 40% (5s to 3s), directly improving Core Web Vitals and conversion rates.",
      "Led engineering delivery of a high-performance eCommerce application using Next.js and Spring Reactive Programming (WebFlux).",
      "Managed, mentored, and grew a high-performing team of 10+ engineers, structuring individual career development plans.",
      "Designed and implemented a Micro Frontend (MFE) architecture enabling independent deployment of UI modules."
    ]
  },
  {
    role: "IT Analyst",
    company: "Tata Consultancy Services (TCS)",
    location: "Chennai, Tamil Nadu",
    period: "February 2014 – September 2016",
    highlights: [
      "Provided expert technical scoping and resource estimation for RFP responses, directly contributing to securing major enterprise client contracts.",
      "Managed a team of 3 engineers, overseeing deliverables, project timelines, and professional development outcomes."
    ],
    recognition: "Awarded Certificate of Excellence for outstanding contribution to enterprise mobility projects."
  },
  {
    role: "Software Developer",
    company: "Virtusa",
    location: "Chennai, Tamil Nadu",
    period: "July 2010 – February 2014",
    highlights: [
      "Explored and implemented UX-focused frameworks with hands-on development in iOS and hybrid applications using PhoneGap (Apache Cordova)."
    ],
    recognition: "Awarded Best Team Player award for cross-functional collaboration."
  }
];
