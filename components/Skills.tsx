import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Briefcase, Cpu, Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes("Weapons")) return <Terminal className="text-sky-400" />;
    if (category.includes("Gear")) return <Briefcase className="text-green-400" />;
    return <Cpu className="text-purple-400" />;
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-900/5 -skew-x-12 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-16">
           <h2 className="text-2xl md:text-3xl font-bold text-sky-500 tracking-widest uppercase">
             <span className="text-slate-500 mr-2">04.</span> Inventory / Loadout
           </h2>
           <div className="h-px bg-slate-800 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-slate-900 border border-slate-800 p-6 rounded-lg hover:border-sky-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-800 to-transparent opacity-20 group-hover:from-sky-900/50 transition-all"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-slate-950 rounded border border-slate-800 group-hover:border-sky-500/30 transition-colors">
                    {getIcon(skillSet.category)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">{skillSet.category}</h3>
                </div>

                <div className="space-y-3">
                  {skillSet.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800/50 hover:border-slate-700 transition-colors">
                      <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors">
                        {item}
                      </span>
                      
                      {/* Aug Easter Egg */}
                      {item.includes("AUG") || item.includes("Python") ? (
                        <div className="w-2 h-2 rounded-full bg-aug-scope shadow-[0_0_8px_#39FF14]"></div>
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-sky-500/50"></div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-800 group-hover:bg-sky-500 transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-xs text-slate-500 font-mono">
             * AUG_SCOPED loadout equipped. Holding ramp.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
