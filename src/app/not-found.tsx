import { Container } from "@/components/layout/container";
import { SystemDiagram } from "@/components/motion/system-diagram";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-mono text-xs tracking-[0.16em] text-muted uppercase">404</p>
      <h1 className="mt-3 max-w-2xl font-display text-5xl text-ink">You found a page I haven&apos;t built yet.</h1>
      <div className="mt-10 max-w-xl">
        <SystemDiagram />
      </div>
      <Link href="/" className="mt-8 inline-block text-accent">
        Back to homepage
      </Link>
    </Container>
  );
}
