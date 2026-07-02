"use client";

import Image from "next/image";
import { useState } from "react";
import { CarStatusRibbon } from "@/components/cars/CarStatusRibbon";
import type { BillinkImage } from "@/types/billink";
import { cn } from "@/lib/utils";

interface CarGalleryProps {
  images: BillinkImage[];
  title: string;
  status?: string;
}

export function CarGallery({ images, title, status }: CarGalleryProps) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-secondary text-sm text-muted">
        Bilde kommer
        {status && <CarStatusRibbon status={status} />}
      </div>
    );
  }

  const current = images[active] ?? images[0];

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-secondary">
        <Image
          src={current.url}
          alt={title}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
        {status && <CarStatusRibbon status={status} />}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Vis bilde ${index + 1}`}
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-lg border transition-colors",
                index === active
                  ? "border-primary"
                  : "border-white/10 hover:border-white/30",
              )}
            >
              <Image
                src={image.thumb}
                alt={`${title} – bilde ${index + 1}`}
                fill
                className="object-cover"
                sizes="120px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
