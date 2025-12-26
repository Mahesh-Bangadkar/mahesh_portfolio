import React from 'react';
import { PROJECTS } from '../constants';
import { IconGithub } from './Icons';

const Projects: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Featured <span className="text-neon-DEFAULT">Projects</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-neon-DEFAULT/50 transition-all duration-300 flex flex-col h-full"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-neon-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="p-6 flex flex-col h-full relative z-10">
              <div className="mb-4">
                 <h3 className="text-xl font-bold text-white group-hover:text-neon-DEFAULT transition-colors mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs font-mono text-neon-glow bg-neon-dark px-2 py-1 rounded border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <a href="#" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-sm">
                  <IconGithub className="w-4 h-4" /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;