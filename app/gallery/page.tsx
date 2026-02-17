"use client";

import { useCallback, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ALL_FENCE_PHOTOS } from "@/lib/aluminum-fence-images";
import FenceImage from "@/components/FenceImage";
import GallerySlider from "@/components/GallerySlider";

function GalleryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromUrl = Math.min(
    Math.max(0, parseInt(searchParams.get("page") ?? "0", 10)),
    ALL_FENCE_PHOTOS.length - 1
  );
  const page = Number.isNaN(pageFromUrl) ? 0 : pageFromUrl;

  const setPage = useCallback(
    (index: number) => {
      const i = Math.min(Math.max(0, index), ALL_FENCE_PHOTOS.length - 1);
      router.replace(`/gallery?page=${i}`, { scroll: false });
    },
    [router]
  );

  return (
    <div className="min-h-screen bg-anthracite">
      <section className="relative py-12 px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1 className="mb-4 text-white">Elegant Aluminum Fence Gallery</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              Browse page by page. Use arrows or dots to change the photo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative z-0"
            style={{ minHeight: "min(75vw, 480px)" }}
          >
            <GallerySlider page={page} onPageChange={setPage} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-14 relative z-10"
          >
            <p className="mb-4 text-center text-sm font-medium text-white/80">
              Jump to a photo
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {ALL_FENCE_PHOTOS.map((photo, i) => (
                <Link
                  key={`${photo.label}-${i}`}
                  href={`/gallery?page=${i}`}
                  className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-24 ${
                    i === page ? "border-gold opacity-100" : "border-transparent opacity-80 hover:border-white/50 hover:opacity-100"
                  }`}
                >
                  <FenceImage
                    photo={photo}
                    className="object-cover"
                    sizes="96px"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/#contact" className="btn-gold">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-anthracite flex items-center justify-center"><span className="text-white/80">Loading gallery...</span></div>}>
      <GalleryContent />
    </Suspense>
  );
}
