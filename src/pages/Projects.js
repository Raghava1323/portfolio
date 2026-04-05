// src/pages/Projects.js
import React, { useState } from "react";
import {
  BuildingIcon,
  WrenchIcon,
  TeamIcon,
  CalendarIcon,
  AwardIcon,
  TargetIcon,
  LightbulbIcon,
  TrendingUpIcon,
  CheckIcon,
  ClockIcon,
  FilterIcon,
  HardHatIcon,
  ResearchIcon,
} from "../components/CivilIcons";
import { portfolioData } from "../data/portfolioData";
import { ScrollReveal, AnimatedCounter } from '../hooks/useScrollAnimation';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Project categories for filtering
  const categories = [
    { id: "all", name: "All Projects", icon: BuildingIcon },
    { id: "research", name: "Research Projects", icon: LightbulbIcon },
    { id: "structural", name: "Structural Analysis", icon: WrenchIcon },
    { id: "sustainable", name: "Sustainable Materials", icon: TargetIcon },
    { id: "industrial", name: "Industrial Projects", icon: TrendingUpIcon },
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
        "Structural design and site supervision for a 10-acre industrial facility with specialized floor systems capable of sustaining 2 T/m2 live load.",
      technologies: [
        "STAAD Pro",
        "Structural Design",
        "Industrial Construction",
        "Quality Control",
      ],
      duration: "8 months",
      status: "completed",
      impact: "Delivered with +/-5mm floor tolerance",
      students: 0,
      image: "/api/placeholder/400/250",
      highlights: [
        "10-acre industrial facility design",
        "2 T/m2 live load capacity per floor",
        "Precision floor finishing within +/-5mm tolerance",
      ],
    },
    {
      id: 3,
      title: "Steel Fiber Reinforced Concrete with Gold Mine Waste",
      category: "sustainable",
      description:
        "Led a team of four in concrete design and testing following research standards. The concrete was partially replaced with Gold Mine Waste as fine aggregate and exhibited improved mechanical properties.",
      technologies: [
        "Steel Fiber Concrete",
        "Waste Utilization",
        "Material Testing",
        "Concrete Mix Design",
      ],
      duration: "4 months",
      status: "completed",
      impact: "Published in Scopus Q-3 Journal (Nano World Journal, USA)",
      students: 4,
      image: "/api/placeholder/400/250",
      highlights: [
        "Led team of four in concrete design and testing",
        "Scopus Q-3 publication — Nano World Journal, Vol 9, Issue 4",
        "Improved mechanical properties with Gold Mine Waste",
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
      duration: "6 months",
      status: "completed",
      impact: "Cutting-edge research integration",
      students: 5,
      image: "/api/placeholder/400/250",
      highlights: [
        "Integration of AI in concrete design",
        "Utilization of construction & demolition waste",
        "Advanced composite material research",
      ],
    },
    {
      id: 7,
      title: "MVJ Medical College Lecture Hall Building",
      category: "industrial",
      description:
        "Served as site supervisor and structural consultant for a 5-story structure featuring a semi-circular elevated auditorium and lecture halls at MVJ Medical College.",
      technologies: [
        "Structural Design",
        "BBS",
        "Surveying",
        "Concreting",
      ],
      duration: "9 months",
      status: "completed",
      impact: "5-story structure with semi-circular auditorium",
      students: 0,
      image: "/api/placeholder/400/250",
      highlights: [
        "5-story building with semi-circular elevated auditorium",
        "BBS, concreting, and surveying — floor level checks",
        "Full involvement from site plan marking to completion",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  // Stats calculations
  const totalProjects = projectsData.length;
  const totalStudents = projectsData.reduce((sum, p) => sum + p.students, 0);
  const publishedAwarded = projectsData.filter(
    (p) =>
      p.impact.toLowerCase().includes("published") ||
      p.impact.toLowerCase().includes("award")
  ).length;
  const ongoingCount = projectsData.filter(
    (p) => p.status === "ongoing"
  ).length;

  const stats = [
    { label: "Total Projects", value: totalProjects, icon: BuildingIcon },
    { label: "Students Mentored", value: totalStudents, icon: TeamIcon },
    { label: "Published / Awarded", value: publishedAwarded, icon: AwardIcon },
    { label: "Ongoing", value: ongoingCount, icon: ClockIcon },
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "research":
        return LightbulbIcon;
      case "structural":
        return WrenchIcon;
      case "sustainable":
        return TargetIcon;
      case "industrial":
        return TrendingUpIcon;
      default:
        return BuildingIcon;
    }
  };

  const ProjectCard = ({ project }) => {
    const statusColor =
      project.status === "completed"
        ? "text-green-700 bg-green-50 border border-green-200"
        : "text-blue-700 bg-blue-50 border border-blue-200";
    const statusLabel =
      project.status === "completed" ? "Completed" : "Ongoing";
    const StatusIcon =
      project.status === "completed" ? CheckIcon : ClockIcon;
    const CategoryIcon = getCategoryIcon(project.category);

    return (
      <div className="card-3d card-shine rounded-xl flex flex-col">
        {/* Card Header */}
        <div className="p-10 pb-4">
          <div className="flex items-start justify-between mb-4">
            <div className="icon-gradient p-3 rounded-lg shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
              <CategoryIcon className="h-6 w-6 text-white" />
            </div>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
            >
              <StatusIcon className="h-3.5 w-3.5" />
              {statusLabel}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-civil-700 leading-snug mb-3">
            {project.title}
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Duration and Students */}
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="inline-flex items-center gap-1.5">
              <CalendarIcon className="h-4 w-4 text-civil-500" />
              {project.duration}
            </span>
            {project.students > 0 && (
              <span className="inline-flex items-center gap-1.5">
                <TeamIcon className="h-4 w-4 text-civil-500" />
                {project.students} students
              </span>
            )}
          </div>
        </div>

        {/* Technology Tags */}
        <div className="px-10 pb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="badge"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="px-10 pb-4">
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
            <AwardIcon className="h-4 w-4 text-civil-500 flex-shrink-0" />
            <span className="text-sm font-medium text-civil-700">
              {project.impact}
            </span>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="px-10 pb-10 mt-auto">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Key Achievements
          </p>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckIcon className="h-4 w-4 text-civil-500 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const approachCards = [
    {
      icon: ResearchIcon,
      title: "Research-Driven",
      description:
        "Each project is grounded in rigorous scientific methodology, from literature review through data analysis and peer-reviewed publication.",
    },
    {
      icon: TargetIcon,
      title: "Sustainability Focus",
      description:
        "Projects prioritize the use of waste materials and eco-friendly alternatives to minimize environmental impact in construction.",
    },
    {
      icon: TeamIcon,
      title: "Student-Centered",
      description:
        "Undergraduate and postgraduate students are actively mentored throughout the project lifecycle, building the next generation of engineers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white bg-blueprint relative">
      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* Page Header */}
      <section className="py-24 px-4">
        <ScrollReveal>
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-civil-500 font-medium text-sm tracking-wide uppercase mb-3">
              Portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-black text-civil-700 mb-4">
              Projects & Research
            </h1>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
              A collection of research initiatives, structural projects, and
              sustainable construction studies spanning academia and industry.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Stats Dashboard */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div
                    className="stat-3d rounded-xl p-10 text-center"
                  >
                    <div className="inline-flex items-center justify-center icon-3d w-20 h-20 rounded-2xl mb-3">
                      <Icon className="h-8 w-8 text-civil-500" />
                    </div>
                    <p className="text-4xl font-black text-civil-700">
                      <AnimatedCounter end={stat.value} suffix="+" />
                    </p>
                    <p className="text-base font-semibold text-slate-500 mt-1">{stat.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="pb-10 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-2">
              <FilterIcon className="h-5 w-5 text-slate-400" />
              <span className="text-sm font-medium text-slate-500">
                Filter by category
              </span>
            </div>
          </ScrollReveal>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-base font-bold transition-colors duration-200 ${
                    isActive
                      ? "bg-civil-500 text-white shadow-[0_4px_24px_rgba(37,99,235,0.35)]"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-civil-300 hover:text-civil-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 100}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <BuildingIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Approach */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-civil-500 font-medium text-sm tracking-wide uppercase mb-2">
                Methodology
              </p>
              <h2 className="text-4xl font-black text-civil-700">
                Project Approach
              </h2>
              <div className="section-divider mx-auto mb-4"></div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approachCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 150}>
                  <div
                    className="card-3d card-shine rounded-xl p-10 text-center"
                  >
                    <div className="inline-flex items-center justify-center icon-3d w-20 h-20 rounded-2xl mb-5">
                      <Icon className="h-8 w-8 text-civil-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-civil-700 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 px-4 mb-24">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="dark-section rounded-2xl px-8 py-12 md:px-12 relative overflow-hidden">
              <div className="text-center mb-10 relative">
                <h2 className="text-4xl font-black text-white mb-3">
                  Commitment to Excellence
                </h2>
                <div className="section-divider mx-auto mb-4"></div>
                <p className="text-civil-100 text-xl max-w-2xl mx-auto">
                  Every project reflects a dedication to advancing civil
                  engineering through innovation, sustainability, and education.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="text-center">
                  <HardHatIcon className="h-10 w-10 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Industry Standards
                  </h3>
                  <p className="text-civil-100 text-lg leading-relaxed">
                    All projects adhere to IS codes and international best
                    practices, ensuring safety and reliability.
                  </p>
                </div>
                <div className="text-center">
                  <AwardIcon className="h-10 w-10 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Recognized Research
                  </h3>
                  <p className="text-civil-100 text-lg leading-relaxed">
                    Multiple peer-reviewed publications and conference awards
                    validate the quality and impact of this work.
                  </p>
                </div>
                <div className="text-center">
                  <TeamIcon className="h-10 w-10 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Mentorship Legacy
                  </h3>
                  <p className="text-civil-100 text-lg leading-relaxed">
                    Over 20 students mentored on SDG-aligned projects, fostering
                    the next generation of civil engineers.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 mb-24">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center card-glass rounded-2xl p-12">
            <h2 className="text-4xl font-black text-civil-700 mb-4">
              Interested in Collaboration?
            </h2>
            <div className="section-divider mx-auto mb-4"></div>
            <p className="text-slate-600 text-xl mb-8 leading-relaxed">
              I am always open to research collaborations, consulting
              opportunities, and academic partnerships in sustainable construction
              and structural engineering.
            </p>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="inline-flex items-center gap-2 bg-civil-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-civil-600 transition-colors duration-200 shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Projects;
