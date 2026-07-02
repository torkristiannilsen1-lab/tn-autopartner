import { cn } from "@/lib/utils";

interface CarStatusBadgeProps {
  status: string;
  className?: string;
}

function statusStyle(status: string): string {
  const normalized = status.toLowerCase();

  if (normalized.includes("solgt")) {
    return "bg-white/10 text-white/70";
  }
  if (normalized.includes("reservert") || normalized.includes("kommer")) {
    return "bg-amber-500/15 text-amber-300";
  }
  return "bg-primary/15 text-primary";
}

export function CarStatusBadge({ status, className }: CarStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        statusStyle(status),
        className,
      )}
    >
      {status}
    </span>
  );
}
