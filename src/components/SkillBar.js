// src/components/SkillBar.js
import React, { useState, useEffect } from 'react';

const SkillBar = ({ skill, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-500 to-emerald-600';
    if (level >= 80) return 'from-blue-500 to-blue-600';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-red-600';
  };

  const getSkillTextColor = (level) => {
    if (level >= 90) return 'text-green-600';
    if (level >= 80) return 'text-blue-600';
    if (level >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
          <p className="text-sm text-gray-500">{skill.category}</p>
        </div>
        <span className={`text-lg font-bold ${getSkillTextColor(skill.level)}`}>
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-3 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        >
          {animated && skill.level > 20 && (
            <div className="text-white text-xs font-medium">
              {skill.level}%
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-2 flex justify-between text-xs text-gray-400">
        <span>Beginner</span>
        <span>Expert</span>
      </div>
    </div>
  );
};

export default SkillBar;