import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProviderSettings } from "@/components/settings/ProviderSettings";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-primary">Settings</p>
          <h1 className="text-3xl font-bold tracking-tight">AI & appearance</h1>
          <p className="mt-2 text-muted-foreground">
            Configure your preferred AI provider. API integration is intentionally disabled in this starter.
          </p>
        </div>
        <ProviderSettings />
      </main>
      <Footer />
    </div>
  );
}
