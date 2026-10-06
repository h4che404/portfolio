"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { profile } from "@/content/profile";

const NAV_ITEMS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Cómo trabajo" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md py-3 shadow-lg shadow-black/20"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface border border-border-strong font-mono text-sm font-bold text-accent transition-colors group-hover:border-accent">
            JC
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-base">
              Juan Cruz Elias
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {profile.availability}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-6 text-sm"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted transition-colors hover:text-foreground hover:underline underline-offset-8 decoration-accent decoration-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv"
            className="text-muted transition-colors hover:text-foreground font-mono text-xs"
          >
            CV
          </a>
        </nav>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Hablemos
          </a>

          {/* Mobile hamburger button (min 44px touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:border-border-strong md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 flex flex-col bg-background/98 px-6 py-6 backdrop-blur-xl border-b border-border md:hidden overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav
            aria-label="Navegación móvil"
            className="flex flex-col gap-2 divide-y divide-border/40"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-base font-medium text-foreground transition-colors hover:text-accent"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs text-muted">→</span>
              </a>
            ))}
            <a
              href="/cv"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 text-base font-medium text-foreground transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-2">
                Currículum completo
                <span className="rounded bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted border border-border">
                  PDF / Web
                </span>
              </span>
              <span className="font-mono text-xs text-muted">→</span>
            </a>
          </nav>

          <div className="mt-8 flex flex-col gap-3 pt-6 border-t border-border">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[44px] items-center justify-center rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-transform active:scale-[0.98]"
            >
              Hablemos de tu proyecto
            </a>
            {profile.whatsapp && (
              <a
                href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
                  profile.whatsappMessage
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-center text-sm font-medium text-foreground transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
              >
                <span>Escribime por WhatsApp</span>
                <span className="font-mono text-xs text-emerald-400">⚡</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
