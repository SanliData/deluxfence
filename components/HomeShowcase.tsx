"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { USA_IMAGES, USA_IMAGE_ALTS } from "@/lib/usa-images";
import { ALL_FENCE_PHOTOS } from "@/lib/aluminum-fence-images";
import FenceImage from "@/components/FenceImage";

const PANELS = [
  { title: "Modern American Home", env: "Clean lines" },
  { title: "Backyard Pool", env: "Outdoor living" },
  { title: "Suburban Estate", env: "Manicured lawn" },
  { title: "Metal Fence Exterior", env: "Elegant boundary" },
  { title: "American Garden", env: "Lawn & trees" },
  { title: "Luxury Villa", env: "Refined exterior" },
];

export default function HomeShowcase() {
  return (
    <>
      {/* Section 1: Koyu zemin – tam genişlik collage */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-anthracite py-16 px-6 lg:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
            One Design, Every Setting
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/80">
            Aluminum fencing for American homes—pools, gardens, and modern
            entrances.
          </p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {USA_IMAGES.gallery.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl"
              >
                <Image
                  src={src}
                  alt={USA_IMAGE_ALTS.gallery[i]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section 2: Açık zemin – gold çerçeve versiyonu */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-anthracite-light/80 py-16 px-6 lg:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
            Versatility in Every Climate
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/80">
            Engineered for American homes in every climate and setting.
          </p>
          <div className="relative overflow-hidden rounded-xl border-2 border-gold/40 p-2 shadow-xl sm:p-3">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src={USA_IMAGES.feature}
                alt={USA_IMAGE_ALTS.feature}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Minimal zemin – 6 panel kartları */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-anthracite py-16 px-6 lg:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
            Six Environments, One Standard
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/80">
            The same architectural-grade aluminum for American homes in every
            setting.
          </p>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="grid grid-cols-2 grid-rows-3 gap-1 p-2 sm:gap-2 sm:p-3">
              {USA_IMAGES.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt={USA_IMAGE_ALTS.gallery[i]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-6 sm:grid-cols-3">
              {PANELS.map((panel, i) => (
                <div
                  key={panel.title}
                  className="rounded-lg bg-anthracite/60 px-4 py-3 text-center"
                >
                  <span className="text-gold font-medium">{panel.title}</span>
                  <p className="text-xs text-white/70">{panel.env}</p>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link href="/gallery" className="btn-outline-white">
              Explore Gallery
            </Link>
            <Link href="/#contact" className="btn-gold">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 4: Çok sayıda farklı aluminum fence fotosu */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative bg-anthracite-light/80 py-16 px-6 lg:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-[var(--container-max)]">
          <h2 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
            Many Different Aluminum Fence Inspirations
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-white/80">
            From modern homes to pools and gardens—elegant fence and railing
            styles for your American property.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
            {ALL_FENCE_PHOTOS.map((photo, i) => (
              <motion.div
                key={`fence-${i}-${photo.label}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.02, 0.35) }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-anthracite"
              >
                <FenceImage
                  photo={photo}
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link href="/gallery" className="btn-gold">
              View All {ALL_FENCE_PHOTOS.length} Photos
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
