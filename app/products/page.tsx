"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { USA_IMAGES, USA_IMAGE_ALTS } from "@/lib/usa-images";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-anthracite">
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-white">Products</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              High-grade, maintenance-free aluminum fencing systems for the
              American luxury home.
            </p>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="mb-8 text-center text-2xl font-semibold text-white">
              Fits Every Setting
            </h2>
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
              <Image
                src={USA_IMAGES.feature}
                alt={USA_IMAGE_ALTS.feature}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-anthracite/40" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <p className="max-w-xl text-lg font-medium text-white drop-shadow-md sm:text-xl">
                  One fence system for every setting—backyards, suburban
                  borders, pool perimeters. Endless possibilities.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link href="/#contact" className="btn-gold">
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
