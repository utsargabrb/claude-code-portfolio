import Image from "next/image";
import { site, stats } from "@/lib/portfolio";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/hero/cosmic-sphere.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/60" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-28">
        <p className="animate-fade-up mb-6 text-sm font-medium uppercase tracking-[0.25em] text-accent-bright">
          {site.title}
        </p>

        <h1 className="animate-fade-up-delay-1 font-display text-[clamp(3rem,11vw,10rem)] font-semibold leading-[0.9] tracking-tight">
          <span className="text-gradient">{site.name}</span>
          <br />
          <span className="text-foreground/90">Baral</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {site.tagline}
        </p>

        <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap items-center gap-5">
          <a
            href="#creative"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-display text-base font-medium text-foreground transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_40px_rgba(255,107,43,0.3)]"
          >
            Explore work
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-300 hover:text-foreground"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
