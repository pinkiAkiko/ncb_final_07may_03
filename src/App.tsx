import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UtilityStrip } from "@/components/ncb/UtilityStrip";
import { MainHeader } from "@/components/ncb/MainHeader";
import { Hero } from "@/components/ncb/Hero";
import { AboutAndMVM } from "@/components/ncb/AboutAndMVM";
import { DirectorMessage } from "@/components/ncb/DirectorMessage";
import { UpdatesAndEvents } from "@/components/ncb/UpdatesAndEvents";
import { CitizenServices } from "@/components/ncb/CitizenServices";
import { EnforcementAndWanted } from "@/components/ncb/EnforcementAndWanted";
import { MediaAndSocial } from "@/components/ncb/MediaAndSocial";
import { ImportantSitesAndSubscribe } from "@/components/ncb/ImportantSitesAndSubscribe";
import { SiteFooter } from "@/components/ncb/SiteFooter";
import { Reveal } from "@/components/ncb/Reveal";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <UtilityStrip />
        <MainHeader />
        <main id="main-content" className="flex-1">
          <Hero />
          <Reveal><AboutAndMVM /></Reveal>
          <Reveal><DirectorMessage /></Reveal>
          <Reveal><UpdatesAndEvents /></Reveal>
          <Reveal><CitizenServices /></Reveal>
          <Reveal><EnforcementAndWanted /></Reveal>
          <Reveal><MediaAndSocial /></Reveal>
          <Reveal><ImportantSitesAndSubscribe /></Reveal>
        </main>
        <SiteFooter />
        <Toaster position="top-right" />
      </div>
    </QueryClientProvider>
  );
}

export default App;
