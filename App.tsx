import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Navbar from './components/Navbar';
import CreativeWork from "./components/CreativeWork";
import { Toaster } from "react-hot-toast";

<Toaster position="bottom-right" />



const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neon-dark text-slate-300 selection:bg-neon-DEFAULT selection:text-neon-dark overflow-x-hidden">
      <Navbar />
      
      <main className="container mx-auto px-4 md:px-6 space-y-24 pb-24">
        <section id="home" className="min-h-screen flex items-center pt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="creative-work" className="scroll-mt-24">
            <CreativeWork />
          </section>


        <section id="contact" className="scroll-mt-24 mb-20">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Mahesh Bangadkar. Built with React & Tailwind.</p>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;