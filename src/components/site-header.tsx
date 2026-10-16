"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/#clients", label: "Clients" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
            RS
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink">
            {profile.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-ink"
                  : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Contact / Book time
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-3 text-base font-medium ${
                isActive(item.href) ? "text-ink" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-ink px-3 py-3 text-center text-base font-medium text-white"
          >
            Contact / Book time
          </a>
        </nav>
      )}
    </header>
  );
}
