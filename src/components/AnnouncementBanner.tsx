import React from 'react';
import { eventData } from '../data/event';

export const AnnouncementBanner: React.FC = () => {
  return (
    <div className="w-full bg-accent text-background-dark py-2 px-4 flex justify-center items-center font-mono text-xs md:text-sm uppercase tracking-widest border-b border-border z-50 relative">
      <div className="flex items-center gap-2 md:gap-3 w-full max-w-7xl mx-auto justify-center">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background-dark opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-background-dark"></span>
        </span>
        <span className="truncate">
          {eventData.announcement !== "[LATEST ANNOUNCEMENT]" 
            ? eventData.announcement 
            : "REGISTRATIONS CLOSING SOON. SECURE YOUR SPOT."}
        </span>
      </div>
    </div>
  );
};
