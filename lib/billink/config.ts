import "server-only";

const BILLINK_BASE_URL = "https://billink.no/page2_xml.php";

export const BILLINK_REVALIDATE_SECONDS = 600;

export function buildBillinkUrl(): string | null {
  const code = process.env.BILLINK_CODE;
  const store = process.env.BILLINK_STORE;

  if (!code || !store) {
    return null;
  }

  const params = new URLSearchParams({
    kode: code,
    butikk: store,
    detaljert: "1",
  });

  return `${BILLINK_BASE_URL}?${params.toString()}`;
}
