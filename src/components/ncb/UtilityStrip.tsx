import { useState } from "react";
import { User, Eye, AArrowDown, AArrowUp, RotateCcw, Phone, Globe } from "lucide-react";
import { useAccessibility } from "@/hooks/use-accessibility";
import { useLanguage } from "@/lib/LanguageContext";

const leftLinks = [
  "Government of India",
  "Ministry of Home Affairs",
  "NCORD",
  "MoSJE",
  "UNODC",
];

export function UtilityStrip() {
  const a11y = useAccessibility();
  const { selectedLang, openModal, LANGUAGES } = useLanguage();

  return (
    <div className="bg-strip text-strip-foreground text-xs">
      <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-between gap-y-2 py-2">
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {leftLinks.map((l) => (
            <li key={l}>
              <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href="tel:1933"
            className="inline-flex items-center gap-1 font-semibold text-saffron"
            aria-label="MANAS Helpline 1933"
          >
            <Phone className="size-3.5" aria-hidden /> MANAS 1933
          </a>
          <span className="opacity-30" aria-hidden>|</span>
          <div role="group" aria-label="Language" className="flex items-center gap-1">
            <button
              onClick={openModal}
              className="hover:underline flex items-center gap-1 opacity-90 hover:opacity-100 font-medium"
              aria-label="Change language"
            >
              <Globe className="size-3" />
              {LANGUAGES.find(l => l.code === selectedLang)?.native || "English"}
            </button>
          </div>
          <span className="opacity-30" aria-hidden>|</span>
          <div role="group" aria-label="Accessibility" className="flex items-center gap-1">
            <button onClick={a11y.decrease} aria-label="Decrease text size" className="p-1 hover:bg-white/10 rounded">
              <AArrowDown className="size-3.5" aria-hidden />
            </button>
            <button onClick={a11y.reset} aria-label="Reset text size" className="p-1 hover:bg-white/10 rounded">
              <RotateCcw className="size-3.5" aria-hidden />
            </button>
            <button onClick={a11y.increase} aria-label="Increase text size" className="p-1 hover:bg-white/10 rounded">
              <AArrowUp className="size-3.5" aria-hidden />
            </button>
            <button
              onClick={a11y.toggleContrast}
              aria-pressed={a11y.highContrast}
              aria-label="Toggle high contrast"
              className="p-1 hover:bg-white/10 rounded"
            >
              <Eye className="size-3.5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
