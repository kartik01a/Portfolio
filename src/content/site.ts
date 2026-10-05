export const site = {
  name: "Kartik Singh Bisht",
  shortName: "Kartik",
  wordmark: "Kartik.",
  role: "Full-Stack + AI Developer",
  url: "https://kartiksinghbisht.com",
  email: "hello@kartiksinghbisht.com",
  location: "Chandigarh, India",
  timezoneLabel: "IST, UTC+5:30",
  availability: "Taking one new project from November 2026",
  replyTime: "Replies within one business day",
  openToFullTime: true,
  remotePreference: "Open to remote roles",
  noticePeriod: "Shared on request",
  description:
    "Next.js developer and full-stack developer in India. Kartik Singh Bisht builds production SaaS, web applications, and AI features. Hire on Upwork or book a call.",
  contentUpdatedAt: "2026-10-05",
  eyebrow: "Full-stack + AI developer · Chandigarh, India (IST)",
  headline:
    "I build and ship SaaS products end to end: frontend, backend, integrations and AI.",
  supporting:
    "I'm Kartik, a full-stack developer in Chandigarh, India (IST). I take products from an idea or an existing codebase through frontend, backend, integrations, AI features and production deployment.",
  bookingWindows: [
    { label: "1:30–4:30 PM IST", audience: "EU morning" },
    { label: "6:30–9:30 PM IST", audience: "US East morning" },
  ],
  upwork: {
    rating: "5.0",
    reviewCount: 5,
    topRated: true,
    jobs: "6",
    hours: "1K+",
  },
  links: {
    upwork: "https://www.upwork.com/freelancers/~01e74ab725bfcfa302",
    linkedin: "https://www.linkedin.com/in/kartik-singh-bisht-13816a207/",
    github: "https://github.com/kartik01a",
    x: "https://x.com/KartikBS01",
    devto: "https://dev.to/kartik_singhbisht_e001ab",
    youtube: "https://www.youtube.com/@letstrycoding6389",
  },
} as const;

export function calUrl() {
  return process.env.NEXT_PUBLIC_CAL_URL ?? "";
}
