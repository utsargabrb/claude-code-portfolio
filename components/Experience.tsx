import { education, experience } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Career
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Where I&apos;ve
            <span className="text-muted"> built.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-20 space-y-0 divide-y divide-border">
          {experience.map((job) => (
            <RevealOnScroll key={`${job.company}-${job.role}`}>
              <article className="grid gap-6 py-12 md:grid-cols-[240px_1fr] md:gap-16 md:py-16">
                <div>
                  <p className="text-sm font-medium text-accent-bright">
                    {job.period}
                  </p>
                  <p className="mt-1 text-sm text-muted">{job.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-lg text-muted">{job.company}</p>
                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((point) => (
                      <li
                        key={point.slice(0, 40)}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
              Education
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
              {education.degree}
            </h3>
            <p className="mt-1 text-muted">
              {education.school} · {education.period} · {education.location}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
