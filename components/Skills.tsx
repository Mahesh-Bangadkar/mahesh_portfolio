import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Technical <span className="text-neon-DEFAULT">Skills</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((category, index) => (
          <div 
            key={index} 
            className="group p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-neon-DEFAULT/50 transition-all duration-300 hover:bg-slate-800/60"
          >
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-neon-DEFAULT transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-slate-900 rounded border border-slate-700 text-sm text-slate-300 group-hover:border-neon-DEFAULT/30 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;