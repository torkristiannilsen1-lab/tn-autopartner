import type { ContactFormData, ContactFormErrors } from "@/types/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = data.name.trim();
  const email = data.email.trim();
  const message = data.message.trim();

  if (!name) {
    errors.name = "Navn er påkrevd";
  } else if (name.length > 100) {
    errors.name = "Navnet er for langt";
  }

  if (!email) {
    errors.email = "E-post er påkrevd";
  } else if (!emailPattern.test(email)) {
    errors.email = "Ugyldig e-postadresse";
  }

  if (!message) {
    errors.message = "Melding er påkrevd";
  } else if (message.length > 5000) {
    errors.message = "Meldingen er for lang";
  }

  return errors;
}

export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    message: data.message.trim(),
  };
}
