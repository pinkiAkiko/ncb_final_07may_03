import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/events/event-1.jpg";
import event2 from "@/assets/events/event-2.jpg";
import event3 from "@/assets/events/event-3.jpg";

const items = [
  { cat: "Advisory", title: "Sample Advisory: Citizens encouraged to report drug trafficking through MANAS Helpline 1933", date: "12 Apr 2026", summary: "Public advisory placeholder regarding citizen reporting channels and confidentiality.", tab: "Advisories" },
  { cat: "Recruitment", title: "Sample Recruitment Notice: Application window opened for selected NCB posts", date: "08 Apr 2026", summary: "Sample notice for ongoing recruitment cycle under Join NCB.", tab: "Recruitment" },
  { cat: "Tender", title: "Sample Tender Notice: Request for proposal for digital services support", date: "02 Apr 2026", summary: "Sample tender placeholder for procurement of digital services.", tab: "Tenders" },
  { cat: "Press Release", title: "Sample Press Release: Anti-drug awareness campaign conducted in educational institutions", date: "28 Mar 2026", summary: "Sample press release placeholder summarising awareness outreach.", tab: "Press Releases" },
  { cat: "Circular", title: "Sample Circular: Updated guidelines for controlled substance reporting", date: "20 Mar 2026", summary: "Sample circular outlining placeholder reporting procedure changes.", tab: "Circulars" },
  { cat: "MoU", title: "Sample MoU Update: Coordination meeting held with enforcement stakeholders", date: "15 Mar 2026", summary: "Sample placeholder for inter-agency cooperation memorandum.", tab: "MoUs" },
];

const tabs = ["All", "Press Releases", "Recruitment", "Tenders", "Advisories", "Circulars", "MoUs"];

const baseEvents = [
  { cat: "Awareness", date: "26 June", title: "International Day Against Drug Abuse Awareness Programme", location: "All Zonal Offices", img: event1 },
  { cat: "Training", date: "14 June", title: "Capacity Building Workshop for Drug Law Enforcement Officers", location: "NCB Academy", img: event2 },
  { cat: "Coordination", date: "05 June", title: "Inter-agency Coordination Meeting on Drug Law Enforcement", location: "New Delhi", img: event3 },
];

// Duplicate events to ensure the container has enough content to scroll
const events = [...baseEvents, ...baseEvents.map(e => ({ ...e, title: e.title + " (Recent)" }))];

function ItemRow({ item }: { item: (typeof items)[number] }) {
  return (
    <article className="py-4 border-b border-border/60 last:border-b-0 hover:bg-muted/50 transition-colors px-2 rounded-sm group">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[9px] uppercase tracking-wider border border-navy/30 text-navy/80 px-1.5 py-0.5 group-hover:border-saffron group-hover:text-saffron transition-colors">
          {item.cat}
        </span>
        <span className="text-[11px] text-muted-foreground inline-flex items-center gap-1">
          <Calendar className="size-3" aria-hidden /> {item.date}
        </span>
      </div>
      <h3 className="mt-1.5 text-[15px] font-semibold text-navy group-hover:text-saffron transition-colors leading-relaxed">
        <a href="#">{item.title}</a>
      </h3>
    </article>
  );
}

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function UpdatesAndEvents() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      aria-labelledby="updates-title" 
      className={`bg-background py-16 transition-all duration-1000 ease-out transform ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-stretch">
        <div className="min-w-0 flex flex-col h-full">
          <h2 id="updates-title" className="text-3xl md:text-4xl font-bold text-navy">
            What&apos;s New
          </h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-muted-foreground mt-3">
            Latest publications, notices and announcements from NCB.
          </p>
          <Tabs defaultValue="All" className="mt-5">
            <TabsList className="flex flex-wrap h-auto bg-muted p-1 rounded-none justify-start w-full">
              {tabs.map((t) => (
                <TabsTrigger key={t} value={t} className="text-xs rounded-none">
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((t) => {
              const filtered = t === "All" ? items : items.filter((i) => i.tab === t);
              // For auto-scroll to loop seamlessly, we need enough content. We'll show all items by removing the .slice() and duplicate them for the loop effect.
              const scrollItems = filtered.length > 0 ? [...filtered, ...filtered] : [];
              
              return (
                <TabsContent key={t} value={t} className="mt-2">
                  <div className="bg-card border-t border-border relative overflow-hidden h-[300px] group">
                    {scrollItems.length > 0 ? (
                      <div className="absolute inset-x-0 top-0 auto-scroll-container group-hover:[animation-play-state:paused]">
                        {scrollItems.map((it, i) => <ItemRow key={i} item={it} />)}
                      </div>
                    ) : (
                      <div className="px-1 h-full">
                        <p className="py-8 text-center text-sm text-muted-foreground">
                          No items in this category.
                        </p>
                      </div>
                    )}
                    {/* Gradient overlays to mask the scrolling edges */}
                    {scrollItems.length > 0 && (
                      <>
                        <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-b from-card to-transparent pointer-events-none z-10" />
                        <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-card to-transparent pointer-events-none z-10" />
                      </>
                    )}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
          <div className="mt-auto pt-4">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-none transition-colors duration-300">
              View All Updates <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>

        <aside aria-labelledby="events-title" className="min-w-0 flex flex-col h-full">
          <h2 id="events-title" className="text-3xl md:text-4xl font-bold text-navy">
            Recent Events
          </h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-muted-foreground mt-3">
            Programmes, workshops and coordination meetings.
          </p>
          <div className="mt-5 space-y-4 h-[344px] overflow-y-auto pr-2 custom-scrollbar">
            {events.map((e, idx) => {
              const [day, mon] = e.date.split(" ");
              return (
                <article
                  key={idx}
                  className="bg-card border border-border hover:shadow-md transition-shadow flex shrink-0"
                >
                  <img src={e.img} alt="" className="w-36 sm:w-40 h-auto object-cover shrink-0" loading="lazy" />
                  <div className="flex-1 p-5 flex gap-3 min-w-0">
                    <div className="shrink-0 text-center bg-navy text-navy-foreground w-12 h-14 flex flex-col items-center justify-center">
                      <div className="text-lg font-bold leading-none">{day}</div>
                      <div className="text-[9px] uppercase tracking-wider mt-1 text-saffron">{mon}</div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-saffron">
                        {e.cat}
                      </span>
                      <h3 className="text-base font-semibold text-navy mt-0.5 leading-snug truncate whitespace-normal line-clamp-2">
                        {e.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 inline-flex items-center gap-1">
                        <MapPin className="size-3" aria-hidden /> {e.location}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-auto pt-4">
            <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-none transition-colors duration-300">
              View All Events <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </aside>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .auto-scroll-container {
          animation: scrollUp 25s linear infinite;
        }
        .auto-scroll-container:hover {
          animation-play-state: paused;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted)); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--muted-foreground) / 0.3); 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--muted-foreground) / 0.5); 
        }
      `}} />
    </section>
  );
}
