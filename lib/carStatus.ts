export type CarStatusKind = "available" | "reserved" | "sold";

export interface CarStatusInfo {
  kind: CarStatusKind;
  label: string;
}

export function resolveCarStatus(status: string): CarStatusInfo {
  const normalized = status.toLowerCase();

  if (normalized.includes("solgt")) {
    return { kind: "sold", label: "Solgt" };
  }
  if (normalized.includes("reservert")) {
    return { kind: "reserved", label: "Reservert" };
  }
  return { kind: "available", label: "Til salgs" };
}

export function isCarSold(status: string): boolean {
  return resolveCarStatus(status).kind === "sold";
}
