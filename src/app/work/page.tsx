import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, roleLenses } from "@/data/profile";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Role-specific profiles spanning AI architecture, program management, data governance, BI, master data, finance data quality, and life sciences.",
};

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Work
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              One operator, framed for the role you are hiring for.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              Each profile below draws on the same body of work — AI deployment,
              data quality, governance, and analytics — and frames it for a
              specific hiring need. Open any profile for proof points, tools, and
              a tailored resume.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="shell section-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            {roleLenses.map((lens, i) => {
              const Icon = lens.icon;
              return (
                <Reveal key={lens.slug} delay={i * 50}>
                  <div className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-md sm:p-7">
                    <div className="flex items-start justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${lens.accent}14`,
                          color: lens.accent,
                        }}
                      >
                        <Icon size={24} />
                      </span>
                      <a
                        href={lens.resumeFile}
                        download
                        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-ink/30 hover:text-ink"
                      >
                        <Download size={13} /> Resume
                      </a>
                    </div>

                    <h2 className="mt-5 font-display text-xl font-medium text-ink">
                      {lens.label}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                      {lens.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {lens.achievements.map((item) => (
                        <span
                          key={item.label}
                          className="rounded-lg bg-surface-2 px-3 py-1.5 text-xs text-foreground/75"
                        >
                          <span
                            className="font-semibold"
                            style={{ color: lens.accent }}
                          >
                            {item.value}
                          </span>{" "}
                          {item.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6">
                      <Link
                        href={`/work/${lens.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
                      >
                        View full profile
                        <ArrowUpRight size={15} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface-2/50">
        <div className="shell section-sm">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <p className="max-w-md text-[15px] text-foreground/80">
                Not sure which profile fits? The resume hub lets you compare and
                download every tailored version in one place.
              </p>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <Download size={16} /> Go to resume hub
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sr-only">{profile.name} role profiles</div>
    </>
  );
}
