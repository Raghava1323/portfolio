// src/pages/Experience.js

import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle, 
  Users, 
  Award,
  HardHat,
  Building2,
  Wrench,
  Layers,
  Mountain,
  Shield,
  Truck,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='construction-grid' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='0.5'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' fill='%2310B981'/%3E%3Ccircle cx='22.5' cy='22.5' r='1' fill='%2310B981'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23construction-grid)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>
          <HardHat className="h-12 w-12 text-blue-200 opacity-20" />
        </div>
        <div className="absolute top-64 right-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>
          <Building2 className="h-10 w-10 text-green-200 opacity-20" />
        </div>
        <div className="absolute bottom-64 left-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
          <Wrench className="h-8 w-8 text-blue-300 opacity-20" />
        </div>
        <div className="absolute bottom-32 right-10 animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}>
          <Truck className="h-14 w-14 text-green-200 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              {/* Orbiting construction icons */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                  <HardHat className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-green-500 rounded-full p-1">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Professional Journey
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Compass className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">Building Excellence Through Experience</span>
            <Wrench className="h-6 w-6 text-green-600 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            Over 8 years of dedicated service in civil engineering academia and industry, combining teaching excellence 
            with practical construction expertise and innovative sustainable materials research.
          </p>
        </div>

        {/* Enhanced Experience Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-green-300 to-blue-300 transform md:-translate-x-px rounded-full shadow-lg animate-pulse"></div>
          
          <div className="space-y-16">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Enhanced Timeline Dot with Construction Icon */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-2 z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    {index === 0 && <HardHat className="h-6 w-6 text-white group-hover:animate-bounce" />}
                    {index === 1 && <Building2 className="h-6 w-6 text-white group-hover:animate-bounce" />}
                    {index === 2 && <Layers className="h-6 w-6 text-white group-hover:animate-bounce" />}
                    {index >= 3 && <Mountain className="h-6 w-6 text-white group-hover:animate-bounce" />}
                  </div>
                  
                  {/* Animated pulse rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Enhanced Content Card */}
                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-gradient-to-r from-blue-500 to-green-500 group relative overflow-hidden">
                    
                    {/* Subtle construction pattern overlay */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Building2 className="w-full h-full text-blue-600" />
                    </div>
                    
                    {/* Header with Enhanced Design */}
                    <div className="mb-8 relative">
                      <div className="flex items-center justify-between mb-6">
                        <div className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-6 py-3 rounded-full font-semibold flex items-center shadow-lg group-hover:shadow-xl transition-shadow">
                          <Calendar className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-500 bg-gray-50 px-4 py-2 rounded-full">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span className="text-sm font-medium">Phase {index + 1}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-blue-600 font-bold text-xl bg-blue-50 px-4 py-2 rounded-lg">
                        <MapPin className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                        {exp.company}
                      </div>
                    </div>
                    
                    {/* Enhanced Achievements */}
                    <div className="relative">
                      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                          <Award className="h-5 w-5 text-green-600" />
                        </div>
                        Construction Achievements
                      </h4>
                      <div className="space-y-4">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-4 group/item hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                                <CheckCircle className="h-4 w-4 text-green-600 group-hover/item:animate-bounce" />
                              </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors font-medium">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Impact Numbers */}
                    {index === 0 && (
                      <div className="mt-8 pt-6 border-t-2 border-gradient-to-r from-blue-200 to-green-200">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="text-center group/stat">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/stat:animate-pulse">
                              <Building2 className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-blue-600 group-hover/stat:scale-110 transition-transform">11</div>
                            <div className="text-sm text-gray-600 font-medium">Courses Taught</div>
                          </div>
                          <div className="text-center group/stat">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/stat:animate-pulse">
                              <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="text-3xl font-bold text-green-600 group-hover/stat:scale-110 transition-transform">20</div>
                            <div className="text-sm text-gray-600 font-medium">Engineers Mentored</div>
                          </div>
                          <div className="text-center group/stat">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/stat:animate-pulse">
                              <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-blue-600 group-hover/stat:scale-110 transition-transform">25</div>
                            <div className="text-sm text-gray-600 font-medium">Committees</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="mt-8 pt-6 border-t-2 border-gradient-to-r from-blue-200 to-green-200">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center group/stat">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/stat:animate-pulse">
                              <Users className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="text-3xl font-bold text-green-600 group-hover/stat:scale-110 transition-transform">60</div>
                            <div className="text-sm text-gray-600 font-medium">Students Graduated</div>
                          </div>
                          <div className="text-center group/stat">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover/stat:animate-pulse">
                              <Award className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-blue-600 group-hover/stat:scale-110 transition-transform">100%</div>
                            <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Experience Summary Stats */}
        <div className="mt-24 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Building2 className="w-full h-full text-blue-600" />
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Career Impact Dashboard</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group transform transition-all duration-500 hover:scale-110">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">110+</div>
                <div className="text-gray-700 font-semibold text-lg">Total Engineers</div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">Mentored & Guided</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Building2 className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">28</div>
                <div className="text-gray-700 font-semibold text-lg">Courses Delivered</div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">High Success Rates</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Shield className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">60+</div>
                <div className="text-gray-700 font-semibold text-lg">Committee Roles</div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">Leadership Positions</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <CheckCircle className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">100%</div>
                <div className="text-gray-700 font-semibold text-lg">Success Rate</div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">15 Courses Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
          {/* Animated construction equipment icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 animate-float opacity-20">
              <HardHat className="h-16 w-16 text-white" />
            </div>
            <div className="absolute bottom-10 left-10 animate-float opacity-20" style={{animationDelay: '2s'}}>
              <Truck className="h-20 w-20 text-white" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float opacity-20" style={{animationDelay: '1s'}}>
              <Wrench className="h-12 w-12 text-white" />
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Compass className="h-8 w-8 text-white mr-3" />
                <h2 className="text-4xl font-bold">Construction Engineering Expertise</h2>
                <Building2 className="h-8 w-8 text-white ml-3" />
              </div>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                Each construction project and teaching role has contributed to building comprehensive expertise in civil engineering and sustainable construction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Layers className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Technical Mastery</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    STAAD Pro & ETABS Advanced
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Sustainable Materials Innovation
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Structural Design Excellence
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Construction Site Management
                  </li>
                </ul>
              </div>

              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group" style={{transitionDelay: '0.1s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Leadership Excellence</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Construction Team Leadership
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Engineer Mentorship Programs
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Quality Assurance Management
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Cross-Project Coordination
                  </li>
                </ul>
              </div>

              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group" style={{transitionDelay: '0.2s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Mountain className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Research Innovation</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Construction Research Papers
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Experimental Design & Testing
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Green Construction Solutions
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Industry-Academic Bridge
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: animate-float 6s ease-in-out infinite;
        }
        @keyframes animate-fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: animate-fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Experience;