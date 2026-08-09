"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

/**
 * Full-width hover navigation.
 *
 * Replaces the shadcn <NavigationMenu> primitives with a plain nav.
 * Hovering a menu item with children opens ONE shared full-width panel
 * docked under the header. Moving between triggers swaps the panel
 * content; leaving the header (with a small grace delay) closes it.
 *
 * Expected props match your original data shape.
 */

type SubCategory = { id: string; name: string; slug: string };
type Category = {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
};
type SupportItem = { title: string; href: string; description: string };

interface MainNavProps {
  mechanicalSeals?: Category | null;
  otherProductCategories: { id: string; name: string; slug: string }[];
  supportComponents: SupportItem[];
  isLoading?: boolean;
}

type MenuKey = "products" | "support" | null;

export function MainNav({
  mechanicalSeals,
  otherProductCategories,
  supportComponents,
  isLoading = false,
}: MainNavProps) {
  const [active, setActive] = useState<MenuKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cancel any pending close (used when moving between trigger and panel).
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Close after a short grace period so diagonal mouse moves don't flicker.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActive(null), 120);
  };

  const open = (key: Exclude<MenuKey, null>) => {
    cancelClose();
    setActive(key);
  };

  useEffect(() => cancelClose, []);

  // Close on Escape for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkBase =
    "inline-flex h-10 items-center px-4 text-sm font-medium text-foreground/80 " +
    "transition-colors hover:text-foreground focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring rounded-md";

  const triggerBase =
    "inline-flex h-10 items-center gap-1 px-4 text-sm font-medium " +
    "transition-colors focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-ring rounded-md";

  return (
    <div
      className="relative hidden lg:block"
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* Top-level bar */}
      <nav className="flex items-center gap-1">
        <Link href="/" className={linkBase}>
          Home
        </Link>
        <Link href="/about" className={linkBase}>
          About
        </Link>

        {/* Products trigger */}
        <button
          type="button"
          disabled={isLoading}
          onMouseEnter={() => open("products")}
          onFocus={() => open("products")}
          aria-expanded={active === "products"}
          className={cn(
            triggerBase,
            active === "products"
              ? "text-foreground"
              : "text-foreground/80 hover:text-foreground",
            isLoading && "opacity-50 cursor-not-allowed"
          )}
        >
          Products
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              active === "products" && "rotate-180"
            )}
          />
        </button>

        {/* Support trigger */}
        <button
          type="button"
          onMouseEnter={() => open("support")}
          onFocus={() => open("support")}
          aria-expanded={active === "support"}
          className={cn(
            triggerBase,
            active === "support"
              ? "text-foreground"
              : "text-foreground/80 hover:text-foreground"
          )}
        >
          Support
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              active === "support" && "rotate-180"
            )}
          />
        </button>

        <Link href="/contact" className={linkBase}>
          Contact
        </Link>
      </nav>

      {/* ---- Full-width panel ---- */}
      {/* Docked to the left edge of the viewport so it spans the whole width.
          Requires the header to be relatively positioned (it is, above). */}
      <div
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
        className={cn(
          "absolute left-1/2 top-full z-50 w-screen -translate-x-1/2",
          "transition-all duration-200 ease-out",
          active
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="border-b bg-background shadow-lg">
          <div className="mx-auto max-w-7xl px-6 py-8">
            {active === "products" && (
              <ProductsPanel
                mechanicalSeals={mechanicalSeals}
                otherProductCategories={otherProductCategories}
                isLoading={isLoading}
              />
            )}
            {active === "support" && (
              <SupportPanel supportComponents={supportComponents} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- Panels --------------------------------- */

function ProductsPanel({
  mechanicalSeals,
  otherProductCategories,
  isLoading,
}: {
  mechanicalSeals?: Category | null;
  otherProductCategories: { id: string; name: string; slug: string }[];
  isLoading: boolean;
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
            emphasis="accent"
          />
          <PanelLink
            href="/products"
            title="Product Categories"
            description="Browse our main product categories."
          />
          {mechanicalSeals && (
            <PanelLink
              href={`/products/${mechanicalSeals.slug}`}
              title={mechanicalSeals.name}
              description={`View all ${mechanicalSeals.name}`}
              emphasis="primary"
            />
          )}
        </ul>

        {otherProductCategories.length > 0 && (
          <>
            <Separator className="my-4" />
            <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
              {otherProductCategories.map((cat) => (
                <PanelLink
                  key={cat.id}
                  href={`/products/${cat.slug}`}
                  title={cat.name}
                  compact
                />
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Right: seal types */}
      <div className="rounded-lg bg-muted/40 p-6">
        <PanelHeading className="text-primary">Mechanical Seal Types</PanelHeading>
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
              />
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">
            No seal types available.
          </p>
        )}
      </div>
    </div>
  );
}

function SupportPanel({
  supportComponents,
}: {
  supportComponents: SupportItem[];
}) {
  return (
    <div>
      <PanelHeading>Support</PanelHeading>
      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {supportComponents.map((item) => (
          <PanelLink
            key={item.title}
            href={item.href}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
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
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}

function PanelLink({
  href,
  title,
  description,
  emphasis,
  compact = false,
}: {
  href: string;
  title: string;
  description?: string;
  emphasis?: "accent" | "primary";
  compact?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block rounded-md p-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          compact && "p-2"
        )}
      >
        <span
          className={cn(
            "block text-sm font-medium leading-none",
            emphasis === "accent" && "text-accent",
            emphasis === "primary" && "text-primary"
          )}
        >
          {title}
        </span>
        {description && (
          <span className="mt-1.5 block text-xs leading-snug text-muted-foreground">
            {description}
          </span>
        )}
      </Link>
    </li>
  );
}

function SealSkeleton() {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-1 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className="p-2">
          <div className="h-4 w-24 animate-pulse rounded bg-muted-foreground/20" />
        </li>
      ))}
    </ul>
  );
}
