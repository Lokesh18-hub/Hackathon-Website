import React, { useRef, useEffect } from 'react';
import { Shield, Coins, HeartPulse, Sparkles, Globe, Cpu, ArrowRight } from 'lucide-react';

export const Themes: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // Only handle vertical scroll
      if (e.deltaY === 0) return;
      
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      
      // If we can scroll horizontally in the direction of the wheel, prevent page scroll and scroll the container
      if (
        (e.deltaY > 0 && Math.ceil(el.scrollLeft) < maxScrollLeft) ||
        (e.deltaY < 0 && el.scrollLeft > 0)
      ) {
        e.preventDefault();
        // Scroll amount is roughly the width of one card (50% of the container)
        const scrollAmount = el.clientWidth / 2;
        el.scrollBy({ left: e.deltaY > 0 ? scrollAmount : -scrollAmount, behavior: 'smooth' });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

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

  return (
    <section id="themes" className="w-full bg-background-light text-text-dark px-6 py-20 md:py-32 border-b border-border relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-text-dark/10 pb-8">
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
            Choose a track that aligns with your expertise. Build solutions that push boundaries.
          </p>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex flex-col items-center w-full mt-8 md:mt-12">
          <div 
            ref={scrollRef}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 md:max-w-[750px] w-full" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
            {themes.map((theme) => (
              <div 
                key={theme.id} 
                className="group relative bg-white border border-text-dark/10 p-6 md:p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-black w-[85vw] h-[85vw] sm:w-[350px] sm:h-[350px] shrink-0 snap-center md:snap-start rounded-[24px]"
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
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-3 text-black mt-6 font-mono text-xs sm:text-sm uppercase tracking-wider w-full">
            <span>Scroll to explore</span>
            <ArrowRight size={16} />
          </div>
        </div>

      </div>
    </section>
  );
};
