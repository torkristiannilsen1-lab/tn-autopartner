import { AlertCircle } from "lucide-react";
import { Button } from "@/components/Button";

interface CarsUnavailableProps {
  title?: string;
  message?: string;
}

export function CarsUnavailable({
  title = "Vi får ikke hentet bilene akkurat nå",
  message = "Billisten er midlertidig utilgjengelig. Prøv igjen om litt, eller ta kontakt med oss, så hjelper vi deg.",
}: CarsUnavailableProps) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-secondary/60 p-10 text-center backdrop-blur-md">
      <div className="mx-auto mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
        <AlertCircle size={28} />
      </div>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted">{message}</p>
      <Button href="/kontakt" size="lg" className="mt-8">
        Kontakt oss
      </Button>
    </div>
  );
}
