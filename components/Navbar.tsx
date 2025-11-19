import React, { useState, useEffect } from 'react';
import { Plane, Terminal, Shield, FileCode, Radio } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Briefing', id: 'home', icon: <Terminal size={16} /> },
    { name: 'Flight Log', id: 'experience', icon: <Plane size={16} /> },
    { name: 'Missions', id: 'projects', icon: <FileCode size={16} /> },
    { name: 'Loadout', id: 'skills', icon: <Shield size={16} /> },
    { name: 'Comms', id: 'contact', icon: <Radio size={16} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-slate-800 py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="w-8 h-8 border-2 border-sky-500 rounded-full flex items-center justify-center group-hover:border-green-400 transition-colors">
             <span className="text-sky-500 font-bold group-hover:text-green-400">AD</span>
          </div>
          <span className="hidden sm:block text-sm font-bold tracking-wider text-slate-300 group-hover:text-white">
            Abhiram.exe
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors relative group"
            >
              {link.icon}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Indicator */}
        <div className="md:hidden text-sky-500 animate-pulse">
          <Radio size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
