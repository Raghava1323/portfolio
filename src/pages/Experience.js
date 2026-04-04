// src/pages/Experience.js

import { CalendarIcon, LocationIcon, CheckIcon, TeamIcon, AwardIcon, BuildingIcon, ShieldIcon, HardHatIcon, StructureIcon } from '../components/CivilIcons';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from '../hooks/useScrollAnimation';

const Experience = () => {
  return (
    <div className="pt-24 pb-16 bg-blueprint relative overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] -top-32 -right-32"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-black text-civil-700 mb-3">
              Professional Experience
            </h1>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Over 8 years of dedicated service in civil engineering academia and industry,
              combining teaching excellence with practical construction expertise and
              innovative sustainable materials research.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[5px] top-0 bottom-0 w-0.5 bg-civil-200"></div>

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-civil-500 rounded-full shadow-[0_4px_12px_rgba(37,99,235,0.2)]"></div>

                {/* Card */}
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="card-3d card-shine bg-white rounded-lg p-8">
                    {/* Period Badge */}
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center bg-blue-50 text-civil-700 text-base font-semibold px-3 py-1 rounded-full">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Position and Company */}
                    <h3 className="text-2xl font-bold text-civil-700 mb-1">
                      {exp.position}
                    </h3>
                    <div className="flex items-center text-lg font-bold text-civil-500 mb-4">
                      <LocationIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                      {exp.company}
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckIcon className="h-4 w-4 text-civil-500 mt-1 flex-shrink-0" />
                          <span className="text-base text-slate-600 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stats for first entry */}
                    {index === 0 && (
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="stat-3d text-center">
                            <div className="text-3xl font-black text-civil-700">11</div>
                            <div className="text-xs text-slate-600">Courses</div>
                          </div>
                          <div className="stat-3d text-center">
                            <div className="text-3xl font-black text-civil-700">20</div>
                            <div className="text-xs text-slate-600">Engineers</div>
                          </div>
                          <div className="stat-3d text-center">
                            <div className="text-3xl font-black text-civil-700">25</div>
                            <div className="text-xs text-slate-600">Committees</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Stats for third entry */}
                    {index === 2 && (
                      <div className="mt-6 pt-5 border-t border-slate-100">
                        <div className="grid grid-cols-2 gap-4 max-w-xs">
                          <div className="stat-3d text-center">
                            <div className="text-3xl font-black text-civil-700">60</div>
                            <div className="text-xs text-slate-600">Graduated</div>
                          </div>
                          <div className="stat-3d text-center">
                            <div className="text-3xl font-black text-civil-700">100%</div>
                            <div className="text-xs text-slate-600">Success</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>

        {/* Career Impact Dashboard */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-civil-700 mb-2">Career Impact Dashboard</h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card-3d card-shine bg-white rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 p-3">
                    <TeamIcon className="h-7 w-7 text-civil-500" />
                  </div>
                  <div className="text-4xl font-black text-civil-700">110+</div>
                  <div className="text-base font-semibold text-slate-600 mt-1">Engineers Mentored</div>
                </div>

                <div className="text-center">
                  <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 p-3">
                    <BuildingIcon className="h-7 w-7 text-civil-500" />
                  </div>
                  <div className="text-4xl font-black text-civil-700">28</div>
                  <div className="text-base font-semibold text-slate-600 mt-1">Courses Delivered</div>
                </div>

                <div className="text-center">
                  <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 p-3">
                    <ShieldIcon className="h-7 w-7 text-civil-500" />
                  </div>
                  <div className="text-4xl font-black text-civil-700">60+</div>
                  <div className="text-base font-semibold text-slate-600 mt-1">Committees</div>
                </div>

                <div className="text-center">
                  <div className="icon-3d w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 p-3">
                    <AwardIcon className="h-7 w-7 text-civil-500" />
                  </div>
                  <div className="text-4xl font-black text-civil-700">100%</div>
                  <div className="text-base font-semibold text-slate-600 mt-1">Success Rate</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Summary */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-civil-700 mb-2">Skills Summary</h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>

          <div className="dark-section rounded-lg p-8 text-white">
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Technical */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-civil-500 to-civil-700 rounded-full w-8 h-8 flex items-center justify-center mr-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
                      <StructureIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Technical</h3>
                  </div>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      STAAD Pro and ETABS
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Sustainable Materials Innovation
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Structural Design Excellence
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Construction Site Management
                    </li>
                  </ul>
                </div>

                {/* Leadership */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-civil-500 to-civil-700 rounded-full w-8 h-8 flex items-center justify-center mr-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
                      <TeamIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Leadership</h3>
                  </div>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Construction Team Leadership
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Engineer Mentorship Programs
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Quality Assurance Management
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Cross-Project Coordination
                    </li>
                  </ul>
                </div>

                {/* Research */}
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-civil-500 to-civil-700 rounded-full w-8 h-8 flex items-center justify-center mr-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)]">
                      <HardHatIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Research</h3>
                  </div>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Construction Research Papers
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Experimental Design and Testing
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Green Construction Solutions
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1 block w-1.5 h-1.5 bg-blue-200 rounded-full flex-shrink-0"></span>
                      Industry-Academic Bridge
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
