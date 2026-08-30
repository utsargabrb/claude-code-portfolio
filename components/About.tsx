import { aboutText, site } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="max-w-4xl">
          <RevealOnScroll>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
              About
            </p>
            <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
              Project management, AI operations,
              <br />
              & business development.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted">
              {aboutText.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-accent-bright">
              <span className="h-2 w-2 rounded-full bg-accent-bright animate-ping" />
              <span>{site.availability}</span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
