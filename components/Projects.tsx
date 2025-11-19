import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Folder, Github, ExternalLink, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-sky-500 tracking-widest uppercase">
             <span className="text-slate-500 mr-2">03.</span> Mission Files
           </h2>
           <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-slate-900 border border-slate-800 hover:border-green-500/40 rounded-md p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-800 rounded-md text-sky-400 group-hover:text-green-400 transition-colors">
                  <Folder size={24} />
                </div>
                <div className="flex gap-3">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-mono text-slate-500 px-2 py-1 border border-slate-800 rounded">
                  {project.type}
                </span>
                <span className="text-xs font-mono text-slate-500 px-2 py-1 border border-slate-800 rounded">
                  {project.period}
                </span>
              </div>

              <ul className="space-y-2 mb-6">
                {project.points.slice(0, 3).map((point, idx) => (
                  <li key={idx} className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                    &gt; {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-sky-500/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
