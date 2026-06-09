import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, resumeVariants, roleLenses } from "@/data/profile";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download ${profile.name}'s resume — a general version plus tailored resumes by role and industry.`,
};

const groupOrder = ["Featured", "By role", "By industry"];

export default function ResumePage() {
  const grouped = groupOrder
    .map((group) => ({
      group,
      items: resumeVariants.filter((v) => v.group === group),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Resume
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              The right resume for the role you are filling.
            </h1>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              Start with the general resume, or pick a version tailored to a
              specific role or industry. Every version shares the same verified
              experience — only the emphasis changes.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={profile.masterResume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <Download size={16} /> Download general resume
            </a>
          </Reveal>
        </div>
      </section>

      {/* Which resume helper */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <Reveal>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-accent" />
              <h2 className="font-display text-2xl font-medium text-ink">
                Which resume should you read?
              </h2>
            </div>
            <p className="mt-3 max-w-2xl text-sm text-muted">
              Match your opening to a focus area below.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roleLenses.map((lens, i) => {
              const Icon = lens.icon;
              return (
                <Reveal key={lens.slug} delay={i * 40}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        backgroundColor: `${lens.accent}14`,
                        color: lens.accent,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">
                        {lens.shortLabel}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {lens.tagline}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <Link
                          href={`/work/${lens.slug}`}
                          className="text-xs font-medium text-ink hover:underline"
                        >
                          View profile
                        </Link>
                        <a
                          href={lens.resumeFile}
                          download
                          className="text-xs font-medium hover:underline"
                          style={{ color: lens.accent }}
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* All downloads */}
      <section>
        <div className="shell section">
          <div className="space-y-12">
            {grouped.map(({ group, items }) => (
              <div key={group}>
                <Reveal>
                  <h2 className="font-display text-xl font-medium text-ink">
                    {group}
                  </h2>
                </Reveal>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {items.map((item, i) => (
                    <Reveal key={item.file} delay={i * 40}>
                      <a
                        href={item.file}
                        download
                        className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-muted">
                            <FileText size={18} />
                          </span>
                          <div>
                            <p className="text-sm font-medium text-ink">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <Download
                          size={18}
                          className="shrink-0 text-muted transition-colors group-hover:text-ink"
                        />
                      </a>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
