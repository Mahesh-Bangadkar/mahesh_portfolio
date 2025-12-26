import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-slate-800/50 p-8 md:p-12 rounded-2xl border border-slate-700 backdrop-blur-sm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon-DEFAULT/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-neon-DEFAULT pl-4">About Me</h2>
        
        <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
          <p>{PERSONAL_INFO.about}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-700">
             <div>
                <span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Education</span>
                <p className="font-semibold text-white">B.Tech (Electronics & Communication)</p>
                <p className="text-sm text-neon-DEFAULT">RTM Nagpur University (2022-2026)</p>
             </div>
             <div>
                <span className="block text-sm text-slate-500 uppercase tracking-wider mb-1">Achievements</span>
                <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
                    <li>President - Electromatix forum</li>
                    <li>Winner -  Paper Presentation TEKNO2023</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;