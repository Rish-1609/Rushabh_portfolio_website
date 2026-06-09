import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  certifications,
  education,
  profile,
  researchPapers,
} from "@/data/profile";

export const metadata: Metadata = {
  title: "Education & Research",
  description: `${profile.name}'s education, peer-reviewed research, and certifications.`,
};

export default function EducationPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="shell section">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:gap-14">
            <div>
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Education &amp; research
                </p>
                <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
                  A cross-disciplinary foundation, validated by research.
                </h1>
                <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
                  Pharmacy, business, and analytics degrees, peer-reviewed
                  publications across health equity and the life sciences, and
                  industry certifications.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-xs lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-[2rem]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(124,45,209,0.12), rgba(29,78,216,0.10))",
                  }}
                />
                <Image
                  src="/images/rushabh-graduation.jpg"
                  alt={`${profile.name} at graduation`}
                  width={600}
                  height={800}
                  className="aspect-[3/4] w-full rounded-3xl border border-border object-cover shadow-sm"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section">
          <Reveal>
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-muted" />
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Education
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 60}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                  <span className="text-sm text-muted">{item.period}</span>
                  <h3 className="mt-2 font-display text-lg font-medium text-ink">
                    {item.school}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {item.credential}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {item.detail}
                  </p>
                  <p className="mt-auto pt-3 text-xs text-muted">
                    {item.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Published research
              </h2>
              <a
                href={profile.scholar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
              >
                View Google Scholar <ArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
          <div className="mt-8 space-y-4">
            {researchPapers.map((paper, i) => (
              <Reveal key={paper.title} delay={i * 50}>
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-sm sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs font-medium text-foreground/70">
                        {paper.field}
                      </span>
                      <span className="text-xs text-muted">{paper.year}</span>
                      {paper.citedBy ? (
                        <span className="text-xs text-muted">
                          · Cited by {paper.citedBy}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                      {paper.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground/70">
                      {paper.authors}
                    </p>
                    <p className="mt-1 text-sm italic text-muted">
                      {paper.venue}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="hidden shrink-0 text-muted transition-colors group-hover:text-ink sm:block"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section">
          <Reveal>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-muted" />
              <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
                Certifications
              </h2>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {certifications.map((cert, i) => (
              <Reveal key={cert} delay={i * 50}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 text-sm font-medium text-ink">
                  <Award size={16} className="shrink-0 text-accent" />
                  {cert}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="shell section">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-surface p-8 md:flex-row md:items-center sm:p-10">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  See how this translates to delivery
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Explore role-specific profiles or get in touch.
                </p>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Explore my work <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
