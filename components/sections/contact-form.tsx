"use client";

import { useActionState, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = {
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );
  const [formKey, setFormKey] = useState(0);

  const handleReset = () => {
    setFormKey((k) => k + 1);
  };

  if (state.success) {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-8 text-center sm:p-10 animate-in fade-in zoom-in-95 duration-200"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-background text-2xl font-bold">
          ✓
        </span>
        <h3 className="text-xl font-bold text-foreground sm:text-2xl">
          ¡Mensaje recibido con éxito!
        </h3>
        <p className="max-w-md text-sm text-foreground/80 leading-relaxed sm:text-base">
          {state.message ??
            "Muchas gracias por escribir. Voy a revisar tu consulta y te responderé lo antes posible."}
        </p>
        <button
          type="button"
          onClick={handleReset}
          className="mt-2 min-h-[44px] rounded-lg border border-emerald-500/30 bg-surface px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 transition-colors hover:bg-surface-raised"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      key={formKey}
      action={formAction}
      noValidate
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      {/* General error banner if present */}
      {state.message && !state.success && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-300 leading-relaxed"
        >
          <p className="font-semibold mb-1">Nota importante:</p>
          <p>{state.message}</p>
        </div>
      )}

      {/* Honeypot field (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="_gotcha">No completar este campo</label>
        <input
          id="_gotcha"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Row 1: Nombre y Email */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-name"
            className="text-xs font-semibold uppercase tracking-wider text-foreground/90"
          >
            Nombre completo <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ej: Marcelo García"
            aria-describedby={state.errors?.name ? "name-error" : undefined}
            aria-invalid={Boolean(state.errors?.name)}
            className="min-h-[44px] w-full rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 text-base text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
          />
          {state.errors?.name && (
            <p id="name-error" className="text-xs font-medium text-rose-400">
              {state.errors.name}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-email"
            className="text-xs font-semibold uppercase tracking-wider text-foreground/90"
          >
            Correo electrónico <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@email.com"
            aria-describedby={state.errors?.email ? "email-error" : undefined}
            aria-invalid={Boolean(state.errors?.email)}
            className="min-h-[44px] w-full rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 text-base text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
          />
          {state.errors?.email && (
            <p id="email-error" className="text-xs font-medium text-rose-400">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Tipo de proyecto y Presupuesto */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-project-type"
            className="text-xs font-semibold uppercase tracking-wider text-foreground/90"
          >
            Tipo de proyecto <span className="text-accent">*</span>
          </label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            defaultValue="Web o Landing page"
            aria-describedby={
              state.errors?.projectType ? "project-type-error" : undefined
            }
            className="min-h-[44px] w-full rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 text-base text-foreground transition-colors focus:border-accent focus:outline-none"
          >
            <option value="Web o Landing page">
              Web o Landing page de alto impacto
            </option>
            <option value="Sistema a medida">
              Sistema a medida / Panel de gestión
            </option>
            <option value="App móvil">
              Aplicación móvil (Android / iOS)
            </option>
            <option value="Inteligencia Artificial">
              Integración con Inteligencia Artificial
            </option>
            <option value="Otro">Otro tipo de consulta</option>
          </select>
          {state.errors?.projectType && (
            <p
              id="project-type-error"
              className="text-xs font-medium text-rose-400"
            >
              {state.errors.projectType}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-budget"
            className="text-xs font-semibold uppercase tracking-wider text-muted"
          >
            Presupuesto estimado (opcional)
          </label>
          <select
            id="contact-budget"
            name="budget"
            defaultValue="A definir / Conversable"
            className="min-h-[44px] w-full rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 text-base text-foreground transition-colors focus:border-accent focus:outline-none"
          >
            <option value="A definir / Conversable">
              A definir / Conversable
            </option>
            <option value="Menos de $1.000 USD">Menos de $1.000 USD</option>
            <option value="$1.000 a $3.000 USD">$1.000 a $3.000 USD</option>
            <option value="Más de $3.000 USD">Más de $3.000 USD</option>
          </select>
        </div>
      </div>

      {/* Row 3: Mensaje */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-semibold uppercase tracking-wider text-foreground/90"
        >
          Contame sobre tu idea o necesidad <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Describí brevemente qué problema querés resolver, qué funcionalidades imaginás o cualquier fecha límite que tengas en mente..."
          aria-describedby={state.errors?.message ? "message-error" : undefined}
          aria-invalid={Boolean(state.errors?.message)}
          className="w-full rounded-lg border border-border bg-surface-raised px-3.5 py-2.5 text-base text-foreground placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none resize-y min-h-[110px]"
        />
        {state.errors?.message && (
          <p id="message-error" className="text-xs font-medium text-rose-400">
            {state.errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3 text-sm font-semibold uppercase tracking-wider text-accent-foreground shadow-md transition-all hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
        >
          {isPending ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              <span>Enviando mensaje...</span>
            </>
          ) : (
            <span>Enviar mensaje</span>
          )}
        </button>

        <p className="text-xs text-muted">
          Respondo generalmente en menos de 24 horas hábiles.
        </p>
      </div>
    </form>
  );
}
