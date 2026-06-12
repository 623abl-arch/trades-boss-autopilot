import FeatureLanding from "@/components/FeatureLanding";
import {
  PhotoMock,
  MapMock,
  NotifMock,
  SavingsMock,
} from "@/components/feature-mocks/Mocks";

const FieldPhotos = () => (
  <FeatureLanding
    eyebrow="FIELD PHOTOS & MAPS"
    title="Visual address-sorted history."
    intro="Snap a photo on the jobsite, upload it from chat, and it lands in a gallery sorted by property address. Every photo is searchable, every address has a visual timeline - no more digging through camera rolls."
    heroVisual={<PhotoMock />}
    proof={{
      tag: "ELITE HVAC",
      quote:
        "Before, every tech had photos scattered across five phones. Now I pull up 512 Oak St and see every job we've ever done there in one scroll.",
      author: "Ramon Cruz",
      role: "Owner, Elite HVAC",
      stats: [
        { value: "0", label: "Lost jobsite photos" },
        { value: "Instant", label: "Address lookup" },
      ],
    }}
    sectionTitle="Every jobsite photo, right where you expect it."
    rows={[
      {
        eyebrow: "SNAP & UPLOAD",
        title: "Drop photos straight from chat.",
        body:
          "Tech takes a photo in Discord and the bot files it under the job address automatically. No folders, no naming, no Dropbox links.",
        visual: <PhotoMock />,
      },
      {
        reverse: true,
        eyebrow: "ADDRESS SORTED",
        title: "Find every photo by property.",
        body:
          "Type an address and see the full visual history - before shots, progress pics, final walkthroughs, and warranty documentation all in one place.",
        visual: <MapMock />,
      },
      {
        eyebrow: "NOTIFICATIONS",
        title: "Know when new photos arrive.",
        body:
          "The office gets pinged the moment a tech uploads photos from the field. No more end-of-day 'did you send those pics?' texts.",
        visual: <NotifMock />,
      },
      {
        reverse: true,
        eyebrow: "NO STORAGE LIMITS",
        title: "Your own cloud. Your own hardware.",
        body:
          "Photos live on the box in your office. No per-GB fees, no monthly storage tiers, no vendor mining your jobsite data.",
        visual: <SavingsMock />,
      },
    ]}
    technicalHref={{ label: "How it's built", href: "/stack" }}
  />
);

export default FieldPhotos;
