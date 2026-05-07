import {
  ShieldAlert, Phone, FileText, Briefcase, Gavel, MapPin, HeartPulse,
  Building2, Scale, BookOpen, MessageSquareWarning, Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import manasLogo from "@/assets/manas-logo.png";

const links = [
  { icon: ShieldAlert, label: "Submit a Tip" },
  { icon: Phone, label: "MANAS 1933" },
  { icon: FileText, label: "RTI" },
  { icon: Briefcase, label: "Tenders" },
  { icon: Users, label: "Join NCB" },
  { icon: MapPin, label: "Contact NCB" },
  { icon: Scale, label: "Acts & Rules" },
  { icon: Gavel, label: "Important Judgements" },
  { icon: BookOpen, label: "NIDAAN" },
  { icon: HeartPulse, label: "Drug Rehabilitation Centres" },
  { icon: MessageSquareWarning, label: "Public Grievance" },
  { icon: Building2, label: "Office Locator" },
];

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function CitizenServices() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      aria-labelledby="citizen-title" 
      className={`bg-saffron-tint py-16 border-y border-border transition-all duration-1000 ease-out transform ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="bg-card border-l-4 border-saffron shadow-sm p-6 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <img src={manasLogo} alt="MANAS National Narcotics Helpline" className="h-16 w-auto hidden md:block" />
          <div>
            <h2 id="citizen-title" className="text-xl md:text-2xl font-bold text-navy">
              Have information about drug trafficking or drug abuse?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2">
              Call MANAS Helpline 1933 or submit a confidential tip online — your identity is kept confidential.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-navy text-navy-foreground hover:bg-navy-deep font-semibold rounded-none transition-all duration-300">
              <a href="tel:1933"><Phone className="size-4" /> Call 1933</a>
            </Button>
            <Button className="bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none transition-all duration-300">
              <ShieldAlert className="size-4" /> Submit Tip Online
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold text-navy mb-4">Citizen Quick Links</h3>
          <ul className="hairline-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 bg-card">
            {links.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  className="px-4 py-5 flex flex-col items-center text-center gap-2 hover:bg-navy hover:text-navy-foreground transition-all duration-300 h-full group"
                >
                  <Icon className="size-6 text-navy group-hover:text-saffron transition-colors duration-300" aria-hidden strokeWidth={1.5} />
                  <span className="text-xs md:text-sm font-medium leading-tight transition-colors duration-300">
                    {label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
