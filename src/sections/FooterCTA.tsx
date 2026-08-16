import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';

export const FooterCTA: React.FC = () => {
  return (
    <section id="register" className="w-full bg-accent text-black px-6 pt-20 pb-10 md:pt-32 md:pb-12 border-t border-black">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Massive Closing Statement */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-display text-[15vw] sm:text-[12vw] leading-[0.85] uppercase tracking-tight max-w-[100%] break-words">
            YOUR IDEA <br/>
            DESERVES A <br/>
            WORKING <br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>PROTOTYPE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          
          {/* CTA Column */}
          <div className="flex flex-col items-start">
            <div className="inline-block bg-black text-accent font-mono text-sm px-4 py-2 uppercase mb-8">
              Registration Closes on 25 August , 2026
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9QMlDESsZ-DLzAqYQkegnWKqrY5Vzpi6Jh6gMZNSUSOE39w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="group relative bg-black text-white px-8 py-5 flex items-center justify-between sm:justify-center gap-4 overflow-hidden border border-black hover:text-accent transition-colors duration-300 w-full sm:w-auto">
                <span className="relative z-10 font-mono uppercase font-bold text-lg">Register Now</span>
                <ArrowUpRight className="relative z-10 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              
              <button className="group relative bg-transparent text-black px-8 py-5 flex items-center justify-between sm:justify-center gap-4 border border-black hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto">
                <span className="font-mono uppercase font-bold text-lg">Brochure</span>
                <Download className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Details Column */}
          <div className="flex flex-col gap-12 sm:flex-row lg:justify-end">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-display text-2xl uppercase mb-2">Venue</h4>
                <p className="font-mono text-sm max-w-[250px]">
                  <strong>CLG Institution Campus</strong><br/>
                  Sumerpur, Rajasthan
                </p>
              </div>
              
              <div>
                <h4 className="font-display text-2xl uppercase mb-2">Student Coordinators</h4>
                <p className="font-mono text-sm leading-relaxed">
                  <strong>1. Lokesh Chouhan</strong><br/>
                  +91 63772 92024<br/>
                  <span className="block mt-2"><strong>2. Uttam Kumar</strong></span>
                  +91 7014499743
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-display text-2xl uppercase mb-2">Faculty Coordinator</h4>
                <p className="font-mono text-sm leading-relaxed">
                  <strong>Mr. Vikram Rajpurohit</strong><br/>
                  +91 96490 42430
                </p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-black/20">
          <div className="font-mono text-xs uppercase opacity-70 text-center md:text-left">
            &copy; {new Date().getFullYear()} Hack4Impact. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> 
            <a href="#" className="hover:underline">Code of Conduct</a>
            <span className="hidden md:inline"> | </span> 
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
          
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-center md:text-right">
            DESIGN & DEVELOPED BY LOKESH CHOUHAN
          </div>
        </div>

      </div>
    </section>
  );
};
