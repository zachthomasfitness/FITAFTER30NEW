import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  compact?: boolean;
}

const TARGET_DATE = new Date("2026-04-13T00:00:00").getTime();

const calculateTimeLeft = (): TimeLeft => {
  const difference = TARGET_DATE - new Date().getTime();
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
};

const CountdownTimer = ({ compact = false }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center justify-center gap-2">
        <div className="timer-unit-compact flex flex-col items-center">
          <span className="text-primary font-bold text-lg md:text-xl">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="text-muted-foreground text-[8px] md:text-[10px] uppercase tracking-wide">Days</span>
        </div>
        <div className="timer-unit-compact flex flex-col items-center">
          <span className="text-primary font-bold text-lg md:text-xl">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-muted-foreground text-[8px] md:text-[10px] uppercase tracking-wide">Hrs</span>
        </div>
        <div className="timer-unit-compact flex flex-col items-center">
          <span className="text-primary font-bold text-lg md:text-xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-muted-foreground text-[8px] md:text-[10px] uppercase tracking-wide">Mins</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 md:gap-4">
      <div className="timer-unit flex flex-col items-center">
        <span className="text-primary font-black text-xl md:text-2xl">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wide">Days</span>
      </div>
      <div className="timer-unit flex flex-col items-center">
        <span className="text-primary font-black text-xl md:text-2xl">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wide">Hours</span>
      </div>
      <div className="timer-unit flex flex-col items-center">
        <span className="text-primary font-black text-xl md:text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wide">Mins</span>
      </div>
      <div className="timer-unit flex flex-col items-center">
        <span className="text-primary font-black text-xl md:text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wide">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;