import Image from "next/image";
import { tools } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function Tools() {
  return (
    <section id="tools" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Tools
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-7xl">
            Platforms I use
            <br />
            <span className="text-muted">to ship organized work.</span>
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool) => (
            <RevealOnScroll key={tool.name}>
              <article className="group h-full rounded-2xl border border-border bg-background/70 p-5 transition-all duration-300 hover:border-accent/70 hover:bg-accent-soft">
                <div
                  className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-3 shadow-[0_0_24px_rgba(255,255,255,0.04)] transition-transform duration-300 group-hover:scale-105"
                  style={{ boxShadow: `0 0 28px ${tool.accent}22` }}
                >
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {tool.category}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
