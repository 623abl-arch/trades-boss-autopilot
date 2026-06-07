import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProvenStats from "@/components/ProvenStats";
import WhatIs from "@/components/WhatIs";
import CeoQuotes from "@/components/CeoQuotes";
import AiEmployee from "@/components/AiEmployee";
import IntegrationsStrip from "@/components/IntegrationsStrip";
import RecommendedReading from "@/components/RecommendedReading";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import WhoItsFor from "@/components/WhoItsFor";
import OldVsNew from "@/components/OldVsNew";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import SiteFooter from "@/components/SiteFooter";
import LiveStatusWidget from "@/components/LiveStatusWidget";
import IndexV2 from "@/pages/IndexV2";
import IndexV3 from "@/pages/IndexV3";
import IndexV4 from "@/pages/IndexV4";
import { getInitialVersion, type Version } from "@/components/VersionSwitcher";

const V1 = () => (
  <>
    <Navbar />
    <Hero />
    <WhatIs />
    <CeoQuotes />
    <AiEmployee />
    <Testimonials />
    <OldVsNew />
    <Comparison />
    <WhoItsFor />
    <Pricing />
    <RecommendedReading />
    <IntegrationsStrip />
    <CtaFooter />
    <SiteFooter />
    <LiveStatusWidget />
  </>
);

const Index = () => {
  const [version, setVersion] = useState<Version>(1);
  useEffect(() => setVersion(getInitialVersion()), []);
  if (version === 2) return <IndexV2 />;
  if (version === 3) return <IndexV3 />;
  if (version === 4) return <IndexV4 />;
  return <V1 />;
};

export default Index;
