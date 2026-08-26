import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { skills } from "@/content/profile";

export function About() {
  return (
    <Section id="sobre-mi" eyebrow="Sobre mí" title="Cómo trabajo">
      <div className="grid gap-14 md:grid-cols-2">
        <div className="flex flex-col gap-5 font-mono text-[13px] leading-[1.85] text-muted">
          <p>
            Empecé a programar hace dos años y desde entonces trabajo casi
            siempre sobre sistemas completos: dominio, backend, frontend y
            móvil. No aprendí un framework y me quedé ahí; aprendí a decidir qué
            hace falta en cada capa y por qué.
          </p>
          <p>
            Me interesa el software que tiene consecuencias. ID-Night maneja
            documentos de identidad y datos biométricos, así que el
            consentimiento, la auditoría y la trazabilidad están en el modelo de
            dominio desde el primer día, no agregados al final porque alguien
            los pidió.
          </p>
          <p>
            Escribo tests donde importan —reglas de negocio y la API real, no
            porcentajes de cobertura— y prefiero pagar el costo de una
            arquitectura explícita antes que descubrir a los seis meses que
            cambiar la base de datos implica reescribir el producto.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {skills.map((group) => (
            <div key={group.area} className="flex flex-col gap-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {group.area}
              </p>
              <TagList items={group.items} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
