import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  CalendarDays,
  Code2,
  Database,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  certifications,
  clients,
  education,
  experience,
  heroAchievements,
  profile,
  projects,
  researchPapers,
  technologyGroups,
} from "@/data/profile";

const focusAreas = [
  {
    title: "Agentic AI and security",
    detail:
      "RAG assistants over SAP, Salesforce, SharePoint, and cloud data; agent workflows for profiling, reconciliation, anomaly review, and exception routing. Current Cognizant work includes AI security for TD Bank.",
  },
  {
    title: "Pharma commercial analytics",
    detail:
      "HCP, patient, claims, ERP/CRM, and supply-chain data integrated for commercial dashboards, governed metrics, AI-assisted quality checks, and reviewable workflows.",
  },
  {
    title: "Retail and enterprise analytics",
    detail:
      "Sales, channel, customer, product, and inventory reporting with category performance, segmentation, demand trends, and consistent business KPIs.",
  },
];

const featuredProjects = projects.filter((project) =>
  [
    "Data Lighthouse",
    "Pharma Commercial Analytics & AI",
    "Retail Performance Analytics",
    "D4 Workspace",
  ].includes(project.name),
);

const careerHighlights = experience.map((item, index) => ({
  ...item,
  proof: item.points[index === 1 ? 1 : 0],
}));

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
                  {profile.location} · 8+ years · Agentic AI
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
                  <a
                    href="#selected-work"
                    className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Explore my work <ArrowRight size={16} />
                  </a>
                  <a
                    href={profile.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
                  >
                    <CalendarDays size={16} /> Book on Calendly
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
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
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

      <section id="clients" className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Selected client experience
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
            {clients.map((client) => (
              <li key={client.name} className="flex min-h-16 items-center justify-center">
                <figure className="flex flex-col items-center gap-1.5">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    width={160}
                    height={56}
                    loading="eager"
                    unoptimized
                    className={`h-9 w-36 object-contain ${client.logo.endsWith(".gif") ? "mix-blend-multiply" : ""}`}
                  />
                  <figcaption className="text-xs font-medium text-muted">
                    {client.name}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="expertise" className="border-b border-border">
        <div className="shell section-sm">
          <div className="grid gap-6 md:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="border-t border-border pt-4">
                <h2 className="font-display text-xl font-medium text-ink">
                  {area.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {area.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="selected-work" className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">
              Selected work
            </h2>
            <Link href="/contact" className="text-sm font-medium text-ink hover:underline">
              Contact / Book time <ArrowRight size={15} className="inline" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.name} className="rounded-lg border border-border bg-surface p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.tagline}
                </p>
                <h3 className="mt-2 font-display text-lg font-medium text-ink">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                  {project.description}
                </p>
                <p className="mt-3 border-t border-border pt-3 text-xs leading-relaxed text-muted">
                  {project.impact.slice(0, 2).join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-border">
        <div className="shell section-sm">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-display text-2xl font-medium text-ink">
                Experience
              </h2>
              <p className="text-sm text-muted">
                AI security, agentic delivery, pharma data, and analytics
              </p>
            </div>
            <div className="mt-5 grid gap-x-8 gap-y-5 md:grid-cols-2">
              {careerHighlights.map((item, index) => (
                <article
                  key={`${item.company}-${item.role}-${item.period}`}
                  className="border-t border-border pt-4"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <div>
                      <h3 className="font-display text-lg font-medium text-ink">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-accent">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="text-xs text-muted">{item.period}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                    {item.summary}
                  </p>
                  {index > 0 ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.proof}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="border-b border-border bg-surface-2/50">
        <div className="shell section-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl font-medium text-ink">
              Technology
            </h2>
            <p className="text-sm text-muted">
              Cloud, data engineering, AI, analytics, and enterprise platforms
            </p>
          </div>
          <div className="mt-5 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => {
              const FallbackIcon =
                group.label === "Languages"
                  ? Code2
                  : group.label === "AI tools"
                    ? BrainCircuit
                    : Database;

              return (
                <section key={group.label} className="border-t border-border pt-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {group.label}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-3">
                    {group.technologies.map((technology) => (
                      <li
                        key={technology.name}
                        className="inline-flex items-center gap-2 text-sm font-medium text-ink"
                      >
                        {technology.logo ? (
                          <Image
                            src={technology.logo}
                            alt=""
                            aria-hidden="true"
                            width={28}
                            height={28}
                            unoptimized
                            className="size-7 object-contain"
                          />
                        ) : (
                          <FallbackIcon
                            size={20}
                            aria-hidden="true"
                            className="text-accent"
                          />
                        )}
                        <span>{technology.name}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section id="education" className="border-b border-border">
        <div className="shell section-sm">
          <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">
                Education
              </h2>
              <ol className="mt-4 space-y-4">
                {education.map((item) => (
                  <li key={item.school} className="border-l-2 border-accent pl-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="text-sm font-semibold text-ink">
                        {item.credential}
                      </h3>
                      <span className="text-xs text-muted">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/75">
                      {item.school}
                    </p>
                    <p className="mt-1 text-xs text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">
                Certifications
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {certifications.map((certification) => (
                  <li
                    key={certification}
                    className="border-t border-border py-2 text-sm text-foreground/80"
                  >
                    {certification}
                  </li>
                ))}
              </ul>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Research
                </p>
                <a
                  href={profile.scholar}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:underline"
                >
                  {researchPapers.length} peer-reviewed papers across health
                  equity and life sciences <ArrowRight size={14} />
                </a>
              </div>
            </div>
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
                  Discuss an AI or commercial analytics engagement.
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
                  Agentic AI, enterprise security, pharma commercial data, and
                  analytics for retail and life sciences.
                </p>
              </div>
              <a
                href={profile.calendly}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Book on Calendly <CalendarDays size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
