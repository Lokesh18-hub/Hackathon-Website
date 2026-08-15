import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'motion/react';
import { Shield, Coins, HeartPulse, Sparkles, Globe, Cpu, ArrowRight } from 'lucide-react';

const themes = [
  {
    id: "T1",
    title: "FinTech & Web3",
    icon: <Coins size={44} strokeWidth={1.5} />,
    description: "Decentralized finance, smart contracts, micro-payments, and financial inclusion tools."
  },
  {
    id: "T2",
    title: "Healthcare",
    icon: <HeartPulse size={44} strokeWidth={1.5} />,
    description: "Telemedicine, AI diagnostics, health tracking, and hospital management solutions."
  },
  {
    id: "T3",
    title: "Cybersecurity",
    icon: <Shield size={44} strokeWidth={1.5} />,
    description: "Threat detection, privacy preserving tools, encryption protocols, and zero-trust architecture."
  },
  {
    id: "T4",
    title: "EdTech",
    icon: <Globe size={44} strokeWidth={1.5} />,
    description: "Personalized learning paths, interactive platforms, and accessibility in education."
  },
  {
    id: "T5",
    title: "AI & Automation",
    icon: <Cpu size={44} strokeWidth={1.5} />,
    description: "Agentic workflows, machine learning models, and robotic process automation tools."
  },
  {
    id: "T6",
    title: "Open Innovation",
    icon: <Sparkles size={44} strokeWidth={1.5} />,
    description: "Any problem, any solution. Build completely outside the box with no domain constraints."
  }
];

export const Themes: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="themes" ref={targetRef} className="relative h-[300vh] w-full bg-background-light">
      <div className="sticky top-0 flex h-screen flex-col items-center overflow-hidden border-b border-border py-12 md:py-24">
        
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col relative z-10">
          {/* Header */}
          <div className="mb-8 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-text-dark/10 pb-8">
            <div>
              <div className="font-mono uppercase text-sm mb-6 flex items-center gap-4 text-text-muted">
                <span className="w-3 h-3 bg-accent border border-black inline-block"></span>
                Hackathon Tracks
              </div>
              <h2 className="font-display text-fluid-section uppercase leading-none m-0 p-0 text-text-dark">
                Event <br/>
                <span className="text-accent text-[1.15em]">Themes</span>
              </h2>
            </div>
            <p className="font-body text-lg md:text-xl max-w-sm text-text-muted">
              Themes will be based on the Smart India Hackathon (SIH) problem statements that will be released. Participants can select and work on a problem statement from the released SIH themes.
            </p>
          </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex w-full items-center pl-6 max-w-7xl mx-auto flex-1">
          <motion.div style={{ x }} className="flex gap-4 md:gap-8 pr-12">
            {themes.map((theme) => (
              <div 
                key={theme.id} 
                className="group relative bg-white border border-text-dark/10 p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black w-[80vw] h-[80vw] sm:w-[350px] sm:h-[350px] shrink-0 rounded-[24px]"
              >
                {/* Background Accent Hover reveal */}
                <div className="absolute top-0 left-0 w-full h-0 bg-accent transition-all duration-500 ease-out group-hover:h-full z-0"></div>
                
                <div className="absolute top-6 right-6 font-mono text-sm uppercase text-text-muted group-hover:text-black transition-colors duration-300 z-10">
                  {theme.id}
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-accent border border-black rounded-full flex items-center justify-center transition-colors duration-500 group-hover:bg-black group-hover:text-accent text-black mb-6 sm:mb-8">
                    {theme.icon}
                  </div>
                  <h3 className="font-display text-3xl md:text-3xl uppercase text-black mb-2 sm:mb-3 transition-colors duration-300 leading-tight">
                    {theme.title}
                  </h3>
                  <p className="font-body text-base md:text-base text-text-muted transition-colors duration-300 group-hover:text-black/80 max-w-[280px]">
                    {theme.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <div className="flex items-center justify-center gap-3 text-black mt-8 font-mono text-xs sm:text-sm uppercase tracking-wider w-full">
          <span>Scroll down to explore</span>
          <ArrowRight size={16} className="rotate-90" />
        </div>

      </div>
    </section>
  );
};
