import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Establish Comms</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Whether you want to discuss Kernel extensions, rush B, or just talk aviation, my radio is on.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          <a href={PERSONAL_DETAILS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-sky-400 transition-transform hover:-translate-y-1">
            <Github size={24} />
          </a>
          <a href={PERSONAL_DETAILS.linkedin} className="text-slate-400 hover:text-sky-400 transition-transform hover:-translate-y-1">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-slate-400 hover:text-sky-400 transition-transform hover:-translate-y-1">
            <Mail size={24} />
          </a>
        </div>

        <div className="inline-block p-4 border border-slate-800 rounded-lg bg-slate-900/50 mb-12 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-green-400">Radio Check: Signal Strong (5/5)</span>
          </div>
        </div>

        <div className="text-xs text-slate-600 font-mono">
          <p>Designed & Built by {PERSONAL_DETAILS.name}</p>
          <p className="mt-2">System.exit(0); // Have a great day</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
