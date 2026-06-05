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
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CtaFooter from "@/components/CtaFooter";
import SiteFooter from "@/components/SiteFooter";
import LiveStatusWidget from "@/components/LiveStatusWidget";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    {/* Digital sovereignty */}
    <WhatIs />
    <CeoQuotes />
    {/* Built to Protect + Grow with us */}
    <AiEmployee />
    {/* Testimonials marquee under Grow with us */}
    <Testimonials />
    {/* Built by contractors */}
    <About />
    {/* You vs them */}
    <Comparison />
    {/* Everything else */}
    <WhoItsFor />
    <Pricing />
    <RecommendedReading />
    <IntegrationsStrip />
    <CtaFooter />
    <SiteFooter />
    <LiveStatusWidget />
  </>
);

export default Index;
