import { StatusBar } from "@/components/sections/status-bar";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { CaseStudy } from "@/components/sections/case-study";
import { ShortCase } from "@/components/sections/short-case";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main className="flex-1">
      <StatusBar />
      <Hero />
      <Pillars />
      <CaseStudy />
      <ShortCase />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  );
}
