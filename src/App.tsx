import { useState } from "react";
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
import { LogoLoader } from "@/components/ncb/LogoLoader";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import { LanguageModal } from "@/components/ncb/LanguageModal";

const queryClient = new QueryClient();

function AppInner() {
  const [loading, setLoading] = useState(true);
  const { showModal } = useLanguage();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${(loading || showModal) ? "bg-[#030810]" : "bg-background"}`}>
      {loading && <LogoLoader onFadeOut={() => setLoading(false)} />}
      {!loading && (
        <>
          {showModal && <LanguageModal />}
          <div className={`flex flex-col min-h-screen transition-all duration-700 ${showModal ? "blur-md brightness-50 pointer-events-none" : "blur-0 brightness-100"}`}>
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
          </div>
        </>
      )}
      <Toaster position="top-right" />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AppInner />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
