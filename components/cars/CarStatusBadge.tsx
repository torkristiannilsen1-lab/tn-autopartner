import { Check } from "lucide-react";
import { resolveCarStatus, type CarStatusKind } from "@/lib/carStatus";
import { cn } from "@/lib/utils";

interface CarStatusBadgeProps {
  status: string;
  className?: string;
}

const badgeStyles: Record<CarStatusKind, string> = {
  available: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30",
  reserved: "bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/30",
  sold: "bg-primary/20 text-primary ring-1 ring-primary/40",
};

export function CarStatusBadge({ status, className }: CarStatusBadgeProps) {
  const { kind, label } = resolveCarStatus(status);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
        badgeStyles[kind],
        className,
      )}
    >
      {kind === "sold" && <Check size={13} strokeWidth={3} />}
      {label}
    </span>
  );
}
