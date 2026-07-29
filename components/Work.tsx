import { projects } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function Work() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Built & Shipped
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Projects with
            <br />
            <span className="text-muted">real impact.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <RevealOnScroll key={project.id}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:bg-accent-soft"
              >
                <span className="font-display text-4xl font-light text-muted/40">
                  {project.id}
                </span>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.15em] text-accent-bright">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent-bright">
                  {project.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 text-sm font-medium text-accent-bright opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  View project →
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
