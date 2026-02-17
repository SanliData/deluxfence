"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, Lightbulb } from "lucide-react";

const GATE_IMAGE = "/images/fence/fence-gate-suburban.png";

export default function DayNightLED() {
  return (
    <section className="relative bg-anthracite py-20 px-6 lg:py-28 lg:px-8">
      <div className="mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Day & Night with LED
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Modern black horizontal slat fence and gate—by day and with
            integrated LED lighting for a striking night presence.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Day view – netleştirme için image-rendering */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-anthracite-light/40 shadow-xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <Sun className="text-gold" size={20} />
              <span className="font-medium text-white">Day View</span>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={GATE_IMAGE}
                alt="Modern black horizontal slat fence and gate, daylight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
            <p className="p-3 text-xs text-white/60">
              For maximum sharpness, use a high-res or professionally sharpened
              source image.
            </p>
          </motion.div>

          {/* Night view – LED simülasyonu: karanlık + soğuk ton + hafif ışık çizgileri */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-anthracite-light/40 shadow-xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <Moon className="text-gold" size={20} />
              <span className="font-medium text-white">Night View (LED)</span>
              <Lightbulb size={16} className="text-gold/80" />
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ filter: "brightness(0.45) contrast(1.2) saturate(0.7)" }}
              >
                <Image
                  src={GATE_IMAGE}
                  alt="Same fence and gate at night with LED strip lighting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,20,50,0.6) 0%, rgba(5,10,30,0.85) 100%)",
                }}
                aria-hidden
              />
              {/* LED çizgi hissi: fence ve kapı kenarları boyunca hafif ışık */}
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                aria-hidden
              >
                <div
                  className="absolute left-[8%] top-[35%] h-[2px] w-[18%] rounded-full bg-amber-200 shadow-[0_0_12px_4px_rgba(251,191,36,0.5)]"
                  style={{ boxShadow: "0 0 20px 6px rgba(251,191,36,0.4)" }}
                />
                <div
                  className="absolute left-[26%] top-[35%] h-[2px] w-[22%] rounded-full bg-amber-200/90"
                  style={{ boxShadow: "0 0 16px 4px rgba(251,191,36,0.35)" }}
                />
                <div
                  className="absolute left-[48%] top-[32%] h-[2px] w-[28%] rounded-full bg-amber-200/90"
                  style={{ boxShadow: "0 0 18px 5px rgba(251,191,36,0.4)" }}
                />
                <div
                  className="absolute left-[76%] top-[35%] h-[2px] w-[18%] rounded-full bg-amber-200/80"
                  style={{ boxShadow: "0 0 14px 4px rgba(251,191,36,0.3)" }}
                />
                {/* Sütun vurguları */}
                <div
                  className="absolute left-[24%] top-[28%] h-[25%] w-[1px] rounded-full bg-amber-100/60"
                  style={{ boxShadow: "0 0 10px 2px rgba(251,191,36,0.3)" }}
                />
                <div
                  className="absolute left-[46%] top-[28%] h-[25%] w-[1px] rounded-full bg-amber-100/60"
                  style={{ boxShadow: "0 0 10px 2px rgba(251,191,36,0.3)" }}
                />
                <div
                  className="absolute left-[74%] top-[28%] h-[25%] w-[1px] rounded-full bg-amber-100/50"
                  style={{ boxShadow: "0 0 8px 2px rgba(251,191,36,0.25)" }}
                />
              </div>
            </div>
            <p className="p-3 text-xs text-white/60">
              LED strip lighting along fence and pillars—upgrade to a
              professional night photo for your materials.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link href="/#contact" className="btn-gold">
            Request a Quote with LED Options
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
