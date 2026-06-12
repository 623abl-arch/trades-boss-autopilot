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

const Index = () => <V1 />;

export default Index;
