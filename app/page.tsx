import Hero from "@/components/hero/hero";
import Values from "@/components/values";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 grid gap-48">
      <Hero />
      <Values />
    </main>
  );
}
