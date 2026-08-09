"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ----------------------------- Skeleton -------------------------------- */

function Skeleton({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 z-10 overflow-hidden bg-gray-200"
        >
          <motion.div
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            animate={{ x: ["-150%", "250%"] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function useImageLoaded() {
  const ref = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const img = ref.current;
    if (!img) return;
    if (img.complete && img.naturalWidth > 0) {
      setLoaded(true);
      return;
    }
    const onLoad = () => setLoaded(true);
    img.addEventListener("load", onLoad);
    return () => img.removeEventListener("load", onLoad);
  }, []);
  return [ref, loaded] as const;
}

/* ----------------------------- Stats ----------------------------------- */

const stats = [
  { value: "50+", label: "Years of excellence" },
  { value: "200+", label: "Global clients" },
  { value: "ISO", label: "9001 certified" },
  { value: "24/7", label: "Technical support" },
];

/* ----------------------------- Component ------------------------------- */

export default function AboutUs() {
  const [imgRef, imgLoaded] = useImageLoaded();

  return (
    <section className="relative overflow-hidden bg-white py-10">
      {/* Faint background mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#1A457A]/4"
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* ---- Left: image stack ---- */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative offset frame */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-[#1A457A]/20" />

            {/* Main image */}
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[480px]">
              <Skeleton show={!imgLoaded} />
              <motion.div
                initial={{ scale: 1.06, opacity: 0 }}
                animate={imgLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  ref={imgRef}
                  src="/assets/about-us.jpg"
                  alt="Engineers inspecting mechanical seals in manufacturing facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Dark gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3 shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A457A]">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-gray-500">
                    Certified quality
                  </p>
                  <p className="text-sm font-bold text-gray-900">
                    ISO 9001:2015
                  </p>
                </div>
              </div>
            </div>

            {/* Year chip — overlapping top-right */}
            <div className="absolute -right-5 -top-5 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#1A457A] shadow-lg">
              <span className="text-xl font-bold leading-none text-white">
                50+
              </span>
              <span className="text-[9px] font-semibold uppercaser text-white/80">
                years
              </span>
            </div>
          </motion.div>

          {/* ---- Right: content ---- */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="mb-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Engineering seals
              <br />
              <span className="text-[#1A457A]">the world trusts</span>
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-600">
              Sealergy is a renowned manufacturer of high-quality mechanical
              seals, with a 50-year legacy of engineering excellence. We've
              established ourselves as a trusted partner for industries
              requiring precision-engineered sealing solutions.
            </p>

            {/* Divider */}
            <div className="mb-6 h-px bg-gray-100" />

            {/* Bullet points */}
            <ul className="mb-8 space-y-3">
              {[
                "Premium materials — Carbide, Silicon Carbide, Viton, EPDM",
                "Manufactured in Mumbai, trusted across global industries",
                "Every seal batch tested under real operating conditions",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A457A]/10">
                    <svg
                      className="h-3 w-3 text-[#1A457A]"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        d="M2 6l3 3 5-5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: 0.2 + i * 0.07,
                  }}
                  className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 px-3 py-4 text-center"
                >
                  <span className="text-2xl font-bold text-[#1A457A]">
                    {s.value}
                  </span>
                  <span className="mt-0.5 text-xs font-medium uppercase text-gray-500">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#1A457A] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#153a68]"
              >
                Learn more about us
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold text-[#1A457A] underline-offset-4 hover:underline"
              >
                Get in touch →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
