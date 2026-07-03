import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getContactEmailConfig } from "@/lib/contact/config";
import {
  sanitizeContactForm,
  validateContactForm,
} from "@/lib/contact/validate";
import type { ContactFormData } from "@/types/contact";

export async function POST(request: Request) {
  let body: ContactFormData;

  try {
    body = (await request.json()) as ContactFormData;
  } catch {
    return NextResponse.json(
      { error: "Ugyldig forespørsel." },
      { status: 400 },
    );
  }

  const form = sanitizeContactForm(body);
  const errors = validateContactForm(form);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const { apiKey, toEmail, fromEmail } = getContactEmailConfig();

  if (!apiKey) {
    return NextResponse.json(
      { error: "E-posttjenesten er ikke konfigurert. Prøv igjen senere." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const phoneLine = form.phone ? `\nTelefon: ${form.phone}` : "";

  const { error } = await resend.emails.send({
    from: `TN Autopartner <${fromEmail}>`,
    to: [toEmail],
    replyTo: form.email,
    subject: `Ny henvendelse fra ${form.name}`,
    text: [
      `Navn: ${form.name}`,
      `E-post: ${form.email}`,
      phoneLine.trim(),
      "",
      "Melding:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Kunne ikke sende meldingen. Prøv igjen senere." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
