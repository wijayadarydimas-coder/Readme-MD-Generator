export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 text-center sm:px-6">
        <div className="font-semibold">README AI</div>
        <p className="text-sm text-muted-foreground">
          Generate better README.md files with AI.
        </p>
        <div className="flex items-center gap-5 text-sm">
          <a
            href="https://github.com/wijayadarydimas-code"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition hover:text-foreground"
          >
            GitHub
          </a>
          <span className="cursor-not-allowed text-muted-foreground/50">Documentation</span>
          <span className="cursor-not-allowed text-muted-foreground/50">API</span>
        </div>
        <p className="pt-2 text-xs text-muted-foreground">
          Built with ♥ by Dary Dimas
        </p>
      </div>
    </footer>
  );
}
