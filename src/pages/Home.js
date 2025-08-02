// src/pages/Home.js

import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Building2, 
  Users, 
  FileText, 
  Award,
  HardHat,
  Truck,
  Wrench,
  Layers,
  Mountain,
  Zap,
  Shield,
  Compass
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='blueprint' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%234F46E5' stroke-width='0.5'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Cpath d='M0 10h20M10 0v20'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23blueprint)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Floating Construction Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <Building2 className="h-8 w-8 text-blue-200 opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}>
          <HardHat className="h-6 w-6 text-green-200 opacity-20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
          <Wrench className="h-7 w-7 text-blue-300 opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}>
          <Layers className="h-8 w-8 text-green-200 opacity-20" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Construction-themed Profile Image with Animation */}
            <div className="mb-8 relative group">
              <div className="h-36 w-36 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-white transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {portfolioData.personal.name.split(' ').map(n => n[0]).join('')}
              </div>
              {/* Animated construction icons orbiting the profile */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-2 shadow-lg">
                  <HardHat className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-green-500 rounded-full p-2 shadow-lg">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '30s'}}>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 rounded-full p-2 shadow-lg">
                  <Wrench className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
            
            {/* Name and Title with Animated Construction Accent */}
            <div className="flex items-center justify-center mb-4 group">
              <div className="transform transition-all duration-500 group-hover:rotate-12">
                <Compass className="h-8 w-8 text-blue-600 mr-3" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
                {portfolioData.personal.name}
              </h1>
              <div className="transform transition-all duration-500 group-hover:-rotate-12">
                <Wrench className="h-8 w-8 text-green-600 ml-3" />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-2 font-semibold">
              {portfolioData.personal.title}
            </p>
            
            <p className="text-lg text-blue-600 mb-8 font-medium animate-pulse">
              🏗️ Building Tomorrow's Infrastructure Today 🏗️
            </p>
            
            {/* Summary */}
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              {portfolioData.personal.summary}
            </p>
            
            {/* Animated Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105"
              >
                <Building2 className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                View Construction Projects
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact"
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 flex items-center justify-center"
              >
                <HardHat className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Hire Engineer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Stats Section with Animated Elements */}
      <div className="bg-white py-16 shadow-xl border-t-4 border-blue-500 relative overflow-hidden">
        {/* Animated construction crane in background */}
        <div className="absolute top-4 right-10 opacity-5">
          <div className="animate-pulse">
            <Building2 className="h-32 w-32 text-blue-600" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Construction & Engineering Metrics</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group transform transition-all duration-500 hover:scale-110">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:animate-pulse">
                  <Building2 className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">8+</div>
              <div className="text-gray-600 font-medium">Years in Construction</div>
              <div className="text-sm text-gray-500 mt-1">Civil Engineering</div>
            </div>
            
            <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{animationDelay: '0.2s'}}>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-gray-600 font-medium">Engineers Mentored</div>
              <div className="text-sm text-gray-500 mt-1">Future Builders</div>
            </div>
            
            <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{animationDelay: '0.4s'}}>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:animate-pulse">
                  <FileText className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">{portfolioData.publications.length}</div>
              <div className="text-gray-600 font-medium">Research Papers</div>
              <div className="text-sm text-gray-500 mt-1">Sustainable Construction</div>
            </div>
            
            <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{animationDelay: '0.6s'}}>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 rounded-full group-hover:bg-green-200 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:animate-pulse">
                  <Award className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">25+</div>
              <div className="text-gray-600 font-medium">Committee Roles</div>
              <div className="text-sm text-gray-500 mt-1">Industry Leadership</div>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Specialties with Enhanced Animations */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
        {/* Animated blueprint grid in background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M0 20h80M0 40h80M0 60h80M20 0v80M40 0v80M60 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Construction Engineering Expertise</h2>
            <p className="text-xl text-gray-600">Specialized in Sustainable Infrastructure & Materials</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Structural Engineering */}
            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-t-4 border-blue-500 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:animate-pulse">
                <Layers className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Structural Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Advanced structural engineering with focus on sustainable materials and seismic design
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110">Steel</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110" style={{transitionDelay: '0.1s'}}>Concrete</span>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:animate-pulse"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Sustainable Construction */}
            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-t-4 border-green-500 group" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:animate-pulse">
                <Mountain className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">Sustainable Materials</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Research and implementation of eco-friendly construction materials and waste utilization
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110">Green Tech</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110" style={{transitionDelay: '0.1s'}}>Recycling</span>
              </div>
              <Link 
                to="/research" 
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold group-hover:animate-pulse"
              >
                View Research <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Project Management */}
            <div className="bg-white rounded-xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-t-4 border-blue-600 group" style={{animationDelay: '0.4s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:animate-pulse">
                <Shield className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Quality Assurance</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                NAAC & NBA accreditation expertise, quality control, and construction project leadership
              </p>
              <div className="flex justify-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110">NAAC</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium transform transition-all group-hover:scale-110" style={{transitionDelay: '0.1s'}}>NBA</span>
              </div>
              <Link 
                to="/experience" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:animate-pulse"
              >
                View Projects <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Construction Equipment Icons Section */}
      <div className="py-12 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="text-center">
              <Truck className="h-12 w-12 text-orange-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Heavy Equipment</p>
            </div>
            <div className="text-center">
              <HardHat className="h-12 w-12 text-yellow-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Site Safety</p>
            </div>
            <div className="text-center">
              <Wrench className="h-12 w-12 text-blue-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Precision Tools</p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-green-400 mx-auto mb-2" />
              <p className="text-white text-sm font-medium">Smart Tech</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 py-20 relative overflow-hidden">
        {/* Construction pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.2'%3E%3Cpath d='m0 40l40-40h-40v40zm0-40h40l-40 40v-40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <Building2 className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Partner with an experienced civil engineer for your next construction project
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact"
              className="px-10 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              <HardHat className="mr-2 h-5 w-5" />
              Start Your Project
            </Link>
            <Link 
              to="/projects"
              className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-bold flex items-center justify-center"
            >
              <Building2 className="mr-2 h-5 w-5" />
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;