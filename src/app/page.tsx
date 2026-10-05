import { FeedbackRail } from "@/components/home/feedback-rail";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { HowIHelp } from "@/components/home/how-i-help";
import { ProofStrip } from "@/components/home/proof-strip";
import { SelectedWork } from "@/components/home/selected-work";
import { StackSection } from "@/components/home/stack-section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: { absolute: "Kartik Singh Bisht — Next.js and full-stack developer" },
  description:
    "Next.js developer and full-stack developer in India. Kartik Singh Bisht ships SaaS products end to end: frontend, backend, integrations, and AI. Hire on Upwork.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <StackSection />
      <FeedbackRail />
      <HowIHelp />
      <FinalCta />
    </>
  );
}
