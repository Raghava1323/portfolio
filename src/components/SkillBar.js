// src/components/SkillBar.js
import React, { useState, useEffect } from 'react';

const SkillBar = ({ skill, delay = 0 }) => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="card-3d p-5">
      <div className="flex justify-between items-center mb-3">
        <div>
          <span className="text-lg font-bold text-civil-700">{skill.name}</span>
          <p className="text-sm text-slate-400 font-medium">{skill.category}</p>
        </div>
        <span className="text-xl font-black text-civil-500">
          {skill.level}%
        </span>
      </div>

      <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-civil-500 to-civil-400 h-3 rounded-full transition-all duration-1000 ease-out shadow-[0_2px_8px_rgba(37,99,235,0.3)]"
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
