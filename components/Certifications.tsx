"use client";

import { certificates } from "@/lib/portfolio";
import { RevealOnScroll } from "./RevealOnScroll";

const certMeta: Record<string, { issuer: string; year: string; icon: string; color: string }> = {
  "Claude 101": {
    issuer: "Anthropic",
    year: "2024",
    icon: "✦",
    color: "#d97745",
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <RevealOnScroll>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
            Certifications
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
            Credentials &amp;{" "}
            <span className="text-accent-bright">recognition.</span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert) => {
              const meta = certMeta[cert] ?? {
                issuer: "Verified",
                year: "2024",
                icon: "★",
                color: "#c45c26",
              };
              return (
                <div
                  key={cert}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-accent/60 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                  {/* glow */}
                  <div
                    className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                    style={{ background: meta.color }}
                  />

                  {/* icon badge */}
                  <div
                    className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold"
                    style={{
                      background: `${meta.color}22`,
                      border: `1px solid ${meta.color}44`,
                      color: meta.color,
                    }}
                  >
                    {meta.icon}
                  </div>

                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    {meta.issuer} · {meta.year}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                    {cert}
                  </h3>

                  {/* verified pill */}
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-bright" />
                    <span className="text-xs font-medium uppercase tracking-wider text-accent-bright">
                      Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
