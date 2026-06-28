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
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import SiteFooter from "@/components/SiteFooter";
import LiveStatusWidget from "@/components/LiveStatusWidget";

const V1 = () => (
  <>
    <Navbar />
    <Hero />
    <WhatIs />
    <AiEmployee />
    <Testimonials />
    <CeoQuotes />
    <Comparison />
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
