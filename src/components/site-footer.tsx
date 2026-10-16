import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

const footerNav = [
  { href: "/#expertise", label: "Expertise" },
  { href: "/#clients", label: "Clients" },
  { href: "/contact", label: "Contact / Book time" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="shell section-sm">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div className="max-w-sm">
            <p className="font-display text-xl font-medium text-ink">
              {profile.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {profile.shortPitch}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Navigate
              </p>
              <ul className="mt-3 space-y-2">
                {footerNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Contact
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <MapPin size={15} className="text-muted" />
                  {profile.location}
                </li>
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-2 break-all transition-colors hover:text-ink"
                  >
                    <Mail size={15} className="shrink-0 text-muted" />
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                    className="flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <Phone size={15} className="text-muted" />
                    {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 transition-colors hover:text-ink"
                  >
                    <LinkedInIcon size={15} className="text-muted" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
