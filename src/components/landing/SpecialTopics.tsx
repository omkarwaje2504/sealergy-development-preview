"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { createSlug } from "@/lib/utils";

/* ----------------------------- Data ------------------------------------ */

const topics = [
  {
    title: "Advanced Materials for Extreme Conditions",
    excerpt:
      "Discover the latest innovations in seal materials designed for high-temperature and high-pressure applications.",
    image:
      "/updated-images/siddhi-seals-resize-&-recreate-website-creatives/resize/blogs/advanced-materials-for-extreme-conditions.jpg",
    category: "Material Science",
    date: "Oct 15, 2023",
    readTime: "5 min read",
  },
  {
    title: "Preventing Seal Failure in High-RPM Applications",
    excerpt:
      "Learn about the common causes of seal failure in high-speed rotating equipment and how to prevent them.",
    image:
      "/updated-images/siddhi-seals-resize-&-recreate-website-creatives/resize/blogs/preventing-seal-failure-in-high-rpm-applications.jpg",
    category: "Maintenance",
    date: "Sep 28, 2023",
    readTime: "4 min read",
  },
  {
    title: "The Role of ISO 9001 in Seal Manufacturing",
    excerpt:
      "How our ISO 9001 certification ensures consistent quality in every mechanical seal we produce.",
    image:
      "/updated-images/siddhi-seals-resize-&-recreate-website-creatives/resize/blogs/iso-9001-in-seal-manufacturing.jpg",
    category: "Quality Assurance",
    date: "Sep 10, 2023",
    readTime: "6 min read",
  },
  {
    title: "How to Choose the Right Pump Seal",
    excerpt:
      "A comprehensive guide to selecting the perfect mechanical seal for your pumping application.",
    image:
      "/updated-images/siddhi-seals-resize-&-recreate-website-creatives/resize/blogs/how-to-choose-the-right-pump-seal.jpg",
    category: "Buying Guide",
    date: "Aug 22, 2023",
    readTime: "7 min read",
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Material Science": { bg: "bg-blue-50", text: "text-blue-700" },
  Maintenance: { bg: "bg-amber-50", text: "text-amber-700" },
  "Quality Assurance": { bg: "bg-green-50", text: "text-green-700" },
  "Buying Guide": { bg: "bg-purple-50", text: "text-purple-700" },
};

/* ----------------------------- Motion ---------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

/* ----------------------------- Skeleton -------------------------------- */

function Skeleton({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 z-10 overflow-hidden bg-gray-200"
        >
          <motion.div
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent"
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

/* ----------------------------- Flip card ------------------------------- */

function TopicCard({
  topic,
  priority,
}: {
  topic: (typeof topics)[0];
  priority?: boolean;
}) {
  const [flipped, setFlipped] = React.useState(false);
  const [imgRef, imgLoaded] = useImageLoaded();
  const color = categoryColors[topic.category] ?? {
    bg: "bg-gray-100",
    text: "text-gray-700",
  };
  const href = `/support/${createSlug(topic.title)}`;

  return (
    /* Perspective wrapper */
    <div
      className="group h-72 cursor-pointer [perspective:1000px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
      role="article"
      aria-label={topic.title}
    >
      {/* Card body — rotates in 3D */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* ---- FRONT ---- */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl [backface-visibility:hidden]">
          <Skeleton show={!imgLoaded} />

          {/* Full-bleed image */}
          <motion.div
            initial={{ scale: 1.06, opacity: 0 }}
            animate={imgLoaded ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              ref={imgRef}
              src={topic.image}
              alt={topic.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={priority}
            />
          </motion.div>

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Category pill */}
          <span
            className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-sm font-semibold ${color.bg} ${color.text}`}
          >
            {topic.category}
          </span>

          {/* Title at bottom */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-xl font-bold leading-snug text-white">
              {topic.title}
            </h3>
          </div>
        </div>

        {/* ---- BACK ---- */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-[#1A457A] p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {/* Category */}
          <span
            className={`mb-3 w-fit rounded-full px-2.5 py-0.5 text-sm font-semibold ${color.bg} ${color.text}`}
          >
            {topic.category}
          </span>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold leading-snug text-white">
            {topic.title}
          </h3>

          {/* Divider */}
          <div className="mb-3 h-px bg-white/20" />

          {/* Excerpt */}
          <p className="flex-1 text-md leading-relaxed text-white line-clamp-4">
            {topic.excerpt}
          </p>

          {/* Meta + CTA */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>{topic.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>{topic.readTime}</span>
            </div>
            <Link
              href={href}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-md font-bold text-[#1A457A] transition-colors hover:bg-white/90"
            >
              Read More
              <svg
                className="h-3 w-3"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ----------------------------- Main ------------------------------------ */

export default function SpecialTopics() {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Special Topics &amp; Insights
          </h2>
          <div className="mt-4 h-[3px] w-12 rounded-full bg-[#1A457A]" />
        </motion.div>

        {/* 4-column flip grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {topics.map((topic, i) => (
            <motion.div key={topic.title} variants={fadeUp}>
              <TopicCard topic={topic} priority={i < 2} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.38, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 rounded-lg border-2 border-[#1A457A] px-7 py-3 text-sm font-semibold text-[#1A457A] transition-colors hover:bg-[#1A457A] hover:text-white"
          >
            View all articles
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
