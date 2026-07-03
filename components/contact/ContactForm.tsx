"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { validateContactForm } from "@/lib/contact/validate";
import type { ContactFormData, ContactFormErrors } from "@/types/contact";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        errors?: ContactFormErrors;
      };

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitError(
          data.error ?? "Kunne ikke sende meldingen. Prøv igjen senere.",
        );
        return;
      }

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch {
      setSubmitError("Kunne ikke sende meldingen. Sjekk nettverket og prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Meldingen er sendt</h3>
        <p className="mt-3 text-muted">
          Takk for henvendelsen. Vi har mottatt meldingen din og tar kontakt så
          snart som mulig.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send ny melding
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {submitError && (
        <div
          role="alert"
          className="rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-white"
        >
          {submitError}
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Navn</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Ditt fulle navn"
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-sm text-primary">{errors.name}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-post</Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="din@epost.no"
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-sm text-primary">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="97 90 00 24"
          disabled={isSubmitting}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Melding</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Skriv hva du lurer på..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-sm text-primary">{errors.message}</p>
        )}
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sender..." : "Send melding"}
      </Button>
    </form>
  );
}
