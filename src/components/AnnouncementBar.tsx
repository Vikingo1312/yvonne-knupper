"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
    const [settings, setSettings] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        fetch("/api/settings")
            .then(res => res.json())
            .then(data => {
                if (data.settings) setSettings(data.settings);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    useEffect(() => {
        // Adjust navbar top position based on banner visibility
        const promoActive = settings.promo_active === "true";
        const promoText = settings.promo_text || "";
        const banner = document.getElementById("announcement-bar");
        const navbar = document.querySelector("nav");

        if (banner && navbar && promoActive && promoText && !dismissed) {
            const bannerHeight = banner.offsetHeight;
            navbar.style.top = `${bannerHeight}px`;
            document.body.style.paddingTop = `${bannerHeight}px`;
        } else if (navbar) {
            navbar.style.top = "0px";
            document.body.style.paddingTop = "0px";
        }

        return () => {
            if (navbar) {
                navbar.style.top = "0px";
                document.body.style.paddingTop = "0px";
            }
        };
    }, [settings, dismissed]);

    if (loading) return null;

    const promoActive = settings.promo_active === "true";
    const promoText = settings.promo_text || "";

    if (!promoActive || !promoText || dismissed) return null;

    return (
        <div
            id="announcement-bar"
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-mystic-700/95 via-rose-600/95 to-mystic-700/95 text-white text-center py-2.5 px-8 shadow-lg backdrop-blur-md font-body text-sm border-b border-mystic-400/30"
        >
            <div className="max-w-5xl mx-auto flex items-center justify-center gap-4">
                <span className="flex-1 text-center">
                    ✨ {promoText} ✨
                </span>
                <button
                    onClick={() => setDismissed(true)}
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all text-xs"
                    aria-label="Banner schließen"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
