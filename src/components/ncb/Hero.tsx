import { useState, useEffect } from "react";
import { ShieldAlert, Phone, ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import banner1 from "@/assets/slider/Banner_001.png";
import banner2 from "@/assets/slider/Banner_002.png";
import banner3 from "@/assets/slider/Banner_003.png";
import banner4 from "@/assets/slider/Banner_004.png";

const updates = [
  "Sample Advisory: Report drug-related information through MANAS Helpline 1933",
  "Sample Notice: Recruitment information available under Join NCB",
  "Sample Tender: Technology services tender published",
  "Sample Press Release: Awareness campaign conducted across zones",
];

const slides = [
  {
    image: banner1,
    title: "Narcotics Control Bureau",
    subtitle: "Ministry of Home Affairs, Government of India",
    desc: "India's apex coordinating and enforcement agency for combating illicit drug trafficking and substance abuse — through intelligence, enforcement and inter-agency coordination."
  },
  {
    image: banner2,
    title: "Combating Drug Trafficking",
    subtitle: "Securing Borders, Protecting Citizens",
    desc: "Relentlessly pursuing illicit drug networks and disrupting supply chains through intelligence-driven operations and cross-border cooperation."
  },
  {
    image: banner3,
    title: "MANAS Helpline 1933",
    subtitle: "Madak Padarth Nishedh Asuchna Kendra",
    desc: "A national toll-free helpline for citizens to report drug-related crimes. Your identity remains strictly confidential while you help secure the nation."
  },
  {
    image: banner4,
    title: "Awareness & Prevention",
    subtitle: "Say Yes to Life, No to Drugs",
    desc: "Committed to creating a drug-free society through nationwide community outreach, educational programs, and targeted youth engagement initiatives."
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="hero-title"
      className="relative bg-navy-deep text-navy-foreground overflow-hidden"
    >
      {/* Invisible spacer image to force the container to exactly match the banner's intrinsic aspect ratio */}
      <img 
        src={slides[0].image} 
        alt="" 
        className="w-full h-auto min-h-[500px] lg:min-h-0 object-cover invisible" 
        aria-hidden 
      />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden
          />
          {/* Gradient overlay to ensure text readability on the left */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-transparent"
            aria-hidden
          />
        </div>
      ))}

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-4">
          <div className="max-w-2xl">
            {/* We keep the text static and fade the content to avoid layout jumps */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-in-out absolute inset-0 flex flex-col justify-center ${
                    index === currentSlide ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-4 hidden z-0"
                  }`}
                >
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-saffron mb-4">
                    <span className="h-px w-8 bg-saffron" /> Official Government Website
                  </p>
                  <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-3 text-sm sm:text-base md:text-lg text-navy-foreground/80 font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="mt-4 sm:mt-5 text-sm md:text-base text-navy-foreground/85 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              ))}
            </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button className="bg-saffron text-saffron-foreground hover:bg-saffron/90 font-semibold rounded-none h-11 px-6 transition-all duration-300">
              <ShieldAlert className="size-4" /> Submit a Tip
            </Button>
            <Button
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white rounded-none h-11 px-6 transition-colors duration-300"
              asChild
            >
              <a href="tel:1933">
                <Phone className="size-4" /> Call MANAS 1933
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white rounded-none h-11 px-4 transition-colors duration-300 group"
            >
              Learn About NCB <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  index === currentSlide ? "w-8 bg-saffron" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

      <div className="relative z-20 bg-strip border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-saffron shrink-0">
            <Megaphone className="size-4" aria-hidden /> Latest Updates
          </span>
          <div className="flex-1 overflow-hidden relative group cursor-pointer">
            <div className="ticker-track flex gap-10 whitespace-nowrap text-sm text-navy-foreground/90 group-hover:[animation-play-state:paused]">
              {[...updates, ...updates].map((u, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="size-1 bg-saffron" /> {u}
                </span>
              ))}
            </div>
          </div>
          <a href="#" className="text-xs font-semibold text-saffron hover:underline shrink-0">
            View All →
          </a>
        </div>
      </div>
    </section>
  );
}
