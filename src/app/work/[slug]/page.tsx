import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getRoleLens, profile, roleLenses } from "@/data/profile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return roleLenses.map((lens) => ({ slug: lens.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lens = getRoleLens(slug);
  if (!lens) return { title: "Profile" };
  return {
    title: lens.label,
    description: lens.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lens = getRoleLens(slug);
  if (!lens) notFound();

  const Icon = lens.icon;
  const currentIndex = roleLenses.findIndex((l) => l.slug === lens.slug);
  const next = roleLenses[(currentIndex + 1) % roleLenses.length];

  return (
    <>
      <section className="border-b border-border">
        <div
          aria-hidden
          className="h-1.5 w-full"
          style={{ backgroundColor: lens.accent }}
        />
        <div className="shell section">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={15} /> All profiles
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-6 flex items-center gap-4">
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: `${lens.accent}14`,
                  color: lens.accent,
                }}
              >
                <Icon size={28} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                {lens.label}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
              {lens.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {lens.summary}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={lens.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: lens.accent }}
              >
                <Download size={16} /> Download tailored resume
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
              >
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <div className="grid gap-6 sm:grid-cols-3">
            {lens.achievements.map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="rounded-xl border border-border bg-surface p-6">
                  <p
                    className="font-display text-4xl font-semibold"
                    style={{ color: lens.accent }}
                  >
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-muted">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof points */}
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink">
              Selected proof points
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {lens.highlights.map((highlight, i) => (
              <Reveal key={highlight} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-foreground/80">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `${lens.accent}1a`,
                      color: lens.accent,
                    }}
                  >
                    <Check size={13} />
                  </span>
                  {highlight}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink">
              Tools &amp; platforms
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {lens.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next profile */}
      <section>
        <div className="shell section-sm">
          <Reveal>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-ink/20 sm:p-8"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Next profile
                </p>
                <p className="mt-2 font-display text-xl font-medium text-ink">
                  {next.label}
                </p>
              </div>
              <ArrowRight
                size={22}
                className="shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <div className="sr-only">
        {profile.name} — {lens.label}
      </div>
    </>
  );
}
