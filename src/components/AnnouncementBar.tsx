"use client";

import { useEffect, useState } from "react";

export default function AnnouncementBar() {
    const [settings, setSettings] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/settings")
            .then(res => res.json())
            .then(data => {
                if (data.settings) setSettings(data.settings);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) return null;

    const isLive = settings.is_live === "true";
    const promoActive = settings.promo_active === "true";
    const promoText = settings.promo_text || "";

    if (!isLive && !promoActive) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col pointer-events-none">
            {promoActive && promoText && (
                <div className="bg-mystic-600/90 text-white text-center py-2 px-4 shadow-lg backdrop-blur-md pointer-events-auto font-body text-sm border-b border-mystic-400/30">
                    ✨ {promoText} ✨
                </div>
            )}
        </div>
    );
}
