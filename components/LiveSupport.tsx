"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import Link from "next/link";

export default function LiveSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSent(true);
    setMessage("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-24 right-6 z-[60] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-anthracite shadow-2xl sm:right-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 bg-anthracite-light/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <MessageCircle size={20} />
                </span>
                <div>
                  <p className="font-semibold text-white">Live Support</p>
                  <p className="text-xs text-white/70">We typically reply in minutes</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-white/80 hover:bg-white/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto p-4">
              {sent ? (
                <div className="rounded-lg bg-gold/10 p-4 text-sm text-white">
                  <p className="font-medium text-gold">Message received.</p>
                  <p className="mt-1 text-white/80">
                    Our team will get back to you shortly. You can also request a quote via the{" "}
                    <Link href="/#contact" className="underline hover:text-gold" onClick={() => setIsOpen(false)}>
                      contact form
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-white/80">
                    Hi! How can we help you today? Send a quick message or use the contact form for a detailed quote.
                  </p>
                  <form onSubmit={handleSend} className="mt-4">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      rows={3}
                      className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                    <button
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gold py-2 text-sm font-medium text-anthracite hover:bg-gold-hover"
                    >
                      <Send size={16} />
                      Send
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label="Open live support"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-anthracite shadow-lg transition-colors hover:bg-gold-hover sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <MessageCircle size={28} className="sm:w-8 sm:h-8" />
      </motion.button>
    </>
  );
}
