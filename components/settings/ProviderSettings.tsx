 "use client";

import { useState } from "react";
import { providers } from "@/lib/providers";

export function ProviderSettings() {
  const [active, setActive] = useState("gemini");

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-card p-6">
        <h2 className="text-lg font-semibold">Appearance</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Use the theme button in the header to switch between light and dark mode.
        </p>
      </section>

      <section className="rounded-2xl border bg-card p-6">
        <h2 className="text-lg font-semibold">AI Providers</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          API fields are prepared now; actual provider connections will be added in the next phase.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {providers.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium ${
                active === item.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-xl border p-5">
          <h3 className="font-semibold">
            {providers.find((item) => item.id === active)?.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            API key will be connected securely through the server in the API integration phase.
          </p>

          <label className="mt-5 block text-sm font-medium">API Key</label>
          <input
            type="password"
            placeholder="Your private API key"
            disabled
            className="mt-2 w-full rounded-xl border bg-muted/50 px-3 py-3 text-sm opacity-70"
          />

          <button
            disabled
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-50"
          >
            Save API settings
          </button>
        </div>
      </section>
    </div>
  );
}
