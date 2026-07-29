import { site } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Contact
          </p>
          <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[1.02] tracking-tight text-foreground">
            Let&apos;s build
            <br />
            intelligent
            <br />
            <span className="text-gradient">systems together.</span>
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div>
              <a
                href={`mailto:${site.email}`}
                className="block font-display text-2xl font-medium text-foreground underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-300 hover:text-accent-bright md:text-4xl"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-4 block text-lg text-muted transition-colors duration-300 hover:text-foreground"
              >
                {site.phone}
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                GitHub
                <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                LinkedIn
                <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
              <a
                href={site.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                Live Projects
                <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-border py-4 text-lg font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                Download Resume (PDF)
                <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
