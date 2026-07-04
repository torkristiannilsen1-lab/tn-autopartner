import { ContactSection } from "@/components/ContactSection";
import { PageHeader } from "@/components/PageHeader";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Kontakt",
  "Ta kontakt med TN Autopartner AS. Vi hjelper deg med biler, finansiering og innbytte.",
  "/kontakt",
);

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Kontakt oss"
        subtitle="Ring, send e-post eller fyll ut skjemaet – så svarer vi så raskt vi kan."
      />
      <ContactSection showTitle={false} />
    </>
  );
}
