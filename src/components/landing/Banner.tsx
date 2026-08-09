"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* --------------------------- Shimmer skeleton ---------------------------- */

function Skeleton({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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

/* ---------------------- useImageLoaded hook ----------------------------- */
/**
 * Returns [ref, loaded] for a Next <Image>.
 * Checks img.complete on mount (handles cached images where onLoad never fires)
 * and also listens for the load event.
 */
function useImageLoaded() {
  const ref = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = ref.current;
    if (!img) return;
    // Already decoded (cache hit)
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

/* ---------------------- useVideoLoaded hook ----------------------------- */
/**
 * Returns [ref, loaded] for a <video>.
 * readyState >= 2 (HAVE_CURRENT_DATA) means the first frame is available.
 * Covers both cached and freshly-fetched video.
 */
function useVideoLoaded() {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Already has data (e.g. cached)
    if (video.readyState >= 2) {
      setLoaded(true);
      return;
    }
    const onReady = () => setLoaded(true);
    video.addEventListener("loadeddata", onReady);
    return () => video.removeEventListener("loadeddata", onReady);
  }, []);

  return [ref, loaded] as const;
}

/* ---------------------------------------------------------------------- */

export default function Banner() {
  const [heroImgRef, heroImgLoaded] = useImageLoaded();
  const [videoRef, videoLoaded] = useVideoLoaded();
  const [qualityImgRef, qualityImgLoaded] = useImageLoaded();

  return (
    <section className="w-full">
      {/* Main hero grid */}
      <div className="grid grid-cols-1 h-[270px] md:h-[480px] lg:h-[240px] lg:grid-cols-2 2xl:h-[360px]">
        {/* Left column: headline + image */}
        <div className="grid h-[150px] md:h-[240px] grid-rows-[1fr_auto] overflow-hidden 2xl:h-[360px]">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Headline */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center bg-[#1A457A]/5 px-6 py-2 md:py-8 2xl:gap-4"
            >
              <motion.h1
                variants={fadeUp}
                className="text-lg md:text-2xl font-bold leading-tight text-[#1A457A] 2xl:text-3xl"
              >
                Precision Mechanical Seals Since 1983
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-sm leading-relaxed text-gray-600 2xl:text-base"
              >
                Ensuring leak-free performance in pumps &amp; rotating
                equipment—trusted globally, Mumbai-engineered.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="/products"
                  className="mt-2 inline-flex w-fit items-center rounded-md bg-[#1A457A] px-6 py-2 md:py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#1A457A] hover:ring-2 hover:ring-[#1A457A]"
                >
                  Explore Products
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <div className="relative min-h-full overflow-hidden bg-[#1A457A]/5 hidden md:flex">
              <Skeleton show={!heroImgLoaded} />
              <motion.div
                initial={{ scale: 1.08, opacity: 0 }}
                animate={heroImgLoaded ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  // Pass the ref down to the underlying <img> via Next's ref prop
                  ref={heroImgRef}
                  src="/assets/Home Page Banner-01.jpg"
                  alt="Advanced mechanical sealing solutions for industrial pumps"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right column: video */}
        <div className="group relative h-[130px] md:h-[240px] overflow-hidden bg-slate-950 lg:self-center 2xl:h-[360px]">
          <Skeleton show={!videoLoaded} />
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            animate={videoLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            src="/siddhi-individual-product-video/open-type-600-[A].mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/20" />
        </div>
      </div>

      {/* Custom seals strip */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col justify-center bg-gray-100 px-6 py-4 text-center 2xl:py-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-md md:text-xl font-bold text-[#1A457A] lg:text-2xl 2xl:text-3xl"
        >
          Custom Mechanical Seals for Any Application
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-sm text-gray-600 xl:text-lg"
        >
          From submersible to chemical-grade seals—exact specifications, every
          time.
        </motion.p>
      </motion.div>

      {/* Full-width quality banner */}
      <div className="relative h-[150px] md:h-[240px] w-full overflow-hidden 2xl:h-[300px]">
        <Skeleton show={!qualityImgLoaded} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={qualityImgLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            ref={qualityImgRef}
            src="/assets/Home Page Banner-03.jpg"
            alt="Industrial manufacturing facility with advanced sealing technology"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-transparent to-black/60" />
        <div className="relative z-20 mx-auto flex h-full max-w-[1400px] items-center justify-end pr-10 lg:pr-28 2xl:pr-10">
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-28 md:w-auto text-right text-xl md:text-2xl font-bold text-white drop-shadow-lg lg:text-3xl 2xl:text-4xl"
          >
            Unmatched Quality &amp; Support
          </motion.h2>
        </div>
      </div>
    </section>
  );
}
