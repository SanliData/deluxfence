"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Placeholder: replace with your API or form service (Formspree, etc.)
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--nav-height)] bg-anthracite-light/60 py-20 px-6 lg:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-semibold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-2xl text-white/80">
            Request a free quote or ask us anything about architectural-grade
            aluminum fencing for your home.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <Mail size={22} />
              </span>
              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:info@deluxfence.com"
                  className="text-white/80 hover:text-gold"
                >
                  info@deluxfence.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <Phone size={22} />
              </span>
              <div>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:+14699263405"
                  className="text-white/80 hover:text-gold"
                >
                  +1 (469) 926-3405
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                <MapPin size={22} />
              </span>
              <div>
                <p className="font-medium text-white">Address</p>
                <p className="text-white/80">
                  USA · Serving luxury homeowners nationwide
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/90">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/90">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-white/90">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/90">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="">Select...</option>
                    <option value="quote">Request a Quote</option>
                    <option value="info">General Inquiry</option>
                    <option value="support">Support</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/90">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  placeholder="Tell us about your project..."
                />
              </div>
              {status === "sent" && (
                <p className="mt-3 text-sm text-gold">Thank you. We&apos;ll be in touch soon.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold inline-flex items-center gap-2"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
