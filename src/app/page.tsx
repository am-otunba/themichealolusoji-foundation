import { Navbar } from "@/components/layout/navbar";
import { FounderStory } from "@/components/sections/founder-story";
import { Hero } from "@/components/sections/hero";
import { Programs } from "@/components/sections/programs";
import { Vision } from "@/components/sections/vision";
import { main } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FounderStory />
      <Programs />
      <Vision />
    </main>
  );
}