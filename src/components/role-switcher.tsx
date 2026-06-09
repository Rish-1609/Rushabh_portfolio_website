"use client";

import Link from "next/link";
import { useCallback, useSyncExternalStore } from "react";
import { ArrowRight, Download } from "lucide-react";
import { roleLenses, type RoleLens } from "@/data/profile";

const STORAGE_KEY = "rs-role-lens";

function isValidSlug(value: string | null): value is string {
  return !!value && roleLenses.some((lens) => lens.slug === value);
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("rs-role-lens-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("rs-role-lens-change", callback);
  };
}

function getSnapshot() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isValidSlug(stored) ? stored : roleLenses[0].slug;
}

function getServerSnapshot() {
  return roleLenses[0].slug;
}

export function RoleSwitcher() {
  const activeSlug = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const handleSelect = useCallback((slug: string) => {
    window.localStorage.setItem(STORAGE_KEY, slug);
    window.dispatchEvent(new Event("rs-role-lens-change"));
  }, []);

  const active: RoleLens =
    roleLenses.find((lens) => lens.slug === activeSlug) ?? roleLenses[0];
  const Icon = active.icon;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {roleLenses.map((lens) => {
          const isActive = lens.slug === active.slug;
          return (
            <button
              key={lens.slug}
              type="button"
              onClick={() => handleSelect(lens.slug)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "border-transparent text-white shadow-sm"
                  : "border-border bg-surface text-muted hover:border-ink/30 hover:text-ink"
              }`}
              style={isActive ? { backgroundColor: active.accent } : undefined}
            >
              {lens.shortLabel}
            </button>
          );
        })}
      </div>

      <div
        key={active.slug}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
      >
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: active.accent }}
        />
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${active.accent}14`,
                  color: active.accent,
                }}
              >
                <Icon size={22} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {active.label}
                </p>
                <p className="text-sm font-medium text-ink">{active.tagline}</p>
              </div>
            </div>

            <h2 className="mt-6 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {active.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">
              {active.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/work/${active.slug}`}
                className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                View this profile <ArrowRight size={16} />
              </Link>
              <a
                href={active.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
              >
                <Download size={16} /> Tailored resume
              </a>
            </div>
          </div>

          <div className="rounded-xl bg-surface-2 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Signature outcomes
            </p>
            <div className="mt-4 space-y-4">
              {active.achievements.map((item) => (
                <div key={item.label} className="flex items-baseline gap-3">
                  <span
                    className="font-display text-2xl font-semibold tabular-nums"
                    style={{ color: active.accent }}
                  >
                    {item.value}
                  </span>
                  <span className="text-sm leading-snug text-foreground/75">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted">
              Core tools
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {active.tools.slice(0, 8).map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-surface px-2 py-1 text-xs text-foreground/70"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
