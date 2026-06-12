import FeatureLanding from "@/components/FeatureLanding";
import {
  VoiceCallMock,
  NotifMock,
  CrmMock,
  SavingsMock,
} from "@/components/feature-mocks/Mocks";

const VoiceAi = () => (
  <FeatureLanding
    eyebrow="SMS & VOICE AI"
    title="24/7 texts and phone lines."
    intro="Every call answered in two rings, day or night. Your AI greets the caller, asks the right questions, gauges urgency, and drops a booked job onto your schedule - without you touching the phone."
    heroVisual={<VoiceCallMock />}
    proof={{
      tag: "PIPE PRO PLUMBING",
      quote:
        "We were missing a quarter of our calls after 5 PM. Now every single one gets answered, qualified, and on the calendar before I'm done with dinner.",
      author: "Mike Reyes",
      role: "Owner, Pipe Pro Plumbing",
      stats: [
        { value: "24/7", label: "Always answering" },
        { value: "0 missed", label: "After-hours calls last 30 days" },
      ],
    }}
    sectionTitle="Never lose another call to voicemail."
    rows={[
      {
        eyebrow: "AFTER-HOURS COVERAGE",
        title: "Capture the calls your competitors miss.",
        body:
          "Most plumbing emergencies happen between 6 PM and 7 AM. Your AI answers every one of them, qualifies the lead, and sends you a booked job before you wake up.",
        cta: { label: "See it live", href: "#book" },
        visual: <VoiceCallMock />,
      },
      {
        reverse: true,
        eyebrow: "INSTANT NOTIFICATIONS",
        title: "Every call summarized and pushed to your team.",
        body:
          "When the call ends you get a clean summary in your phone - caller name, address, the issue, the urgency, and the suggested visit time. Approve or reschedule with one tap.",
        cta: { label: "Get a demo", href: "#book" },
        visual: <NotifMock />,
      },
      {
        eyebrow: "WIRED INTO YOUR CRM",
        title: "Calls flow straight into your customer records.",
        body:
          "Every call creates or updates the customer in your CRM with full transcript, address, and history attached. No more sticky notes.",
        cta: { label: "Explore the CRM", href: "/features/crm" },
        visual: <CrmMock />,
      },
      {
        reverse: true,
        eyebrow: "PRICED LIKE A UTILITY",
        title: "Pay per minute, not per seat.",
        body:
          "Most contractors spend $20 to $50 a month on AI call answering - total. No per-user fees, no $300/mo answering service contract.",
        cta: { label: "See the math", href: "/#savings" },
        visual: <SavingsMock />,
      },
    ]}
    technicalHref={{ label: "How it's built", href: "/stack#voice" }}
  />
);

export default VoiceAi;