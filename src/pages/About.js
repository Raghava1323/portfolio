// src/pages/About.js

import {
  GraduationIcon,
  CalendarIcon,
  LocationIcon,
  AwardIcon,
  LeafIcon,
  BuildingIcon,
  TeamIcon,
  LightbulbIcon,
  BookIcon,
  ResearchIcon,
} from "../components/CivilIcons";
import { portfolioData } from "../data/portfolioData";
import SkillBar from "../components/SkillBar";
import { ScrollReveal } from '../hooks/useScrollAnimation';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white relative overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] -top-48 -right-48"></div>
      <div className="glow-orb w-[400px] h-[400px] bottom-0 -left-32"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-black text-civil-700 mb-3">
              About Me
            </h1>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-xl text-civil-500 max-w-2xl mx-auto">
              Civil Engineer and Sustainable Construction Researcher
            </p>
          </div>
        </ScrollReveal>

        {/* Personal Summary Card */}
        <ScrollReveal delay={100}>
          <div className="card-glass p-10 mb-24">
            <div className="flex flex-col md:flex-row items-start">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="photo-3d w-36 h-36 md:w-44 md:h-44 rounded-2xl">
                  <img
                    src="/raghav.jpeg"
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-4xl font-black text-civil-700 mb-1">
                  {portfolioData.personal.name}
                </h2>
                <p className="text-xl text-civil-500 font-medium mb-3 flex items-center">
                  <AwardIcon className="h-5 w-5 mr-2" />
                  {portfolioData.personal.title}
                </p>
                <div className="flex items-center text-slate-500 mb-5">
                  <LocationIcon className="h-4 w-4 mr-2 text-civil-500" />
                  <span>Detroit, Michigan, USA</span>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {portfolioData.personal.summary} My expertise spans structural
                  engineering, environmental sustainability, and academic
                  excellence, with a strong commitment to mentoring the next
                  generation of civil engineers who will build our sustainable
                  future.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Education Section */}
        <div className="py-24 mb-24 bg-blueprint">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-4xl font-black text-civil-700 mb-3">
                Education
              </h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div
                  className="card-3d card-shine p-10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-5">
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-start mb-3">
                        <GraduationIcon className="h-6 w-6 text-civil-500 mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-2xl font-bold text-civil-700">
                            {edu.degree}
                          </h3>
                          <p className="text-civil-500 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      {edu.gpa && (
                        <div className="ml-9 mb-2">
                          <span className="text-sm font-medium text-slate-600">
                            GPA:{" "}
                          </span>
                          <span className="text-sm font-semibold text-civil-700 bg-slate-50 px-3 py-1 rounded-full">
                            {edu.gpa}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-start lg:items-end space-y-2">
                      <span className="text-sm text-slate-500 flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 text-civil-500" />
                        {edu.period}
                      </span>
                      {edu.status && (
                        <span className="text-xs font-medium text-civil-500 bg-blue-50 px-3 py-1 rounded-full">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="ml-9 mb-4">
                    <p className="text-sm font-semibold text-slate-600 mb-2">
                      Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="badge"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Thesis */}
                  {edu.thesis && (
                    <div className="ml-9 border-t border-slate-100 pt-4">
                      <div className="flex items-start">
                        <ResearchIcon className="h-4 w-4 text-civil-500 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-slate-600 mb-1">
                            Thesis:
                          </p>
                          <p className="text-lg text-slate-600 italic leading-relaxed">
                            "{edu.thesis}"
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="py-24 mb-24">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-4xl font-black text-civil-700 mb-3">
                Technical Skills
              </h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card-3d card-shine p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} delay={index * 150} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Specializations */}
        <div className="py-24 mb-24 bg-blueprint">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-4xl font-black text-civil-700 mb-3">
                Specializations
              </h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <LeafIcon className="h-8 w-8 text-civil-500" />,
                title: "Sustainable Construction",
                description:
                  "Pioneering research on eco-friendly materials, innovative waste utilization in concrete formulations, and environmental impact reduction strategies in modern construction practices.",
              },
              {
                icon: <BuildingIcon className="h-8 w-8 text-civil-500" />,
                title: "Structural Excellence",
                description:
                  "Advanced structural design using STAAD Pro and ETABS, high-performance concrete development, and innovative building systems that push the boundaries of engineering.",
              },
              {
                icon: <TeamIcon className="h-8 w-8 text-civil-500" />,
                title: "Academic Leadership",
                description:
                  "Comprehensive student mentorship, innovative curriculum development, rigorous accreditation processes, and fostering a vibrant research culture in academic institutions.",
              },
            ].map((spec, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="card-3d card-shine p-10 border-t-2 border-t-civil-500">
                  <div className="w-20 h-20 rounded-2xl icon-3d inline-flex p-4 mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-civil-700 mb-3">
                    {spec.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="dark-section rounded-2xl p-10 mb-24">
          <ScrollReveal>
            <div className="text-center mb-10 relative">
              <h2 className="text-4xl font-black text-white mb-3">
                Core Values
              </h2>
              <div className="w-16 h-0.5 bg-white/40 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="h-12 w-12 bg-gradient-to-br from-civil-500 to-civil-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LightbulbIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Innovation
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Constantly pioneering new approaches to improve construction
                  practices through sustainable materials research and advanced
                  engineering techniques.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="h-12 w-12 bg-gradient-to-br from-civil-500 to-civil-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Education
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Deeply committed to mentoring future engineers and sharing
                  knowledge to build the next generation of responsible,
                  innovative civil engineers.
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="h-12 w-12 bg-gradient-to-br from-civil-500 to-civil-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LeafIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Sustainability
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Dedicated to reducing environmental impact through groundbreaking
                  research on waste utilization and eco-friendly construction
                  materials.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Journey Stats */}
        <ScrollReveal>
          <div className="py-24 mb-24 bg-blueprint">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-black text-civil-700 mb-3">
                By the Numbers
              </h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card-glass p-10 text-center">
                <div className="w-20 h-20 rounded-2xl icon-3d inline-flex p-4 mb-3">
                  <LeafIcon className="h-7 w-7 text-civil-500" />
                </div>
                <div className="text-4xl font-black text-civil-700 mb-1">
                  10+
                </div>
                <div className="text-base font-semibold text-slate-600">Green Projects</div>
              </div>

              <div className="card-glass p-10 text-center">
                <div className="w-20 h-20 rounded-2xl icon-3d inline-flex p-4 mb-3">
                  <CalendarIcon className="h-7 w-7 text-civil-500" />
                </div>
                <div className="text-4xl font-black text-civil-700 mb-1">
                  8+
                </div>
                <div className="text-base font-semibold text-slate-600">Years of Experience</div>
              </div>

              <div className="card-glass p-10 text-center">
                <div className="w-20 h-20 rounded-2xl icon-3d inline-flex p-4 mb-3">
                  <BookIcon className="h-7 w-7 text-civil-500" />
                </div>
                <div className="text-4xl font-black text-civil-700 mb-1">
                  15+
                </div>
                <div className="text-base font-semibold text-slate-600">Research Papers</div>
              </div>

              <div className="card-glass p-10 text-center">
                <div className="w-20 h-20 rounded-2xl icon-3d inline-flex p-4 mb-3">
                  <TeamIcon className="h-7 w-7 text-civil-500" />
                </div>
                <div className="text-4xl font-black text-civil-700 mb-1">
                  200+
                </div>
                <div className="text-base font-semibold text-slate-600">Students Mentored</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default About;
