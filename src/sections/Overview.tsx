import React, { useState, useRef, useEffect } from 'react';
import BlurText from '../components/BlurText';

export const Overview: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedIndexRef = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const isThrottled = useRef(false);
  
  selectedIndexRef.current = selectedIndex;

  const reasons = [
    {
      id: "01",
      title: "Build a practical solution",
      shortTitle: "Practical Solution",
      description: "Move beyond theory. Spend the day building a working prototype that solves a real-world problem."
    },
    {
      id: "02",
      title: "Work with a focused team",
      shortTitle: "Focused Team",
      description: "Collaborate intensively with peers. Test your ability to delegate, integrate, and execute under pressure."
    },
    {
      id: "03",
      title: "Present ideas and implementation",
      shortTitle: "Presentation",
      description: "Code is only half the battle. Defend your technical decisions and present your vision to evaluators."
    },
    {
      id: "04",
      title: "Receive feedback from evaluators",
      shortTitle: "Expert Feedback",
      description: "Gain direct, actionable insights from experienced mentors to strengthen your problem-solving skills."
    }
  ];



  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    
    const handleWheel = (e: WheelEvent) => {
      const atTop = selectedIndexRef.current === 0;
      const atBottom = selectedIndexRef.current === reasons.length - 1;

      // Prevent page scroll only if we are actively cycling options
      if ((e.deltaY > 10 && !atBottom) || (e.deltaY < -10 && !atTop)) {
        e.preventDefault(); 
      }

      if (isThrottled.current) return;

      if (e.deltaY > 10 && !atBottom) {
        setSelectedIndex(prev => prev + 1);
        isThrottled.current = true;
        setTimeout(() => { isThrottled.current = false; }, 400);
      } else if (e.deltaY < -10 && !atTop) {
        setSelectedIndex(prev => prev - 1);
        isThrottled.current = true;
        setTimeout(() => { isThrottled.current = false; }, 400);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [reasons.length]);

  return (
    <section id="overview" className="w-full bg-background-light text-text-dark px-6 py-20 md:py-32 border-b border-border">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-text-dark/10 pb-16">
          <div className="md:w-1/3">
            <h2 className="font-display text-fluid-section uppercase leading-none m-0 p-0">
              The <br/><span className="text-accent">Objective</span>
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col gap-6 font-body text-fluid-sub">
            <BlurText 
              text="Hack4Impact is an intensive one-day crucible designed for computer science and engineering students."
              delay={50}
              animateBy="words"
              direction="bottom"
              className="m-0"
            />
            <p className="text-text-muted text-xl md:text-2xl max-w-2xl">
              We bring together the most driven minds to conceptualize, develop, and pitch technical solutions. No fluff, just focused execution and peer collaboration.
            </p>
          </div>
        </div>

        {/* Reasons to Participate - OptionWheel */}
        <div className="flex flex-col">
          <div className="font-mono uppercase text-sm mb-8 flex items-center gap-4">
            <span className="w-3 h-3 bg-accent border border-text-dark inline-block"></span>
            Why Participate
          </div>
          {/* Mobile Grid Layout (Restored) */}
          <div className="grid grid-cols-2 md:hidden gap-x-4 sm:gap-x-8 gap-y-12">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex flex-col gap-4 border-t border-text-dark/20 pt-6">
                <div className="flex flex-col gap-2">
                  <div className="text-accent font-display text-5xl sm:text-6xl leading-none">
                    {reason.id}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl uppercase leading-tight">
                    {reason.title}
                  </h3>
                </div>
                <p className="font-body text-sm sm:text-base text-text-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop OptionWheel Layout */}
          <div className="hidden md:flex flex-row gap-12 items-center min-h-[400px]">
            {/* Custom Interactive List */}
            <div ref={listRef} className="w-1/2 h-[400px] relative overflow-hidden p-8 flex flex-col justify-center gap-6 border-r border-text-dark/10">
              {reasons.map((reason, index) => (
                <button
                  key={reason.id}
                  onClick={() => setSelectedIndex(index)}
                  className={`text-left text-3xl md:text-4xl font-display uppercase transition-all duration-300 ${
                    selectedIndex === index 
                      ? 'text-text-dark font-bold pl-4 border-l-4 border-accent' 
                      : 'text-text-muted hover:text-text-dark/70 hover:pl-2'
                  }`}
                >
                  {reason.shortTitle}
                </button>
              ))}
            </div>
            
            {/* Content Section */}
            <div className="w-1/2 flex flex-col justify-center gap-6 p-6">
              <div className="text-accent font-display text-[8rem] leading-none transition-all duration-500">
                {reasons[selectedIndex].id}
              </div>
              <h3 className="font-display text-5xl uppercase text-text-dark max-w-[90%] transition-all duration-300">
                {reasons[selectedIndex].title}
              </h3>
              <p className="font-body text-xl text-text-muted max-w-md transition-all duration-300">
                {reasons[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
