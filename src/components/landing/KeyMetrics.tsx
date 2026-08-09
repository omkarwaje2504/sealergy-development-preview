"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Users, Building2, Wrench, CalendarDays } from "lucide-react";

/* ----------------------------- Data ------------------------------------ */

const metrics = [
  {
    value: 5000,
    display: "5,000+",
    label: "Customers served",
    sub: "across 15+ countries",
    icon: Users,
    pct: 85,
  },
  {
    value: 15,
    display: "15+",
    label: "Industries supported",
    sub: "from water to pharma",
    icon: Building2,
    pct: 60,
  },
  {
    value: 50000,
    display: "50,000+",
    label: "Seals manufactured",
    sub: "zero-defect batches",
    icon: Wrench,
    pct: 95,
  },
  {
    value: 50,
    display: "50",
    label: "Years of experience",
    sub: "since 1974",
    icon: CalendarDays,
    pct: 100,
  },
];

/* ----------------------------- Motion ---------------------------------- */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/* ----------------------------- Count-up hook --------------------------- */

function useCountUp(target: string, active: boolean) {
  const [display, setDisplay] = React.useState("0");
  React.useEffect(() => {
    if (!active) return;
    const numeric = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(numeric)) {
      setDisplay(target);
      return;
    }
    const suffix = target.replace(/[0-9,]/g, "");
    const steps = 60;
    const ms = 1800 / steps;
    let step = 0;
    const id = setInterval(() => {
      step++;
      const v = Math.round((numeric / steps) * step);
      setDisplay((v >= 1000 ? v.toLocaleString() : String(v)) + suffix);
      if (step >= steps) {
        setDisplay(target);
        clearInterval(id);
      }
    }, ms);
    return () => clearInterval(id);
  }, [active, target]);
  return display;
}

/* ----------------------------- SVG ring -------------------------------- */

function Ring({ pct, active }: { pct: number; active: boolean }) {
  const r = 44;
  const circ = 2 * Math.PI * r;
  const [dash, setDash] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const target = (pct / 100) * circ;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame++;
      setDash((target / total) * frame);
      if (frame >= total) {
        setDash(target);
        clearInterval(id);
      }
    }, 1800 / total);
    return () => clearInterval(id);
  }, [active, pct, circ]);

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      className="absolute inset-0 -rotate-90"
    >
      {/* Track */}
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="6"
      />
      {/* Progress */}
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: "none" }}
      />
    </svg>
  );
}

/* ----------------------------- Metric card ----------------------------- */

function MetricCard({ m }: { m: (typeof metrics)[0] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(m.display, inView);
  const Icon = m.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
    >
      {/* Ring + icon */}
      <div className="relative mb-5 flex h-[100px] w-[100px] items-center justify-center">
        <Ring pct={m.pct} active={inView} />
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Number */}
      <p className="text-5xl font-black tracking-tight text-white lg:text-6xl">
        {count}
      </p>

      {/* Label */}
      <p className="mt-2 text-2xl font-semibold text-white/90">{m.label}</p>

      {/* Sub-label */}
      <p className="mt-1 text-md text-white/80">{m.sub}</p>

      {/* Bottom shine line */}
      <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-white/50 transition-all duration-500 group-hover:w-3/4" />
    </motion.div>
  );
}

/* ----------------------------- Main ------------------------------------ */

export default function KeyMetrics() {
  const headingRef = React.useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.6 });

  return (
    <section className="relative overflow-hidden bg-[#0d2444] py-10">
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Soft glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#1A457A]/60 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#1A457A]/40 blur-[100px]"
      />

      <div className="container relative mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 flex flex-col items-center text-center"
        >
         
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Our impact in numbers
          </h2>
          <div className="mt-4 h-[3px] w-12 rounded-full bg-white/30" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <MetricCard key={m.label} m={m} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
