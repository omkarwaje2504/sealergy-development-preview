"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { createSlug } from "@/lib/utils";

/* ----------------------------- Data ------------------------------------ */

const row1 = [
  {
    name: "Elastomeric Bellows Seals",
    mainCategory: "Mechanical Seals",
    imagePath:
      "/updated-images/our-product-categories/elastomeric-bellows-seals.jpg",
  },
  {
    name: "Parallel Spring Diaphragm Seals",
    mainCategory: "Mechanical Seals",
    imagePath:
      "/updated-images/our-product-categories/parallel-spring-diaphragm-seals.jpg",
  },
  {
    name: "Conical Spring Diaphrams",
    mainCategory: "Mechanical Seals",
    imagePath:
      "/updated-images/our-product-categories/conical-spring-diaphrams.jpg",
  },
  {
    name: "Conical Spring Ring Mounted Seals",
    mainCategory: "Mechanical Seals",
    imagePath: "/updated-images/our-product-categories/conical-spring.jpg",
  },
  {
    name: "Multiple Spring Seals",
    mainCategory: "Mechanical Seals",
    imagePath:
      "/updated-images/our-product-categories/multiple-spring-seals.jpg",
  },
  {
    name: "Wave Spring Seals",
    mainCategory: "Mechanical Seals",
    imagePath: "/updated-images/our-product-categories/wave-spring-seals.jpg",
  },
];

const row2 = [
  {
    name: "Parallel Spring 'O'-Ring Mounted Seals",
    mainCategory: "Mechanical Seals",
    imagePath: "/updated-images/our-product-categories/parallel-spring.jpg",
  },
  {
    name: "PTFE Seals",
    mainCategory: "Mechanical Seals",
    imagePath: "/updated-images/our-product-categories/ptfe-seals.jpg",
  },
  {
    name: "Cartridge Seals",
    mainCategory: "Mechanical Seals",
    imagePath: "/updated-images/our-product-categories/cartidge.jpg",
  },
  {
    name: "Gaskets & O-Rings",
    mainCategory: "Gaskets & O-Rings",
    imagePath: "/updated-images/our-product-categories/gaskets.jpg",
  },
  {
    name: "O-Rings",
    mainCategory: "Gaskets & O-Rings",
    imagePath: "/updated-images/our-product-categories/orings.jpg",
  },
  {
    name: "Oil Seals",
    mainCategory: "Oil Seals",
    imagePath: "/updated-images/our-product-categories/oil-seals.jpg",
  },
];

/* ----------------------------- Skeleton -------------------------------- */

function Skeleton({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="absolute inset-0 z-10 overflow-hidden rounded-2xl bg-gray-100"
        >
          <motion.div
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
            animate={{ x: ["-150%", "250%"] }}
            transition={{ repeat: Infinity, duration: 1.3, ease: "linear" }}
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

/* ----------------------------- Card ------------------------------------ */

function MarqueeCard({ category }: { category: (typeof row1)[0] }) {
  const [imgRef, imgLoaded] = useImageLoaded();

  const categorySlug = createSlug(category.mainCategory);
  const subCategorySlug = createSlug(category.name);
  const href =
    category.mainCategory !== category.name
      ? `/products/${categorySlug}/${subCategorySlug}`
      : `/products/${categorySlug}`;

  return (
    <Link
      href={href}
      className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:bg-[#1A457A] hover:text-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1A457A]/40 hover:shadow-[0_8px_24px_rgba(26,69,122,0.13)]"
    >
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 ">
        <Skeleton show={!imgLoaded} />
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={imgLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center p-1"
        >
          <Image
            ref={imgRef}
            src={category.imagePath}
            alt={category.name}
            width={120}
            height={120}
            className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            sizes="200px"
          />
        </motion.div>

        {/* Category pill */}
        <span className="absolute bottom-2 left-2 rounded-md  px-2 py-0.5 text-[12px] font-semibold uppercase bg-[#1A457A] text-white ">
          {category.mainCategory}
        </span>
      </div>

      {/* Name */}
      <div className="px-3 py-3">
        <p className="text-lg font-bold leading-snug text-gray-800  transition-colors group-hover:text-white">
          {category.name}
        </p>
        <div className="mt-2 flex items-center gap-1 text-sm font-medium  opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          View range
          <svg
            className="h-3 w-3 translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M2 6h8M7 3l3 3-3 3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Top accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-0 rounded-tr-sm bg-[#1A457A] transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

/* ----------------------------- Marquee row ----------------------------- */

/**
 * Duplicates items so the strip loops seamlessly.
 * direction: "left" = scrolls left, "right" = scrolls right.
 */
function MarqueeRow({
  items,
  direction,
  speed = 35,
}: {
  items: typeof row1;
  direction: "left" | "right";
  speed?: number;
}) {
  // Triple the items so the loop is seamless even at wide viewports
  const repeated = [...items, ...items, ...items];
  const totalCards = items.length;
  // Each card is w-[200px] + gap-4 (16px) = 216px
  const singleSetWidth = totalCards * 216;

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-gray-50 to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-gray-50 to-transparent" />

      <motion.div
        className="flex gap-4 py-2"
        animate={{
          x:
            direction === "left" ? [-0, -singleSetWidth] : [-singleSetWidth, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
        style={{ width: `${singleSetWidth * 3}px` }}
      >
        {repeated.map((cat, i) => (
          <MarqueeCard key={`${cat.name}-${i}`} category={cat} />
        ))}
      </motion.div>
    </div>
  );
}

/* ----------------------------- Main ------------------------------------ */

export default function ProductCategories() {
  return (
    <section className="overflow-hidden bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 md:text-4xl">
            Our Product Categories
          </h2>
          <div className="mt-4 h-[3px] w-12 rounded-full bg-[#1A457A]" />
        </motion.div>
      </div>

      {/* Marquee rows — full bleed, outside container */}
      <div className="flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" speed={40} />
        <MarqueeRow items={row2} direction="right" speed={36} />
      </div>

      {/* View all CTA */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.38, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/products/all"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-[#1A457A] px-7 py-3 text-sm font-semibold text-[#1A457A] transition-colors hover:bg-[#1A457A] hover:text-white"
          >
            View all products
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
        </motion.div>
      </div>
    </section>
  );
}
