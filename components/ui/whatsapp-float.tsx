import { profile } from "@/content/profile";

export function WhatsAppFloat() {
  if (!profile.whatsapp) return null;

  const whatsappUrl = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    profile.whatsappMessage
  )}`;

  return (
    <aside
      aria-label="Contacto directo por WhatsApp"
      className="fixed bottom-5 right-5 z-40 print:hidden"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribime directamente por WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-[#0d1f17]/95 px-3.5 py-2.5 text-xs font-semibold text-emerald-400 shadow-xl shadow-black/40 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:bg-[#12281e] hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 active:scale-95 sm:px-4 sm:py-3"
      >
        {/* Pulsing indicator */}
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>

        {/* WhatsApp SVG Icon */}
        <svg
          className="h-4 w-4 shrink-0 text-emerald-400 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        <span className="hidden font-medium sm:inline">
          Hablemos por WhatsApp
        </span>
      </a>
    </aside>
  );
}
