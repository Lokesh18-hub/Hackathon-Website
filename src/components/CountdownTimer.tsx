import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
        // Maybe set everything to 0 here just to be safe
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center items-center gap-4 text-accent font-mono">
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-1">Days</span>
      </div>
      <span className="text-2xl md:text-3xl font-bold pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-1">Hours</span>
      </div>
      <span className="text-2xl md:text-3xl font-bold pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-1">Mins</span>
      </div>
      <span className="text-2xl md:text-3xl font-bold pb-4">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl md:text-3xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-[10px] md:text-xs uppercase tracking-widest text-text-muted mt-1">Secs</span>
      </div>
    </div>
  );
};
