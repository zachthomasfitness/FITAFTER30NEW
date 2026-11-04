import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-6 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-2xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[0.7rem] font-semibold tracking-[0.28em] text-muted-foreground uppercase">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-editorial text-[2rem] leading-[1.12] font-medium tracking-[-0.015em] text-balance text-foreground sm:text-[2.6rem]">
      {children}
    </h2>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-border", className)} />;
}

/**
 * Soft curved seam between two sections. Rendered at the bottom of the
 * outgoing section; `to` is the tone of the section that follows.
 */
export function Curve({ to, flip = false }: { to: "ink" | "cream"; flip?: boolean }) {
  return (
    <div aria-hidden className="relative -mb-px">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn("block h-[54px] w-full sm:h-[84px]", flip && "-scale-x-100")}
      >
        <path
          d="M0,90 C300,90 420,4 760,4 C1060,4 1180,58 1440,58 L1440,90 Z"
          className={to === "ink" ? "fill-ink" : "fill-cream"}
        />
      </svg>
    </div>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-wide text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-border bg-surface p-6 transition-transform duration-300 sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Playful marker-style highlight behind a word. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-1.5">
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-[0.02em] h-[0.78em] rounded-md bg-brand"
      />
      <span className="relative z-10 text-brand-foreground">{children}</span>
    </span>
  );
}
