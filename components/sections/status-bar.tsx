import { profile } from "@/content/profile";

export function StatusBar() {
  return (
    <div className="border-b border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4 font-mono text-[11px] tracking-wider text-faint sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <span className="uppercase">
          {profile.name.replace(/ /g, "_")}
        </span>
        <span className="uppercase">
          AR · {profile.yearsActive} AÑOS ·{" "}
          <span className="text-accent">{profile.availability}</span>
        </span>
      </div>
    </div>
  );
}
