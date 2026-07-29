import { About } from "@/components/About";
import { AIChat } from "@/components/AIChat";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ProjectManagement } from "@/components/ProjectManagement";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { Tools } from "@/components/Tools";
import { VisualGallery } from "@/components/VisualGallery";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Tools />
        <Experience />
        <ProjectManagement />
        <VisualGallery />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-border py-10 text-center">
        <p className="font-display text-sm text-muted">
          © {new Date().getFullYear()} Utsarga Baral ·
        </p>
      </footer>
      <AIChat />
    </>
  );
}
