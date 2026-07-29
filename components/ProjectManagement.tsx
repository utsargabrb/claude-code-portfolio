import { pmProjects } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function ProjectManagement() {
  return (
    <section id="pm-portfolio" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-accent-bright animate-pulse" />
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
              Project Management Portfolio
            </p>
          </div>
          <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Process architectures &
            <br />
            <span className="text-muted">delivery systems.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Structured workflows, stakeholder alignment, risk mitigation, and operational tracking frameworks designed for production AI environments and enterprise partner pipelines.
          </p>
        </RevealOnScroll>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {pmProjects.map((project) => (
            <RevealOnScroll key={project.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(196,92,38,0.15)]">
                <div
                  className="absolute left-0 top-0 h-full w-1 transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: project.accent }}
                />

                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-light text-muted/40">
                    {project.id}
                  </span>
                  <span className="rounded-full border border-border bg-background/80 px-3.5 py-1 text-xs font-medium text-muted">
                    {project.organization}
                  </span>
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                  {project.category}
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-bright md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>

                <div className="mt-6 border-t border-border/60 pt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-muted/80">
                    Key Deliverables & Outcomes
                  </p>
                  <ul className="mt-3 space-y-2">
                    {project.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-background border border-border px-3 py-1 text-xs font-medium text-muted/90"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
