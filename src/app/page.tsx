import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { RoleSwitcher } from "@/components/role-switcher";
import { Reveal } from "@/components/reveal";
import { experience, heroAchievements, profile, projects } from "@/data/profile";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 80% -10%, rgba(29,78,216,0.08), transparent 60%), radial-gradient(50% 40% at 0% 0%, rgba(13,148,136,0.06), transparent 55%)",
          }}
        />
        <div className="shell section">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_minmax(0,1fr)] lg:gap-14">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {profile.location} · Open to senior AI &amp; data roles
                </span>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
                  {profile.title}
                  <span className="mt-1 block text-2xl text-muted sm:text-3xl">
                    {profile.subtitle}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
                  {profile.positioning}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Explore my work <ArrowRight size={16} />
                  </Link>
                  <a
                    href={profile.masterResume}
                    download
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
                  >
                    <Download size={16} /> Download resume
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute -inset-3 -z-10 rounded-[2rem]"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(29,78,216,0.12), rgba(13,148,136,0.10))",
                  }}
                />
                <Image
                  src="/images/rushabh-headshot.jpg"
                  alt={`Portrait of ${profile.name}`}
                  width={640}
                  height={640}
                  priority
                  className="aspect-square w-full rounded-3xl border border-border object-cover shadow-sm"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {heroAchievements.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-muted">
                    {item.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              About
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium text-ink sm:text-3xl">
              An architect where AI, data, and the business meet.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-4 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  I&apos;m {profile.shortName}, an AI solutions architect and
                  data leader based in {profile.location}. For 7+ years I&apos;ve
                  translated ambiguous business problems into architectures and
                  working systems that teams actually adopt &mdash; across
                  pharma, healthcare, manufacturing, and energy.
                </p>
                <p>
                  My path is deliberately cross-disciplinary: a Bachelor of
                  Pharmacy, an MBA, and an MS in Business Analytics, plus
                  co-founding an EV-logistics startup &mdash; and peer-reviewed
                  research spanning health equity and pharmacology. It adds up to
                  an architect who designs and ships, a leader who governs, and a
                  researcher who validates.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  At a glance
                </p>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted">Based in</dt>
                    <dd className="font-medium text-ink">{profile.location}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Current role</dt>
                    <dd className="font-medium text-ink">
                      Manager Consultant, Genpact LLC
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Focus</dt>
                    <dd className="font-medium text-ink">
                      AI architecture · Data · Governance
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted">Research</dt>
                    <dd>
                      <Link
                        href="/education"
                        className="font-medium text-ink hover:underline"
                      >
                        4 peer-reviewed papers
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Role switcher */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Tailored for your role
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-medium text-ink sm:text-3xl">
              Pick the lens that matches your opening — the story adapts to you.
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              The same operator, framed for the role you are hiring for. Each
              view comes with a focused summary, signature outcomes, and a
              tailored resume.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8">
              <RoleSwitcher />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Career snapshot */}
      <section className="border-b border-border">
        <div className="shell section">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Career
                </p>
                <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
                  Where I&apos;ve made an impact
                </h2>
              </div>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
              >
                See the full resume <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 space-y-4">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 60}>
                <article className="rounded-xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="shrink-0 text-sm text-muted">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    {item.summary}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-b border-border bg-surface-2/50">
        <div className="shell section">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium text-ink sm:text-3xl">
              Systems shipped, not slideware
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 60}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {project.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {project.impact.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface-2 px-2 py-1 text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink">
        <div className="shell section">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-medium text-white sm:text-3xl">
                  Have a role where AI meets enterprise data?
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
                  I move fast from ambiguity to architecture to working systems —
                  and bring the governance to keep them trusted. Let&apos;s talk
                  about your team&apos;s next deployment.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
