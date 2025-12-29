
import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Award,
  Cpu,
  Layout,
  Code,
  CheckCircle2,
  Calendar,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, METRICS, PROFESSIONAL_EXPERIENCE } from './constants';


const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Header / Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter gradient-text">Nagendra Srinivas Mavuri.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-lg shadow-blue-900/20"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Available for Leadership Roles
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Architecting <span className="gradient-text">High-Scale</span> <br />
            Digital Experiences
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
            {PERSONAL_INFO.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-lg">
              <Linkedin className="w-4 h-4 text-blue-400" />
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            </div>
            <a
              href="/Resume_Latest.pdf"
              download="Nagendra_Srinivas_Resume.pdf"
              className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 border border-blue-500 px-4 py-2 rounded-lg transition-all shadow-lg shadow-blue-900/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-center group hover:border-blue-500/50 transition-all">
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">{metric.label}</div>
                <div className="text-xs text-slate-500">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
              <p className="text-slate-400">Leveraging cutting-edge technologies and architectural patterns to build resilient, high-performance systems.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.iconName === 'Layout' ? Layout : cat.iconName === 'Cpu' ? Cpu : Code;
              return (
                <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-slate-800/50 transition-all">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{cat.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800 hover:border-blue-500/40 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-16 text-center">Professional Journey</h2>

          <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-800 before:-translate-x-1/2">
            {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 -translate-x-1/2 z-10 hidden md:block"></div>

                <div className="w-full md:w-1/2">
                  <div className="glass-card p-8 rounded-2xl group hover:border-blue-500/50 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                        <div className="text-blue-400 font-medium">{exp.company}</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 font-medium uppercase tracking-wider bg-slate-900 px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.recognition && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                        <Award className="w-3.5 h-3.5" />
                        {exp.recognition}
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-950/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 -z-10"></div>
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Exceptional</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Currently open to new architectural challenges and technology leadership roles.
              Let's discuss how I can help scale your platforms.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-3 p-4 bg-slate-900 hover:bg-slate-800 rounded-2xl border border-slate-800 transition-all text-slate-200"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                {PERSONAL_INFO.email}
              </a>
              <div
                className="flex items-center justify-center gap-3 p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-200"
              >
                <Phone className="w-5 h-5 text-blue-400" />
                {PERSONAL_INFO.phone}
              </div>
            </div>

            <div className="flex justify-center gap-6">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600/10 text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600/10 text-blue-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Architecture Portfolio</a>
          </div>
        </div>
      </footer>


    </div>
  );
};

export default App;
