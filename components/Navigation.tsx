"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#tools", label: "Tools" },
  { href: "#experience", label: "Experience" },
  { href: "#pm-portfolio", label: "PM Portfolio" },
  { href: "#visual-gallery", label: "Visuals" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          U<span className="text-accent">.</span>Baral
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-300 hover:text-accent-bright"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:text-accent-bright"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
