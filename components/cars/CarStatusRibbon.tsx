import { resolveCarStatus, type CarStatusKind } from "@/lib/carStatus";
import { cn } from "@/lib/utils";

interface CarStatusRibbonProps {
  status: string;
  className?: string;
}

const ribbonStyles: Partial<Record<CarStatusKind, string>> = {
  reserved: "bg-orange-500/95 text-white",
  sold: "bg-primary/95 text-white",
};

export function CarStatusRibbon({ status, className }: CarStatusRibbonProps) {
  const { kind, label } = resolveCarStatus(status);
  const ribbonStyle = ribbonStyles[kind];

  if (!ribbonStyle) {
    return null;
  }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <span
        className={cn(
          "absolute -left-16 top-7 w-56 -rotate-45 py-1.5 text-center text-sm font-bold uppercase tracking-[0.25em] shadow-lg shadow-black/30",
          ribbonStyle,
        )}
      >
        {label}
      </span>
    </div>
  );
}
