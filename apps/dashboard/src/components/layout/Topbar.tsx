'use client';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center gap-3 border-b border-border px-5">
      <button onClick={onMenuClick} className="md:hidden text-muted text-xl">
        ☰
      </button>

      <h1 className="text-sm font-semibold text-foreground">
        Maritime Operations Dashboard
      </h1>
    </header>
  );
}
