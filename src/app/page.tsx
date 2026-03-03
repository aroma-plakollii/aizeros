import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
      </main>
    </div>
  );
}
