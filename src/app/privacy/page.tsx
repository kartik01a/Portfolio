import { Container } from "@/components/layout/container";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "How this site handles analytics, contact messages, and booking.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="prose-width py-16">
      <h1 className="font-display text-5xl text-ink">Privacy</h1>
      <div className="mt-8 max-w-2xl space-y-6 text-secondary">
        <p>
          This site uses cookieless analytics (Vercel Analytics) to count page views and a few events: case study
          views are covered by page views, plus contact submissions, booking clicks, Upwork clicks, and resume
          downloads. It does not use a cookie banner and it does not use Google Analytics.
        </p>
        <p>
          The contact form sends your name, email, company, project type, optional budget and timeline, and message
          to {site.email} through Resend. The reply-to address is the email you submit. Messages are not stored in a
          database on this site.
        </p>
        <p>
          Booking uses Cal.com when that embed is configured. Cal.com receives the details you enter there. YouTube
          and other social profiles are outbound links, not embedded players.
        </p>
        <p>Questions: {site.email}.</p>
      </div>
    </Container>
  );
}
