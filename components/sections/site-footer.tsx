import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[11px] uppercase tracking-wider text-faint sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Next.js · Tailwind CSS</p>
      </div>
    </footer>
  );
}
