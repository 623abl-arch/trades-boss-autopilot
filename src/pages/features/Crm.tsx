import FeatureLanding from "@/components/FeatureLanding";
import {
  CrmMock,
  MapMock,
  QuoteMock,
  SavingsMock,
} from "@/components/feature-mocks/Mocks";

const Crm = () => (
  <FeatureLanding
    eyebrow="CRM & DISPATCH"
    title="One place for every customer, every job, every dollar."
    intro="The whole history of a customer in one screen - calls, texts, quotes, payments, photos, and the next visit on the calendar. No more 'wait, who is this?' when the phone rings."
    heroVisual={<CrmMock />}
    proof={{
      tag: "SUMMIT MEP",
      quote:
        "When a homeowner calls, I know their last three jobs, what they paid, and that we owe them a follow-up - before I say hello.",
      author: "Carla Nguyen",
      role: "Office Manager, Summit MEP",
      stats: [
        { value: "100%", label: "Of jobs tracked end-to-end" },
        { value: "0", label: "Sticky notes on the office wall" },
      ],
    }}
    sectionTitle="Run the whole business from one screen."
    rows={[
      {
        eyebrow: "CUSTOMER 360",
        title: "Full history, one click away.",
        body:
          "Every call, text, quote, invoice, photo, and tech note attached to the customer record. No tab-switching, no spreadsheet hunting.",
        visual: <CrmMock />,
      },
      {
        reverse: true,
        eyebrow: "DISPATCH MAP",
        title: "Drag a job to a tech, done.",
        body:
          "See the day on a map, drag jobs onto techs, and the system texts the customer the new arrival window automatically.",
        visual: <MapMock />,
      },
      {
        eyebrow: "QUOTE-TO-CASH",
        title: "Every job moves through the same clean pipeline.",
        body:
          "Lead → Quoted → Scheduled → In Progress → Paid. The bot enforces the steps so nothing falls through the cracks.",
        visual: <QuoteMock />,
      },
      {
        reverse: true,
        eyebrow: "FREE FOREVER",
        title: "No per-user pricing. Add the whole crew.",
        body:
          "Your CRM is yours - install it on the box you already own. Add five techs or fifty, the cost doesn't change.",
        visual: <SavingsMock />,
      },
    ]}
    technicalHref={{ label: "How it's built", href: "/stack" }}
  />
);

export default Crm;