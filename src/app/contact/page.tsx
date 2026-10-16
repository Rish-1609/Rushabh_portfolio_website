import type { Metadata } from "next";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Get in touch",
  description: `Contact ${profile.name} to discuss AI security, generative AI, analytics, or request a meeting.`,
};

const channels = [
  {
    icon: CalendarDays,
    label: "Book time",
    value: "Choose a slot on Calendly",
    href: profile.calendly,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <section className="border-b border-border">
      <div className="shell section">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Get in touch
              </p>
              <h1 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight text-ink sm:text-5xl">
                Schedule time or contact me.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
                I&apos;m a Senior Manager in Generative AI at Cognizant. My current
                work is AI security for TD Bank; my pharma work spans commercial
                analytics, governed data, and agentic AI workflows. Select an
                available time on Calendly or use the direct contact details.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={profile.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <CalendarDays size={16} /> Book on Calendly
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/30"
                >
                  <Mail size={16} /> Email me
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Direct channels
              </p>
              <ul className="mt-5 divide-y divide-border">
                {channels.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <span className="flex items-center gap-4 py-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-muted">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">
                          {channel.label}
                        </span>
                        <span className="block text-sm font-medium text-ink">
                          {channel.value}
                        </span>
                      </span>
                    </span>
                  );
                  return (
                    <li key={channel.label}>
                      {channel.href ? (
                        <a
                          href={channel.href}
                          target={
                            channel.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            channel.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                          className="block transition-opacity hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
