import FeatureLanding from "@/components/FeatureLanding";
import {
  QuoteMock,
  NotifMock,
  SmsMock,
  SavingsMock,
} from "@/components/feature-mocks/Mocks";

const Quotes = () => (
  <FeatureLanding
    eyebrow="QUOTES & INVOICES"
    title="Send a quote in 60 seconds. Get paid before you leave the driveway."
    intro="Build line-item quotes from a 2,300-task pricebook, send via text or email, and accept Apple Pay, ACH, or card. The customer signs and pays in two taps - you get pinged the second the money lands."
    heroVisual={<QuoteMock />}
    proof={{
      tag: "ALL-DAY HVAC",
      quote:
        "I built a $4,000 quote on my phone in the truck, sent it, and the customer paid the deposit before I drove away. That used to take three days.",
      author: "Tony Alvarez",
      role: "Owner, All-Day HVAC",
      stats: [
        { value: "60s", label: "Average quote build time" },
        { value: "2.4d", label: "Faster paid vs prior tools" },
      ],
    }}
    sectionTitle="Money in, friction out."
    rows={[
      {
        eyebrow: "PRICEBOOK-DRIVEN",
        title: "Stop pricing jobs in your head.",
        body:
          "2,300+ pre-loaded tasks with your markup applied. Pick three line items, add a photo, hit send. Consistent pricing across every tech, every truck.",
        visual: <QuoteMock />,
      },
      {
        reverse: true,
        eyebrow: "ONE-TAP PAY",
        title: "Customers pay how they actually want to.",
        body:
          "Apple Pay, Google Pay, ACH, or card - all in a clean portal that works on phones. No login, no app to install, no awkward 'we don't take cards.'",
        visual: <SmsMock />,
      },
      {
        eyebrow: "AUTO-REMINDERS",
        title: "Stop chasing unpaid invoices.",
        body:
          "Polite reminders go out at day 3, 7, and 14 automatically. The AI handles the awkward 'hey, just checking in' so you don't have to.",
        visual: <NotifMock />,
      },
      {
        reverse: true,
        eyebrow: "NO MONTHLY GATEWAY FEE",
        title: "Just standard processing - no SaaS markup.",
        body:
          "You pay 2.9% + 30¢, the same as everyone else. We don't add a monthly gateway charge or per-user invoicing fee on top.",
        visual: <SavingsMock />,
      },
    ]}
    technicalHref={{ label: "How it's built", href: "/stack" }}
  />
);

export default Quotes;