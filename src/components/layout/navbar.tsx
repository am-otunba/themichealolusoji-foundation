import Link from "next/link";
import { Container } from "./container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        
        <img src="/Logo.png" 
          alt="TMO Foundation"
          width={128}
          height={128}
          className="h-32 w-32"
          />

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/impact">Impact</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="rounded-full bg-[#113C96] px-6 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#113C96]/80">
          Donate
        </button>
      </Container>
    </header>
  );
}