import React from 'react';

export const Journey: React.FC = () => {
  const stages = [
    {
      id: "01",
      title: "Registration",
      description: "Submit your team details and primary technical stack. Ensure all members meet the eligibility criteria before the deadline.",
      status: "active" // This could be dynamic based on date
    },
    {
      id: "02",
      title: "Team Shortlisting",
      description: "Our technical panel reviews initial submissions. Only the top teams with viable concepts proceed to the next stage.",
      status: "upcoming"
    },
    {
      id: "03",
      title: "PPT Presentation",
      description: "Present your blueprint. Defend your technical architecture, expected challenges, and proposed implementation strategy.",
      status: "upcoming"
    },
    {
      id: "04",
      title: "Final Project Display",
      description: "The 24-hour build phase concludes. Demonstrate your working prototype to the judges and general attendees.",
      status: "upcoming"
    }
  ];

  return (
    <section id="journey" className="w-full bg-background-dark text-text-light px-6 py-20 md:py-32 border-b border-border relative overflow-hidden">
      <div className="w-full max-w-4xl mx-auto flex flex-col relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-display text-fluid-section uppercase leading-none m-0 p-0 text-text-light">
            The <span className="text-accent">Journey</span>
          </h2>
          <div className="font-mono uppercase text-sm mt-6 flex items-center gap-4 text-text-muted">
            <span className="w-3 h-3 bg-accent border border-text-dark inline-block"></span>
            ROADMAP TO DEPLOYMENT
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-8 md:pl-0">
          {/* Lime Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-[35%] bg-accent"></div>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;
              const isActive = stage.status === "active";
              
              return (
                <div key={stage.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node (Mobile: left, Desktop: center) */}
                  <div className="absolute -left-[37px] md:left-1/2 top-2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center z-10 bg-background-dark py-4">
                    <div className={`w-4 h-4 border-2 ${isActive ? 'border-accent bg-accent' : 'border-border bg-background-dark'} rounded-none transition-colors duration-300`}>
                      {isActive && <div className="absolute inset-0 bg-accent animate-ping opacity-50 rounded-none"></div>}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex flex-col gap-2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'} pl-6 md:pl-0`}>
                    
                    <div className="font-display text-5xl md:text-7xl text-text-light opacity-50 select-none">
                      {stage.id}
                    </div>
                    
                    <h3 className={`font-display text-3xl md:text-4xl uppercase tracking-wide mt-2 ${isActive ? 'text-accent' : 'text-text-light'}`}>
                      {stage.title}
                    </h3>
                    
                    <p className="font-body text-text-muted text-lg mt-2 max-w-sm ${isEven ? '' : 'md:ml-auto'}">
                      {stage.description}
                    </p>
                    
                    {/* Status Label */}
                    <div className={`font-mono text-xs uppercase mt-4 inline-block px-2 py-1 border ${isActive ? 'border-accent text-accent' : 'border-border text-text-muted'} self-start ${isEven ? '' : 'md:self-end'}`}>
                      {stage.status}
                    </div>
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
