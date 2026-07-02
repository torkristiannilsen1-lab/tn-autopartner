import Link from "next/link";
import { Button as UiButton, type ButtonProps } from "@/components/ui/button";

interface AppButtonProps extends ButtonProps {
  href?: string;
}

export function Button({ href, children, ...props }: AppButtonProps) {
  if (href) {
    return (
      <UiButton asChild {...props}>
        <Link href={href}>{children}</Link>
      </UiButton>
    );
  }

  return <UiButton {...props}>{children}</UiButton>;
}
