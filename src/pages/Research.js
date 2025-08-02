// src/pages/Research.js

import {
  BookOpen,
  Calendar,
  Award,
  ExternalLink,
  Users,
  FileText,
  Trophy,
  Target,
  Beaker,
  Microscope,
  Compass,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Research = () => {
  const PublicationCard = ({ publication, index }) => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border-t-4 border-gradient-to-r from-blue-500 to-green-500 group relative overflow-hidden">
        {/* Subtle construction pattern overlay */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
          <FileText className="w-full h-full text-blue-600" />
        </div>

        <div className="flex items-start space-x-6 relative">
          <div className="flex-shrink-0">
            <div className="h-16 w-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
              <FileText className="h-8 w-8 text-blue-600 group-hover:animate-bounce" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
              {publication.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
              <span className="flex items-center bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-full font-semibold text-blue-800 shadow-md">
                <BookOpen className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                {publication.journal}
              </span>
              <span className="flex items-center bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full font-semibold text-green-800 shadow-md">
                <Calendar className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                {publication.year}
              </span>
            </div>

            {publication.volume && (
              <p className="text-sm text-gray-600 mb-4 bg-gray-50 px-4 py-3 rounded-lg border border-gray-200 font-medium">
                {publication.volume}
              </p>
            )}

            {publication.doi && (
              <div className="mb-4">
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-all duration-300 font-semibold"
                >
                  <ExternalLink className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  View Publication
                </a>
              </div>
            )}

            {publication.award && (
              <div className="flex items-center font-semibold bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800 px-4 py-3 rounded-lg border border-orange-200 shadow-md">
                <Trophy className="h-5 w-5 mr-3 text-orange-600 group-hover:animate-bounce" />
                {publication.award}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const MembershipCard = ({ membership, index }) => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-t-4 border-gradient-to-r from-purple-500 to-pink-500 group relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
          <Users className="w-full h-full text-purple-600" />
        </div>

        <div className="flex items-center space-x-6 relative">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
            <Users className="h-8 w-8 text-purple-600 group-hover:animate-bounce" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {membership.organization}
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-purple-600 font-bold text-lg bg-purple-50 px-3 py-1 rounded-lg">
                {membership.type}
              </span>
              <span className="text-gray-500 font-medium bg-gray-50 px-3 py-1 rounded-lg">
                {membership.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TechnicalEventCard = ({ event, index }) => {
    return (
      <div className="bg-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-t-4 border-gradient-to-r from-green-500 to-blue-500 group relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
          <Award className="w-full h-full text-green-600" />
        </div>

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900 flex-1 group-hover:text-green-600 transition-colors">
              {event.title}
            </h3>
            <span
              className={`px-4 py-2 rounded-full font-bold shadow-md
              ${
                event.type === "Organized"
                  ? "bg-gradient-to-r from-green-100 to-green-200 text-green-800"
                  : "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800"
              }`}
            >
              {event.type}
            </span>
          </div>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed font-medium">
            {event.description}
          </p>

          <div className="flex items-center text-gray-600 bg-gray-50 px-4 py-2 rounded-lg font-semibold">
            <Calendar className="h-5 w-5 mr-3 group-hover:animate-bounce" />
            {event.date}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Animated Construction Blueprint Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='research-grid' x='0' y='0' width='30' height='30' patternUnits='userSpaceOnUse'%3E%3Cg fill='none' stroke='%233B82F6' stroke-width='0.5'%3E%3Cpath d='M0 0h30v30H0z'/%3E%3Cpath d='M0 15h30M15 0v30'/%3E%3Ccircle cx='7.5' cy='7.5' r='1' fill='%2310B981'/%3E%3Ccircle cx='22.5' cy='22.5' r='1' fill='%2310B981'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='120' height='120' fill='url(%23research-grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Research Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 left-10 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        >
          <Beaker className="h-12 w-12 text-blue-200 opacity-20" />
        </div>
        <div
          className="absolute top-64 right-20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <Microscope className="h-10 w-10 text-green-200 opacity-20" />
        </div>
        <div
          className="absolute bottom-64 left-20 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3.5s" }}
        >
          <Lightbulb className="h-8 w-8 text-blue-300 opacity-20" />
        </div>
        <div
          className="absolute bottom-32 right-10 animate-bounce"
          style={{ animationDelay: "3s", animationDuration: "4.5s" }}
        >
          <FileText className="h-14 w-14 text-green-200 opacity-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              {/* Orbiting research icons */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "15s" }}
              >
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full p-1">
                  <Beaker className="h-4 w-4 text-white" />
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
                  <Microscope className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Research & Publications
          </h1>
          <div className="flex items-center justify-center mb-6">
            <Compass className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-2xl font-semibold text-blue-600">
              Advancing Construction Through Innovation
            </span>
            <Lightbulb className="h-6 w-6 text-green-600 ml-2" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            Contributing to the advancement of sustainable construction through
            rigorous research, peer-reviewed publications, and active
            participation in the civil engineering community with focus on
            innovative materials and construction techniques.
          </p>
        </div>

        {/* Enhanced Research Focus Areas */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Focus Areas
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-blue-500">
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <Target className="w-full h-full text-blue-600" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                <Target className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                Sustainable Materials
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Research on eco-friendly construction materials, waste
                utilization in concrete, and environmental impact reduction
                techniques.
              </p>
            </div>

            <div
              className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-green-500"
              style={{ transitionDelay: "0.1s" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award className="w-full h-full text-green-600" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                <Award className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                High-Performance Concrete
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Development and testing of high-performance concrete mixtures
                using alternative aggregates and sustainable additives.
              </p>
            </div>

            <div
              className="bg-white rounded-2xl shadow-2xl p-8 text-center hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group relative overflow-hidden border-t-4 border-purple-500"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText className="w-full h-full text-purple-600" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                <FileText className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                Structural Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Advanced structural analysis techniques, fiber-reinforced
                concrete behavior, and innovative building systems design.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Publications Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Published Research Papers
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>
          </div>

          <div className="space-y-8">
            {portfolioData.publications.map((publication, index) => (
              <PublicationCard
                key={index}
                publication={publication}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Research Impact */}
        <div className="mb-20 bg-white rounded-2xl shadow-2xl p-10 relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background construction pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Beaker className="w-full h-full text-blue-600" />
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-xl">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Research Impact Dashboard
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group transform transition-all duration-500 hover:scale-110">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <FileText className="h-10 w-10 text-blue-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-125 transition-transform">
                  {portfolioData.publications.length}
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Published Papers
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-blue-50 px-3 py-1 rounded-full">
                  International Journals
                </div>
              </div>

              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Trophy className="h-10 w-10 text-green-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-3 group-hover:scale-125 transition-transform">
                  {portfolioData.publications.filter((p) => p.award).length}
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Award-Winning Papers
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-green-50 px-3 py-1 rounded-full">
                  Recognition Excellence
                </div>
              </div>

              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <BookOpen className="h-10 w-10 text-purple-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-125 transition-transform">
                  {
                    new Set(portfolioData.publications.map((p) => p.journal))
                      .size
                  }
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Different Journals
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-purple-50 px-3 py-1 rounded-full">
                  Diverse Publications
                </div>
              </div>

              <div
                className="text-center group transform transition-all duration-500 hover:scale-110"
                style={{ transitionDelay: "0.3s" }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl group-hover:animate-pulse">
                  <Calendar className="h-10 w-10 text-orange-600 group-hover:animate-bounce" />
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-3 group-hover:scale-125 transition-transform">
                  {new Date().getFullYear() -
                    Math.min(
                      ...portfolioData.publications.map((p) => parseInt(p.year))
                    )}
                  +
                </div>
                <div className="text-gray-700 font-semibold text-lg">
                  Years of Research
                </div>
                <div className="text-sm text-gray-500 mt-2 bg-orange-50 px-3 py-1 rounded-full">
                  Continuous Innovation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Professional Memberships */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Memberships
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.memberships.map((membership, index) => (
              <MembershipCard
                key={index}
                membership={membership}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Technical Events */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Technical Events & Workshops
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.technicalEvents.map((event, index) => (
              <TechnicalEventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Research Excellence Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-10 text-white relative overflow-hidden shadow-2xl">
          {/* Animated research equipment icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 animate-float opacity-20">
              <Beaker className="h-16 w-16 text-white" />
            </div>
            <div
              className="absolute bottom-10 left-10 animate-float opacity-20"
              style={{ animationDelay: "2s" }}
            >
              <Microscope className="h-20 w-20 text-white" />
            </div>
            <div
              className="absolute top-1/2 right-20 animate-float opacity-20"
              style={{ animationDelay: "1s" }}
            >
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
          </div>

          <div className="relative">
            <div className="text-center mb-12">
              <div className="flex justify-center items-center mb-6">
                <Compass className="h-8 w-8 text-white mr-3" />
                <h2 className="text-4xl font-bold">
                  Research Excellence Areas
                </h2>
                <Beaker className="h-8 w-8 text-white ml-3" />
              </div>
              <p className="text-blue-100 text-xl max-w-3xl mx-auto">
                Each research project contributes to advancing sustainable
                construction practices and innovative engineering solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ transitionDelay: "0.1s" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Microscope className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Research Excellence</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Peer-Reviewed Publications
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    International Conference Papers
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Research Methodology Design
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Data Analysis & Interpretation
                  </li>
                </ul>
              </div>

              <div
                className="bg-white/15 rounded-xl p-8 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ transitionDelay: "0.2s" }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Lightbulb className="h-6 w-6 text-white group-hover:animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold">Innovation Impact</h3>
                </div>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Industry Collaboration Projects
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Professional Development Programs
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Technical Workshop Leadership
                  </li>
                  <li className="flex items-center hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" />
                    Knowledge Transfer Initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-20 bg-white rounded-2xl shadow-2xl p-10 text-center relative overflow-hidden border-t-4 border-gradient-to-r from-blue-500 to-green-500">
          {/* Background research pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Lightbulb className="w-full h-full text-blue-600" />
          </div>

          <div className="relative">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <Users className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Interested in Research Collaboration?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always open to collaborating on research projects, sharing
              knowledge, and contributing to the advancement of sustainable
              construction practices and innovative engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Beaker className="h-5 w-5 mr-2" />
                Propose Collaboration
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Lightbulb className="h-5 w-5 mr-2" />
                Discuss Research Ideas
              </a>
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

export default Research;
