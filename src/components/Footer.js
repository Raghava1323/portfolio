// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BuildingIcon, MailIcon, PhoneIcon, LinkedInIcon } from '../components/CivilIcons';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="dark-section text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="icon-gradient w-10 h-10 rounded-xl flex items-center justify-center">
                <BuildingIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">Civil Portfolio</span>
            </div>
            <p className="text-civil-300 text-base leading-relaxed">
              Advancing sustainable construction through innovative research and practical engineering solutions.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-civil-300 hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <MailIcon className="h-5 w-5" />
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="text-civil-300 hover:text-white transition-colors duration-200"
                aria-label="Phone"
              >
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-civil-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Expertise Section */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-5">
              Expertise
            </h4>
            <ul className="space-y-3">
              {[
                'Sustainable Construction Materials',
                'Structural Analysis & Design',
                'Environmental Engineering',
                'Academic Research & Teaching',
                'Project Management',
              ].map((item) => (
                <li
                  key={item}
                  className="text-civil-300 text-base hover:text-white transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/projects', label: 'Featured Projects' },
                { to: '/research', label: 'Research Publications' },
                { to: '/experience', label: 'Professional Experience' },
                { to: '/contact', label: 'Contact Information' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-civil-300 text-base hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-base font-bold uppercase tracking-wider mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-3 text-civil-300 text-base hover:text-white transition-colors duration-200"
              >
                <MailIcon className="h-4 w-4 flex-shrink-0" />
                <span>{portfolioData.personal.email}</span>
              </a>
              <a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center space-x-3 text-civil-300 text-base hover:text-white transition-colors duration-200"
              >
                <PhoneIcon className="h-4 w-4 flex-shrink-0" />
                <span>{portfolioData.personal.phone}</span>
              </a>
              <p className="text-civil-300 text-base leading-relaxed pt-1">
                Currently pursuing MS in Civil Engineering at Wayne State University, Detroit, MI
              </p>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-civil-300 text-sm">
              &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
            </p>
            <p className="text-civil-300 text-sm">
              Engineered with precision, built for impact.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
