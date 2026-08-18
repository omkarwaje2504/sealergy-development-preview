"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ShieldCheck, CheckSquare, TestTube } from "lucide-react";
import { createSlug } from "@/lib/utils";

/* ----------------------------- Data ------------------------------------ */

const topServices = [
  {
    title: "Advanced Manufacturing",
    description:
      "High-performance seals for heavy-duty pumps—built to withstand pressure and abrasion.",
    icon: ShieldCheck,
  },
  {
    title: "Engineer Testing Seal Performance",
    description:
      "Maintenance-free, self-contained seals ensuring precise alignment and reliability.",
    icon: CheckSquare,
  },
  {
    title: "Engineering & Testing Excellence",
    description:
      "Every seal batch inspected under real-operating conditions for zero-leak assurance.",
    icon: TestTube,
  },
];

const mainContent = [
  {
    title: "Innovative Seal Solutions, Engineered In-House",
    description:
      "We design and manufacture all seals in Mumbai, using premium materials—Carbide, Silicon Carbide, Viton, EPDM—meeting ISO 9001 quality standards.",
    image: "/assets/innovative-seal-solutions.jpg",
    href: "/about",
  },
  {
    title: "Why Industry Leaders Choose Us",
    description:
      "At Sealergy, we don't just manufacture—we engineer. From selecting the right materials like Silicon Carbide, Carbon, Viton, and PTFE, to running real-condition performance tests, every seal is optimized to meet our client's exact requirement. Proudly made in Mumbai, trusted across the world.",
    image: "/assets/why-industry-leaders-choose-us.jpg",
    href: "/about",
  },
];

const sidebarContent = [
  {
    title: "Submersible Pump Seals",
    description:
      "Specifically built for underground and wet environments—resistant to high pressure and long running hours",
    image: "/assets/submersible-pump-seals-short-1.jpg",
    href: "/products/mechanical-seals",
  },
  {
    title: "Stork & Crane Type Seals",
    description:
      "Versatile seals suitable for a wide range of standard and utility pump systems",
    image: "/assets/stork-and-cranes-type-seals-short-2.jpg",
    href: "/products/mechanical-seals",
  },
  {
    title: "Acid & Chemical‑Grade Seals",
    description:
      "Designed with chemically inert materials like PTFE and Viton for handling corrosive media",
    image: "/assets/Acid-chemical‑grade-seals-short-3.jpg",
    href: `/products/mechanical-seals/${createSlug("PTFE Seals")}`,
  },
  {
    title: "OEM Custom Seals",
    description:
      "Tailor-made solutions built as per customer drawings or reverse-engineered from existing setups.",
    image: "/assets/oem-custom-seals-short-4.jpg",
    href: "/about",
  },
  {
    title: "Seal Refurbishment & Replacement Service",
    description:
      "Get your old or worn-out seals inspected, reconditioned, or replaced with cost-effective, high-performance alternatives",
    image: "/assets/why-industry-leaders-choose-us.jpg",
    href: "/support/maintenance-tips",
  },
];

/* ----------------------------- Motion variants -------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ----------------------------- Shimmer skeleton ------------------------- */

function Skeleton({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0 z-10 overflow-hidden rounded-lg bg-gray-200"
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

/* ----------------------------- Custom hooks ----------------------------- */

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

/* ----------------------------- Sub-components --------------------------- */

function MainCard({ item }: { item: (typeof mainContent)[0] }) {
  const [imgRef, imgLoaded] = useImageLoaded();

  return (
    <Link
      href={item.href}
      className="group flex flex-col border rounded-2xl shadow-sm hover:shadow-md h-full"
    >
      <div className="relative h-40 lg:h-56 w-full overflow-hidden rounded-lg">
        <Skeleton show={!imgLoaded} />
        <motion.div
          initial={{ scale: 1.06, opacity: 0 }}
          animate={imgLoaded ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            ref={imgRef}
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      </div>
      <div className="mt-4 px-4">
        <h3 className=" leading-tight lg:leading-none text-lg lg:text-2xl font-bold text-[#1A457A] transition-colors group-hover:text-[#2563a8]">
          {item.title}
        </h3>
        <p className=" mb-4 lg:mb-0 mt-2 text-sm lg:text-base text-gray-600">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

function SidebarCard({ item }: { item: (typeof sidebarContent)[0] }) {
  const [imgRef, imgLoaded] = useImageLoaded();

  return (
    <Link href={item.href} className="group flex items-start gap-4">
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
        <Skeleton show={!imgLoaded} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={imgLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            ref={imgRef}
            src={item.image}
            alt={item.title}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#1A457A] transition-colors group-hover:text-[#2563a8]">
          {item.title}
        </h4>
        <p className="mt-0.5 line-clamp-2 text-sm text-gray-600">
          {item.description}
        </p>
      </div>
    </Link>
  );
}

/* ----------------------------- Main component --------------------------- */

export default function Solutions() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        {/* Top three services */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 lg:mb-16 grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-3"
        >
          {topServices.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="flex items-start gap-2 lg:gap-6"
            >
              <div className="rounded-lg bg-[#1A457A]/10 p-4">
                <service.icon className="h-8 w-8 text-[#1A457A]" />
              </div>
              <div>
                <p className="lg:mb-2 text-lg lg:text-xl font-bold lg:font-semibold text-[#1A457A] leading-tight lg:leading-none">
                  {service.title}
                </p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Left: 2 big cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:col-span-2"
          >
            {mainContent.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <MainCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Right: sidebar */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-2 lg:col-span-1"
          >
            {sidebarContent.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <SidebarCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
