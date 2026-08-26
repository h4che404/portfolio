export function TagList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-border px-3 py-1.5 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
