 "use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Github, Loader2, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { providers } from "@/lib/providers";
import { isPublicGitHubUrl } from "@/lib/utils";

const demoReadme = `# My Awesome Project

> A professional README generated from a public GitHub repository.

## Overview

This project provides a clean foundation for building a modern application.

## Features

- Modern TypeScript architecture
- Responsive user interface
- AI-ready provider architecture
- Light and dark themes

## Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## License

MIT`;

export function Generator() {
  const [repository, setRepository] = useState("");
  const [provider, setProvider] = useState("gemini");
  const [model, setModel] = useState(providers[0].models[0]);
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  const selectedProvider = useMemo(
    () => providers.find((item) => item.id === provider) ?? providers[0],
    [provider]
  );

  const validRepository = isPublicGitHubUrl(repository);

  function changeProvider(value: string) {
    const next = providers.find((item) => item.id === value) ?? providers[0];
    setProvider(next.id);
    setModel(next.models[0]);
  }

  function generateDemo() {
    setLoading(true);
    setTimeout(() => {
      setGenerated(demoReadme);
      setLoading(false);
    }, 900);
  }

  function downloadReadme() {
    const blob = new Blob([generated || demoReadme], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.13),transparent_55%)]" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {!generated ? (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
                <Sparkles size={14} className="text-primary" />
                Gemini · OpenAI · DeepSeek ready
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Generate <span className="text-primary">README.md</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Turn any public GitHub repository into professional documentation with AI.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-card p-5 shadow-glow sm:p-7">
              <label className="mb-2 block text-sm font-semibold">GitHub Repository URL</label>
              <div className="flex items-center gap-2 rounded-xl border bg-background px-3 focus-within:ring-2 focus-within:ring-primary/30">
                <Github size={19} className="shrink-0 text-muted-foreground" />
                <input
                  value={repository}
                  onChange={(event) => setRepository(event.target.value)}
                  placeholder="https://github.com/user/project"
                  className="min-w-0 flex-1 bg-transparent py-3.5 text-sm outline-none"
                />
                {validRepository && <CheckCircle2 size={18} className="text-emerald-500" />}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">AI Provider</label>
                  <select
                    value={provider}
                    onChange={(event) => changeProvider(event.target.value)}
                    className="w-full rounded-xl border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {providers.map((item) => (
                      <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">Model</label>
                  <select
                    value={model}
                    onChange={(event) => setModel(event.target.value)}
                    className="w-full rounded-xl border bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    {selectedProvider.models.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-muted/60 px-4 py-3 text-xs text-muted-foreground">
                🔑 Using the application default API. Personal API keys will be configured in Settings.
              </div>

              <button
                onClick={generateDemo}
                disabled={!validRepository || loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? <><Loader2 size={17} className="animate-spin" /> Generating...</> : <><Sparkles size={17} /> Generate README.md</>}
              </button>

              <p className="mt-3 text-center text-xs text-muted-foreground">
                Starter mode: the current button uses mock output. AI API integration comes next.
              </p>
            </div>
          </>
        ) : (
          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-primary">Generated README</p>
                <h1 className="text-2xl font-bold">README.md</h1>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setGenerated("")}
                  className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  ← Back
                </button>
                <button
                  onClick={downloadReadme}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Download README.md
                </button>
              </div>
            </div>

            <div className="grid overflow-hidden rounded-2xl border bg-card lg:grid-cols-2">
              <div className="min-h-[600px] border-b lg:border-b-0 lg:border-r">
                <div className="border-b px-4 py-3 text-sm font-semibold">Markdown</div>
                <textarea
                  value={generated}
                  onChange={(event) => setGenerated(event.target.value)}
                  className="h-[560px] w-full resize-none bg-background/40 p-5 font-mono text-sm leading-6 outline-none"
                />
              </div>

              <div className="min-h-[600px]">
                <div className="border-b px-4 py-3 text-sm font-semibold">Preview</div>
                <article className="prose prose-sm max-w-none p-6 dark:prose-invert">
                  <ReactMarkdown>{generated}</ReactMarkdown>
                </article>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
