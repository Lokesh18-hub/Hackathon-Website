import { Navigation } from './components/Navigation';
import { MouseEffects } from './components/MouseEffects';
import { Hero } from './sections/Hero';
import { Overview } from './sections/Overview';
import { Journey } from './sections/Journey';
import { Themes } from './sections/Themes';
import { RulesFAQ } from './sections/RulesFAQ';
import { FooterCTA } from './sections/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full relative selection:bg-accent selection:text-background-dark">
      {/* 
        This is the responsive layout foundation. 
        Page sections will be added here step by step.
      */}
      
      <MouseEffects />
      
      {/* Global Element B — Navigation */}
      <Navigation />

      <main className="w-full flex flex-col items-center">
        {/* Section 1 — Hero */}
        <Hero />
        
        {/* Section 2 — Event Overview */}
        <Overview />
        
        {/* Section 3 — Hackathon Journey */}
        <Journey />
        
        {/* Section 4 — Themes */}
        <Themes />
        
        {/* Section 5 — Rules, Resources and FAQ */}
        <RulesFAQ />
        
        {/* Section 6 — Final Registration CTA and Footer */}
        <FooterCTA />
      </main>
    </div>
  );
}

export default App;
