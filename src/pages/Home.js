// src/pages/Home.js

import { Link } from 'react-router-dom';
import {
  BuildingIcon, StructureIcon, TeamIcon, DocumentIcon,
  AwardIcon, ArrowRightIcon, BridgeIcon,
  CementMixerIcon, CraneTowerIcon, HelmetIcon,
  ConcreteBlockIcon,
  ResearchIcon, HardHatIcon,
} from '../components/CivilIcons';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal, AnimatedCounter } from '../hooks/useScrollAnimation';
import { WaveDivider, CurveDivider } from '../components/SectionDividers';

// === 3D ISOMETRIC CONSTRUCTION SITE ===
const ConstructionSite = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="220" cy="370" rx="200" ry="25" fill="url(#gs)" />

    {/* Main building */}
    <path d="M140 300 L140 110 L220 70 L220 260Z" fill="#1e40af" opacity="0.85" />
    <path d="M220 260 L220 70 L300 110 L300 300Z" fill="#2563eb" opacity="0.9" />
    <path d="M140 110 L220 70 L300 110 L220 150Z" fill="#60a5fa" opacity="0.8" />
    {[130,175,220].map((y,i) => <g key={`w${i}`}><rect x="155" y={y} width="16" height="20" rx="2" fill="#bfdbfe" opacity="0.65" transform="skewY(-26.5)"/><rect x="178" y={y-10} width="16" height="20" rx="2" fill="#bfdbfe" opacity="0.65" transform="skewY(-26.5)"/><rect x="235" y={y} width="16" height="20" rx="2" fill="#93c5fd" opacity="0.55" transform="skewY(26.5)"/><rect x="260" y={y+12} width="16" height="20" rx="2" fill="#93c5fd" opacity="0.55" transform="skewY(26.5)"/></g>)}

    {/* Crane */}
    <line x1="220" y1="70" x2="220" y2="18" stroke="#1e40af" strokeWidth="3.5"/>
    <line x1="140" y1="18" x2="320" y2="18" stroke="#1e40af" strokeWidth="3"/>
    <rect x="140" y="18" width="16" height="10" rx="2" fill="#1e40af" opacity="0.8"/>
    <line x1="310" y1="18" x2="310" y2="55" stroke="#1e40af" strokeWidth="1.5"/>
    <path d="M305 55 Q310 65 315 55" stroke="#1e40af" strokeWidth="2" fill="none"/>
    <rect x="303" y="67" width="14" height="10" rx="1" fill="#2563eb" opacity="0.6"/>

    {/* Small building */}
    <path d="M40 300 L40 200 L90 175 L90 275Z" fill="#1e40af" opacity="0.65"/>
    <path d="M90 275 L90 175 L125 192 L125 292Z" fill="#2563eb" opacity="0.7"/>
    <path d="M40 200 L90 175 L125 192 L75 217Z" fill="#60a5fa" opacity="0.6"/>

    {/* Tower */}
    <path d="M330 300 L330 140 L365 125 L365 285Z" fill="#1e40af" opacity="0.7"/>
    <path d="M365 285 L365 125 L395 140 L395 300Z" fill="#2563eb" opacity="0.75"/>
    <path d="M330 140 L365 125 L395 140 L360 155Z" fill="#60a5fa" opacity="0.65"/>
    {[155,185,215,245].map((y,i) => <rect key={`t${i}`} x="340" y={y} width="9" height="12" rx="1" fill="#bfdbfe" opacity="0.45" transform="skewY(-26.5)"/>)}

    {/* Cement Mixer */}
    <g transform="translate(30,10)">
      <ellipse cx="80" cy="310" rx="22" ry="15" fill="#2563eb" opacity="0.75"/>
      <ellipse cx="80" cy="310" rx="17" ry="11" fill="#60a5fa" opacity="0.5"/>
      <path d="M98 305 L115 296 L118 300 L101 309Z" fill="#1e40af" opacity="0.7"/>
      <circle cx="118" cy="304" r="2" fill="#93c5fd" opacity="0.4"/>
      <line x1="60" y1="325" x2="100" y2="325" stroke="#1e40af" strokeWidth="2"/>
      <line x1="68" y1="325" x2="68" y2="340" stroke="#1e40af" strokeWidth="2"/>
      <line x1="92" y1="325" x2="92" y2="340" stroke="#1e40af" strokeWidth="2"/>
      <circle cx="68" cy="342" r="5" fill="#1e40af" opacity="0.65"/>
      <circle cx="92" cy="342" r="5" fill="#1e40af" opacity="0.65"/>
    </g>

    {/* Concrete Truck */}
    <g transform="translate(10,15)">
      <rect x="310" y="315" width="50" height="22" rx="3" fill="#1e40af" opacity="0.6"/>
      <rect x="360" y="310" width="24" height="27" rx="4" fill="#2563eb" opacity="0.7"/>
      <rect x="365" y="314" width="12" height="9" rx="2" fill="#bfdbfe" opacity="0.5"/>
      <ellipse cx="335" cy="310" rx="26" ry="16" fill="#2563eb" opacity="0.75"/>
      <ellipse cx="335" cy="310" rx="20" ry="12" fill="#60a5fa" opacity="0.4"/>
      <path d="M310 308 L296 300 L298 296 L312 304Z" fill="#1e40af" opacity="0.55"/>
      <circle cx="325" cy="340" r="6" fill="#1e40af" opacity="0.7"/>
      <circle cx="350" cy="340" r="6" fill="#1e40af" opacity="0.7"/>
      <circle cx="372" cy="340" r="6" fill="#1e40af" opacity="0.7"/>
    </g>

    {/* Wheelbarrow + Cement bags */}
    <path d="M200 330 L220 318 L232 324 L216 336Z" fill="#2563eb" opacity="0.55"/>
    <circle cx="234" cy="340" r="5" fill="#1e40af" opacity="0.5"/>
    <line x1="200" y1="330" x2="188" y2="340" stroke="#1e40af" strokeWidth="1.5"/>
    <line x1="216" y1="336" x2="188" y2="340" stroke="#1e40af" strokeWidth="1.5"/>
    <rect x="255" y="322" width="16" height="12" rx="2" fill="#1e40af" opacity="0.45"/>
    <rect x="260" y="314" width="16" height="12" rx="2" fill="#2563eb" opacity="0.45"/>
    <rect x="252" y="318" width="16" height="12" rx="2" fill="#60a5fa" opacity="0.35"/>

    <line x1="20" y1="300" x2="420" y2="300" stroke="#2563eb" strokeWidth="1" opacity="0.15"/>
    <defs><radialGradient id="gs"><stop offset="0%" stopColor="#1e40af" stopOpacity="0.1"/><stop offset="100%" stopColor="#1e40af" stopOpacity="0"/></radialGradient></defs>
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ========== HERO ========== */}
      <section className="pt-36 pb-28 bg-blueprint relative overflow-hidden">
        <div className="glow-orb w-[600px] h-[600px] -top-64 -right-64"></div>
        <div className="glow-orb w-[400px] h-[400px] -bottom-32 -left-32"></div>

        {/* Floating construction icons - parallax */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 left-[8%] float-parallax-1 opacity-[0.06]">
            <CraneTowerIcon className="h-20 w-20 text-civil-500" />
          </div>
          <div className="absolute top-48 right-[12%] float-parallax-2 opacity-[0.05]">
            <CementMixerIcon className="h-16 w-16 text-civil-500" />
          </div>
          <div className="absolute bottom-32 left-[15%] float-parallax-2 opacity-[0.06]">
            <HelmetIcon className="h-14 w-14 text-civil-500" />
          </div>
          <div className="absolute bottom-48 right-[20%] float-parallax-1 opacity-[0.05]">
            <ConcreteBlockIcon className="h-12 w-12 text-civil-500" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left - Text */}
            <div className="flex-1 text-center lg:text-left">
              <ScrollReveal>
                <div className="mb-10 flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="photo-3d w-44 h-44 md:w-52 md:h-52 rounded-2xl">
                      <img src="/raghav.jpeg" alt={portfolioData.personal.name} className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="absolute -top-2 -left-2 w-8 h-8 border-t-3 border-l-3 border-civil-500 rounded-tl-lg opacity-60"></div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-3 border-r-3 border-civil-500 rounded-br-lg opacity-60"></div>
                    <div className="absolute -inset-3 bg-civil-500/15 rounded-3xl -z-10 group-hover:bg-civil-500/20 transition-all duration-500"></div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-civil-700 mb-5 tracking-tight leading-[1.05]">
                  {portfolioData.personal.name}
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-2xl md:text-3xl font-bold mb-8">
                  <span className="text-gradient">{portfolioData.personal.title}</span>
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  {portfolioData.personal.summary}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                  <Link to="/projects" className="btn-primary">
                    View Projects <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="btn-secondary">Get in Touch</Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - 3D Construction Site */}
            <ScrollReveal direction="right" className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <ConstructionSite className="w-[360px] md:w-[460px] h-auto animate-float-slow drop-shadow-2xl" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* ========== STATS - Animated Counters ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: BuildingIcon, value: '8', suffix: '+', label: 'Years Experience' },
              { icon: TeamIcon, value: '100', suffix: '+', label: 'Engineers Mentored' },
              { icon: DocumentIcon, value: String(portfolioData.publications.length), suffix: '', label: 'Research Papers' },
              { icon: AwardIcon, value: '25', suffix: '+', label: 'Committee Roles' },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="stat-3d card-shine p-8 text-center">
                  <div className="flex justify-center mb-5">
                    <div className="icon-3d p-4 rounded-2xl">
                      <stat.icon className="h-9 w-9 text-civil-500" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-civil-600 mb-2 counter-glow">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 font-semibold text-base">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider color="#ffffff" flip />

      {/* ========== HOW I WORK - Process Steps ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-civil-700 mb-4">How I Work</h2>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">From research to real-world impact, a systematic approach to civil engineering excellence</p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              { step: '01', icon: ResearchIcon, title: 'Research & Analysis', desc: 'Deep literature review and gap identification in sustainable construction materials. Analyzing existing methods to find innovative improvements.' },
              { step: '02', icon: CementMixerIcon, title: 'Material Testing & Mix Design', desc: 'Experimental investigation with granite waste, gold mine waste, GGBS, and steel fibers in concrete. Optimizing mix proportions for performance.' },
              { step: '03', icon: StructureIcon, title: 'Structural Design & Modeling', desc: 'Advanced analysis using STAAD Pro and ETABS. Multi-storey building design, load analysis, and seismic performance evaluation.' },
              { step: '04', icon: HardHatIcon, title: 'Site Execution & Quality Control', desc: 'On-site supervision with precision standards. Floor finishing within ±5mm tolerance, sustaining 2 T/m² live loads.' },
              { step: '05', icon: DocumentIcon, title: 'Publication & Knowledge Transfer', desc: 'Publishing findings in peer-reviewed journals. Mentoring 100+ students and organizing technical workshops for industry advancement.' },
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="process-step">
                  <div className="process-dot">{item.step}</div>
                  <div className="card-3d card-shine p-8">
                    <div className="flex items-start gap-5">
                      <div className="icon-3d p-3 rounded-xl shrink-0 hidden sm:flex">
                        <item.icon className="h-7 w-7 text-civil-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-civil-700 mb-2">{item.title}</h3>
                        <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SKILLS INFINITE CAROUSEL ========== */}
      <section className="py-16 bg-slate-50 overflow-hidden">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-civil-700 mb-4">Tools & Skills</h2>
            <div className="section-divider mx-auto mb-5"></div>
          </div>
        </ScrollReveal>

        {/* Infinite carousel - right to left */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

          <div className="flex animate-marquee">
            {[...Array(3)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-6 px-3 shrink-0">
                {[
                  'Concrete Mix Design',
                  'Structural Analysis',
                  'Surveying',
                  'Total Station',
                  'AutoCAD',
                  'Civil 3D',
                  'Microsoft Office',
                ].map((skill, idx) => (
                  <div
                    key={`${setIdx}-${idx}`}
                    className="shrink-0 card-3d card-shine px-8 py-5 flex items-center gap-3 whitespace-nowrap"
                  >
                    <div className="icon-3d w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <StructureIcon className="h-5 w-5 text-civil-500" />
                    </div>
                    <span className="text-lg font-bold text-civil-700">{skill}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CurveDivider color="#ffffff" flip />

      {/* ========== FEATURED PUBLICATIONS ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-civil-700 mb-4">Featured Research</h2>
              <div className="section-divider mx-auto mb-5"></div>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">Published in international peer-reviewed journals</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.publications.slice(0, 4).map((pub, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="card-3d card-shine p-8 h-full">
                  <div className="flex items-start gap-4">
                    <div className="icon-gradient w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                      <DocumentIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-civil-700 mb-3 leading-snug">{pub.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="badge text-sm">{pub.journal}</span>
                        <span className="badge text-sm">{pub.year}</span>
                      </div>
                      {pub.award && (
                        <div className="flex items-center gap-2 mt-3 text-amber-600 font-bold text-sm">
                          <AwardIcon className="h-4 w-4" /> {pub.award}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="text-center mt-10">
              <Link to="/research" className="inline-flex items-center text-civil-500 font-bold text-lg hover:text-civil-600 transition-colors">
                View All Publications <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <WaveDivider color="#ffffff" />

      {/* ========== DOWNLOAD RESUME ========== */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="card-glass p-12 text-center relative overflow-hidden">
              {/* Decorative background */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-civil-500/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-civil-500/5 rounded-full blur-2xl"></div>

              <div className="relative">
                <div className="icon-gradient w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DocumentIcon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-civil-700 mb-4">Download My Resume</h2>
                <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto">
                  Get a detailed overview of my qualifications, experience, publications, and technical skills.
                </p>
                <a
                  href="/Raghavendra_Ranganatha_Resume - 2026 _1.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-3"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7,10 12,15 17,10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="dark-section py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="inline-flex p-5 bg-white/10 backdrop-blur-md rounded-2xl mb-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <BridgeIcon className="h-12 w-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl text-blue-200 mb-12 max-w-2xl mx-auto">
              Partner with an experienced civil engineer for your next infrastructure or research project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-white text-civil-700 rounded-xl font-bold text-lg shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2">
                Start a Conversation
              </Link>
              <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg backdrop-blur transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                View Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Home;
