 "use client";

import Link from "next/link";
import { Settings, Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Sparkles size={16} />
          </span>
          <span>README AI</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <Link className="transition hover:text-foreground" href="/">Generator</Link>
          <span className="cursor-not-allowed opacity-50">History</span>
          <span className="cursor-not-allowed opacity-50">Docs</span>
        </nav>

        <div className="flex items-center gap-2">
          <button className="rounded-lg px-2.5 py-2 text-xs font-semibold hover:bg-muted" title="Language selector">
            ID
          </button>
          <ThemeToggle />
          <Link
            href="/settings"
            className="rounded-lg p-2.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            title="Settings"
          >
            <Settings size={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
