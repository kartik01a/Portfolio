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
          This site uses Google Analytics to count visits and page views, and a few events: contact submissions,
          booking clicks, Upwork clicks, and resume downloads. Google Analytics sets first-party cookies and receives
          your IP address, browser details, and the pages you visit. Google does not store or log full IP addresses
          for Google Analytics 4. The data is used only to understand how the site is used. It is not used for
          advertising, and it is not sold. You can block it with any content blocker or with Google&apos;s{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-accent underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            opt-out add-on
          </a>
          .
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
