import { skills } from "@/lib/portfolio";

export function SkillsMarquee() {
  const doubled = [...skills, ...skills];

  return (
    <section className="overflow-hidden border-y border-border py-6">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {doubled.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center gap-12 font-display text-2xl font-medium text-muted/60 md:text-3xl"
          >
            {skill}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
