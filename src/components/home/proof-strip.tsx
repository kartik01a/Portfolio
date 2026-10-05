import { Stat } from "@/components/ui/stat";
import { Container } from "@/components/layout/container";
import { site } from "@/content/site";

const stats = [
  { value: site.upwork.topRated ? "Top Rated" : site.upwork.rating, label: "Upwork" },
  { value: site.upwork.rating, label: `${site.upwork.reviewCount} reviews` },
  { value: site.upwork.jobs, label: "Jobs" },
  { value: site.upwork.hours, label: "Hours" },
];

export function ProofStrip() {
  return (
    <div className="border-b border-border bg-surface/60">
      <Container className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </Container>
    </div>
  );
}
