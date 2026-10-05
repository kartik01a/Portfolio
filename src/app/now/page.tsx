import { Container } from "@/components/layout/container";
import { now } from "@/content/now";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Now",
  description: `What Kartik Singh Bisht is building, learning, and open to. ${site.availability}.`,
  path: "/now",
});

const sections = [
  { label: "Building", items: now.building },
  { label: "Learning", items: now.learning },
  { label: "Open to", items: now.openTo },
];

export default function NowPage() {
  return (
    <Container className="py-16">
      <p className="font-mono text-xs tracking-wide text-muted uppercase">Currently</p>
      <h1 className="mt-3 font-display text-5xl">Now</h1>
      <p className="mt-4 text-secondary">{site.availability}</p>
      <dl className="mt-12 max-w-xl space-y-8">
        {sections.map((section) => (
          <div key={section.label}>
            <dt className="font-mono text-xs tracking-wide text-muted uppercase">{section.label}</dt>
            <dd className="mt-2 text-lg text-ink">{section.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
