"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_FENCE_PHOTOS } from "@/lib/aluminum-fence-images";
import type { FencePhoto } from "@/lib/aluminum-fence-images";
import FenceImage from "@/components/FenceImage";

const totalPages = ALL_FENCE_PHOTOS.length;

type Props = {
  page: number;
  onPageChange: (index: number) => void;
};

export default function GallerySlider({ page, onPageChange }: Props) {
  const goPrev = useCallback(() => {
    onPageChange(page <= 0 ? totalPages - 1 : page - 1);
  }, [page, onPageChange]);

  const goNext = useCallback(() => {
    onPageChange(page >= totalPages - 1 ? 0 : page + 1);
  }, [page, onPageChange]);

  const photo = ALL_FENCE_PHOTOS[page] as FencePhoto | undefined;
  if (!photo) return null;

  return (
    <div className="relative">
      {/* Tek slayt: AnimatePresence yok, sadece key ile tek div; taşan her şey kesin kırpılsın */}
      <div className="relative mx-auto max-w-4xl rounded-2xl bg-anthracite shadow-2xl overflow-hidden">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ aspectRatio: "4/3", contain: "layout paint", isolation: "isolate" }}
        >
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-0 overflow-hidden rounded-2xl"
          >
            <FenceImage
              photo={photo}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6 pointer-events-none">
              <p className="text-lg font-medium text-white sm:text-xl">
                {photo.label}
              </p>
              <p className="text-sm text-white/80">{page + 1} / {ALL_FENCE_PHOTOS.length}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={goPrev}
        className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-gold hover:text-anthracite sm:left-4"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={goNext}
        className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-gold hover:text-anthracite sm:right-4"
      >
        <ChevronRight size={28} />
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        {ALL_FENCE_PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => onPageChange(i)}
            className={`h-2 rounded-full transition-all sm:h-2.5 ${
              i === page
                ? "w-8 bg-gold"
                : "w-2 bg-white/40 hover:bg-white/60 sm:w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
