import React from 'react';
import { ACHIEVEMENTS } from '../constants';
import { Award, Trophy, TrendingUp } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-500 uppercase tracking-widest mb-4">Service Medals</h2>
          <p className="text-slate-400">Scholastic & Competitive Stats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, index) => (
            <div key={index} className="bg-slate-900/30 border border-slate-800 p-6 rounded-lg flex flex-col items-center text-center hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-sky-500/50">
                {index === 0 ? <TrendingUp className="text-green-400" /> : 
                 index === 1 ? <Award className="text-yellow-400" /> : 
                 <Trophy className="text-sky-400" />}
              </div>
              
              <h3 className="text-lg font-bold text-slate-200 mb-1">{ach.title}</h3>
              {ach.rank && <span className="text-sky-400 font-mono text-sm mb-3 block">{ach.rank}</span>}
              <p className="text-sm text-slate-500 leading-relaxed">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
