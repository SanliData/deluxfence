"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { USA_IMAGES, USA_IMAGE_ALTS } from "@/lib/usa-images";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background: USA luxury home */}
      <div className="absolute inset-0">
        <Image
          src={USA_IMAGES.hero}
          alt={USA_IMAGE_ALTS.hero}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-black/50"
          aria-hidden
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-[var(--container-max)] px-6 text-center lg:px-8"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={item}
          className="mb-5 max-w-4xl mx-auto text-white font-bold tracking-tight drop-shadow-md"
        >
          Redefine Your Boundaries
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl"
        >
          Architectural-grade aluminum fencing. Engineered for elegance, built for
          eternity. Maintenance-free luxury for your American home.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="#contact" className="btn-gold w-full sm:w-auto">
            Request a Quote
          </Link>
          <Link href="/gallery" className="btn-outline-white w-full sm:w-auto">
            Explore Gallery
          </Link>
        </motion.div>
      </motion.div>

      {/* Subtle bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-anthracite to-transparent pointer-events-none"
        aria-hidden
      />
    </section>
  );
}
