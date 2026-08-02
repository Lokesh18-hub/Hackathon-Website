import React, { useState } from 'react';
import PillNav from './PillNav';
import type { PillNavItem } from './PillNav';

export const Navigation: React.FC = () => {
  const [activeSection] = useState('#overview');

  const navLinks: PillNavItem[] = [
    { label: 'Overview', href: '#overview' },
    { label: 'Journey', href: '#journey' },
    { label: 'Themes', href: '#themes' },
    { label: 'Rules', href: '#rules' },
    { label: 'Register', href: '#register' },
  ];

  // Optional: Add intersection observer logic here if you want active states to update on scroll

  return (
    <header className="w-full sticky top-6 z-50 px-6 pointer-events-none">
      <div className="pointer-events-auto">
        <PillNav
          items={navLinks}
          activeHref={activeSection}
          baseColor="#000000"
          pillColor="#C8FF2E"
          hoveredPillTextColor="#C8FF2E"
          pillTextColor="#11130F"
          className="font-mono uppercase text-sm"
        />
      </div>
    </header>
  );
};
