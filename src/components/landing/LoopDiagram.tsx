import { BatteryLow, Coffee, MoonStar, RotateCcw, Sofa, Sunrise } from "lucide-react";

const steps = [
  { icon: Sunrise, label: "Wake up tired", time: "6am" },
  { icon: Coffee, label: "Caffeine to cope", time: "9am" },
  { icon: BatteryLow, label: "Afternoon crash", time: "3pm" },
  { icon: Sofa, label: "Sofa doom scroll", time: "7pm" },
  { icon: MoonStar, label: "Bad sleep", time: "1am" },
];

/** Radius of the node ring, as a % of the square container. */
const R = 37;

export function LoopDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[268px]">
      {/* the loop itself */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <marker
            id="loop-arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="4"
            markerHeight="4"
            orient="auto-start-reverse"
          >
            <path d="M0,1 L9,5 L0,9 z" className="fill-brand-strong" />
          </marker>
        </defs>
        <circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          strokeWidth="0.5"
          strokeDasharray="1.4 2.6"
          strokeLinecap="round"
          className="stroke-brand-strong/45"
        />
        {/* direction arrows on the ring */}
        {[36, 108, 180, 252, 324].map((a) => {
          const rad = (a * Math.PI) / 180;
          const x = (50 + R * Math.sin(rad)).toFixed(4);
          const y = (50 - R * Math.cos(rad)).toFixed(4);
          const tx = (50 + R * Math.sin(rad + 0.14)).toFixed(4);
          const ty = (50 - R * Math.cos(rad + 0.14)).toFixed(4);
          return (
            <line
              key={a}
              x1={x}
              y1={y}
              x2={tx}
              y2={ty}
              strokeWidth="0.5"
              className="stroke-brand-strong/45"
              markerEnd="url(#loop-arrow)"
            />
          );
        })}
      </svg>

      {/* centre */}
      <div className="absolute inset-0 flex items-center justify-center">
        <RotateCcw className="size-5 text-brand-strong/70" aria-hidden />
      </div>

      {/* nodes */}
      {steps.map((s, i) => {
        const rad = (i * 72 * Math.PI) / 180;
        const left = (50 + R * Math.sin(rad)).toFixed(4);
        const top = (50 - R * Math.cos(rad)).toFixed(4);
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="absolute flex w-[5.75rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-brand ring-4 ring-surface">
              <Icon className="size-[0.95rem] text-brand-foreground" aria-hidden />
            </span>
            <span className="flex flex-col items-center rounded-md bg-surface px-1 py-0.5">
              <span className="text-[0.55rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
                {s.time}
              </span>
              <span className="text-[0.72rem] leading-[1.15] font-semibold whitespace-nowrap text-foreground">
                {s.label}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
