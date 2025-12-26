import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Work <span className="text-neon-DEFAULT">Experience</span></h2>
      
      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-neon-DEFAULT shadow-[0_0_10px_theme('colors.neon.DEFAULT')]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm font-mono text-neon-DEFAULT bg-neon-dark/50 px-2 py-1 rounded border border-neon-DEFAULT/20 mt-1 sm:mt-0 w-fit">
                {exp.duration}
              </span>
            </div>
            
            <div className="text-lg text-slate-400 font-medium mb-3">{exp.company}</div>
            
            <p className="text-slate-500 leading-relaxed">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;