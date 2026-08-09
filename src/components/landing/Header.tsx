"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import type { CategoryWithSubCategories } from "@/lib/products";
import { getCategoriesWithSubCategoriesForClient } from "@/lib/products-client";
import { Logo } from "../icons";

const supportComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Installation Guide",
    href: "/support/installation-guide",
    description: "Step-by-step guides for proper installation.",
  },
  {
    title: "Maintenance Tips",
    href: "/support/maintenance-tips",
    description: "Best practices for extending seal life.",
  },
  {
    title: "Technical Specs",
    href: "/support/technical-specs",
    description: "Detailed specifications for all our products.",
  },
  {
    title: "Troubleshooting",
    href: "/support/troubleshooting-guide",
    description: "Solutions for common sealing issues.",
  },
];

type MenuKey = "products" | "support" | null;

/* --------------------------- Motion variants ---------------------------- */

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" } },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function Header() {
  const router = useRouter();
  const [productNav, setProductNav] = React.useState<
    CategoryWithSubCategories[]
  >([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const [active, setActive] = React.useState<MenuKey>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    async function loadNav() {
      setIsLoading(true);
      const navData = await getCategoriesWithSubCategoriesForClient();
      setProductNav(navData);
      setIsLoading(false);
    }
    loadNav();
  }, []);

  const mechanicalSeals = productNav.find((c) => c.slug === "mechanical-seals");
  const otherProductCategories = productNav.filter(
    (c) => c.slug !== "mechanical-seals",
  );

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = React.useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActive(null), 120);
  }, [cancelClose]);

  const openMenu = React.useCallback(
    (key: Exclude<MenuKey, null>) => {
      cancelClose();
      setActive(key);
    },
    [cancelClose],
  );

  React.useEffect(() => cancelClose, [cancelClose]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const linkBase =
    "inline-flex h-10 items-center px-4 text-lg font-medium text-gray-800 rounded-md " +
    "transition-colors hover:font-bold hover:text-[#1A457A] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A457A]/40";

  const triggerBase =
    "inline-flex h-10 items-center gap-1 px-4 text-lg font-medium rounded-md " +
    "transition-colors hover:font-bold hover:text-[#1A457A] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A457A]/40";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white py-4"
      onMouseLeave={scheduleClose}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="mr-3 flex items-center xl:mr-5">
          <Image
            src="/sealergy_logo.png"
            alt="Company Logo"
            width={550}
            height={200}
            className="h-8 w-auto md:h-10 lg:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={linkBase}
            onMouseEnter={() => setActive(null)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkBase}
            onMouseEnter={() => setActive(null)}
          >
            About
          </Link>

          {/* Products */}
          <button
            type="button"
            disabled={isLoading}
            onMouseEnter={() => openMenu("products")}
            onFocus={() => openMenu("products")}
            aria-expanded={active === "products"}
            className={cn(
              triggerBase,
              active === "products"
                ? "font-bold text-[#1A457A]"
                : "text-gray-800",
              isLoading && "cursor-not-allowed opacity-50",
            )}
          >
            Products
            <motion.span
              animate={{ rotate: active === "products" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          {/* Support */}
          <button
            type="button"
            onMouseEnter={() => openMenu("support")}
            onFocus={() => openMenu("support")}
            aria-expanded={active === "support"}
            className={cn(
              triggerBase,
              active === "support"
                ? "font-bold text-[#1A457A]"
                : "text-gray-800",
            )}
          >
            Support
            <motion.span
              animate={{ rotate: active === "support" ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          <Link
            href="/contact"
            className={linkBase}
            onMouseEnter={() => setActive(null)}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={() => router.push("/new-arrivals")}
            className="rounded-md border-2 border-[#1A457A] px-4 py-2 font-semibold text-[#1A457A] transition-colors hover:bg-[#1A457A] hover:text-white"
          >
            New Arrivals
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="rounded-md border-2 border-[#1A457A] bg-[#1A457A] px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-[#1A457A]"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-800 transition-colors hover:bg-gray-100 lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* ---- Full-width hover panel (desktop only) ---- */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="mega-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute left-0 top-full hidden w-full lg:block"
          >
            <div className="border-t border-gray-200 bg-white shadow-xl">
              <div className="container mx-auto px-4 py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  >
                    {active === "products" ? (
                      <ProductsPanel
                        mechanicalSeals={mechanicalSeals}
                        otherProductCategories={otherProductCategories}
                        isLoading={isLoading}
                        onNavigate={() => setActive(null)}
                      />
                    ) : (
                      <SupportPanel
                        supportComponents={supportComponents}
                        onNavigate={() => setActive(null)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Mobile drawer ---- */}
      <MobileDrawer
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        productNav={productNav}
        supportComponents={supportComponents}
        router={router}
      />
    </header>
  );
}

/* --------------------------------- Panels --------------------------------- */

function ProductsPanel({
  mechanicalSeals,
  otherProductCategories,
  isLoading,
  onNavigate,
}: {
  mechanicalSeals?: CategoryWithSubCategories;
  otherProductCategories: CategoryWithSubCategories[];
  isLoading: boolean;
  onNavigate: () => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_2fr]">
      {/* Left: catalog + categories */}
      <div>
        <PanelHeading>Catalog</PanelHeading>
        <ul className="mt-4 space-y-1">
          <PanelLink
            href="/products/all"
            title="View All Products"
            description="See our complete catalog of sealing solutions."
            emphasis
            onNavigate={onNavigate}
          />
          <PanelLink
            href="/products"
            title="Product Categories"
            description="Browse our main product categories."
            onNavigate={onNavigate}
          />
          {mechanicalSeals && (
            <PanelLink
              href={`/products/${mechanicalSeals.slug}`}
              title={mechanicalSeals.name}
              description={`View all ${mechanicalSeals.name}`}
              emphasis
              onNavigate={onNavigate}
            />
          )}
        </ul>

        {otherProductCategories.length > 0 && (
          <>
            <div className="my-4 h-px bg-gray-200" />
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {otherProductCategories.map((cat) => (
                <PanelLink
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  title={cat.name}
                  compact
                  onNavigate={onNavigate}
                />
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Right: seal types */}
      <motion.div variants={itemVariants} className="rounded-lg bg-gray-50 p-6">
        <PanelHeading className="text-[#1A457A]">
          Mechanical Seal Types
        </PanelHeading>
        {isLoading ? (
          <SealSkeleton />
        ) : mechanicalSeals && mechanicalSeals.subCategories.length > 0 ? (
          <ul className="mt-4 grid grid-cols-2 gap-1 lg:grid-cols-3">
            {mechanicalSeals.subCategories.map((sub) => (
              <PanelLink
                key={sub.id}
                href={`/products/${mechanicalSeals.slug}/${sub.slug}`}
                title={sub.name}
                compact
                onNavigate={onNavigate}
              />
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-gray-500">No seal types available.</p>
        )}
      </motion.div>
    </div>
  );
}

function SupportPanel({
  supportComponents,
  onNavigate,
}: {
  supportComponents: { title: string; href: string; description: string }[];
  onNavigate: () => void;
}) {
  return (
    <div>
      <PanelHeading>Support</PanelHeading>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {supportComponents.map((item) => (
          <PanelLink
            key={item.title}
            href={item.href}
            title={item.title}
            description={item.description}
            onNavigate={onNavigate}
          />
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------ Mobile drawer ----------------------------- */

function MobileDrawer({
  open,
  onClose,
  productNav,
  supportComponents,
  router,
}: {
  open: boolean;
  onClose: () => void;
  productNav: CategoryWithSubCategories[];
  supportComponents: { title: string; href: string; description: string }[];
  router: ReturnType<typeof useRouter>;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
            className="absolute right-0 top-0 flex h-full w-[300px] flex-col bg-white shadow-2xl sm:w-[380px]"
          >
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
              <Link href="/" className="mr-3 flex items-center xl:mr-5">
                <Image
                  src="/sealergy_logo.png"
                  alt="Company Logo"
                  width={550}
                  height={200}
                  className="h-8 w-auto md:h-10 lg:h-14"
                />
              </Link>
              <button
                type="button"
                onClick={()=>onClose()}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-600 transition-colors hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-2">
              <nav className="flex flex-col space-y-1">
                <MobileLink href="/" onNavigate={onClose}>
                  Home
                </MobileLink>
                <MobileLink href="/about" onNavigate={onClose}>
                  About
                </MobileLink>

                <Collapsible label="Products">
                  <div className="flex flex-col pt-1">
                    <MobileLink
                      href="/products/all"
                      onNavigate={onClose}
                      className="font-bold text-[#1A457A]"
                    >
                      Browse All Products
                    </MobileLink>
                    <MobileLink
                      href="/products"
                      onNavigate={onClose}
                      className="font-bold text-[#1A457A]"
                    >
                      Browse Categories
                    </MobileLink>
                    <div className="my-2 h-px bg-gray-200" />
                    {productNav.map((cat) => (
                      <Collapsible key={cat.id} label={cat.name} small>
                        <div className="flex flex-col space-y-1 pt-1">
                          <MobileLink
                            href={`/products/${cat.slug}`}
                            onNavigate={onClose}
                          >
                            All {cat.name}
                          </MobileLink>
                          {cat.subCategories.map((item) => (
                            <MobileLink
                              key={item.slug}
                              href={`/products/${cat.slug}/${item.slug}`}
                              onNavigate={onClose}
                            >
                              {item.name}
                            </MobileLink>
                          ))}
                        </div>
                      </Collapsible>
                    ))}
                  </div>
                </Collapsible>

                <Collapsible label="Support">
                  <div className="flex flex-col space-y-1 pt-1">
                    {supportComponents.map((item) => (
                      <MobileLink
                        key={item.href}
                        href={item.href}
                        onNavigate={onClose}
                      >
                        {item.title}
                      </MobileLink>
                    ))}
                  </div>
                </Collapsible>

                <MobileLink href="/contact" onNavigate={onClose}>
                  Contact
                </MobileLink>
              </nav>

              <div className="my-5 h-px bg-gray-200" />

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    onClose();
                    router.push("/new-arrivals");
                  }}
                  className="rounded-md bg-[#1A457A] px-4 py-2.5 font-semibold text-white transition-colors hover:bg-[#153a68]"
                >
                  New Arrivals
                </button>
                <button
                  onClick={() => {
                    onClose();
                    router.push("/contact");
                  }}
                  className="rounded-md border-2 border-[#1A457A] px-4 py-2.5 font-semibold text-[#1A457A] transition-colors hover:bg-[#1A457A] hover:text-white"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

/* -------------------------- Custom collapsible ---------------------------- */

function Collapsible({
  label,
  small = false,
  children,
}: {
  label: string;
  small?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between rounded-md py-1 text-left font-semibold text-gray-800 transition-colors hover:text-[#1A457A]",
          small ? "text-sm" : "text-sm",
        )}
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden pl-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------- Primitives ------------------------------- */

function PanelHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      variants={itemVariants}
      className={cn("text-base font-semibold text-gray-500", className)}
    >
      {children}
    </motion.p>
  );
}

function PanelLink({
  href,
  title,
  description,
  emphasis = false,
  compact = false,
  onNavigate,
}: {
  href: string;
  title: string;
  description?: string;
  emphasis?: boolean;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <motion.li variants={itemVariants}>
      <Link
        href={href}
        onClick={onNavigate}
        className={cn(
          "group block rounded-md p-3 transition-colors hover:bg-[#1A457A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A457A]/40",
          compact && "p-2",
        )}
      >
        <span
          className={cn(
            "block text-base font-medium leading-none text-gray-800 group-hover:text-white",
            emphasis && "text-[#1A457A]",
          )}
        >
          {title}
        </span>
        {description && (
          <span className="mt-1.5 block text-sm leading-snug text-gray-500 group-hover:text-white/90">
            {description}
          </span>
        )}
      </Link>
    </motion.li>
  );
}

function SealSkeleton() {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-1 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="p-2">
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------- Mobile link ------------------------------ */

function MobileLink({
  href,
  onNavigate,
  className,
  children,
}: {
  href: string;
  onNavigate?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "rounded-md py-1 text-sm font-medium text-gray-600 transition-colors hover:text-[#1A457A]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
