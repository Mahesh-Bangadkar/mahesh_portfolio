import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { IconDownload, IconGithub, IconMail } from './Icons';
import { ReactTyped } from "react-typed";

const Hero: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
      {/* Left Content */}
      <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
        <div className="inline-block px-3 py-1 rounded-full border border-neon-DEFAULT/30 bg-neon-DEFAULT/10 text-neon-DEFAULT text-sm font-mono mb-2">
          Hello, I'm
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          {PERSONAL_INFO.name.split(" ")[0]} <br className="hidden md:block" />
          <span className=" bg-clip-text bg-gradient-to-r from-neon-DEFAULT to-neon-glow">
            {PERSONAL_INFO.name.split(" ")[1]}
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
  <ReactTyped
    strings={[
      "Web Developer",
      "AI Tools Builder",
      "Electronics Engineer",
      "Teacher and Mentor"
    ]}
    typeSpeed={50}
    backSpeed={30}
    loop
  />
</h2>

        <p className="text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          Combining technical expertise in Web Technologies and Embedded Systems with a passion for teaching and leadership.
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-neon-DEFAULT text-neon-dark font-bold rounded hover:bg-neon-glow transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf" // Ideally link to actual resume file
            className="px-8 py-3 border border-slate-700 text-slate-300 font-bold rounded hover:border-neon-DEFAULT hover:text-neon-DEFAULT transition-all duration-300 flex items-center gap-2"
          >
            <IconDownload className="w-4 h-4" /> Download CV
          </a>
        </div>

        <div className="flex gap-6 justify-center lg:justify-start pt-8 text-slate-500">
           <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-neon-DEFAULT transition-colors">
              <IconMail className="w-6 h-6" />
           </a>
            {/* Placeholder for GitHub if available, using a generic link */}
           <a href="https://github.com/Mahesh-Bangadkar"  target="_blank" className="hover:text-neon-DEFAULT transition-colors" >
              <IconGithub className="w-6 h-6"  /> </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Neon Glow Circle Background */}
          <div className="absolute inset-0 bg-neon-DEFAULT rounded-full blur-[80px] opacity-20 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl z-10">
            <img 
              src="\Mahesh.jpg" 
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover  hover:grayscale-0 transition-all duration-500"
            />
            {/* Overlay for tint */}
            <div className="absolute inset-0 bg-neon-glow mix-blend-overlay opacity-20"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-neon-DEFAULT rounded-tr-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-neon-DEFAULT rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;