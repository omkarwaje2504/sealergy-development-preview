"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Linkedin, Youtube, Award, Shield,
  MapPin, Mail, Phone, ArrowUpRight, ChevronRight,
} from "lucide-react";
import { Logo } from "../icons";
import Image from "next/image";

/* ----------------------------- Data ------------------------------------ */

const products = [
  { name: "All Products",      href: "/products/all" },
  { name: "Mechanical Seals",  href: "/products/mechanical-seals" },
  { name: "Industrial Pumps",  href: "/products/industrial-pumps" },
  { name: "Gaskets & O-Rings", href: "/products/gaskets-o-rings" },
  { name: "Oil Seals",         href: "/products/oil-seals" },
];

const company = [
  { name: "About Us",           href: "/about" },
  { name: "Contact Us",         href: "/contact" },
  { name: "New Arrivals",       href: "/new-arrivals" },
  { name: "Installation Guide", href: "/support/installation-guide" },
  { name: "Maintenance Tips",   href: "/support/maintenance-tips" },
  { name: "Troubleshooting",    href: "/support/troubleshooting-guide" },
];

const industries = [
  { name: "Chemical & Process", href: "/applications/chemical-processing" },
  { name: "Water & Wastewater", href: "/applications/water-wastewater" },
  { name: "Oil & Gas",          href: "/applications/oil-gas" },
  { name: "Power Generation",   href: "/applications/power-generation" },
];

/* ----------------------------- Motion ---------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ----------------------------- Nav column ------------------------------ */

function NavCol({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <p className="mb-4 text-xl font-bold text-gray-800">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.name}>
            <Link
              href={l.href}
              className="group flex items-center gap-1 text-md text-gray-500 hover:font-bold transition-colors hover:text-[#1A457A]"
            >
              <ChevronRight className="h-3 w-3 text-gray-700 transition-all group-hover:translate-x-0.5 group-hover:text-[#1A457A]" />
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------- Main ------------------------------------ */

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(26,69,122,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1A457A] via-[#80C9EB] to-[#1A457A]" />

      {/* ---- Main footer body ---- */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative container mx-auto px-4 pt-14 pb-10"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <Link href="/" className="mb-5 inline-block">
             <Image
                              src="/sealergy_logo.png"
                              alt="Company Logo"
                              width={550}
                              height={200}
                              className="h-8 w-auto md:h-10 lg:h-20"
                            />
            </Link>

            <p className="mb-6 max-w-xs text-md leading-relaxed text-gray-500">
              Engineering Excellence, Energising Reliability. Pioneering
              mechanical seal solutions from Mumbai since 1974.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: "Malad West, Mumbai – 400064",       sub: "Head Office" },
                { icon: MapPin, text: "Chandansar, Virar East – 401303",   sub: "Factory" },
                { icon: Mail,   text: "info@sealergysolutions.com",         href: "mailto:info@sealergysolutions.com" },
                { icon: Phone,  text: "+91 93212 16816",                    href: "tel:+919321216816" },
              ].map(({ icon: Icon, text, sub, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A457A]/10">
                    <Icon className="h-5 w-5 text-[#1A457A]" />
                  </div>
                  <div>
                    {sub && (
                      <p className="text-sm font-bold text-gray-800">{sub}</p>
                    )}
                    {href ? (
                      <a href={href} className="text-sm text-gray-500 transition-colors hover:text-[#1A457A]">
                        {text}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {[
                { href: "#", label: "LinkedIn", icon: Linkedin },
                { href: "#", label: "YouTube",  icon: Youtube },
              ].map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-400 transition-all hover:border-[#1A457A]/40 hover:bg-[#1A457A]/8 hover:text-[#1A457A]"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Nav columns */}
          <motion.div variants={fadeUp}><NavCol title="Products"   links={products}   /></motion.div>
          <motion.div variants={fadeUp}><NavCol title="Company"    links={company}    /></motion.div>
          <motion.div variants={fadeUp}><NavCol title="Industries" links={industries} /></motion.div>
        </div>

        {/* ---- CTA strip ---- */}
        <motion.div
          variants={fadeUp}
          className="mt-4 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#1A457A]/15 bg-[#1A457A]/5 px-8 py-6 sm:flex-row"
        >
          <div>
            <p className="text-xl font-bold text-gray-900">Need a custom sealing solution?</p>
            <p className="mt-0.5 text-sm text-gray-500">Our engineers respond within 24 hours.</p>
          </div>
          <Link
            href="/contact"
            className="group flex shrink-0 items-center gap-2 rounded-xl bg-[#1A457A] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#153a68]"
          >
            Get a free quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* ---- Bottom bar ---- */}
        <div className="mt-3 flex flex-col items-center justify-between gap-5 border-t border-gray-100 pt-3 sm:flex-row">

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3">
            {[
              { Icon: Award,  label: "ISO 9001:2015" },
              { Icon: Shield, label: "ASME Certified" },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                <Icon className="h-3.5 w-3.5 text-[#1A457A]" />
                <span className="text-xs font-semibold text-gray-500">{label}</span>
              </div>
            ))}

            {/* Make in India */}
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
              <span className="flex gap-0.5">
                <span className="h-3 w-1 rounded-sm bg-orange-400" />
                <span className="h-3 w-1 rounded-sm bg-gray-200" />
                <span className="h-3 w-1 rounded-sm bg-green-500" />
              </span>
              <span className="text-[11px] font-semibold text-gray-500">Make in India</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400">
            &copy; {new Date().getFullYear()} Sealergy Solutions. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}