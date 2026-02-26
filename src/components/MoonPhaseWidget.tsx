"use client";

import { useState, useEffect } from "react";

// Moon phase calculation
function getMoonPhase(): { name: string; emoji: string; message: string; illumination: number } {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const c = Math.floor(365.25 * year);
    const e = Math.floor(30.6 * month);
    const jd = c + e + day - 694039.09;
    const phase = jd / 29.5305882;
    const phaseDay = (phase - Math.floor(phase)) * 29.5305882;

    if (phaseDay < 1.84566) return { name: "Neumond", emoji: "🌑", message: "Zeit für Neuanfänge und innere Einkehr. Der Neumond lädt Dich ein, Altes loszulassen und neue Intentionen zu setzen.", illumination: 0 };
    if (phaseDay < 5.53699) return { name: "Zunehmende Sichel", emoji: "🌒", message: "Setze neue Intentionen und pflanze die Samen Deiner Wünsche. Die Energie wächst – nutze sie.", illumination: 15 };
    if (phaseDay < 9.22831) return { name: "Erstes Viertel", emoji: "🌓", message: "Überwinde Hindernisse mit Entschlossenheit. Die halbe Reise ist geschafft – bleib dran.", illumination: 35 };
    if (phaseDay < 12.91963) return { name: "Zunehmender Mond", emoji: "🌔", message: "Deine Stärke wächst – vertraue dem Prozess. Alles fügt sich zusammen.", illumination: 65 };
    if (phaseDay < 16.61096) return { name: "Vollmond", emoji: "🌕", message: "Höchste Energie – manifestiere Deine Wünsche! Der Vollmond bringt Klarheit und Erfüllung.", illumination: 100 };
    if (phaseDay < 20.30228) return { name: "Abnehmender Mond", emoji: "🌖", message: "Zeit für Dankbarkeit und Reflexion. Erkenne, wie weit Du schon gekommen bist.", illumination: 65 };
    if (phaseDay < 23.99361) return { name: "Letztes Viertel", emoji: "🌗", message: "Loslassen und Vergeben. Befreie Dich von dem, was Dir nicht mehr dient.", illumination: 35 };
    if (phaseDay < 27.68493) return { name: "Abnehmende Sichel", emoji: "🌘", message: "Ruhe und Regeneration – bereite Dich auf den nächsten Zyklus vor.", illumination: 15 };
    return { name: "Neumond", emoji: "🌑", message: "Zeit für Neuanfänge und innere Einkehr. Der Neumond lädt Dich ein, Altes loszulassen.", illumination: 0 };
}

export default function MoonPhaseWidget() {
    const [moon, setMoon] = useState<ReturnType<typeof getMoonPhase> | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMoon(getMoonPhase());
    }, []);

    if (!moon) return null;

    return (
        <div className="relative inline-flex">
            {/* Smaller moon button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl cursor-pointer hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]"
                title={moon.name}
            >
                {moon.emoji}
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

                    {/* Bigger popup with larger text */}
                    <div className="absolute top-full mt-4 right-0 w-80 glass rounded-2xl p-8 glow-border animate-fade-in-up z-50">
                        <div className="text-center">
                            <span className="text-6xl block mb-4 drop-shadow-[0_0_25px_rgba(192,132,252,0.5)]">{moon.emoji}</span>
                            <h4 className="font-display text-2xl italic tracking-wide text-[var(--text-primary)] mb-3">
                                {moon.name}
                            </h4>
                            <div className="w-20 h-px bg-gradient-to-r from-transparent via-mystic-400 to-transparent mx-auto mb-4" />
                            <p className="font-body text-base text-[var(--text-secondary)] italic leading-relaxed mb-5">
                                „{moon.message}"
                            </p>
                            {/* Illumination bar */}
                            <div className="w-full bg-mystic-950/50 rounded-full h-2.5 mb-2">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-mystic-500 to-rose-400 transition-all duration-500"
                                    style={{ width: `${moon.illumination}%` }}
                                />
                            </div>
                            <span className="font-heading text-sm tracking-wider uppercase text-mystic-400">
                                {moon.illumination}% Helligkeit
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
