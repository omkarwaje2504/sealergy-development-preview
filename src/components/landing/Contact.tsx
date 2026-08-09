"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";

/* ----------------------------- Motion ---------------------------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ----------------------------- Image hook ------------------------------ */

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

/* ----------------------------- Field ----------------------------------- */

function Field({
  id,
  label,
  type = "text",
  placeholder,
  multiline = false,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  multiline?: boolean;
}) {
  const [focused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState("");
  const active = focused || value.length > 0;

  const ring = focused
    ? "border-[#1A457A] ring-2 ring-[#1A457A]/20 bg-white"
    : "border-white/20 hover:border-white/40 bg-white/8";

  const base = `w-full rounded-lg border text-sm text-white outline-none transition-all duration-200 placeholder:text-white/30 ${ring}`;

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          active
            ? "top-2 text-[10px] font-bold uppercase tracking-wider text-[#93c5fd]"
            : multiline
              ? "top-4 text-sm text-white/40"
              : "top-1/2 -translate-y-1/2 text-sm text-white/40"
        }`}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          placeholder={focused ? placeholder : ""}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} pt-7 pb-3 px-4 resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          placeholder={focused ? placeholder : ""}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${base} h-14 pt-5 pb-2 px-4`}
        />
      )}
    </div>
  );
}

/* ----------------------------- Quick contact pills -------------------- */

const quickLinks = [
  { icon: Phone, label: "+91 93212 16816", href: "tel:+919321216816" },
  {
    icon: Mail,
    label: "info@sealergysolutions.com",
    href: "mailto:info@sealergysolutions.com",
  },
  { icon: Clock, label: "Mon–Sat, 9 AM – 6 PM IST", href: "#" },
];

/* ----------------------------- Left panel ------------------------------ */

function LeftPanel() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const [imgRef, imgLoaded] = useImageLoaded();

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col overflow-hidden rounded-2xl"
    >
      {/* Parallax image */}
      <div className="relative h-72 overflow-hidden lg:h-full lg:min-h-[530px]">
        <AnimatePresence>
          {!imgLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-10 overflow-hidden bg-[#0d2444]"
            >
              <motion.div
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                animate={{ x: ["-150%", "250%"] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div style={{ y: imgY }} className="absolute inset-0 scale-100">
          <Image
            ref={imgRef}
            src="/assets/about-us.jpg"
            alt="Sealergy manufacturing facility"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Deep overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e38]/30 via-[#0a1e38]/50 to-[#0a1e38]" />

        {/* Floating content over image */}
        <div className="absolute inset-x-0 bottom-0 p-8">
          <h2
            className="mb-2 text-3xl font-black leading-tight text-white lg:text-4xl"
            style={{
              background:
                "linear-gradient(135deg, #fff 0%, #93c5fd 60%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Need a Custom
            <br />
            Seal Solution?
          </h2>
          <p className="text-md leading-relaxed text-white/90">
            Our engineers respond within 24 hours with tailored recommendations.
          </p>
        </div>
      </div>

      {/* Quick contact strip — sits below image on mobile, overlaps on desktop */}
      <div className="bg-[#0a1e38] px-8">
        <div className="h-px bg-white/10 mb-2" />
        <p className="mb-4 text-md font-bold text-white/90">
          Reach us directly
        </p>
        <div className="flex gap-4">
          {quickLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}

              className="group flex items-center gap-2 rounded-xl   transition-all "
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1A457A]/30">
                <Icon className="h-4 w-4 text-[#93c5fd]" />
              </div>
              <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                {label}
              </span>
              
            </a>
          ))}
        </div>

        {/* Location tags */}
        <div className="mt-3 h-px bg-white/10 mb-2" />
        <div className="flex gap-3 mb-6">
          {[
            { tag: "Head Office", addr: "Malad West, Mumbai – 400064" },
            { tag: "Factory", addr: "Chandansar, Virar East – 401303" },
          ].map(({ tag, addr }) => (
            <div key={tag} className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#93c5fd]" />
              <div>
                <p className="text-sm text-white/80">
                  {tag}
                </p>
                <p className="text-sm text-white">{addr}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Right panel (form) ---------------------- */

function RightPanel() {
  const [sent, setSent] = React.useState(false);
  const [selectedType, setSelectedType] = React.useState<string | null>(null);

  const inquiryTypes = [
    "New seal requirement",
    "OEM / bulk order",
    "Seal replacement",
    "Technical support",
    "Other",
  ];

  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white">
      {/* Top bar */}
      <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-100 bg-gray-50 px-8 py-5">
        <div>
          <p className="text-2xl font-bold text-gray-900">Send a message</p>
          <p className="text-lg text-gray-500">We respond within 24 hours</p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center px-8 py-20 text-center"
          >
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <p className="text-xl font-bold text-gray-900">Message received!</p>
            <p className="mt-2 max-w-xs text-sm text-gray-500">
              Our engineering team will reach out within 24 hours with a
              tailored solution.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 rounded-lg border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-1 flex-col gap-5 px-8 py-7"
          >
            {/* Inquiry type chips */}
            <div>
              <p className="mb-2.5 text-md font-bold text-gray-700">
                Inquiry type
              </p>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() =>
                      setSelectedType(t === selectedType ? null : t)
                    }
                    className={`rounded-full border px-3 py-1 text-sm font-semibold transition-all ${
                      selectedType === t
                        ? "border-[#1A457A] bg-[#1A457A] text-white"
                        : "border-gray-200 text-gray-600 hover:border-[#1A457A]/40 hover:text-[#1A457A]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c-name"
                  className="text-md font-medium text-gray-800"
                >
                  Full name
                </label>
                <input
                  id="c-name"
                  type="text"
                  placeholder="Ravi Mehta"
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-all hover:border-gray-300 focus:border-[#1A457A] focus:ring-2 focus:ring-[#1A457A]/15"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c-company"
                  className="text-md font-medium text-gray-800"
                >
                  Company
                </label>
                <input
                  id="c-company"
                  type="text"
                  placeholder="Acme Industries"
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-all hover:border-gray-300 focus:border-[#1A457A] focus:ring-2 focus:ring-[#1A457A]/15"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c-phone"
                  className="text-md font-medium text-gray-800"
                >
                  Phone
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-all hover:border-gray-300 focus:border-[#1A457A] focus:ring-2 focus:ring-[#1A457A]/15"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="c-email"
                  className="text-md font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  placeholder="ravi@company.com"
                  className="h-11 rounded-lg border border-gray-200 px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition-all hover:border-gray-300 focus:border-[#1A457A] focus:ring-2 focus:ring-[#1A457A]/15"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="c-msg"
                className="text-md font-medium text-gray-800"
              >
                Describe your requirement
              </label>
              <textarea
                id="c-msg"
                rows={4}
                placeholder="e.g. We need 200 units of submersible pump seals, 65mm shaft dia, Viton rubber…"
                className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 resize-none transition-all hover:border-gray-300 focus:border-[#1A457A] focus:ring-2 focus:ring-[#1A457A]/15"
              />
            </div>

            <button
              type="submit"
              className="group flex items-center justify-center gap-2.5 rounded-xl bg-[#1A457A] py-3.5 text-lg font-bold text-white transition-colors hover:bg-[#153a68]"
            >
              Send enquiry
              <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <p className="text-center text-sm text-gray-400">
              By submitting you agree to our privacy policy. No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------- Main ------------------------------------ */

export default function Contact() {
  return (
    <section id="contact" className=" py-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <LeftPanel />
          </motion.div>
          <motion.div variants={fadeUp}>
            <RightPanel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
