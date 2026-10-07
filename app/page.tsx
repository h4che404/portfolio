import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";
import { ScrollObserver } from "@/components/ui/scroll-observer";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        {/* Subtle purple accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          aria-hidden="true"
        />
        <Services />
        {/* Subtle sky accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"
          aria-hidden="true"
        />
        <Projects />
        {/* Subtle purple/violet accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-purple-500/25 to-transparent"
          aria-hidden="true"
        />
        <Process />
        {/* Subtle amber accent divider */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
          aria-hidden="true"
        />
        <About />
        {/* Subtle border-strong divider with accent glow */}
        <div
          className="relative h-px w-full bg-gradient-to-r from-transparent via-border-strong/70 to-transparent"
          aria-hidden="true"
        />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

