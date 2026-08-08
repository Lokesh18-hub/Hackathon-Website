import React from 'react';
import { ArrowDownRight, Download } from 'lucide-react';
import { eventData } from '../data/event';
import { CountdownTimer } from '../components/CountdownTimer';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 py-12 md:py-24 border-b border-border overflow-hidden bg-black">

      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col gap-2 md:gap-12 relative">
        


        {/* Main Title Area */}
        <div className="flex flex-col gap-2 mt-4 md:mt-0 text-center w-full">
          <h1 className="font-display text-[24vw] sm:text-[16vw] lg:text-[14vw] leading-[0.85] uppercase text-text-light m-0 p-0 tracking-tight relative mx-auto w-full">
            HACK<span className="text-accent">4</span><br className="md:hidden" />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px #C8FF2E' }}>IMPACT</span>
          </h1>
        </div>

        {/* Supporting Info and Actions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 w-full mt-2 md:mt-8">
          
          <div className="md:col-span-5 flex flex-col justify-end items-center md:items-start text-center md:text-left gap-6">
            <div className="flex flex-col items-center sm:items-start gap-8 w-full mt-4 md:mt-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9QMlDESsZ-DLzAqYQkegnWKqrY5Vzpi6Jh6gMZNSUSOE39w/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="group bg-accent text-background-dark font-bold px-6 py-3 uppercase font-mono tracking-wide hover:bg-text-light transition-colors duration-300 flex items-center justify-center gap-3 text-xs md:text-sm w-11/12 sm:w-auto rounded-md">
                  Register Now
                  <ArrowDownRight size={16} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                </a>
                <a href={eventData.brochureFile} className="group bg-panel-dark border border-border text-text-light font-bold px-6 py-3 uppercase font-mono tracking-wide hover:bg-border transition-colors duration-300 flex items-center justify-center gap-3 text-xs md:text-sm w-11/12 sm:w-auto rounded-md">
                  <Download size={16} />
                  Brochure
                </a>
              </div>
              
              <div className="w-full flex justify-center">
                <CountdownTimer targetDate="August 28, 2026 09:00:00" />
              </div>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end mb-16 md:mb-0">
            <ul className="font-mono text-xs md:text-sm uppercase text-text-light flex flex-col gap-5 border-l border-border pl-6">
              <li className="flex flex-col gap-1">
                <span className="text-text-muted text-[10px] md:text-xs">Event Date</span>
                <span className="text-base md:text-lg">{eventData.date}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-text-muted text-xs">Venue</span>
                <span className="text-lg truncate">{eventData.venue}</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-text-muted text-xs">Registration Deadline</span>
                <span className="text-accent text-lg">{eventData.registrationDeadline}</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted font-mono text-[10px] uppercase">
        <span>Scroll</span>
        <div className="h-12 w-px bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};
