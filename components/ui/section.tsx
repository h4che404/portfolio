import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-border">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10 sm:py-28">
        {(eyebrow || title) && (
          <header className="mb-14 flex flex-col gap-5">
            {eyebrow && (
              <p className="font-mono text-xs tracking-[0.12em] text-accent">
                {"// "}
                {eyebrow.toUpperCase()}
              </p>
            )}
            {title && (
              <h2 className="font-sans text-4xl font-extrabold uppercase leading-none tracking-[-0.03em] sm:text-5xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
