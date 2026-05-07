import { Compass, Target, Eye, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { label: "Established", value: "1986" },
  { label: "Mandate", value: "NDPS Act" },
  { label: "Role", value: "Apex Coordinator" },
  { label: "Network", value: "Pan-India Zones" },
];

const cards = [
  { icon: Compass, label: "Motto", text: "Intelligence, Enforcement, Coordination" },
  { icon: Target, label: "Mission", text: "Prevent and combat abuse and illicit traffic of drugs" },
  { icon: Eye, label: "Vision", text: "Endeavour for a drug-free society" },
];

export function AboutAndMVM() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      aria-labelledby="about-title" 
      className={`bg-background py-16 transition-all duration-1000 ease-out transform ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-5 gap-12 lg:gap-24">
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Institutional Identity
          </p>
          <h2 id="about-title" className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight">
            About the Narcotics Control Bureau
          </h2>
          <div className="mt-3 h-1 w-16 bg-saffron" aria-hidden />
          <p className="mt-6 text-base text-foreground/80 leading-relaxed">
            The Narcotics Control Bureau is India&apos;s apex coordinating agency for drug law
            enforcement. Constituted in 1986, NCB coordinates action among central and state
            agencies, supports international cooperation, gathers and analyses intelligence, and
            conducts enforcement through its zones and sub-zones across India.
          </p>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 border-t border-border">
            {stats.map((s, i) => {
              const isFirst = i === 0;
              const isLast = i === stats.length - 1;
              return (
                <div
                  key={s.label}
                  className={`py-4 px-4 border-b border-border sm:border-b-0 sm:border-r ${isFirst ? "sm:pl-0" : ""} ${isLast ? "sm:border-r-0 sm:pr-6 lg:pr-10" : ""}`}
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="text-base md:text-lg font-bold text-navy mt-1">{s.value}</dd>
                </div>
              );
            })}
          </dl>
          <Button variant="outline" className="mt-8 border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-none">
            Read Full Profile <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 lg:divide-y lg:divide-x-0 sm:divide-x divide-border lg:border-l-2 lg:border-saffron lg:pl-8">
          {cards.map(({ icon: Icon, label, text }) => (
            <article key={label} className="px-4 py-5 lg:px-0 lg:py-6 first:pt-0 last:pb-0 group">
              <Icon className="size-7 text-navy transition-transform duration-500 ease-out group-hover:scale-[1.15] group-hover:text-saffron origin-left" aria-hidden strokeWidth={1.5} />
              <h3 className="mt-3 text-[11px] font-bold uppercase tracking-[0.18em] text-saffron">
                {label}
              </h3>
              <p className="mt-1.5 text-base font-semibold text-navy leading-snug transition-colors duration-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
