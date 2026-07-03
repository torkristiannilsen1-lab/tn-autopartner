export type BilradGuideSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BilradGuide {
  slug: string;
  title: string;
  ingress: string;
  sections: BilradGuideSection[];
  cta: string;
}
