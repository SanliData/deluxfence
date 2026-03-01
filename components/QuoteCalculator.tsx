"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Ruler, Calculator, LayoutGrid } from "lucide-react";

const FENCE_MODELS = [
  { id: "horizontal-slat", label: "Horizontal Slat", panelFt: 8 },
  { id: "privacy-louvered", label: "Privacy / Louvered", panelFt: 8 },
  { id: "gate", label: "Gate", panelFt: 12 },
  { id: "glass-railing", label: "Glass Railing", panelFt: 6 },
  { id: "composite-wood", label: "Composite & Wood Accent", panelFt: 8 },
  { id: "concrete-slat", label: "Concrete Base & Slat", panelFt: 8 },
] as const;

export default function QuoteCalculator() {
  const [lengthFt, setLengthFt] = useState("");
  const [heightFt, setHeightFt] = useState("");
  const [modelId, setModelId] = useState<string>(FENCE_MODELS[0].id);

  const length = Number(lengthFt) || 0;
  const height = Number(heightFt) || 6;
  const selectedModel = FENCE_MODELS.find((m) => m.id === modelId) ?? FENCE_MODELS[0];
  const linearFeet = length > 0 ? length : 0;
  const estimatedPanels = length > 0 ? Math.ceil(length / selectedModel.panelFt) : 0;

  return (
    <section
      id="quote-calculator"
      className="scroll-mt-[var(--nav-height)] bg-anthracite py-20 px-6 lg:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/20 text-gold">
              <Calculator size={24} />
            </span>
            <div>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Quote Calculator
              </h2>
              <p className="text-sm text-white/70">
                Get an idea of materials needed for your project
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="model"
                className="mb-1 flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <LayoutGrid size={16} />
                Model
              </label>
              <select
                id="model"
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              >
                {FENCE_MODELS.map((m) => (
                  <option key={m.id} value={m.id} className="bg-anthracite text-white">
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="length-ft"
                className="mb-1 flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <Ruler size={16} />
                Fence length (ft)
              </label>
              <input
                id="length-ft"
                type="number"
                min={1}
                max={9999}
                step={1}
                placeholder="e.g. 100"
                value={lengthFt}
                onChange={(e) => setLengthFt(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label
                htmlFor="height-ft"
                className="mb-1 flex items-center gap-2 text-sm font-medium text-white/90"
              >
                Height (ft, optional)
              </label>
              <input
                id="height-ft"
                type="number"
                min={3}
                max={12}
                step={1}
                placeholder="e.g. 6"
                value={heightFt}
                onChange={(e) => setHeightFt(e.target.value.replace(/\D/g, "").slice(0, 2))}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            </div>
          </div>

          {linearFeet > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-lg border border-gold/30 bg-gold/10 p-4"
            >
              <p className="text-sm font-medium text-gold">
                Model: <strong>{selectedModel.label}</strong>
                {" · "}
                Estimated linear feet: <strong>{linearFeet} ft</strong>
                {estimatedPanels > 0 && (
                  <> · Approx. {estimatedPanels} panels ({selectedModel.panelFt} ft typical)</>
                )}
              </p>
              <p className="mt-1 text-xs text-white/70">
                This is an estimate only. Request a free quote for exact pricing and installation.
              </p>
            </motion.div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/#contact" className="btn-gold">
              Request a Free Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
