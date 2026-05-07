import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dgPhoto from "@/assets/dg-photo.jpg";

export function DirectorMessage() {
  return (
    <section aria-labelledby="dg-title" className="bg-soft-gray py-16 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-[200px_1fr] lg:grid-cols-[220px_1fr] gap-10 items-start">
        <figure>
          <div className="aspect-[3/4] overflow-hidden shadow-md">
            <img
              src={dgPhoto}
              alt="Director General, Narcotics Control Bureau"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-3">
            <p className="text-sm font-bold text-navy">Shri Anurag Garg, IPS</p>
            <p className="text-xs text-muted-foreground">Director General, NCB</p>
          </figcaption>
        </figure>

        <div className="md:pt-2 border-l-4 border-saffron pl-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            From the Director General
          </p>
          <h2 id="dg-title" className="mt-2 text-3xl md:text-4xl font-bold text-navy leading-tight">
            Director&apos;s Message
          </h2>
          <span className="block mt-4 text-7xl leading-none text-saffron font-serif" aria-hidden>“</span>
          <blockquote className="-mt-4 text-base md:text-lg text-foreground/80 leading-relaxed italic">
            The Narcotics Control Bureau stands committed to protecting India&apos;s citizens from
            the threat of drug trafficking and substance abuse. Through intelligence-led
            enforcement, inter-agency coordination, international cooperation and public
            participation, we continue our mission towards a drug-free society.
          </blockquote>
          <Button variant="outline" className="mt-6 border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-none">
            Read Full Message <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
