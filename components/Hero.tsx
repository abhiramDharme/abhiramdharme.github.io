import React from 'react';
import { motion } from 'framer-motion';
import { Crosshair, Download, ChevronDown } from 'lucide-react';
import { PERSONAL_DETAILS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      
      {/* Radar/Grid Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-sky-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="max-w-5xl w-full px-4 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/30 border border-sky-700/50 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-sky-300 tracking-wider">SYSTEM ONLINE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              <span className="text-slate-100">Abhiram</span>
              <span className="text-sky-500">.dev</span>
            </h1>
            
            <div className="h-8 mb-6 overflow-hidden text-xl md:text-2xl text-slate-400 font-light">
              <span className="mr-2 text-green-500">$</span>
              {PERSONAL_DETAILS.tagline}
              <span className="animate-pulse inline-block w-2 h-5 ml-1 bg-green-500 align-middle"></span>
            </div>

            <p className="text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Currently studying at <strong className="text-slate-200">IIT Delhi</strong>. 
              Specializing in holding the angle with <span className="text-sky-400">C++</span> and rushing B (sites) with <span className="text-sky-400">Machine Learning</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-sm font-medium transition-all flex items-center gap-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <Crosshair size={18} />
                Start Mission
              </a>
              
              <a 
                href="#"
                className="px-8 py-3 border border-slate-700 hover:border-sky-500/50 text-slate-300 hover:text-sky-400 rounded-sm font-medium transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download Intel (CV)
              </a>
            </div>
          </motion.div>

          {/* Visual Element - Nerdy Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full max-w-md relative hidden md:block"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-sky-500 to-green-500 rounded-lg blur opacity-30 animate-pulse"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-auto text-xs text-slate-500">main.cpp</span>
              </div>
              <pre className="text-xs leading-5">
                <code className="language-cpp">
                  <span className="text-purple-400">class</span> <span className="text-yellow-200">Engineer</span> {'{'}
{'\n'}  <span className="text-purple-400">public</span>:
{'\n'}    <span className="text-sky-400">string</span> name = <span className="text-green-400">"Abhiram"</span>;
{'\n'}    <span className="text-sky-400">int</span> rank = <span className="text-orange-400">1055</span>; <span className="text-slate-500">// JEE Adv</span>
{'\n'}    <span className="text-sky-400">Weapon</span> fav = <span className="text-red-400">AUG_SCOPED</span>;
{'\n'}
{'\n'}    <span className="text-blue-400">void</span> <span className="text-yellow-200">defuseBugs</span>() {'{'}
{'\n'}      <span className="text-purple-400">while</span>(<span className="text-orange-400">true</span>) {'{'}
{'\n'}        code();
{'\n'}        coffee();
{'\n'}      {'}'}
{'\n'}    {'}'}
{'\n'}{'}'};
                </code>
              </pre>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-700 p-3 rounded-md shadow-lg flex items-center gap-3">
               <div className="text-left">
                  <p className="text-[10px] text-slate-400 uppercase">Current Status</p>
                  <p className="text-xs font-bold text-green-400">Codeforces: 1672</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-600">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
