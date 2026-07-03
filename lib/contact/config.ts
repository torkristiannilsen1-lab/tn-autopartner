import "server-only";

export function getContactEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "post@tnautopartner.no";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "post@tnautopartner.no";

  return { apiKey, toEmail, fromEmail };
}
