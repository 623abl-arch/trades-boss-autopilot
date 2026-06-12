import FeatureLanding from "@/components/FeatureLanding";
import {
  DashMock,
  NotifMock,
  MapMock,
  SavingsMock,
} from "@/components/feature-mocks/Mocks";

const Dashboard = () => (
  <FeatureLanding
    eyebrow="DASHBOARD"
    title="The whole business at a glance."
    intro="Revenue, open jobs, today's route, system health, and reviews - one screen, refreshed live. The first thing you check in the morning, the last thing you check before bed."
    heroVisual={<DashMock />}
    proof={{
      tag: "RIVERSIDE GC",
      quote:
        "I used to log into four tools to know if we had a good week. Now it's one glance on my phone before I start the truck.",
      author: "Dan Keller",
      role: "Owner, Riverside GC",
      stats: [
        { value: "1 screen", label: "Replaces 4 SaaS dashboards" },
        { value: "Live", label: "Updates as jobs close" },
      ],
    }}
    sectionTitle="Know how the business is doing - instantly."
    rows={[
      {
        eyebrow: "REVENUE & PIPELINE",
        title: "Today, this week, this month - at a glance.",
        body:
          "Quotes sent, jobs booked, money collected, average ticket. The numbers that actually run the business, on one card.",
        visual: <DashMock />,
      },
      {
        reverse: true,
        eyebrow: "TODAY'S ROUTE",
        title: "See where every truck is, all day.",
        body:
          "Jobs plotted on a live map, ETAs auto-calculated, and the customer gets the 'we're 20 minutes out' text without anyone tapping anything.",
        visual: <MapMock />,
      },
      {
        eyebrow: "SYSTEM HEALTH",
        title: "Know the moment something needs attention.",
        body:
          "Phone line down? Card declined? AI overloaded? You'll see it on the dashboard - and a Discord ping - before the customer ever notices.",
        visual: <NotifMock />,
      },
      {
        reverse: true,
        eyebrow: "OWN YOUR DATA",
        title: "Self-hosted on the box on your desk.",
        body:
          "Your numbers never leave your network unless you say so. No third party mining your customer list to sell to competitors.",
        visual: <SavingsMock />,
      },
    ]}
    technicalHref={{ label: "How it's built", href: "/stack" }}
  />
);

export default Dashboard;