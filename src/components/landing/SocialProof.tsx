import { Star, StarHalf } from "lucide-react";

import { cn } from "@/lib/utils";
import { transformations } from "@/components/landing/data";

const avatars = transformations.slice(0, 5);

export function SocialProof({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-2 sm:gap-2.5", className)}>
      <div className="flex items-center">
        {avatars.map((a, i) => (
          <span
            key={a.name}
            className="size-5 overflow-hidden rounded-full ring-1 ring-background sm:size-6"
            style={{ marginLeft: i === 0 ? 0 : "-0.3rem", zIndex: avatars.length - i }}
          >
            <img
              src={a.src}
              alt={`${a.name} transformation`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </span>
        ))}
      </div>
      <div className="text-left">
        <div className="flex items-center gap-0.5 text-brand">
          {[0, 1, 2, 3].map((i) => (
            <Star key={i} className="size-3 fill-current" aria-hidden />
          ))}
          <StarHalf className="size-3 fill-current" aria-hidden />
        </div>
        <p className="mt-0.5 text-xs font-semibold text-stone-300">200+ men transformed</p>
      </div>
    </div>
  );
}
