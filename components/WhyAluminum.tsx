"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  CloudRain,
  LayoutGrid,
  Shield,
} from "lucide-react";

const REASONS = [
  {
    icon: Sparkles,
    title: "Modern & Aesthetic Appearance",
    points: [
      "Minimalist horizontal panels create perfect visual harmony with modern city architecture and natural settings.",
      "Matte black finish delivers a sophisticated, high-quality look in gardens and terraces—reflecting your discerning taste.",
    ],
  },
  {
    icon: CloudRain,
    title: "Superior Environmental Adaptability",
    points: [
      "Maintains structural integrity from harsh winter snowfalls to extreme desert heat—a commitment to lasting quality.",
      "Long-lasting in humid gardens and by pools; keeps its pristine look despite water exposure. An investment in enduring appeal.",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Flexible Application Options",
    points: [
      "Use as standalone panels or mount between stone or concrete pillars for seamless integration with any building material.",
      "From rooftop terraces to expansive gardens, pool areas, and modern entrances—solutions for every space and lifestyle.",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Landscape Harmony",
    points: [
      "Dense panel arrangement limits visibility from outside, ensuring privacy and a more comfortable, secure home environment.",
      "Black panels create a striking contrast with flowers, climbing plants, and foliage—elevating your home's curb appeal.",
    ],
  },
];

export default function WhyAluminum() {
  return (
    <section
      id="why-aluminum"
      className="relative scroll-mt-[var(--nav-height)] bg-anthracite py-20 px-6 lg:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Why Aluminum
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            See how much you value your home. Architectural-grade aluminum
            fencing that looks exceptional and performs in every setting.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-12">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {reason.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {reason.points.map((point, j) => (
                  <li
                    key={j}
                    className="text-white/85 leading-relaxed before:mr-2 before:content-['·'] before:text-gold"
                  >
                    <span className="before:content-none">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <Link href="/#contact" className="btn-gold">
            Get a Free Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
