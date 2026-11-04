import { cn } from "@/lib/utils";

export function CtaButton({
  label,
  className,
  note,
  align = "start",
}: {
  label: string;
  className?: string;
  note?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <a
        href="#"
        className="w-full rounded-full bg-brand px-9 py-4 text-center text-[0.95rem] font-semibold tracking-[0.04em] text-brand-foreground transition-all duration-300 hover:brightness-105 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:w-auto"
      >
        {label}
      </a>
      {note ? (
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{note}</p>
      ) : null}
    </div>
  );
}
