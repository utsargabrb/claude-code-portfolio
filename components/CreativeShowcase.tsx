import Image from "next/image";
import { creativeWork } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

export function CreativeShowcase() {
  return (
    <section id="creative" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Generative Visuals
          </p>
          <h2 className="max-w-4xl font-display text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
            Brand worlds built
            <br />
            <span className="text-muted">with AI precision.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Product campaigns, fashion collabs, and cinematic visuals — each
            crafted through generative tools and art-directed prompts.
          </p>
        </RevealOnScroll>

        <div className="mt-20 space-y-8">
          {creativeWork.map((item, index) => (
            <RevealOnScroll key={item.id}>
              <article
                className={`group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[420px] ${
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}, transparent)`,
                    }}
                  />
                </div>

                <div
                  className={`flex flex-col justify-center p-8 md:p-12 ${
                    index % 2 === 1 ? "md:[direction:ltr]" : ""
                  }`}
                >
                  <span className="font-display text-5xl font-light text-muted/30">
                    {item.id}
                  </span>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
