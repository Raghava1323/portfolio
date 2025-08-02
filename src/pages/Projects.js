// src/pages/Projects.js
import React, { useState } from "react";
import {
  Building2,
  Wrench,
  Users,
  Calendar,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Clock,
  Filter,
  HardHat,
  Layers,
  Mountain,
  Shield,
  Compass,
  Beaker,
  Microscope,
  Truck,
  Settings,
  Zap
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Project categories for filtering
  const categories = [
    { id: "all", name: "All Projects", icon: Building2 },
    { id: "research", name: "Research Projects", icon: Lightbulb },
    { id: "structural", name: "Structural Analysis", icon: Wrench },
    { id: "sustainable", name: "Sustainable Materials", icon: Target },
    { id: "industrial", name: "Industrial Projects", icon: TrendingUp },
  ];

  // Sample projects data - you can move this to portfolioData.js later
  const projectsData = [
    {
      id: 1,
      title:
        "Mechanical Property of HPC By Partial Replacement of Fine Aggregate Using Granite Scraps",
      category: "research",
      description:
        "Comprehensive research on utilizing granite waste in high-performance concrete to reduce environmental impact while maintaining structural integrity.",
      technologies: [
        "High Performance Concrete",
        "Granite Waste",
        "Sustainability",
        "Material Testing",
      ],
      duration: "6 months",
      status: "completed",
      impact: "Published in IJASET Journal",
      students: 4,
      image: "/api/placeholder/400/250",
      highlights: [
        "Reduced granite waste in landfills by 30%",
        "Achieved comparable compressive strength",
        "Published research findings in peer-reviewed journal",
      ],
    },
    {
      id: 2,
      title: "GRB Dairy Foods Industrial Facility",
      category: "industrial",
      description:
        "Structural design and site supervision for a 10-acre industrial facility with specialized floor systems capable of sustaining 2 T/m² live load.",
      technologies: [
        "STAAD Pro",
        "Structural Design",
        "Industrial Construction",
        "Quality Control",
      ],
      duration: "8 months",
      status: "completed",
      impact: "Delivered with ±5mm floor tolerance",
      students: 0,
      image: "/api/placeholder/400/250",
      highlights: [
        "10-acre industrial facility design",
        "2 T/m² live load capacity per floor",
        "Precision floor finishing within ±5mm tolerance",
      ],
    },
    {
      id: 3,
      title: "Steel Fiber Reinforced Concrete with Gold Mine Waste",
      category: "sustainable",
      description:
        "Experimental investigation on utilizing gold mine waste as fine aggregate replacement in steel fiber reinforced concrete for sustainable construction.",
      technologies: [
        "Steel Fiber Concrete",
        "Waste Utilization",
        "Material Testing",
        "Sustainability",
      ],
      duration: "4 months",
      status: "completed",
      impact: "Published in Nano World Journal (Scopus)",
      students: 3,
      image: "/api/placeholder/400/250",
      highlights: [
        "Novel use of gold mine waste in concrete",
        "Enhanced fiber reinforcement techniques",
        "Scopus indexed publication",
      ],
    },
    {
      id: 4,
      title: "PSC Fiber Reinforced Beams with GGBS",
      category: "structural",
      description:
        "Experimental study on prestressed concrete fiber reinforced beams using Ground Granulated Blast Furnace Slag for improved structural performance.",
      technologies: [
        "Prestressed Concrete",
        "GGBS",
        "Fiber Reinforcement",
        "Structural Testing",
      ],
      duration: "5 months",
      status: "completed",
      impact: "Best Paper Award at GCASSTE-2020",
      students: 2,
      image: "/api/placeholder/400/250",
      highlights: [
        "Best Paper Award at GCASSTE-2020 conference",
        "Advanced prestressed concrete analysis",
        "Published in Shanghai University Journal",
      ],
    },
    {
      id: 5,
      title: "Multi-storey Building Analysis using STAAD Pro",
      category: "structural",
      description:
        "Comprehensive structural analysis and design of multi-storey building using advanced software tools and modern design methodologies.",
      technologies: [
        "STAAD Pro",
        "Structural Analysis",
        "Building Design",
        "Load Analysis",
      ],
      duration: "3 months",
      status: "completed",
      impact: "Student project guidance",
      students: 6,
      image: "/api/placeholder/400/250",
      highlights: [
        "Advanced structural modeling techniques",
        "Comprehensive load analysis",
        "Student mentorship program",
      ],
    },
    {
      id: 6,
      title: "Fiber-Reinforced Self-Compacting Concrete with AI Tools",
      category: "research",
      description:
        "Innovative research combining composite materials, C&D waste, and AI tools for optimizing fiber-reinforced self-compacting concrete mixtures.",
      technologies: [
        "Self-Compacting Concrete",
        "AI Tools",
        "Composite Materials",
        "C&D Waste",
      ],
      duration: "ongoing",
      status: "ongoing",
      impact: "Cutting-edge research integration",
      students: 5,
      image: "/api/placeholder/400/250",
      highlights: [
        "Integration of AI in concrete design",
        "Utilization of construction & demolition waste",
        "Advanced composite material research",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const ProjectCard = ({ project }) => {
    const statusColor =
      project.status === "completed"
        ? "text-green-600 bg-gradient-to-r from-green-100 to-green-200"
        : "text-blue-600 bg-gradient-to-r from-blue-100 to-blue-200";
    const statusIcon = project.status === "completed" ? CheckCircle : Clock;
    const StatusIcon = statusIcon;

    // Get category icon
    const getCategoryIcon = (category) => {
      switch (category) {
        case "research": return Lightbulb;
        case "structural": return Wrench;
        case "sustainable": return Target;
        case "industrial": return TrendingUp;
        default: return Building2;
      }
    };

    const CategoryIcon = getCategoryIcon(project.category);

    return (
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-gradient-to-r from-blue-500 to-green-500 group relative">
        {/* Enhanced Header with Construction Theme */}
        <div className="h-56 bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 relative overflow-hidden flex items-center justify-center">
          {/* Background construction pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          {/* Floating construction elements */}
          <div className="absolute top-4 left-4 animate-bounce opacity-20" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <HardHat className="h-8 w-8 text-blue-600" />
          </div>
          <div className="absolute top-4 right-4 animate-bounce opacity-20" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <Wrench className="h-6 w-6 text-green-600" />
          </div>
          <div className="absolute bottom-4 left-4 animate-bounce opacity-20" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
            <Settings className="h-7 w-7 text-blue-500" />
          </div>

          {/* Main project icon */}
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl group-hover:animate-pulse">
              <CategoryIcon className="h-10 w-10 text-white group-hover:animate-bounce" />
            </div>
            {/* Orbiting elements */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '12s'}}>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                <Building2 className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 relative">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
            <CategoryIcon className="w-full h-full text-blue-600" />
          </div>

          <div className="flex items-start justify-between mb-4 relative">
            <h3 className="text-2xl font-bold text-gray-900 leading-tight flex-1 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <span
              className={`px-4 py-2 rounded-full font-bold shadow-md flex items-center ml-3 ${statusColor}`}
            >
              <StatusIcon className="h-4 w-4 mr-2 group-hover:animate-bounce" />
              {project.status}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
            {project.description}
          </p>

          {/* Enhanced Project Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Calendar className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{project.duration}</div>
                <div className="text-xs text-gray-500">Duration</div>
              </div>
            </div>
            {project.students > 0 && (
              <div className="flex items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{project.students} students</div>
                  <div className="text-xs text-gray-500">Mentored</div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Technologies */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center">
              <Zap className="h-4 w-4 mr-2 text-blue-600" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 text-sm rounded-lg font-semibold shadow-sm hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
              {/* {project.technologies.length > 3 && (
                <span className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 text-sm rounded-lg font-semibold shadow-sm">
                  +{project.technologies.length - 4} more
                </span>
              )} */}
            </div>
          </div>

          {/* Enhanced Impact */}
          {project.impact && (
            <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl shadow-lg">
              <div className="flex items-center font-bold text-orange-800">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm font-bold">Project Impact</div>
                  <div className="text-lg">{project.impact}</div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-700 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
              Key Achievements
            </h4>
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className="flex items-start bg-green-50 p-3 rounded-lg hover:bg-green-100 transition-colors group/item"
              >
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 group-hover/item:bg-green-200 transition-colors">
                  <CheckCircle className="h-4 w-4 text-green-600 group-hover/item:animate-bounce" />
                </div>
                <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const FilterButton = ({ category, isActive, onClick }) => {
    const Icon = category.icon;
    return (
      <button
        onClick={() => onClick(category.id)}
        className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-2xl"
            : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 border-2 border-gray-200 hover:border-blue-300"
        }`}
      >
        <Icon className={`h-5 w-5 mr-3 ${isActive ? 'animate-bounce' : ''}`} />
        {category.name}
      </button>
    );
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='projects-grid' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='0.5'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' fill='%2310B981'/%3E%3Ccircle cx='22.5' cy='22.5' r='1' fill='%2310B981'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23projects-grid)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Construction Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>
          <Building2 className="h-12 w-12 text-blue-200 opacity-20" />
        </div>
        <div className="absolute top-64 right-20 animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}>
          <HardHat className="h-10 w-10 text-green-200 opacity-20" />
        </div>
        <div className="absolute bottom-64 left-20 animate-bounce" style={{animationDelay: '1s', animationDuration: '3.5s'}}>
          <Wrench className="h-8 w-8 text-blue-300 opacity-20" />
        </div>
        <div className="absolute bottom-32 right-10 animate-bounce" style={{animationDelay: '3s', animationDuration: '4.5s'}}>
          <Settings className="h-14 w-14 text-green-200 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              {/* Orbiting project icons */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-green-500 rounded-full p-1">
                  <Wrench className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Projects & Innovations
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Compass className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">Building Tomorrow's Infrastructure</span>
            <Target className="h-6 w-6 text-green-600 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            Explore my portfolio of research projects, structural designs, and sustainable construction innovations that 
            bridge the gap between academic research and practical engineering solutions with measurable impact.
          </p>
        </div>

        {/* Enhanced Project Stats */}
        <div className="mb-16 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects Impact Dashboard</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group transform transition-all duration-500 hover:scale-110">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Building2 className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">
                  {projectsData.length}
                </div>
                <div className="text-gray-700 font-semibold text-lg">Total Projects</div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">Research & Industry</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">
                  {projectsData.reduce((sum, project) => sum + project.students, 0)}
                </div>
                <div className="text-gray-700 font-semibold text-lg">Students Mentored</div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">Hands-on Learning</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Award className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-125 transition-transform">
                  {projectsData.filter(p => p.impact.includes("Award") || p.impact.includes("Published")).length}
                </div>
                <div className="text-gray-700 font-semibold text-lg">Published/Awarded</div>
                <div className="text-sm text-gray-500 mt-2 bg-purple-50 px-3 py-1 rounded-full">Recognition Excellence</div>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-110" style={{transitionDelay: '0.3s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <TrendingUp className="h-10 w-10 text-orange-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-3 group-hover:scale-125 transition-transform">
                  {projectsData.filter(p => p.status === "ongoing").length}
                </div>
                <div className="text-gray-700 font-semibold text-lg">Ongoing Projects</div>
                <div className="text-sm text-gray-500 mt-2 bg-orange-50 px-3 py-1 rounded-full">Active Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <Filter className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Filter by Category</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <FilterButton
                key={category.id}
                category={category}
                isActive={activeFilter === category.id}
                onClick={setActiveFilter}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              style={{animationDelay: `${index * 0.1}s`}}
              className="animate-fade-in"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Enhanced Project Approach */}
        <div className="mb-20 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Lightbulb className="w-full h-full text-blue-600" />
          </div>
          
          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <Compass className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Project Approach</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group transform transition-all duration-500 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Lightbulb className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Research-Driven
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Every project begins with thorough literature review and identification of research gaps to ensure 
                  meaningful contributions to the field with measurable impact on construction practices.
                </p>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-105" style={{transitionDelay: '0.1s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Target className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  Sustainability Focus
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Prioritizing environmental impact reduction through innovative use of waste materials and 
                  eco-friendly construction practices that contribute to a greener future.
                </p>
              </div>

              <div className="text-center group transform transition-all duration-500 hover:scale-105" style={{transitionDelay: '0.2s'}}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Users className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  Student-Centered
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Actively involving students in research projects to provide hands-on learning experiences and 
                  develop the next generation of civil engineers with practical expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Construction Excellence Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
          {/* Animated construction equipment icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 animate-float opacity-20">
              <Building2 className="h-16 w-16 text-white" />
            </div>
            <div className="absolute bottom-10 left-10 animate-float opacity-20" style={{animationDelay: '2s'}}>
              <HardHat className="h-20 w-20 text-white" />
            </div>
            <div className="absolute top-1/2 right-20 animate-float opacity-20" style={{animationDelay: '1s'}}>
              <Wrench className="h-12 w-12 text-white" />
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Compass className="h-8 w-8 text-white mr-3" />
                <h2 className="text-4xl font-bold">Project Excellence Areas</h2>
                <Building2 className="h-8 w-8 text-white ml-3" />
              </div>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                Each project demonstrates comprehensive expertise in civil engineering innovation and sustainable construction solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Beaker className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Research Innovation</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Advanced Material Testing
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Sustainable Waste Utilization
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Performance Optimization
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Environmental Impact Analysis
                  </li>
                </ul>
              </div>

              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group" style={{transitionDelay: '0.1s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Structural Mastery</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    STAAD Pro Advanced Analysis
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Industrial Facility Design
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Prestressed Concrete Systems
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Multi-storey Building Analysis
                  </li>
                </ul>
              </div>

              <div className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group" style={{transitionDelay: '0.2s'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Mentorship Impact</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Student Project Guidance
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Hands-on Learning Programs
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Research Methodology Training
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Industry Skill Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20 bg-white rounded-2xl shadow-2xl p-10 text-center relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Target className="w-full h-full text-blue-600" />
          </div>
          
          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Lightbulb className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always interested in collaborating on innovative projects that combine structural engineering excellence 
              with sustainable construction practices and cutting-edge research methodologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Discuss Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Target className="h-5 w-5 mr-2" />
                Get in Touch
              </a>
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

export default Projects;