"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="border border-neutral-300 bg-neutral-900 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-white transition-opacity hover:opacity-85 print:hidden"
    >
      Descargar PDF
    </button>
  );
}
