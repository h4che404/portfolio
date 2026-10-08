import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { MiniAbout } from "@/components/sections/mini-about";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";
import { ScrollObserver } from "@/components/ui/scroll-observer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* 1. Hero: Position, identity, core proposition & dual CTA */}
        <Hero />

        {/* 2. Mini About: Quick punchy intro bridging Hero to Projects */}
        <MiniAbout />

        {/* Subtle sky accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
          aria-hidden="true"
        />

        {/* 3. Proyectos destacados (Proof first: ID-Night, Luppi, Mi Partido) */}
        <Projects />

        {/* Subtle purple accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          aria-hidden="true"
        />

        {/* 4. Capacidades de ingeniería (Webs, Sistemas, Mobile, IA) */}
        <Services />

        {/* Subtle purple/violet accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent"
          aria-hidden="true"
        />

        {/* 5. Cómo trabajo (Proceso en 4 pasos transparentes) */}
        <Process />

        {/* Subtle amber accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
          aria-hidden="true"
        />

        {/* 6. Sobre mí & Trayectoria (5 capas de ingeniería + evolución en 2 años + CV) */}
        <About />

        {/* Subtle border-strong divider with accent glow */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
          aria-hidden="true"
        />

        {/* 7. Contacto (Formulario directo + vías de contacto rápido) */}
        <Contact />
      </main>
      <SiteFooter />
      {/* Persistent floating WhatsApp button */}
      <WhatsAppFloat />
    </>
  );
}
