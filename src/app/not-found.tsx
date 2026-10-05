import { Container } from "@/components/layout/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-display text-5xl">You found a page I haven&apos;t built yet.</h1>
      <Link href="/" className="mt-8 inline-block text-accent">
        Back to homepage
      </Link>
    </Container>
  );
}
