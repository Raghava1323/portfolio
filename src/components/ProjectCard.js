// src/components/ProjectCard.js
import React from 'react';
import { Calendar, Target, Award, Wrench } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case 'Research':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Industrial':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Academic':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Research':
        return <Target className="h-4 w-4" />;
      case 'Industrial':
        return <Wrench className="h-4 w-4" />;
      case 'Academic':
        return <Award className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
              {getCategoryIcon(project.category)}
              <span className="ml-1">{project.category}</span>
            </span>
            <span className="flex items-center text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              {project.duration}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {project.title}
          </h3>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Impact */}
      <div className="border-t pt-4">
        <div className="flex items-start space-x-2">
          <div className="flex-shrink-0 mt-1">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Project Impact:</p>
            <p className="text-sm text-green-600 font-medium">
              {project.impact}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Effect Indicator */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProjectCard;