import { workProcess } from "@/content/services";

export function Process() {
  return (
    <section id="proceso" className="border-b border-border py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
            {"// "}CÓMO TRABAJO
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un proceso claro, previsible y sin sorpresas
          </h2>
          <p className="text-base text-muted sm:text-lg">
            La clave de un desarrollo exitoso es la comunicación constante.
            Sabés exactamente qué se construye, cuánto cuesta y cuándo se
            entrega, con avances visibles en cada paso.
          </p>
        </div>

        {/* 4 Process Cards (Mobile: 1 column, sm: 2 columns, lg: 4 columns) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workProcess.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-strong sm:p-7"
            >
              <div className="flex flex-col gap-3">
                <span className="font-mono text-3xl font-extrabold text-accent/80 sm:text-4xl">
                  {step.step}
                </span>

                <h3 className="text-lg font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>

              {/* Outcome Badge */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-start gap-2">
                  <span className="font-mono text-[10px] uppercase text-accent font-semibold shrink-0 mt-0.5">
                    Entregable:
                  </span>
                  <p className="text-xs text-foreground/80 font-medium leading-snug">
                    {step.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
