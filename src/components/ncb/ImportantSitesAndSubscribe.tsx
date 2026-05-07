import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

import imgManas from "@/assets/link-img/MANAS_LogoE.jpeg";
import imgPmnrf from "@/assets/link-img/PMNRF.png";
import imgDataGov from "@/assets/link-img/data-gov.png";
import imgGo from "@/assets/link-img/go.png";
import imgIig from "@/assets/link-img/iig.png";
import imgIndiaGov from "@/assets/link-img/india-gov.png";
import imgMyGov from "@/assets/link-img/mygov.png";
import imgNidaan from "@/assets/link-img/niddan.png";
import imgSwachBharat from "@/assets/link-img/swach-bharat.png";
import imgUmang from "@/assets/link-img/umang.png";

const sites = [
  { name: "MANAS", img: imgManas },
  { name: "NIDAAN", img: imgNidaan },
  { name: "UMANG", img: imgUmang },
  { name: "MyGov", img: imgMyGov },
  { name: "India.gov.in", img: imgIndiaGov },
  { name: "Data.gov.in", img: imgDataGov },
  { name: "PMNRF", img: imgPmnrf },
  { name: "Swachh Bharat", img: imgSwachBharat },
  { name: "Incredible India", img: imgIig },
  { name: "GOI", img: imgGo },
];

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ImportantSitesAndSubscribe() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section 
      ref={ref}
      aria-labelledby="sites-title" 
      className={`bg-soft-gray py-16 border-y border-border transition-all duration-1000 ease-out transform ${
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-[2fr_1fr] gap-8 lg:items-start">
        <div className="flex flex-col min-w-0">
          <h2 id="sites-title" className="text-3xl md:text-4xl font-bold text-navy">
            Important Websites
          </h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <div className="mt-3 flex items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Related government portals and partner organisations.
            </p>
            <Button variant="link" className="p-0 h-auto text-saffron hover:text-saffron/90 text-sm font-semibold shrink-0">
              View All <ArrowRight className="size-4 ml-1" />
            </Button>
          </div>
          <ul className="mt-5 hairline-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 bg-card">
            {sites.map(({ name, img }) => (
              <li key={name} className="hover:bg-navy/5 transition-colors group">
                <a
                  href="#"
                  className="w-full h-24 flex flex-col items-center justify-center gap-2 p-2 text-center"
                >
                  <img src={img} alt={name} loading="lazy" className="h-10 w-auto object-contain group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[11px] font-semibold leading-tight text-navy group-hover:text-saffron line-clamp-1">
                    {name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="bg-navy text-navy-foreground p-5 flex flex-col min-w-0">
          <h2 className="text-base md:text-lg font-bold">Subscribe to Updates</h2>
          <div className="mt-2 h-1 w-10 bg-saffron" aria-hidden />
          <p className="text-sm text-navy-foreground/80 mt-2">
            Advisories, press releases & notices — straight to your inbox.
          </p>

          <form className="mt-4 space-y-2.5" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email" className="sr-only">Email address</label>
            <Input
              id="email"
              type="email"
              required
              placeholder="Email address"
              className="bg-white text-foreground rounded-none h-10"
            />
            <div className="flex items-start gap-2">
              <Checkbox id="consent" className="mt-0.5 border-white data-[state=checked]:bg-saffron data-[state=checked]:text-saffron-foreground rounded-none" />
              <label htmlFor="consent" className="text-xs text-navy-foreground/85 leading-snug">
                I agree to the <a href="#" className="underline font-semibold">Privacy Policy</a>.
              </label>
            </div>
            <Button type="submit" className="w-full bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none h-10">
              Subscribe
            </Button>
          </form>

          <p className="mt-3 text-[11px] text-navy-foreground/60">
            Unsubscribe anytime.
          </p>
        </aside>
      </div>
    </section>
  );
}
