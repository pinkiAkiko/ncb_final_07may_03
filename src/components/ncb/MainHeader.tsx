import { Menu, Search, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import ncbEmblem from "@/assets/ncb-emblem.png";
import manasLogo from "@/assets/manas-logo.png";
import indiaEmblem from "@/assets/india-emblem.png";
import mosjeLogo from "@/assets/logos/mosje.png";

const navigationData = [
  { title: "Home", href: "/" },
  {
    title: "About",
    items: [
      { title: "Who We Are", href: "#" },
      { title: "Origin & Evolution", href: "#" },
      { title: "Mission, Vision & Motto", href: "#" },
      { title: "Hierarchy & Structure", href: "#" },
      { title: "Our Offices", href: "#" },
      { title: "Our Partners", href: "#" },
    ],
  },
  {
    title: "Media & Events",
    items: [
      { title: "Latest News & Events", href: "#" },
      { title: "Important Seizures", href: "#" },
      { title: "Photo Gallery", href: "#" },
      { title: "Video Gallery", href: "#" },
      { title: "Press Releases", href: "#" },
      { title: "Former NCB Heads", href: "#" },
    ],
  },
  {
    title: "Join NCB",
    items: [
      { title: "Current Vacancies", href: "#" },
      { title: "Recruitment Rules", href: "#" },
    ],
  },
  { title: "Contact Us", href: "#" },
  {
    title: "Legal",
    items: [
      { title: "Notifications", href: "#" },
      { title: "Important Judgements", href: "#" },
      { title: "Acts & Rules", href: "#" },
      { title: "Treaties", href: "#" },
      { title: "Publications", href: "#" },
      { title: "NDPS Exclusive Courts", href: "#" },
    ],
  },
  { title: "Alert Awareness", href: "#" },
  {
    title: "Others",
    items: [
      { title: "Drug Abuse", href: "#" },
      { title: "Employee Corner (APAR)", href: "#" },
      { title: "Vigilance", href: "#" },
      { title: "Tenders", href: "#" },
    ],
  },
  {
    title: "More",
    items: [
      { title: "E-Pledge", href: "#" },
      { title: "Disposal of Drugs", href: "#" },
      { title: "RTI & Vigilance", href: "#" },
      { title: "Circulars & Orders", href: "#" },
      { title: "Drug Rehabilitation Centres", href: "#" },
      { title: "Citizen Charter", href: "#" },
      { title: "Grievance Redressal", href: "#" },
      { title: "Internal Complaint Committee", href: "#" },
      { title: "MoUs (CBSE, SPANDAN, RRU, NFSU)", href: "#" },
    ],
  },
];

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export function MainHeader() {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-3 shrink-0">
          <img src={mosjeLogo} alt="Ministry of Social Justice and Empowerment" className="h-14 sm:h-16 w-auto" />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-xl font-bold text-navy leading-tight tracking-tight">
            Narcotics Control Bureau
          </h1>
          <p className="text-[12px] sm:text-sm text-muted-foreground leading-tight font-medium">
            Ministry of Home Affairs, Government of India
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" aria-hidden />
            <Input
              type="search"
              placeholder="Search NCB…"
              aria-label="Search the NCB website"
              className="pl-9 h-10 w-44 lg:w-60 rounded-none border-border/60 focus-visible:ring-saffron"
            />
          </div>
          <Button className="h-10 bg-saffron text-saffron-foreground hover:bg-saffron/90 font-bold rounded-none px-6 transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
            <ShieldAlert className="size-4 mr-2" aria-hidden />
            Submit Tip
          </Button>
          <div className="flex items-center gap-4 border-l border-border/60 pl-4 ml-2">
            <img src={manasLogo} alt="MANAS National Narcotics Helpline" className="h-11 w-auto shrink-0" />
            <img src={ncbEmblem} alt="Narcotics Control Bureau emblem" className="h-16 sm:h-18 w-auto shrink-0" />
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden rounded-none h-10 w-10 transition-all duration-300" aria-label="Open menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 sm:w-96 overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left text-navy font-bold text-xl">Menu</SheetTitle>
            </SheetHeader>
            <nav aria-label="Primary" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                {navigationData.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b-0">
                    {item.items ? (
                      <>
                        <AccordionTrigger className="py-3.5 text-base font-bold text-navy hover:no-underline hover:text-saffron transition-all duration-300 ease-in-out">
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="pl-4 space-y-1 pb-3 border-l-2 border-saffron/20 ml-1">
                            {item.items.map((sub, sidx) => (
                              <li
                                key={sidx}
                                className="animate-in fade-in slide-in-from-left-2 duration-500 fill-mode-both"
                                style={{ animationDelay: `${sidx * 60}ms` }}
                              >
                                <a href={sub.href} className="block py-2.5 text-sm font-medium text-muted-foreground hover:text-navy hover:translate-x-2 transition-all duration-300 ease-in-out">
                                  {sub.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </>
                    ) : (
                      <a href={item.href} className="block py-3.5 text-base font-bold text-navy border-b border-transparent hover:text-saffron transition-all duration-300 ease-in-out">
                        {item.title}
                      </a>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
              <Button className="w-full h-12 mt-8 bg-saffron text-saffron-foreground hover:bg-saffron/90 rounded-none font-bold text-base shadow-sm transition-all duration-300 ease-in-out hover:shadow-md">
                <ShieldAlert className="size-5 mr-2" /> Submit Tip Online
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <nav aria-label="Primary" className="hidden md:block bg-navy text-navy-foreground border-t border-white/10 shadow-md">
        <div className="mx-auto max-w-7xl">
          <ul className="flex items-center justify-start">
            {navigationData.map((item, idx) => (
              <li key={idx}>
                {item.items ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="group flex items-center gap-1 h-11 px-5 text-[12px] lg:text-[13px] font-bold uppercase tracking-wider hover:text-saffron transition-colors duration-300 ease-in-out outline-none">
                      {item.title}
                      <ChevronDown className="size-3 opacity-60 transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-[280px] p-2 bg-white text-navy border-x border-b border-border shadow-2xl rounded-none animate-in fade-in slide-in-from-top-2 duration-300 ease-in-out z-50"
                      align="start"
                      sideOffset={0}
                    >
                      <ul className="space-y-0.5">
                        {item.items.map((sub, sidx) => (
                          <li
                            key={sidx}
                            className="animate-in fade-in slide-in-from-top-1 duration-700 fill-mode-both"
                            style={{ animationDelay: `${sidx * 60}ms` }}
                          >
                            <a
                              href={sub.href}
                              className="block p-3 leading-none no-underline outline-none transition-colors duration-300 ease-in-out hover:bg-saffron/10 hover:text-saffron text-[13px] font-bold border-l-4 border-transparent hover:border-saffron"
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center h-11 px-5 text-[12px] lg:text-[13px] font-bold uppercase tracking-wider border-b-[3px] border-transparent hover:border-saffron hover:text-saffron transition-colors duration-300 ease-in-out"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
