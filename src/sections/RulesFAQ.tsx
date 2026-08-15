import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export const RulesFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default

  const [activeRule, setActiveRule] = useState<number>(0);
  const [animAnchor, setAnimAnchor] = useState<'sm:left-0' | 'sm:right-0' | 'sm:left-1/2 sm:-translate-x-1/2'>('sm:left-0');

  const handleRuleClick = (index: number) => {
    if (index === activeRule) return;

    if (Math.abs(index - activeRule) > 1) {
      setAnimAnchor('sm:left-1/2 sm:-translate-x-1/2'); // Randomly in between -> both sides
    } else if (index > activeRule) {
      setAnimAnchor('sm:left-0'); // Ascending -> right side
    } else {
      setAnimAnchor('sm:right-0'); // Descending -> left side
    }
    
    setActiveRule(index);
  };

  const rules = [
    {
      title: "Team Size",
      description: "Each team can have a maximum of 6 members and must include at least 1 female member. Teams may have more than one female member.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
      title: "Fresh Code & Design",
      description: "Participants may use a prototype to represent their product or project. The focus should be on clearly presenting the idea, solution, implementation, and overall concept through the PPT/presentation.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    },
    {
      title: "Theme Align",
      description: "Projects must align with one of the official hackathon themes to be eligible for prizes.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      title: "Respect",
      description: "Harassment or inappropriate behavior will result in immediate disqualification.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
    }
  ];

  const faqs = [
    { 
      question: "Who can participate?", 
      answer: "Any enrolled college student with a valid ID can participate. No professional experience is required." 
    },
    { 
      question: "How much does it cost?", 
      answer: "Zero. Registration, food, and swag are completely free for all accepted participants." 
    },
    { 
      question: "What if I don't have a team?", 
      answer: "No worries! We will host a team-building session before the hacking begins so you can find teammates with complementary skills." 
    },
    { 
      question: "What should I bring?", 
      answer: "Bring your laptop, charger, required development tools, and anything else you need to work on your project." 
    },
    { 
      question: "Who owns the intellectual property?", 
      answer: "You do! You and your team retain full ownership of any code or designs you build during the hackathon." 
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="rules" className="w-full bg-black text-text-light px-6 py-20 md:py-32 border-b border-border relative sm:overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-border pb-8">
          <div>
            <div className="font-mono uppercase text-sm mb-6 flex items-center gap-4 text-text-muted">
              <span className="w-3 h-3 bg-accent border border-black inline-block"></span>
              Guidelines & Support
            </div>
            <h2 className="font-display text-fluid-section uppercase leading-none m-0 p-0">
              Rules & <br/>
              <span className="text-accent text-[1.15em]">FAQ</span>
            </h2>
          </div>
          <p className="font-body text-lg md:text-xl max-w-sm text-text-muted">
            Everything you need to know before you start building. Read the rules carefully.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col gap-16 lg:gap-24">
          
          {/* Rules Column */}
          <div className="flex flex-col w-full max-w-5xl mx-auto">
            <h3 className="font-display text-4xl sm:text-5xl uppercase text-accent mb-8 flex items-center">
              RULES
            </h3>
            
            <div 
              className="flex flex-col sm:flex-row h-auto sm:h-[450px] gap-4 w-full"
            >
              {rules.map((rule, index) => {
                const isActive = activeRule === index;
                return (
                  <div 
                    key={index}
                    onClick={() => handleRuleClick(index)}
                    className={`sticky sm:relative top-[120px] sm:top-auto overflow-hidden shrink-0 snap-center transition-all duration-500 ease-in-out sm:cursor-pointer flex w-full sm:w-auto h-[400px] sm:h-full bg-black border border-text-dark/50 rounded-[24px] sm:rounded-[32px] shadow-[0_-12px_24px_rgba(0,0,0,0.8)] sm:shadow-none ${
                      isActive 
                        ? 'sm:flex-grow sm:bg-black sm:border-text-dark/50' 
                        : 'sm:w-[60px] lg:sm:w-[70px] sm:bg-[#f4f4f4] sm:border-transparent sm:rounded-[35px] sm:hover:bg-white'
                    }`}
                  >
                    {/* Active Content */}
                    <div className={`absolute top-0 left-0 ${isActive ? animAnchor : 'sm:left-0 sm:translate-x-0'} h-full overflow-hidden transition-opacity duration-500 delay-100 opacity-100 z-10 ${isActive ? 'sm:opacity-100 sm:z-10' : 'sm:opacity-0 sm:z-0 sm:pointer-events-none'}`}>
                      <div className="p-5 sm:p-8 flex flex-row gap-6 sm:gap-8 h-full w-[calc(100vw-48px)] sm:w-[450px] lg:w-[700px]">
                        <div className="font-display text-6xl sm:text-7xl text-white shrink-0 mt-1">
                          {index + 1}
                        </div>
                        <div className="flex flex-col flex-grow min-w-0 h-full justify-between">
                          <div>
                            <h4 className="font-display text-3xl sm:text-4xl uppercase text-white mb-2 sm:mb-4 truncate">{rule.title}</h4>
                            <div className="w-full h-[140px] sm:h-[200px] shrink-0 rounded-none overflow-hidden mb-2 sm:mb-4">
                               <img src={rule.image} alt={rule.title} className="w-full h-full object-cover grayscale-[20%] contrast-125" />
                            </div>
                          </div>
                          <p className="font-body text-sm sm:text-base text-white leading-relaxed whitespace-normal pr-4">
                             {rule.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Inactive Content */}
                    <div className={`hidden sm:flex absolute inset-0 items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
                      <div className="font-display text-5xl sm:text-7xl text-accent">
                         {index + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Column */}
          <div className="flex flex-col w-full max-w-4xl mx-auto">
            <h3 className="font-display text-4xl sm:text-5xl uppercase text-accent mb-8 flex items-center">
              Common Questions
            </h3>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                
                return (
                  <div 
                    key={index} 
                    className={`border border-border overflow-hidden transition-all duration-300 ${isOpen ? 'bg-black' : 'bg-transparent'}`}
                  >
                    <button 
                      onClick={() => toggleFaq(index)}
                      className={`w-full flex items-center justify-between p-6 text-left focus:outline-none group transition-all duration-300 ${isOpen ? 'border-b border-border/50' : ''}`}
                    >
                      <h4 className={`font-display text-xl sm:text-2xl uppercase pr-8 transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-text-light group-hover:text-accent'}`}>
                        {faq.question}
                      </h4>
                      <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'bg-accent border-accent text-black rotate-180' : 'border-border text-text-muted group-hover:border-accent group-hover:text-accent'}`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>
                    
                    <div 
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-body text-text-muted p-6 text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
