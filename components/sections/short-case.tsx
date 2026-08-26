import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { miPartido } from "@/content/projects";

export function ShortCase() {
  return (
    <Section eyebrow="Decisión de producto" title={miPartido.name}>
      <div className="grid gap-14 md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm leading-[1.85] text-muted">
            {miPartido.tagline}
          </p>
          <div className="flex flex-col gap-5">
            {miPartido.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-mono text-[13px] leading-[1.85] text-faint"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <aside className="flex flex-col gap-8">
          <span className="self-start border border-border-strong px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
            {miPartido.status}
          </span>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-faint">
              Stack
            </p>
            <TagList items={miPartido.stack} />
          </div>
        </aside>
      </div>
    </Section>
  );
}
