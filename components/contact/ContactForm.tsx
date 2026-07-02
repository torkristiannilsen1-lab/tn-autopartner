"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContactFormData, ContactFormErrors } from "@/types/contact";

const initialForm: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validateForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) errors.name = "Navn er påkrevd";
  if (!data.email.trim()) {
    errors.email = "E-post er påkrevd";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ugyldig e-postadresse";
  }
  if (!data.phone.trim()) errors.phone = "Telefonnummer er påkrevd";
  if (!data.message.trim()) errors.message = "Melding er påkrevd";

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
        <h3 className="text-xl font-semibold text-white">Takk for din henvendelse</h3>
        <p className="mt-3 text-muted">
          Vi har mottatt meldingen din og tar kontakt så snart som mulig.
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
      <div className="space-y-2">
        <Label htmlFor="name">Navn</Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Ditt fulle navn"
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
          placeholder="+47 000 00 000"
        />
        {errors.phone && <p className="text-sm text-primary">{errors.phone}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Melding</Label>
        <Textarea
          id="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Skriv hva du lurer på..."
        />
        {errors.message && <p className="text-sm text-primary">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" className="w-full">
        Send melding
      </Button>
    </form>
  );
}
