import { FadeIn } from "@/components/FadeIn";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 bg-secondary/30 pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="container-main">
        <FadeIn>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
        </FadeIn>
      </div>
    </section>
  );
}
