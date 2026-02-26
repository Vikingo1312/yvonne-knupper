"use client";

import { useEffect, useState } from "react";

export default function LiveStatusBadge() {
    const [isLive, setIsLive] = useState<boolean | null>(null);

    useEffect(() => {
        // Function to fetch the live status
        const fetchStatus = () => {
            fetch("/api/settings")
                .then(res => res.json())
                .then(data => {
                    if (data.settings) {
                        setIsLive(data.settings.is_live === "true");
                    }
                })
                .catch(err => console.error("Error fetching live status:", err));
        };

        // Fetch immediately
        fetchStatus();

        // Then poll every 30 seconds to keep it updated without refreshing
        const intervalId = setInterval(fetchStatus, 30000);
        return () => clearInterval(intervalId);
    }, []);

    // Don't render until we know the status to prevent hydration mismatch
    if (isLive === null) return null;

    return (
        <div className="fixed bottom-6 left-6 z-50 pointer-events-auto">
            <div className={`flex items-center gap-3 px-4 py-2 rounded-full shadow-xl backdrop-blur-md border border-white/10 transition-all duration-500 ${isLive ? 'bg-surface-dark/80 hover:bg-surface-dark' : 'bg-surface-dark/50 opacity-70 cursor-default'}`}>
                {/* Ping Animation Indicator */}
                <div className="relative flex h-3 w-3">
                    {isLive && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39ff14] opacity-75"></span>
                    )}
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isLive ? 'bg-[#39ff14]' : 'bg-gray-500'}`}></span>
                </div>

                {/* Text Content */}
                <span className="font-heading text-xs tracking-widest uppercase text-white">
                    {isLive ? (
                        <span>Online <span className="opacity-50 ml-1 hidden sm:inline">– Jetzt anrufen</span></span>
                    ) : (
                        <span className="text-gray-400">Offline</span>
                    )}
                </span>
            </div>
        </div>
    );
}
