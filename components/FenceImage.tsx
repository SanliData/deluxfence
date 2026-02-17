"use client";

import Image from "next/image";
import type { FencePhoto } from "@/lib/aluminum-fence-images";

type Props = {
  photo: FencePhoto;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
};

/** Renders a single fence photo or one cell of the 3x3 grid image */
export default function FenceImage({ photo, className, sizes, priority, fill = true }: Props) {
  const isGridCell = photo.gridRow != null && photo.gridCol != null;

  if (isGridCell) {
    const row = photo.gridRow!;
    const col = photo.gridCol!;
    const pct = 100 / 3;
    // 300% kutu + clip sadece üst-sol 1/9; object-position ile doğru hücre o 1/9 içinde
    const objX = -col * pct;
    const objY = -row * pct;
    return (
      <div className="absolute inset-0 overflow-hidden" style={{ isolation: "isolate" }}>
        <div
          className="absolute left-0 top-0 h-[300%] w-[300%] overflow-hidden"
          style={{ clipPath: "inset(0 66.67% 66.67% 0)" }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes={sizes ?? "(max-width: 640px) 50vw, 33vw"}
            priority={priority}
            className="object-cover"
            style={{ objectPosition: `${objX}% ${objY}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill={fill}
        className={`object-cover ${className ?? ""}`}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
