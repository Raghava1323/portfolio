// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Civil Portfolio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Advancing sustainable construction through innovative research and practical engineering solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href={`mailto:${portfolioData.personal.email}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${portfolioData.personal.phone}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href={`https://linkedin.com/in/${portfolioData.personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Expertise Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>• Sustainable Construction Materials</li>
              <li>• Structural Analysis & Design</li>
              <li>• Environmental Engineering</li>
              <li>• Academic Research & Teaching</li>
              <li>• Project Management</li>
            </ul>
          </div>
          
          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/projects"
                  className="hover:text-white transition-colors"
                >
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/research"
                  className="hover:text-white transition-colors"
                >
                  Research Publications
                </Link>
              </li>
              <li>
                <Link 
                  to="/experience"
                  className="hover:text-white transition-colors"
                >
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {portfolioData.personal.email}
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {portfolioData.personal.phone}
              </p>
              <p className="text-sm">
                Currently pursuing MS in Civil Engineering at Wayne State University, Detroit, MI
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 {portfolioData.personal.name}. Professional Civil Engineering Portfolio.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;