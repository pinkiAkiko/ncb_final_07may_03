import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Twitter, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import p2 from "@/assets/gallery/photo-2.jpg";
import p3 from "@/assets/gallery/photo-3.jpg";
import p4 from "@/assets/gallery/photo-4.jpg";
import p6 from "@/assets/gallery/photo-6.jpg";
import e1 from "@/assets/events/event-1.jpg";
import e2 from "@/assets/events/event-2.jpg";
import e3 from "@/assets/events/event-3.jpg";

const tabs = ["Photos", "Videos", "Awareness Videos", "Press Releases"];

const tiles = [
  { src: p2, caption: "Coordination meeting" },
  { src: p3, caption: "Training session" },
  { src: p4, caption: "Public outreach" },
  { src: e1, caption: "International Day Against Drug Abuse" },
  { src: p6, caption: "Inter-agency coordination" },
  { src: e2, caption: "Capacity Building Workshop" },
];

const socials = [
  { icon: Twitter, label: "X (Twitter)" },
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function MediaAndSocial() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      aria-labelledby="media-title" 
      className={`bg-background py-16 transition-all duration-1000 ease-out transform ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[2fr_1fr] gap-8 lg:items-stretch">
        <div className="min-w-0">
          <h2 id="media-title" className="text-3xl md:text-4xl font-bold text-navy">
            Media Gallery
          </h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-muted-foreground mt-3">
            Photographs, videos and press materials from NCB activities.
          </p>
          <Tabs defaultValue="Photos" className="mt-5">
            <TabsList className="flex flex-wrap h-auto bg-muted p-1 rounded-none justify-start w-full">
              {tabs.map((t) => (
                <TabsTrigger key={t} value={t} className="text-xs rounded-none">{t}</TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((t) => (
              <TabsContent key={t} value={t} className="mt-3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tiles.map((tile, i) => (
                    <figure key={i} className="bg-card border border-border overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img src={tile.src} alt={tile.caption} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                      </div>
                      <figcaption className="p-2 text-xs text-muted-foreground leading-snug">
                        {tile.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <Button variant="outline" className="mt-5 border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-none transition-all duration-300">
            View Gallery <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>

        <aside aria-labelledby="social-title" className="flex flex-col gap-4 min-w-0 min-h-0 h-full">
          <div className="bg-card border border-border p-6 shrink-0">
            <h2 id="social-title" className="text-xl md:text-2xl font-bold text-navy">
              Follow NCB
            </h2>
            <div className="mt-2 h-1 w-10 bg-saffron" aria-hidden />
            <p className="text-sm text-muted-foreground mt-3">
              Follow official NCB channels for advisories, awareness updates and announcements.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <a
                    href="#"
                    aria-label={`NCB on ${label}`}
                    className="flex items-center gap-3 px-3 py-3 border border-border hover:bg-navy hover:text-navy-foreground transition-colors"
                  >
                    <Icon className="size-5" aria-hidden />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border p-6 flex flex-col h-[285px]">
            <h3 className="text-base font-bold uppercase tracking-wider text-saffron shrink-0">Latest Posts</h3>
            <ul className="mt-4 space-y-4 flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { handle: "@NCBHQ", icon: Twitter, time: "2h", text: "Nationwide awareness drive on substance abuse launched in coordination with state agencies. #DrugFreeIndia" },
                { handle: "NCB India", icon: Facebook, time: "1d", text: "Capacity building workshop concluded at NCB Academy with 120 officers from across zones." },
                { handle: "@ncb_india", icon: Instagram, time: "2d", text: "Photographs from the International Day Against Drug Abuse 2026 observance ceremony." },
              ].map((p, i) => (
                <li key={i} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
                  <div className="flex items-center gap-2 text-xs">
                    <p.icon className="size-3.5 text-navy" aria-hidden />
                    <span className="font-semibold text-navy">{p.handle}</span>
                    <span className="text-muted-foreground">· {p.time}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/80 leading-snug">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
