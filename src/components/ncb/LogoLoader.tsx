import React, { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";

export function LogoLoader({ onFadeOut }: { onFadeOut: () => void }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setVisible(false);
        onFadeOut();
      }, 800); // fade duration
    }, 1000); // show duration

    return () => clearTimeout(timer);
  }, [onFadeOut]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy transition-opacity duration-700 ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <div className="relative flex flex-col items-center">
        <div className="relative">
            {/* Pulsing Ring */}
            <div className="absolute inset-0 rounded-full bg-saffron/20 animate-ping" />
            <img 
                src={logo} 
                alt="NCB Logo" 
                className="relative z-10 size-32 md:size-40 animate-pulse" 
            />
        </div>
        
        <div className="mt-8 text-center space-y-2">
            <h1 className="text-white text-xl md:text-2xl font-bold tracking-widest uppercase">
                Narcotics Control Bureau
            </h1>
            <p className="text-saffron font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
                Government of India
            </p>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
