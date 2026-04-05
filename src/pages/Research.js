// src/pages/Research.js

import {
  BookIcon,
  CalendarIcon,
  AwardIcon,
  ExternalLinkIcon,
  TeamIcon,
  DocumentIcon,
  TrophyIcon,
  TargetIcon,
  ResearchIcon,
  LightbulbIcon,
  CheckIcon,
} from "../components/CivilIcons";
import { portfolioData } from "../data/portfolioData";
import { ScrollReveal, AnimatedCounter } from '../hooks/useScrollAnimation';

const Research = () => {
  const PublicationCard = ({ publication }) => {
    return (
      <div className="card-3d card-shine bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 p-10 border-t-2 border-t-civil-500">
        <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <div className="icon-3d p-4 rounded-2xl flex items-center justify-center">
              <DocumentIcon className="h-6 w-6 text-civil-500" />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-civil-700 mb-3 leading-snug">
              {publication.title}
            </h3>

            <div className="flex flex-wrap items-center gap-3 text-sm mb-3">
              <span className="badge inline-flex items-center">
                <BookIcon className="h-4 w-4 mr-1.5" />
                {publication.journal}
              </span>
              <span className="badge inline-flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1.5" />
                {publication.year}
              </span>
            </div>

            {publication.volume && (
              <p className="text-lg text-slate-600 mb-3">
                {publication.volume}
              </p>
            )}

            {publication.doi && (
              <div className="mb-3">
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-civil-500 hover:text-civil-700 text-lg font-medium transition-colors duration-200"
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-1.5" />
                  View Publication
                </a>
              </div>
            )}

            {publication.award && (
              <div className="inline-flex items-center text-lg font-medium bg-amber-50 text-amber-700 px-3 py-1.5 rounded-lg border border-amber-200">
                <TrophyIcon className="h-4 w-4 mr-2 text-amber-600" />
                {publication.award}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const MembershipCard = ({ membership }) => {
    return (
      <div className="card-3d card-shine bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 p-10">
        <div className="flex items-center space-x-4">
          <div className="icon-3d w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0">
            <TeamIcon className="h-5 w-5 text-civil-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-civil-700 mb-1">
              {membership.organization}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <span className="text-lg font-medium text-civil-500">
                {membership.type}
              </span>
              <span className="text-lg text-slate-600">
                {membership.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TechnicalEventCard = ({ event }) => {
    return (
      <div className="card-3d card-shine bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 p-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-civil-700 flex-1 pr-3">
            {event.title}
          </h3>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ${
              event.type === "Organized"
                ? "bg-civil-50 text-civil-700"
                : "bg-slate-100 text-slate-600"
            }`}
          >
            {event.type}
          </span>
        </div>

        <p className="text-lg text-slate-600 mb-3 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center text-lg text-slate-600">
          <CalendarIcon className="h-4 w-4 mr-1.5 text-civil-500" />
          {event.date}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16 bg-blueprint relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-orb w-96 h-96 top-20 -left-48 bg-civil-400/20"></div>
      <div className="glow-orb w-80 h-80 top-1/3 -right-40 bg-civil-500/15"></div>
      <div className="glow-orb w-72 h-72 bottom-40 left-1/4 bg-civil-300/15"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Page Header */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-6xl font-black text-civil-700 mb-4">
              Research & Publications
            </h1>
            <div className="w-20 h-1 bg-civil-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Contributing to the advancement of sustainable construction through
              rigorous research, peer-reviewed publications, and active
              participation in the civil engineering community.
            </p>
          </div>
        </ScrollReveal>

        {/* Research Focus Areas */}
        <div className="py-24 mb-24">
          <h2 className="text-4xl font-black text-civil-700 text-center mb-2">
            Research Focus Areas
          </h2>
          <div className="section-divider mx-auto mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TargetIcon,
                title: "Sustainable Materials",
                description: "Research on eco-friendly construction materials, waste utilization in concrete, and environmental impact reduction techniques.",
              },
              {
                icon: AwardIcon,
                title: "High-Performance Concrete",
                description: "Development and testing of high-performance concrete mixtures using alternative aggregates and sustainable additives.",
              },
              {
                icon: ResearchIcon,
                title: "Structural Analysis",
                description: "Advanced structural analysis techniques, fiber-reinforced concrete behavior, and innovative building systems design.",
              },
            ].map((focus, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="card-3d card-shine bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 p-10 text-center border-t-2 border-t-civil-500">
                  <div className="icon-3d w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <focus.icon className="h-9 w-9 text-civil-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-civil-700 mb-3">
                    {focus.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {focus.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="py-24 mb-24">
          <h2 className="text-4xl font-black text-civil-700 text-center mb-2">
            Published Research Papers
          </h2>
          <div className="section-divider mx-auto mb-4"></div>

          <div className="space-y-5">
            {portfolioData.publications.map((publication, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <PublicationCard publication={publication} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Research Impact Dashboard */}
        <div className="py-24 mb-24">
          <h2 className="text-4xl font-black text-civil-700 text-center mb-2">
            Research Impact Dashboard
          </h2>
          <div className="section-divider mx-auto mb-4"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: DocumentIcon,
                value: portfolioData.publications.length,
                label: "Published Papers",
              },
              {
                icon: TrophyIcon,
                value: portfolioData.publications.filter((p) => p.award).length,
                label: "Award-Winning",
              },
              {
                icon: BookIcon,
                value: new Set(portfolioData.publications.map((p) => p.journal)).size,
                label: "Different Journals",
              },
              {
                icon: CalendarIcon,
                value: new Date().getFullYear() - Math.min(...portfolioData.publications.map((p) => parseInt(p.year))),
                label: "Years of Research",
                suffix: "+",
              },
            ].map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="stat-3d bg-white rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300 p-10 text-center">
                  <div className="icon-3d w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-civil-500" />
                  </div>
                  <div className="text-4xl font-black text-civil-700 mb-1">
                    <AnimatedCounter end={stat.value} />{stat.suffix || ""}
                  </div>
                  <div className="text-base font-semibold text-slate-600">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="py-24 mb-24">
          <h2 className="text-4xl font-black text-civil-700 text-center mb-2">
            Professional Memberships
          </h2>
          <div className="section-divider mx-auto mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioData.memberships.map((membership, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <MembershipCard membership={membership} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical Events */}
        <div className="py-24 mb-24">
          <h2 className="text-4xl font-black text-civil-700 text-center mb-2">
            Technical Events & Workshops
          </h2>
          <div className="section-divider mx-auto mb-4"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioData.technicalEvents.map((event, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <TechnicalEventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Research Excellence */}
        <div className="mb-24 dark-section rounded-lg p-10 text-white relative overflow-hidden">
          <ScrollReveal>
            <div className="relative">
              <h2 className="text-4xl font-black text-center mb-8">
                Research Excellence
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-civil-500 to-civil-700 shadow-[0_4px_16px_rgba(37,99,235,0.25)] rounded-lg flex items-center justify-center mr-3">
                      <ResearchIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Research Excellence</h3>
                  </div>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Peer-Reviewed Publications
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      International Conference Papers
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Research Methodology Design
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Data Analysis & Interpretation
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 bg-gradient-to-br from-civil-500 to-civil-700 shadow-[0_4px_16px_rgba(37,99,235,0.25)] rounded-lg flex items-center justify-center mr-3">
                      <LightbulbIcon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Innovation Impact</h3>
                  </div>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Industry Collaboration Projects
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Professional Development Programs
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Technical Workshop Leadership
                    </li>
                    <li className="flex items-center text-lg">
                      <CheckIcon className="h-4 w-4 mr-3 flex-shrink-0" />
                      Knowledge Transfer Initiatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="card-glass p-12 text-center">
            <h2 className="text-4xl font-black text-civil-700 mb-4">
              Interested in Research Collaboration?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              I am always open to collaborating on research projects, sharing
              knowledge, and contributing to the advancement of sustainable
              construction practices and innovative engineering solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="btn-primary inline-flex items-center justify-center"
              >
                <ResearchIcon className="h-4 w-4 mr-2" />
                Propose Collaboration
              </a>
              <a
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                <LightbulbIcon className="h-4 w-4 mr-2" />
                Discuss Research Ideas
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Research;
