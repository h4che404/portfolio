import { idNight } from "@/content/projects";

export function Pillars() {
  return (
    <div className="border-b border-border">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <dl className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {idNight.pillars.map((pillar) => (
            <div
              key={pillar.layer}
              className="flex flex-col gap-2 bg-background px-6 py-7"
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-faint">
                {pillar.layer}
              </dt>
              <dd className="font-mono text-sm font-medium">{pillar.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
