import { ArrowRight, Package, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/use-count-up";
import wanted1 from "@/assets/wanted/wanted-1.jpg";
import wanted2 from "@/assets/wanted/wanted-2.jpg";
import wanted3 from "@/assets/wanted/wanted-3.jpg";
import wanted4 from "@/assets/wanted/wanted-4.jpg";
import wanted5 from "@/assets/wanted/wanted-5.jpg";

const stats = [
  { icon: Package, label: "Total Seizures", value: 12154, suffix: "KG" },
  { icon: FileText, label: "Cases Registered", value: 2400, suffix: "" },
  { icon: Users, label: "Total Arrests", value: 4387, suffix: "" },
];

const drugBars = [
  { name: "Heroin", value: 780 },
  { name: "Cocaine", value: 140 },
  { name: "Opium", value: 640 },
  { name: "Ganja", value: 2900 },
  { name: "Synthetic", value: 700 },
  { name: "Psychotropics", value: 320 },
];

const arrestSegments = [
  { label: "Dealers", value: 38, color: "var(--color-saffron)" },
  { label: "Users", value: 27, color: "#3b82f6" },
  { label: "Smugglers", value: 22, color: "#b45309" },
  { label: "Couriers", value: 13, color: "#60a5fa" },
];

const wanted = [
  { img: wanted1, name: "Rajesh Verma" },
  { img: wanted2, name: "Imran Qureshi" },
  { img: wanted3, name: "Mahesh Patil" },
  { img: wanted4, name: "Sanjay Tiwari" },
  { img: wanted5, name: "Arjun Mehta" },
];

function StatCard({ icon: Icon, label, value, suffix }: typeof stats[number]) {
  const { ref, value: v } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="border border-white/10 bg-white/[0.03] p-5 border-l-4 border-l-saffron flex items-center gap-4"
    >
      <div className="size-11 rounded bg-white/[0.06] grid place-items-center shrink-0">
        <Icon className="size-5 text-saffron" strokeWidth={1.5} aria-hidden />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">{label}</p>
        <p className="mt-1 text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
          {v.toLocaleString("en-IN")}
          {suffix && <span className="text-xs font-semibold text-white/60 ml-1">{suffix}</span>}
        </p>
        <span className="mt-2 inline-block text-[10px] font-semibold text-saffron border border-saffron/40 px-2 py-0.5 rounded-full">
          All-time Total
        </span>
      </div>
    </div>
  );
}

function BarChart() {
  const max = 3000;
  const ticks = [3000, 2250, 1500, 750, 0];
  return (
    <div className="border border-white/10 bg-white/[0.03] p-5 h-full flex flex-col">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-saffron">
        Drug-wise Arrest Statistics
      </p>
      <p className="text-xs text-white/60 mt-1">Arrests categorised by primary substance type</p>
      <div className="mt-5 flex gap-3 flex-1 min-h-[12rem]">
        <div className="flex flex-col justify-between text-[10px] text-white/50 text-right pr-1">
          {ticks.map((t) => (
            <span key={t}>{t >= 1000 ? `${(t / 1000).toString().replace(/\.0$/, "")}k` : t}</span>
          ))}
        </div>
        <div className="flex-1 relative border-l border-b border-white/10">
          {ticks.slice(0, -1).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0 border-t border-white/5"
              style={{ top: `${(i / (ticks.length - 1)) * 100}%` }}
            />
          ))}
          <div className="absolute inset-0 flex items-end gap-2 px-2">
            {drugBars.map((b) => (
              <div key={b.name} className="flex-1 bg-saffron/85 hover:bg-saffron transition-colors" style={{ height: `${(b.value / max) * 100}%` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 pl-7 mt-2 text-[10px] text-white/60">
        {drugBars.map((b) => <span key={b.name} className="flex-1 text-center">{b.name}</span>)}
      </div>
    </div>
  );
}

function Donut() {
  const total = arrestSegments.reduce((s, x) => s + x.value, 0);
  const radius = 60;
  const stroke = 22;
  const circ = 2 * Math.PI * radius;
  let offset = 0;
  return (
    <div className="border border-white/10 bg-white/[0.03] p-5 h-full flex flex-col">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-saffron">
        Classification of Arrests
      </p>
      <p className="text-xs text-white/60 mt-1">Distribution by role in trafficking ecosystem</p>
      <div className="mt-4 grid place-items-center flex-1">
        <svg viewBox="0 0 160 160" className="w-full max-w-[14rem] h-auto" role="img" aria-label="Arrest classification donut chart">
          <g transform="rotate(-90 80 80)">
            {arrestSegments.map((s) => {
              const len = (s.value / total) * circ;
              const el = (
                <circle
                  key={s.label}
                  cx="80" cy="80" r={radius}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${len} ${circ - len}`}
                  strokeDashoffset={-offset}
                />
              );
              offset += len;
              return el;
            })}
          </g>
        </svg>
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 text-xs text-white/80">
        {arrestSegments.map((s) => (
          <li key={s.label} className="flex items-center gap-2">
            <span className="size-2.5 rounded-full" style={{ backgroundColor: s.color }} aria-hidden />
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function EnforcementAndWanted() {
  return (
    <section aria-labelledby="enf-title" className="bg-navy-deep text-navy-foreground py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* NCB at a Glance */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Annual Enforcement Snapshot
          </p>
          <h2 id="enf-title" className="text-3xl md:text-4xl font-bold mt-2">NCB at a Glance</h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-white/70 mt-3 max-w-2xl">
            Indicative figures, FY 2024–25. Final published statistics available in the Annual Report.
          </p>

          <div className="mt-8 grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-3 grid gap-5 content-stretch">
              {stats.map((s) => <StatCard key={s.label} {...s} />)}
            </div>
            <div className="lg:col-span-5">
              <BarChart />
            </div>
            <div className="lg:col-span-4">
              <Donut />
            </div>
          </div>
        </div>

        {/* Wanted Fugitives */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
            Public Assistance Sought
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Wanted Fugitives</h2>
          <div className="mt-2 h-1 w-12 bg-saffron" aria-hidden />
          <p className="text-sm text-white/70 mt-3 max-w-2xl">
            Information from citizens can support ongoing investigations. Reports are kept confidential.
          </p>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {wanted.map((w) => (
              <li key={w.name} className="group flex flex-col">
                <div className="aspect-[3/4] overflow-hidden bg-white/10">
                  <img
                    src={w.img}
                    alt={`Photograph of ${w.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                  />
                </div>
                <div className="pt-3 text-center">
                  <p className="text-sm font-bold text-white leading-tight">{w.name}</p>
                  <a href="#" className="mt-1 inline-block text-[11px] font-semibold text-saffron hover:underline">
                    View Details →
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Button className="bg-saffron text-saffron-foreground hover:bg-saffron/90 rounded-none font-semibold">
              Submit Information <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
