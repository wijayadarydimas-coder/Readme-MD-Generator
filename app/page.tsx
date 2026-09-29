import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Generator } from "@/components/generator/Generator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Generator />
      </main>
      <Footer />
    </div>
  );
}
