import Hero from "./Hero";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-midnight text-white">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-burgundy/25 blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-crimson/15 blur-[140px]" />

      {/* Subtle Center Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-navy/40 blur-[120px]" />

      {/* Hero Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </section>
  );
}
