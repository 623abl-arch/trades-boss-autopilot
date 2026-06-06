import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index.tsx";
import Stack from "./pages/Stack.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import AboutMepClaw from "./pages/AboutMepClaw.tsx";
import NotFound from "./pages/NotFound.tsx";
import Faq from "./pages/Faq.tsx";
import WhatIsMepClaw from "./pages/WhatIsMepClaw.tsx";
import VoiceAi from "./pages/features/VoiceAi.tsx";
import Quotes from "./pages/features/Quotes.tsx";
import Crm from "./pages/features/Crm.tsx";
import Dashboard from "./pages/features/Dashboard.tsx";
import DiscordOverview from "./pages/solutions/DiscordOverview.tsx";
import DiscordBot from "./pages/solutions/DiscordBot.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import BlogIndex from "./pages/BlogIndex.tsx";
import PageScale from "./components/PageScale";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageScale />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutMepClaw />} />
            <Route path="/features/voice-ai" element={<VoiceAi />} />
            <Route path="/features/quotes" element={<Quotes />} />
            <Route path="/features/crm" element={<Crm />} />
            <Route path="/features/dashboard" element={<Dashboard />} />
            <Route path="/solutions/discord" element={<DiscordOverview />} />
            <Route path="/solutions/discord/bot" element={<DiscordBot />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/what-is-mepclaw" element={<WhatIsMepClaw />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
