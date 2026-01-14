import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-01-26T00:00:00").getTime();
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

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
