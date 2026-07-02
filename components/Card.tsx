import type { HTMLAttributes } from "react";
import { Card as UiCard } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AppCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

export function Card({
  className,
  hover = false,
  glass = false,
  children,
  ...props
}: AppCardProps) {
  return (
    <UiCard
      className={cn(
        hover && "transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/40",
        glass && "bg-secondary/60 backdrop-blur-md",
        className,
      )}
      {...props}
    >
      {children}
    </UiCard>
  );
}

type CardProps = AppCardProps;

export type { CardProps };
