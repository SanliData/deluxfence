"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { USA_IMAGES, USA_IMAGE_ALTS } from "@/lib/usa-images";

const PROJECT_TYPES = [
  "Modern American Home",
  "Backyard Pool",
  "Suburban Estate",
  "Metal Fence Exterior",
  "American Garden",
  "Luxury Villa",
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-anthracite">
      <section className="relative py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-white">Projects</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              See how architectural-grade aluminum fencing transforms American
              homes across climates and styles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-2 sm:grid-cols-3"
          >
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
                  sizes="(max-width: 640px) 50vw, 33vw"
                  priority={i < 2}
                />
              </div>
            ))}
          </motion.div>
          <div className="mt-4 rounded-lg bg-white/5 px-4 py-3 text-center">
            <p className="text-sm font-medium text-white/90">
              American settings · One standard of excellence
            </p>
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {PROJECT_TYPES.map((name, i) => (
              <li
                key={name}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-sm font-semibold text-gold">
                  {i + 1}
                </span>
                <span className="text-white">{name}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/gallery" className="btn-outline-white mr-4">
              Explore Gallery
            </Link>
            <Link href="/#contact" className="btn-gold">
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
