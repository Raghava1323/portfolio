// src/pages/About.js

import {
  GraduationCap,
  Wrench,
  MapPin,
  Calendar,
  User,
  Award,
  Target,
  Lightbulb,
  Users,
  Leaf,
  Building2,
  HardHat,
  Layers,
  Mountain,
  Shield,
  Compass,
  BookOpen,
  Beaker,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SkillBar from "../components/SkillBar";

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='construction-grid' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='0.5'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' fill='%2310B981'/%3E%3Ccircle cx='22.5' cy='22.5' r='1' fill='%2310B981'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23construction-grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-10 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          <GraduationCap className="h-12 w-12 text-blue-200 opacity-20" />
        </div>
        <div
          className="absolute top-64 right-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <BookOpen className="h-10 w-10 text-green-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-64 left-20 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        >
          <Beaker className="h-8 w-8 text-blue-300 opacity-20" />
        </div>
        <div
          className="absolute bottom-32 right-10 animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        >
          <HardHat className="h-14 w-14 text-green-200 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <User className="h-10 w-10 text-white" />
              </div>
              {/* Orbiting icons */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
              </div>
              <div
                className="absolute inset-0 animate-spin"
                style={{
                  animationDuration: "20s",
                  animationDirection: "reverse",
                }}
              >
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-green-500 rounded-full p-1">
                  <Wrench className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Engineering Excellence
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Compass className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">
              Building Tomorrow's Infrastructure Today
            </span>
            <Building2 className="h-6 w-6 text-green-600 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            A passionate civil engineer dedicated to advancing sustainable
            construction through innovative research, quality education, and
            practical engineering solutions that shape the future of our built
            environment.
          </p>
        </div>

        {/* Enhanced Personal Summary */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500 group hover:shadow-3xl transition-all duration-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
            <User className="w-full h-full text-blue-600" />
          </div>

          <div className="relative flex flex-col md:flex-row items-start">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="h-32 w-32 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300 relative">
                {portfolioData.personal.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
                {/* Pulse rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-20"></div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-20"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {portfolioData.personal.name}
              </h2>
              <p className="text-2xl text-blue-600 font-semibold mb-4 flex items-center">
                <Award className="h-6 w-6 mr-2 group-hover:animate-bounce" />
                {portfolioData.personal.title}
              </p>
              <div className="flex items-center text-gray-500 mb-6 bg-gray-50 px-4 py-2 rounded-lg">
                <MapPin className="h-5 w-5 mr-3 text-green-600" />
                <span className="font-medium">Detroit, Michigan, USA</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg bg-blue-50/50 p-4 rounded-lg border-l-4 border-blue-400">
                {portfolioData.personal.summary} My expertise spans structural
                engineering, environmental sustainability, and academic
                excellence, with a strong commitment to mentoring the next
                generation of civil engineers who will build our sustainable
                future.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Educational Foundation
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building expertise through rigorous academic pursuit and
              cutting-edge research in civil engineering
            </p>
          </div>

          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-gradient-to-r from-blue-500 to-green-500 group relative overflow-hidden"
              >
                {/* Background construction pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GraduationCap className="w-full h-full text-blue-600" />
                </div>

                <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 group-hover:animate-pulse">
                        <BookOpen className="h-6 w-6 text-blue-600 group-hover:animate-bounce" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    {edu.gpa && (
                      <div className="flex items-center mb-4">
                        <span className="font-semibold text-gray-700 mr-3">
                          Academic Excellence:
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full font-bold text-lg shadow-md">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-start lg:items-end space-y-3">
                    <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 px-6 py-3 rounded-full font-semibold flex items-center shadow-lg group-hover:shadow-xl transition-shadow">
                      <Calendar className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                      {edu.period}
                    </span>
                    {edu.status && (
                      <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Enhanced Coursework */}
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <Layers className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="font-bold text-gray-800 text-lg">
                      Core Engineering Curriculum:
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-blue-200 text-gray-700 hover:text-blue-800 px-4 py-2 rounded-full border-2 border-transparent hover:border-blue-300 transition-all duration-300 font-medium cursor-default transform hover:scale-105"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Thesis */}
                {edu.thesis && (
                  <div className="border-t-2 border-gray-100 pt-6">
                    <div className="flex items-center mb-4">
                      <Beaker className="h-5 w-5 text-green-600 mr-2" />
                      <p className="font-bold text-gray-800 text-lg">
                        Research Excellence:
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-inner">
                      <p className="text-gray-700 italic text-lg leading-relaxed font-medium">
                        "{edu.thesis}"
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Technical Skills Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <Wrench className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Mastery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced engineering skills developed through hands-on
              construction projects and cutting-edge research
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
            {/* Background construction pattern */}
            <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5">
              <HardHat className="w-full h-full text-blue-600" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="group">
                  <SkillBar skill={skill} delay={index * 200} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Professional Specializations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Engineering Specializations
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused expertise areas that drive innovation in sustainable
              construction and engineering education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-green-500">
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Leaf className="w-full h-full text-green-600" />
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:animate-pulse transition-all">
                  <Leaf className="h-8 w-8 text-green-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Sustainable Construction
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  Pioneering research on eco-friendly materials, innovative
                  waste utilization in concrete formulations, and comprehensive
                  environmental impact reduction strategies in modern
                  construction practices.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-blue-500"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Building2 className="w-full h-full text-blue-600" />
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:animate-pulse transition-all">
                  <Building2 className="h-8 w-8 text-blue-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Structural Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  Advanced structural design mastery using STAAD Pro and ETABS,
                  high-performance concrete development, and innovative building
                  systems that push the boundaries of engineering possibilities.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-purple-500"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-full h-full text-purple-600" />
              </div>

              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:animate-pulse transition-all">
                  <Users className="h-8 w-8 text-purple-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Academic Leadership
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  Comprehensive student mentorship programs, innovative
                  curriculum development, rigorous accreditation processes, and
                  fostering a vibrant research culture in academic institutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
          {/* Animated construction equipment icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 animate-float opacity-20">
              <Lightbulb className="h-16 w-16 text-white" />
            </div>
            <div
              className="absolute bottom-10 left-10 animate-float opacity-20"
              style={{ animationDelay: "2s" }}
            >
              <Shield className="h-20 w-20 text-white" />
            </div>
            <div
              className="absolute top-1/2 right-20 animate-float opacity-20"
              style={{ animationDelay: "1s" }}
            >
              <Mountain className="h-12 w-12 text-white" />
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Award className="h-8 w-8 text-white mr-3" />
                <h2 className="text-4xl font-bold">
                  Engineering Philosophy & Values
                </h2>
                <Compass className="h-8 w-8 text-white ml-3" />
              </div>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                Core principles that guide every construction project, research
                initiative, and educational endeavor
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Innovation Excellence
                </h3>
                <p className="text-blue-100 group-hover:text-white transition-colors leading-relaxed">
                  Constantly pioneering new approaches to improve construction
                  practices through sustainable materials research and advanced
                  engineering techniques that shape the future of
                  infrastructure.
                </p>
              </div>

              <div
                className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Educational Impact</h3>
                <p className="text-blue-100 group-hover:text-white transition-colors leading-relaxed">
                  Deeply committed to mentoring future engineers and sharing
                  knowledge to build the next generation of responsible,
                  innovative civil engineers who will lead sustainable
                  construction practices.
                </p>
              </div>

              <div
                className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group text-center"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Sustainability Focus
                </h3>
                <p className="text-blue-100 group-hover:text-white transition-colors leading-relaxed">
                  Passionately dedicated to reducing environmental impact
                  through groundbreaking research on waste utilization and
                  eco-friendly construction materials that protect our planet
                  for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Construction Journey Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
            <Compass className="w-full h-full text-blue-600" />
          </div>
          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Engineering Journey Milestones
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Leaf className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">
                  10+
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Green Projects
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">
                  Sustainable Focus
                </div>
              </div>
              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <GraduationCap className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">
                  8+
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Years Excellence
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">
                  Academic & Industry
                </div>
              </div>
              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <BookOpen className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">
                  15+
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Research Papers
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">
                  Published Works
                </div>
              </div>
              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">
                  200+
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Students Taught
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">
                  Future Engineers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes animate-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: animate-float 6s ease-in-out infinite;
        }
        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: animate-fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
