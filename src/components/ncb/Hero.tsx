import { useState, useEffect } from "react";
import { ShieldAlert, Phone, ArrowRight, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import banner1 from "@/assets/slider/banner_001.jpg";
import banner2 from "@/assets/slider/banner_002.jpg";
import banner3 from "@/assets/slider/banner_003.jpg";
import banner4 from "@/assets/slider/banner_004.jpg";
import banner5 from "@/assets/slider/banner_005.jpg";
import banner6 from "@/assets/slider/banner_006.jpg";
import banner7 from "@/assets/slider/banner_007.jpg";
import banner8 from "@/assets/slider/banner_008.jpg";
import banner9 from "@/assets/slider/banner_009.jpg";
import banner10 from "@/assets/slider/banner_010.jpg";
import banner11 from "@/assets/slider/banner_011.jpg";

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
  },
  {
    image: banner5,
    title: "Securing the Future",
    subtitle: "Protecting the Youth of India",
    desc: "Dedicated to safeguarding the next generation from the perils of substance abuse through proactive measures and educational excellence."
  },
  {
    image: banner6,
    title: "National Coordination",
    subtitle: "Strengthening Inter-agency Bonds",
    desc: "Coordinating with state and central agencies to create a unified front against narcotics and organized crime across the nation."
  },
  {
    image: banner7,
    title: "Intelligence Excellence",
    subtitle: "Data-Driven Enforcement",
    desc: "Leveraging cutting-edge technology and intelligence networks to stay ahead of trafficking trends and secure our borders."
  },
  {
    image: banner8,
    title: "Global Cooperation",
    subtitle: "Partnering for a Drug-Free World",
    desc: "Collaborating with international partners and organizations to combat transnational drug trafficking and money laundering."
  },
  {
    image: banner9,
    title: "Zero Tolerance Policy",
    subtitle: "Upholding the Law with Integrity",
    desc: "Maintaining a steadfast commitment to enforcement of the NDPS Act and ensuring justice is served against illicit drug trade."
  },
  {
    image: banner10,
    title: "Community Engagement",
    subtitle: "Building Resilient Societies",
    desc: "Empowering citizens and communities to take a stand against drugs and support a healthier, safer environment for all."
  },
  {
    image: banner11,
    title: "National Security",
    subtitle: "Safeguarding Sovereign Interests",
    desc: "A critical pillar of national security, ensuring that drug trafficking does not undermine the stability and progress of the nation."
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
      {/* Image container that maintains aspect ratio without cutting, capped at 450px height */}
      <div className="relative w-full overflow-hidden max-h-[450px]">
        {/* Invisible spacer image to set the base height */}
        <img
          src={slides[0].image}
          alt=""
          className="w-full h-auto opacity-0 pointer-events-none"
          aria-hidden
        />

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Blurred background layer for side spaces */}
            <div
              className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden
            />
            {/* Foreground image - no cut */}
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src={slide.image}
                alt=""
                className="max-w-full max-h-full w-auto h-auto object-contain relative z-10"
              />
            </div>
            {/* Gradient overlay removed as per request */}
          </div>
        ))}
      </div>

      {/* Overlay text and actions removed as per request */}

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
