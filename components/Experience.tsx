import React from 'react';
import { motion } from 'framer-motion';
import { INTERNSHIPS } from '../constants';
import { Plane, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
           <div className="h-px bg-slate-800 flex-1"></div>
           <h2 className="text-2xl md:text-3xl font-bold text-sky-500 tracking-widest uppercase">
             <span className="text-slate-500 mr-2">02.</span> Flight Logs
           </h2>
           <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="space-y-12">
          {INTERNSHIPS.map((internship, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line for Desktop */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>
              
              {/* Plane Icon */}
              <div className="hidden md:flex absolute left-[50%] top-0 -translate-x-1/2 w-12 h-12 bg-slate-900 border border-sky-500/30 rounded-full items-center justify-center text-sky-400 z-10">
                <Plane size={20} className="rotate-45" />
              </div>

              <div className={`md:flex items-start justify-between gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                   <h3 className="text-xl font-bold text-slate-100">{internship.company}</h3>
                   <p className="text-sky-400 font-mono text-sm mb-2">{internship.team}</p>
                   <div className={`flex items-center gap-4 text-slate-500 text-xs mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                     <span className="flex items-center gap-1"><Calendar size={12}/> {internship.period}</span>
                     <span className="flex items-center gap-1"><MapPin size={12}/> India</span>
                   </div>
                </div>

                <div className="flex-1 md:pt-2">
                  <div className="bg-slate-900/50 border border-slate-800 p-6 rounded hover:border-sky-500/30 transition-colors">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">{internship.role}</h4>
                    <ul className="space-y-3">
                      {internship.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-400">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
